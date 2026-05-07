import { LabButton, StatusPill, Surface } from '@dropjdid/ui'
import { Button, Badge } from '@micro-frontend/shadcn-ui'
import { AuthFrame } from '../../components/auth-frame'
import { getAuthEmail } from '../../lib/auth'

export default async function UiLabPage() {
  const email = await getAuthEmail()

  return (
    <AuthFrame
      eyebrow="Shared UI"
      title="UI package integration example"
      description="This route demonstrates how auth-next can consume shared components from packages/ui through the @dropjdid/ui workspace package."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.9fr)]">
        <Button>dfsfwed</Button>
        <Surface title="Auth journey" aside={<StatusPill>{email ? 'Authenticated session' : 'Anonymous session'}</StatusPill>}>
          <div className="grid gap-4 text-sm text-slate-300">
            <p>
              The card below mixes auth-next route ownership with shared primitives. It is a minimal example of how the auth app can stay visually aligned with the rest of the workspace.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-pink-300">Entry point</p>
                <p className="mt-2 text-base font-semibold text-white">/login and /register</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-pink-300">Shared package</p>
                <p className="mt-2 text-base font-semibold text-white">@dropjdid/ui</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-pink-300">Session state</p>
                <p className="mt-2 text-base font-semibold text-white">{email ?? 'Guest mode'}</p>
              </div>
            </div>
          </div>
        </Surface>

        <Surface title="Actions" aside={<StatusPill>Reusable CTAs</StatusPill>}>
          <div className="flex flex-wrap gap-3">
            <LabButton href="/login">Go to login</LabButton>
            <LabButton href="/register">Create account</LabButton>
            <LabButton href="/me">View profile</LabButton>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            `LabButton` renders the same call-to-action style everywhere it is imported, while `Surface` provides a shared content container for zone-specific content.
          </p>
        </Surface>
      </div>

      <Surface title="Integration notes" aside={<StatusPill>Workspace package</StatusPill>}>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-pink-300">1. Dependency</p>
            <p className="mt-2 text-sm text-slate-300">Add `@dropjdid/ui` to `auth-next` with the `workspace:*` version so pnpm links the local package.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-pink-300">2. Transpile</p>
            <p className="mt-2 text-sm text-slate-300">Enable `transpilePackages` because the UI package exports source directly from `src/index.tsx`.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-pink-300">3. Compose</p>
            <p className="mt-2 text-sm text-slate-300">Import the shared primitives into route files and combine them with auth-next server data like the current email.</p>
          </article>
        </div>
      </Surface>
    </AuthFrame>
  )
}
