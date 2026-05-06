import { listProducts } from '@dropjdid/api-client'
import { ZoneFrame } from '../../../components/zone-frame'

export default async function ShopProductsPage() {
  const products = await listProducts()

  return (
    <ZoneFrame
      eyebrow="Shop Zone"
      title="Products route owned by the shop app"
      description="A full Next.js route split, not runtime federation."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <a key={product.id} className="rounded-3xl border border-white/10 bg-white/5 p-5" href={`/shop/products/${product.id}`}>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{product.status}</p>
            <h2 className="mt-2 text-lg font-semibold text-white">{product.name}</h2>
            <p className="mt-2 text-sm text-slate-300">{product.creator}</p>
          </a>
        ))}
      </div>
    </ZoneFrame>
  )
}
