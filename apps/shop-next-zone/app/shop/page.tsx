import { listDrops, listProducts } from '@dropjdid/api-client'
import { ZoneFrame } from '../../components/zone-frame'

export default async function ShopHomePage() {
  const [products, drops] = await Promise.all([listProducts(), listDrops()])

  return (
    <ZoneFrame
      eyebrow="Shop Zone"
      title="Independent commerce routes under /shop"
      description="This zone focus only on shop zone."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-semibold text-white">Products</h2>
          <p className="mt-2 text-sm text-slate-300">{products.length} products served from the shop zone.</p>
          <a className="mt-4 inline-block text-cyan-300" href="/shop/products">Browse products</a>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-semibold text-white">Drops</h2>
          <p className="mt-2 text-sm text-slate-300">{drops.length} upcoming launches handled here.</p>
          <a className="mt-4 inline-block text-cyan-300" href="/shop/drops">View drops</a>
        </article>
      </div>
    </ZoneFrame>
  )
}
