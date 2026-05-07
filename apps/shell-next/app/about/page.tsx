import { ZoneShell } from '@dropjdid/ui'

export default function AboutPage() {
  return (
    <ZoneShell
      eyebrow="Shell Zone"
      title="About the training split"
      description="The shell owns shallow marketing pages while delegating deeper domains to dedicated apps."
      pathname={'/about'}
    >
      <ul className="grid gap-3 text-sm text-slate-300">
        <li>About us coming from Shell</li>
      </ul>
    </ZoneShell>
  )
}
