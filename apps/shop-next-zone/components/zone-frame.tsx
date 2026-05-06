import type { ReactNode } from 'react'
import { getAuthEmail } from '../lib/auth'

type ZoneFrameProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export async function ZoneFrame({ eyebrow, title, description, children }: ZoneFrameProps) {
  const email = await getAuthEmail()

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
      <header className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.45)]">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-300">{description}</p>
        <div className="mt-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
          {email ? `Signed in as ${email}` : 'Not signed in'}
        </div>
        <nav className="mt-6 flex flex-wrap gap-3 text-sm">
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2" href="/">Shell</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2" href="/shop">Shop home</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2" href="/shop/products">Products</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2" href="/shop/drops">Drops</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2" href="/dashboard">Dashboard</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2" href={email ? '/me' : '/login'}>{email ? 'Profile' : 'Login'}</a>
        </nav>
      </header>
      {children}
    </main>
  )
}
