import { listOrders } from '@dropjdid/api-client'
import { ZoneFrame } from '../../../components/zone-frame'

export default async function DashboardOrdersPage() {
  const orders = await listOrders()

  return (
    <ZoneFrame
      eyebrow="Dashboard Zone"
      title="Orders route owned by the dashboard app"
      description="A route segment that can evolve without touching the shell or shop app."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {orders.map((order) => (
          <a key={order.id} className="rounded-3xl border border-white/10 bg-white/5 p-5" href={`/dashboard/orders/${order.id}`}>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">{order.state}</p>
            <h2 className="mt-2 text-lg font-semibold text-white">{order.id}</h2>
            <p className="mt-2 text-sm text-slate-300">{order.customer}</p>
          </a>
        ))}
      </div>
    </ZoneFrame>
  )
}
