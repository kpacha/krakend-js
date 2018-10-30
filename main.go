package main

import (
	"fmt"
	"syscall/js"

	"github.com/devopsfaith/krakend/config"
)

func parse(i []js.Value) {
	println("parsing")
	source := js.Global().Get("document").Call("getElementById", i[0].String()).Get("value").String()

	cfg, err := config.NewParserWithFileReader(func(s string) ([]byte, error) {
		return []byte(s), nil
	}).Parse(source)
	if err != nil {
		println(err.Error())
		return
	}

	js.Global().Get("document").Call("getElementById", i[1].String()).Set("value", js.ValueOf(fmt.Sprintf("%+v", cfg)))
}

func registerCallbacks() {
	js.Global().Set("parse", js.NewCallback(parse))
}

func main() {
	c := make(chan struct{}, 0)

	println("WASM Go Initialized")
	// register functions
	registerCallbacks()
	<-c
}
