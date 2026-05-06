import { listOrders } from '@dropjdid/api-client'
import { ZoneFrame } from '../../../../components/zone-frame'

export default async function DashboardOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const order = (await listOrders()).find((item) => item.id === id)

  return (
    <ZoneFrame
      eyebrow="Dashboard Zone"
      title={order?.id ?? 'Unknown order'}
      description="An order detail page served entirely from the dashboard zone."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
        <p>Customer: {order?.customer ?? 'Unknown'}</p>
        <p className="mt-2">Total: ${order?.total ?? 0}</p>
        <p className="mt-2">State: {order?.state ?? 'unknown'}</p>
      </div>
    </ZoneFrame>
  )
}
