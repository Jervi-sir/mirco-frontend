import { listDrops } from '@dropjdid/api-client'
import { ZoneFrame } from '../../../../components/zone-frame'

export default async function ShopDropDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const drop = (await listDrops()).find((item) => item.id === id)

  return (
    <ZoneFrame
      eyebrow="Shop Zone"
      title={drop?.title ?? 'Unknown drop'}
      description="detail page in shop zone route tree."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
        <p>Audience: {drop?.audience ?? 'Unknown'}</p>
        <p className="mt-2">Launch: {drop ? new Date(drop.launchAt).toLocaleString() : 'Unknown'}</p>
      </div>
    </ZoneFrame>
  )
}
