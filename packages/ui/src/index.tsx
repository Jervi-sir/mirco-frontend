import type { PropsWithChildren, ReactNode } from 'react'

type ButtonProps = PropsWithChildren<{
  href?: string
}>

export function LabButton({ children, href }: ButtonProps) {
  const className =
    'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20'

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return <span className={className}>{children}</span>
}

export function Surface({ title, children, aside }: PropsWithChildren<{ title: string; aside?: ReactNode }>) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.35)]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {aside}
      </div>
      {children}
    </section>
  )
}

export function StatusPill({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
      {children}
    </span>
  )
}
