import ProductFilters from './exposes/ProductFilters'
import ProductList from './exposes/ProductList'
import './App.css'
import { ModalFormFragment } from './fragments/ModalFormFragment'

function App() {
  return (
    <main className="remote-shell">
      <p className="section-label">mf-products-react</p>
      <h1>React products remote</h1>
      <p className="body-copy">
        This app exposes ProductList, ProductCard, and ProductFilters through Module Federation
        while remaining usable as a standalone app.
      </p>
      <ModalFormFragment buttonText='Product' title='Product Title' description='Product Description' source='Product Source' />
      <ProductFilters />
      <ProductList />
    </main>
  )
}

export default App
