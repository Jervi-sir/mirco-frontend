import { ZoneShell } from '../components/zone-shell'

export default function Home() {
  return (
    <ZoneShell
      eyebrow="Shell Zone"
      title="Next.js shell routing the lab by route ownership"
      description="This app owns the marketing routes and proxies deeper product and dashboard sections to independent Next.js zones."
      links={[
        <a key="shop" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/shop">Open shop zone</a>,
        <a key="dashboard" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/dashboard">Open dashboard zone</a>,
      ]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/about">About route</a>
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/pricing">Pricing route</a>
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/shop/products">Shop products route</a>
      </div>
    </ZoneShell>
  )
}
