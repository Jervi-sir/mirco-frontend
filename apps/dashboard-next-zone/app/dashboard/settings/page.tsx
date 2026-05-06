import { listAdminMetrics } from '@dropjdid/api-client'
import { ZoneFrame } from '../../../components/zone-frame'

export default async function DashboardSettingsPage() {
  const metrics = await listAdminMetrics()

  return (
    <ZoneFrame
      eyebrow="Dashboard Zone"
      title="Settings route isolated to the dashboard app"
      description="Shared package data can still be used while route ownership stays separate."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">{metric.label}</p>
            <h2 className="mt-2 text-lg font-semibold text-white">{metric.value}</h2>
            <p className="mt-2 text-sm text-slate-300">Delta: {metric.delta}</p>
          </article>
        ))}
      </div>
    </ZoneFrame>
  )
}
