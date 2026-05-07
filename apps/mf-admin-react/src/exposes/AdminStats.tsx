import { listAdminMetrics } from '@dropjdid/api-client'
import { useEffect, useState } from 'react'
import type { AdminMetric } from '@dropjdid/types'

export default function AdminStats() {
  const [metrics, setMetrics] = useState<AdminMetric[]>([])

  useEffect(() => {
    listAdminMetrics().then(setMetrics)
  }, [])

  return (
    <div className="metric-grid">
      <p>react adminStats</p>
      {metrics.map((metric) => (
        <article key={metric.label} className="metric-card">
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
          <em>{metric.delta}</em>
        </article>
      ))}
    </div>
  )
}
