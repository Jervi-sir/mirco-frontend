import { ZoneShell } from "@dropjdid/ui";
import { getAuthEmail } from '../lib/auth'

export default async function Home() {
  const email = await getAuthEmail()
  return (
    <ZoneShell
      eyebrow="Shell Zone"
      title="Next.js shell, main host for all other hchildren"
      description="it owns all nextjs zones and react module federation"
      links={[]}
      pathname={'/'}
      email={email}
    >
      <></>
    </ZoneShell>
  )
}
