import type { Product } from '@dropjdid/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-card-top">
        <span className={`product-status status-${product.status}`}>{product.status}</span>
        <span>{product.inventory} left</span>
      </div>
      <h3>{product.name}</h3>
      <p>{product.creator}</p>
      <div className="product-card-bottom">
        <strong>${product.price}</strong>
        <span>{new Date(product.dropDate).toLocaleDateString()}</span>
      </div>
    </article>
  )
}
