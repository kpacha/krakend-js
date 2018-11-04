package main

import (
	"bytes"
	"fmt"
	"syscall/js"

	"github.com/devopsfaith/krakend-config2dot"
	"github.com/devopsfaith/krakend/config"
)

var document js.Value

func init() {
	document = js.Global().Get("document")
}

func dotParser(i []js.Value) {
	println("dotParser")

	cfg, err := configParser(readElementValue(i[0].String()))
	if err != nil {
		println(err.Error())
		return
	}

	buf := new(bytes.Buffer)
	dot.ServiceConfig(cfg).WriteTo(buf)

	setElementValue(i[1].String(), buf.String())
	js.Global().Call("draw", i[2], js.ValueOf(buf.String()))
}

func parse(i []js.Value) {
	println("parsing")

	cfg, err := configParser(readElementValue(i[0].String()))
	if err != nil {
		println(err.Error())
		return
	}

	setElementValue(i[1].String(), fmt.Sprintf("%+v", cfg))
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

	select {}
}
