import { createApp } from 'vue'
import CartSummary from '../components/CartSummary.vue'
import '../style.css'

export function mount(el: HTMLElement) {
  const app = createApp(CartSummary)
  app.mount(el)
  return () => app.unmount()
}
