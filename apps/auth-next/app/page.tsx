import Link from 'next/link'
import { AuthFrame } from '../components/auth-frame'

export default function Home() {
  return (
    <AuthFrame
      eyebrow="Auth Zone"
      title="Authentication routes isolated in their own Next.js app"
      description="This zone owns login, register, profile, and logout flows while the shell rewrites public URLs into this app."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Link className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/login">Login</Link>
        <Link className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/register">Register</Link>
        <Link className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/me">Profile</Link>
        <Link className="rounded-3xl border border-white/10 bg-white/5 p-5" href="/logout">Logout</Link>
      </div>
      <div className="rounded-[2rem] border border-dashed border-cyan-400/30 bg-cyan-400/5 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Shared package integration</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">UI package example inside auth-next</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Visit the UI lab route to see `@dropjdid/ui` components rendered inside the auth zone with real navigation and auth-aware content.
        </p>
        <Link className="mt-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100" href="/ui-lab">
          Open UI lab
        </Link>
      </div>
    </AuthFrame>
  )
}
