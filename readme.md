# Hello Vite Rust Wasm

Example of using Rust compiled to a wasm module inside a vite web app setup. 

## Requirements

* Use nodejs and `npm`.
* Install the rust toolchain using `rustup`.
* Install `wasm-pack` using 
	```
	$ cargo install wasm-pack
	```

## Setup

* `npm i`
* `cd crates/hello-wasm`
* `wasm-pack build --target web`
