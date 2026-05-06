import type { AdminMetric, Order } from '@dropjdid/types'

const orders: Order[] = [
  { id: 'ord-2048', customer: 'Ayla M.', total: 480, state: 'paid' },
  { id: 'ord-2049', customer: 'Rayan T.', total: 96, state: 'packed' },
  { id: 'ord-2050', customer: 'Ines B.', total: 220, state: 'flagged' },
]

const metrics: AdminMetric[] = [
  { label: 'GMV', value: '$18.4k', delta: '+12%' },
  { label: 'Sell-through', value: '78%', delta: '+4%' },
  { label: 'Returns', value: '1.4%', delta: '-0.2%' },
]

export async function listOrders() {
  return Promise.resolve(orders)
}

export async function listAdminMetrics() {
  return Promise.resolve(metrics)
}
