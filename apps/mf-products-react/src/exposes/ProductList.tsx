import { listProducts } from '@dropjdid/api-client'
import { useEffect, useState } from 'react'
import type { Product } from '@dropjdid/types'
import ProductCard from './ProductCard'
import ProductFilters from './ProductFilters'

export default function ProductList({ failMode = false }: { failMode?: boolean }) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      listProducts().then(setProducts)
    }, 700)

    return () => clearTimeout(timeout)
  }, [])

  if (failMode) {
    throw new Error('Intentional remote crash')
  }

  return (
    <div className="products-remote">
      <ProductFilters />
      <p>react productList</p>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
