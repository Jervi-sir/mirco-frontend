import { listAdminMetrics, listOrders } from '@dropjdid/api-client'
import { ZoneFrame } from '../../components/zone-frame'

export default async function DashboardHomePage() {
  const [metrics, orders] = await Promise.all([listAdminMetrics(), listOrders()])

  return (
    <ZoneFrame
      eyebrow="Dashboard Zone"
      title="Operational routes isolated under /dashboard"
      description="This app owns staff workflows and can be deployed independently from the storefront."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-semibold text-white">Metrics</h2>
          <p className="mt-2 text-sm text-slate-300">{metrics.length} operational cards in this zone.</p>
          <a className="mt-4 inline-block text-violet-300" href="/dashboard/orders">Review orders</a>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-semibold text-white">Orders</h2>
          <p className="mt-2 text-sm text-slate-300">{orders.length} active orders tracked separately.</p>
          <a className="mt-4 inline-block text-violet-300" href="/dashboard/settings">Open settings</a>
        </article>
      </div>
    </ZoneFrame>
  )
}
