# krakend-js
experimenting with wasm and the KrakenD config package

## Usage

Checkout the repo, download the `wasm_exec.js` from the golang repo and `make` the project

```
$ git clone git@github.com:kpacha/krakend-js.git
$ cd krakend-js
$ curl -o ./server/static/wasm_exec.js https://github.com/golang/go/blob/master/misc/wasm/wasm_exec.js
$ make
dep ensure -v
GOARCH=wasm GOOS=js go build -o ./server/static/lib.wasm main.go
go build -o local-server ./server
./local-server -dir ./server/static
2018/10/31 00:15:18 listening on ":8080"...
```

Visit http://localhost:8080/ for a simple JSON config parsing and dumping