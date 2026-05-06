import { ZoneShell } from '../../components/zone-shell'

export default function PricingPage() {
  return (
    <ZoneShell
      eyebrow="Shell Zone"
      title="Pricing surface owned by the shell"
      description="A route that remains local to the shell even while `/shop` and `/dashboard` are deployed independently."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {['Starter', 'Scale', 'Enterprise'].map((tier) => (
          <article key={tier} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold text-white">{tier}</h2>
            <p className="mt-2 text-sm text-slate-300">Route-owned pricing copy for the shell app.</p>
          </article>
        ))}
      </div>
    </ZoneShell>
  )
}
