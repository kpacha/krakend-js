package config

import (
	"encoding/json"
	"math"
	"net/http"

	"github.com/devopsfaith/krakend/config"
)

func Parse(cfg config.ServiceConfig) *Block {
	methods := map[string][]*Block{}
	for _, e := range cfg.Endpoints {
		var blocks []*Block
		var ok bool
		if blocks, ok = methods[e.Method]; !ok {
			blocks = []*Block{}
		}
		methods[e.Method] = append(blocks, parseEndpoint(e))
	}

	children := []*Block{}
	for _, method := range httpMethods {
		ms, ok := methods[method]
		if !ok {
			continue
		}
		b := newBlock(method, 0, 0, ms...)
		b.Color = colorOK
		children = append(children, b)
	}

	for i := range cfg.ExtraConfig {
		children = []*Block{newBlock(i, 4, 4, children...)}
	}

	b := newBlock(cfg.Name, 0, 0, children...)
	b.GenerateChildrenPosition()
	b.Color = colorOK
	return b
}

func parseEndpoint(cfg *config.EndpointConfig) *Block {
	children := make([]*Block, len(cfg.Backend))
	for i, b := range cfg.Backend {
		children[i] = parseBackend(b)
	}
	if t := len(children); t > 1 {
		child := newBlock("Merge", 5*t, 5*t, children...)
		child.Color = colorDanger
		children = []*Block{child}
	}
	b := newBlock("Proxy", 0, 0, children...)
	b.Color = colorCaution
	for i := range cfg.ExtraConfig {
		b = newBlock(i, 4, 4, b)
	}

	b = newBlock(cfg.Endpoint, 5, 5, b)
	b.Color = colorRegular
	return b
}

func parseBackend(cfg *config.Backend) *Block {
	children := []*Block{}
	for i := range cfg.ExtraConfig {
		children = []*Block{newBlock(i, 4, 4, children...)}
	}
	complexity := cfg.ConcurrentCalls
	if cfg.Group != "" {
		complexity++
	}
	if cfg.Target != "" {
		complexity++
	}
	complexity += len(cfg.URLKeys)
	child := newBlock(cfg.URLPattern, complexity+4, complexity+4, children...)
	child.Color = colorCaution
	if t := len(cfg.Host); t > 1 {
		child = newBlock("LB", t, t, child)
		child.Color = colorRegular
	}
	if len(cfg.Blacklist) > 0 || len(cfg.Whitelist) > 0 {
		child = newBlock("Filter", len(cfg.Blacklist), len(cfg.Whitelist), child)
		child.Color = colorCaution
	}
	if len(cfg.Mapping) > 0 {
		child = newBlock("Mapping", 1, 1, child)
		child.Color = colorCaution
	}
	return child
}

func newBlock(name string, dimm1, dimm2 int, children ...*Block) *Block {
	return &Block{
		Name:     name,
		Dimm1:    dimm1,
		Dimm2:    dimm2,
		Children: children,
		Color:    colorNothing,
	}
}

type Block struct {
	Name     string   `json:"name"`
	Depth    float64  `json:"depth"`
	Width    float64  `json:"width"`
	Children []*Block `json:"children,omitempty"`
	Dimm1    int      `json:"dimm1"`
	Dimm2    int      `json:"dimm2"`
	Position Position `json:"position"`
	Color    string   `json:"color,omitempty"`
}

type Position struct {
	X float64 `json:"x"`
	Y float64 `json:"y"`
}

const (
	defaultMargin = 3

	colorDanger  = "0xf6511d"
	colorCaution = "0xffb400"
	colorRegular = "0x00a6ed"
	colorOK      = "0x7fb800"
	colorNothing = "0x0d2c54"
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

func (b *Block) String() string {
	buf, _ := json.MarshalIndent(b, "", "\t")
	return string(buf)
}

func (b *Block) GenerateChildrenPosition() {
	if b.Children == nil || len(b.Children) == 0 {
		b.Width = float64(b.Dimm1) + 3
		b.Depth = float64(b.Dimm2) + 3
		return
	}

	positionGenerator := NewGenerator(len(b.Children))
	for _, child := range b.Children {
		child.GenerateChildrenPosition()
		child.Position = positionGenerator.NextPosition(child.Width, child.Depth)
	}

	bounds := positionGenerator.GetBounds()
	b.Width, b.Depth = bounds.X, bounds.Y

	for _, child := range b.Children {
		child.Position.X -= b.Width / 2.0
		child.Position.Y -= b.Depth / 2.0
	}

	b.Width += float64(b.Dimm1)
	b.Depth += float64(b.Dimm2)
}

type generator struct {
	numberNodes  int
	margin       int
	dimension    int
	xReference   float64
	yReference   float64
	currentIndex int
	maxWidth     float64
	maxHeight    float64
	bounds       Position
}

func NewGenerator(numberNodes int) *generator {
	generator := &generator{
		numberNodes: numberNodes,
		dimension:   int(math.Ceil(math.Sqrt(float64(numberNodes)))),
	}

	return generator
}

func (g *generator) GetBounds() Position {
	return Position{
		X: g.maxWidth + defaultMargin,
		Y: g.maxHeight + defaultMargin,
	}
}

func (g *generator) NextPosition(width, height float64) Position {
	g.currentIndex++

	if g.currentIndex > g.dimension && g.yReference+height >= g.maxWidth {
		g.currentIndex = 0
		g.yReference = 0
		g.xReference = g.maxWidth + defaultMargin
	}

	position := Position{X: g.xReference + (width+defaultMargin)/2, Y: g.yReference + (height+defaultMargin)/2}

	if g.xReference+width > g.maxWidth {
		g.maxWidth = g.xReference + width
	}

	if g.yReference+height > g.maxHeight {
		g.maxHeight = g.yReference + height
	}

	g.yReference += height + defaultMargin

	return position
}
