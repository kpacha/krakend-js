package config

import (
	"context"
	"fmt"
	"math"
	"net/http"
	"sort"

	"github.com/devopsfaith/krakend/config"
	"github.com/kpacha/treemap"
)

func Parse(cfg config.ServiceConfig) *treemap.Block {
	children := parseEndpoints(cfg.Endpoints)

	for _, i := range sortedKeys(cfg.ExtraConfig) {
		children = []*treemap.TreeInfo{newNothing(i, 4, 4, dimm3Val(4, 4), children...)}
	}

	b := newOK(cfg.Name, 1, 1, dimm3Val(1, 1), children...)
	return b.Tree(context.Background())
}

func parseEndpoints(cfgs []*config.EndpointConfig) []*treemap.TreeInfo {
	methods := map[string][]*treemap.TreeInfo{}
	for _, e := range cfgs {
		var blocks []*treemap.TreeInfo
		var ok bool
		if blocks, ok = methods[e.Method]; !ok {
			blocks = []*treemap.TreeInfo{}
		}
		methods[e.Method] = append(blocks, parseEndpoint(e))
	}

	children := []*treemap.TreeInfo{}
	for _, method := range httpMethods {
		ms, ok := methods[method]
		if !ok {
			continue
		}
		children = append(children, newOK(method, 1, 1, dimm3Val(1, 1), ms...))
	}
	return children
}

func parseEndpoint(cfg *config.EndpointConfig) *treemap.TreeInfo {
	children := make([]*treemap.TreeInfo, len(cfg.Backend))
	for i, b := range cfg.Backend {
		children[i] = parseBackend(b)
	}
	if t := len(children); t > 1 {
		children = []*treemap.TreeInfo{newDanger("Merge", 5*t, 5*t, dimm3Val(5*t, 5*t), children...)}
	}
	headers := len(cfg.HeadersToPass) / 2
	b := newCaution("Proxy", 2+headers, 2+headers, dimm3Val(2+headers, 2+headers), children...)
	for _, i := range sortedKeys(cfg.ExtraConfig) {
		b = newNothing(i, 4, 4, dimm3Val(4, 4), b)
	}

	return newRegular(cfg.Endpoint, 5, 5, dimm3Val(5, 5), b)
}

func parseBackend(cfg *config.Backend) *treemap.TreeInfo {
	children := []*treemap.TreeInfo{}
	for _, i := range sortedKeys(cfg.ExtraConfig) {
		children = []*treemap.TreeInfo{newNothing(i, 4, 4, dimm3Val(4, 4), children...)}
	}
	complexity := cfg.ConcurrentCalls
	if cfg.Group != "" {
		complexity++
	}
	if cfg.Target != "" {
		complexity++
	}
	complexity += len(cfg.URLKeys)
	child := newCaution(cfg.URLPattern, complexity+4, complexity+4, dimm3Val(complexity+4, complexity+4), children...)
	if t := len(cfg.Host); t > 1 {
		child = newRegular("LB", t, t, dimm3Val(t, t), child)
	}
	if len(cfg.Blacklist) > 0 || len(cfg.Whitelist) > 0 {
		child = newCaution("Filter", len(cfg.Blacklist), len(cfg.Whitelist), dimm3Val(len(cfg.Blacklist), len(cfg.Whitelist)), child)
	}
	if len(cfg.Mapping) > 0 {
		child = newCaution(fmt.Sprintf("Mapping %s", cfg.URLPattern), 1, 1, dimm3Val(1, 1), child)
	}
	return child
}

func dimm3Val(dimm1, dimm2 int) int {
	return int(math.Sqrt(float64(dimm1+1) * float64(dimm2+1)))
}

func newDanger(name string, dimm1, dimm2, dimm3 int, children ...*treemap.TreeInfo) *treemap.TreeInfo {
	b := newTreeInfo(name, dimm1, dimm2, dimm3, children...)
	b.Color = colorDanger
	return b
}

func newCaution(name string, dimm1, dimm2, dimm3 int, children ...*treemap.TreeInfo) *treemap.TreeInfo {
	b := newTreeInfo(name, dimm1, dimm2, dimm3, children...)
	b.Color = colorCaution
	return b
}

func newRegular(name string, dimm1, dimm2, dimm3 int, children ...*treemap.TreeInfo) *treemap.TreeInfo {
	b := newTreeInfo(name, dimm1, dimm2, dimm3, children...)
	b.Color = colorRegular
	return b
}

func newOK(name string, dimm1, dimm2, dimm3 int, children ...*treemap.TreeInfo) *treemap.TreeInfo {
	b := newTreeInfo(name, dimm1, dimm2, dimm3, children...)
	b.Color = colorOK
	return b
}

func newNothing(name string, dimm1, dimm2, dimm3 int, children ...*treemap.TreeInfo) *treemap.TreeInfo {
	b := newTreeInfo(name, dimm1, dimm2, dimm3, children...)
	b.Color = colorNothing
	return b
}

func newTreeInfo(name string, dimm1, dimm2, dimm3 int, children ...*treemap.TreeInfo) *treemap.TreeInfo {
	return &treemap.TreeInfo{BlockInfo: newBlock(name, dimm1, dimm2, dimm3), Children: children}
}

func newBlock(name string, dimm1, dimm2, dimm3 int) treemap.BlockInfo {
	return treemap.BlockInfo{
		Name:  name,
		Dimm1: dimm1,
		Dimm2: dimm2,
		Dimm3: dimm3,
	}
}

func sortedKeys(m map[string]interface{}) []string {
	names := make([]string, 0, len(m))
	for name := range m {
		names = append(names, name)
	}
	sort.Strings(names) //sort by key
	return names
}

const (
	colorDanger  = treemap.Color("0xf6511d")
	colorCaution = treemap.Color("0xffb400")
	colorRegular = treemap.Color("0x00a6ed")
	colorOK      = treemap.Color("0x7fb800")
	colorNothing = treemap.Color("0x0d2c54")
)

var (
	httpMethods = []string{
		http.MethodGet,
		http.MethodHead,
		http.MethodPost,
		http.MethodPut,
		http.MethodPatch,
		http.MethodDelete,
		http.MethodConnect,
		http.MethodOptions,
		http.MethodTrace,
	}
)
