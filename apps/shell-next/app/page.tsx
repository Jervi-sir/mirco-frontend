import { ZoneShell } from '../components/zone-shell'

export default function Home() {
  return (
    <ZoneShell
      eyebrow="Shell Zone"
      title="Next.js shell routing the lab by route ownership"
      description="This app owns the marketing routes and proxies product, dashboard, and auth flows to independent Next.js zones."
      links={[
        <a key="shop" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/shop">Open shop zone</a>,
        <a key="dashboard" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/dashboard">Open dashboard zone</a>,
        <a key="auth" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/login">Open auth zone</a>,
      ]}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/about">About route</a>
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/pricing">Pricing route</a>
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/shop/products">Shop products route</a>
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/login">Auth login route</a>
      </div>
    </ZoneShell>
  )
}
