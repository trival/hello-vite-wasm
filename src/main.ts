import './style.css'
import init, {hello} from '../crates/hello-wasm/pkg/hello_wasm'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

init().then(() => {
  hello('RUST WASM :)')
})

