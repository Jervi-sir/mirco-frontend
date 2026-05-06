import { ZoneShell } from '../../components/zone-shell'

export default function AboutPage() {
  return (
    <ZoneShell
      eyebrow="Shell Zone"
      title="About the training split"
      description="The shell owns shallow marketing pages while delegating deeper domains to dedicated apps."
    >
      <ul className="grid gap-3 text-sm text-slate-300">
        <li>Shell owns: `/`, `/about`, `/pricing`</li>
        <li>Shop zone owns: `/shop`, `/shop/products`, `/shop/drops`</li>
        <li>Dashboard zone owns: `/dashboard`, `/dashboard/orders`, `/dashboard/settings`</li>
      </ul>
    </ZoneShell>
  )
}
