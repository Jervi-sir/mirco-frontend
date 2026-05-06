import { createApp } from 'vue'
import CartWidget from '../components/CartWidget.vue'
import '../style.css'

export function mount(el: HTMLElement) {
  const app = createApp(CartWidget)
  app.mount(el)
  return () => app.unmount()
}
