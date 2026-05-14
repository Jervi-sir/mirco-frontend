import { RoutePillLink, Surface, ZoneShell } from "@dropjdid/ui";
import { getAuthEmail } from '../lib/auth'

export default async function Home() {
  const email = await getAuthEmail()
  return (
    <ZoneShell
      eyebrow="Shell Zone"
      title="Next.js shell, main host for all other hchildren"
      description="it owns all nextjs zones and react module federation"
      links={[
        <RoutePillLink key="edge-composition" href="/edge-composition">
          Edge composition
        </RoutePillLink>,
      ]}
      pathname={'/'}
      email={email}
    >
      <Surface title="Edge composition example">
        <p className="text-sm leading-7 text-slate-300">
          Open <code>/edge-composition</code> to see a shared React header rendered by a Next.js route that runs on the edge runtime.
        </p>
      </Surface>
    </ZoneShell>
  )
}
