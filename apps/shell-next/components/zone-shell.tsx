import type { ReactNode } from 'react'

type ZoneShellProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
  links?: ReactNode[]
}

export function ZoneShell({ eyebrow, title, description, children, links }: ZoneShellProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
      <header className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.45)]">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-300">{description}</p>
        <nav className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/">Home</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/about">About</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/pricing">Pricing</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/shop">Shop</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" href="/dashboard">Dashboard</a>
        </nav>
        {links ? <div className="mt-6 flex flex-wrap gap-3">{links}</div> : null}
      </header>
      {children}
    </main>
  )
}
