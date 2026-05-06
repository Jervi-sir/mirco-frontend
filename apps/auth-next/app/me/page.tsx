import { AuthFrame } from '../../components/auth-frame'
import { getAuthEmail } from '../../lib/auth'

export default async function MePage() {
  const email = await getAuthEmail()

  return (
    <AuthFrame
      eyebrow="Auth Zone"
      title="My profile"
      description="A profile route owned by the auth zone and reachable at /me."
    >
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-pink-300">Email</p>
          <h2 className="mt-2 text-lg font-semibold text-white">{email ?? 'Guest'}</h2>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-pink-300">Session</p>
          <h2 className="mt-2 text-lg font-semibold text-white">{email ? 'active' : 'anonymous'}</h2>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-pink-300">Zone scope</p>
          <h2 className="mt-2 text-lg font-semibold text-white">Shared across shell and dashboards</h2>
        </article>
      </section>
    </AuthFrame>
  )
}
