import { listDrops } from '@dropjdid/api-client'
import { ZoneFrame } from '../../../components/zone-frame'

export default async function ShopDropsPage() {
  const drops = await listDrops()

  return (
    <ZoneFrame
      eyebrow="Shop Zone"
      title="Drops route owned by the shop app"
      description="Upcoming launches remain isolated to the shop deployment."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {drops.map((drop) => (
          <a key={drop.id} className="rounded-3xl border border-white/10 bg-white/5 p-5" href={`/shop/drops/${drop.id}`}>
            <h2 className="text-lg font-semibold text-white">{drop.title}</h2>
            <p className="mt-2 text-sm text-slate-300">Audience: {drop.audience}</p>
          </a>
        ))}
      </div>
    </ZoneFrame>
  )
}
