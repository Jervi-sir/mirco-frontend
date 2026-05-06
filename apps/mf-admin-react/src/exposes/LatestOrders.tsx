import { listOrders } from '@dropjdid/api-client'
import { useEffect, useState } from 'react'
import type { Order } from '@dropjdid/types'

export default function LatestOrders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    listOrders().then(setOrders)
  }, [])

  return (
    <ul className="orders-list">
      {orders.map((order) => (
        <li key={order.id}>
          <strong>{order.id}</strong>
          <span>{order.customer}</span>
          <span>${order.total}</span>
        </li>
      ))}
    </ul>
  )
}
