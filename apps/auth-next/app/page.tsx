import { AuthFrame } from '../components/auth-frame'

export default function Home() {
  return (
    <AuthFrame
      eyebrow="Auth Zone"
      title="Authentication routes isolated in their own Next.js app"
      description="This zone owns login, register, profile, and logout flows while the shell rewrites public URLs into this app."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/login">Login</a>
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/register">Register</a>
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/me">Profile</a>
        <a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/logout">Logout</a>
      </div>
    </AuthFrame>
  )
}
