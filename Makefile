all: prepare build_wasm build_server run

prepare:
	dep ensure -v

build_wasm:
	GOARCH=wasm GOOS=js go build -o ./server/static/lib.wasm main.go

build_server:
	go build -o local-server ./server

run:
	./local-server -dir ./server/static

publish:
	cp ./server/static/* ./docs/.