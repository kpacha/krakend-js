package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"strconv"
	"strings"
	"syscall/js"

	"github.com/davecgh/go-spew/spew"
	"github.com/devopsfaith/krakend-config2dot"
	"github.com/devopsfaith/krakend/config"
	"github.com/devopsfaith/krakend/logging"
	"github.com/devopsfaith/krakend/proxy"
	"github.com/devopsfaith/krakend/transport/http/client"
)

var (
	document      js.Value
	configuration config.ServiceConfig
)

func init() {
	document = js.Global().Get("document")
}

func testEndpoint(i []js.Value) {
	println("testEndpoint")

	e, err := strconv.Atoi(document.Call("getElementById", i[0].String()).Get("selectedIndex").String())
	if err != nil {
		println(err.Error())
		return
	}
	if e < 0 || len(configuration.Endpoints) < e {
		println("unknown endpoint " + i[0].String())
		return
	}
	buf := new(bytes.Buffer)
	logger, _ := logging.NewLogger("DEBUG", buf, "[KRAKEND]")
	p, err := proxy.NewDefaultFactory(proxy.CustomHTTPProxyFactory(client.NewHTTPClient), logger).New(configuration.Endpoints[e])
	if err != nil {
		println(err.Error())
		return
	}

	request := readElementValue(i[1].String())
	rawParams := map[string]string{}
	json.Unmarshal([]byte(request), &rawParams)

	params := make(map[string]string, len(rawParams))
	for k, v := range rawParams {
		params[strings.Title(k)] = v
	}

	go func(p proxy.Proxy, buf *bytes.Buffer, cfg *config.EndpointConfig, params map[string]string) {
		println(fmt.Sprintf("calling the pipe %s [%+v]", cfg.Endpoint, p))
		resp, err := p(context.Background(), &proxy.Request{
			Params: params,
			Method: cfg.Method,
		})
		if err != nil {
			println(err.Error())
			if resp == nil {
				return
			}
		}
		b, _ := json.MarshalIndent(resp, "", "\t")
		setElementValue(i[2].String(), string(b))
		println("log: " + buf.String())
	}(p, buf, configuration.Endpoints[e], params)
}

func dotParser(i []js.Value) {
	println("dotParser")

	buf := new(bytes.Buffer)
	dot.ServiceConfig(configuration).WriteTo(buf)

	js.Global().Call("draw", i[0], js.ValueOf(buf.String()))
}

func parse(i []js.Value) {
	println("parsing")

	cfg, err := configParser(readElementValue(i[0].String()))
	if err != nil {
		println(err.Error())
		return
	}

	configuration = cfg

	setElementValue(i[1].String(), spew.Sdump(cfg))
	selector := document.Call("getElementById", i[2].String())

	for j, e := range cfg.Endpoints {
		node := document.Call("createElement", "option")
		node.Set("innerHTML", e.Endpoint)
		node.Set("value", j)
		selector.Call("appendChild", node)
	}
}

func configParser(source string) (config.ServiceConfig, error) {
	return config.NewParserWithFileReader(func(s string) ([]byte, error) {
		return []byte(s), nil
	}).Parse(source)
}

func readElementValue(name string) string {
	return document.Call("getElementById", name).Get("value").String()
}

func setElementValue(name, value string) {
	document.Call("getElementById", name).Set("innerHTML", js.ValueOf(value))
}

func main() {
	println("WASM Go Initialized")

	js.Global().Set("parse", js.NewCallback(parse))
	js.Global().Set("dotParser", js.NewCallback(dotParser))
	js.Global().Set("testEndpoint", js.NewCallback(testEndpoint))

	select {}
}
