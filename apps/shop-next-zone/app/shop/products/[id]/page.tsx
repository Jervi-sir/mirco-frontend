import { getProduct } from '@dropjdid/api-client'
import { ZoneFrame } from '../../../../components/zone-frame'

export default async function ShopProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <ZoneFrame
      eyebrow="Shop Zone"
      title={product?.name ?? 'Unknown product'}
      description="A product detail page served entirely by the shop zone."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
        <p>Creator: {product?.creator ?? 'Unknown'}</p>
        <p className="mt-2">Price: ${product?.price ?? 0}</p>
        <p className="mt-2">Inventory: {product?.inventory ?? 0}</p>
      </div>
    </ZoneFrame>
  )
}
