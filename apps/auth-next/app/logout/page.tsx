import { AuthFrame } from '../../components/auth-frame'
import { logoutAction } from '../actions'

export default async function LogoutPage() {
  return (
    <AuthFrame
      eyebrow="Auth Zone"
      title="Logout"
      description="A sign-out confirmation route served from auth-next."
    >
      <section className="mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-center shadow-[0_20px_80px_rgba(15,23,42,0.45)]">
        <h2 className="text-2xl font-semibold text-white">Session closed</h2>
        <p className="mt-3 text-sm text-slate-300">
          Use the button below to clear the auth cookie and return to the login route.
        </p>
        <form action={logoutAction} className="mt-6 flex justify-center gap-3">
          <button className="rounded-full bg-pink-400 px-4 py-2 text-sm font-semibold text-slate-950" type="submit">
            Logout now
          </button>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/login">
            Login again
          </a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/">
            Back to shell
          </a>
        </form>
      </section>
    </AuthFrame>
  )
}
