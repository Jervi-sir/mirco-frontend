import ProductFilters from './exposes/ProductFilters'
import ProductList from './exposes/ProductList'
import './App.css'

function App() {
  return (
    <main className="remote-shell">
      <p className="section-label">mf-products-react</p>
      <h1>React products remote</h1>
      <p className="body-copy">
        This app exposes ProductList, ProductCard, and ProductFilters through Module Federation
        while remaining usable as a standalone app.
      </p>
      <ProductFilters />
      <ProductList />
    </main>
  )
}

export default App
