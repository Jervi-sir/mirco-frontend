type EdgeComposedHeaderProps = {
  title: string
  subtitle: string
  source: string
}

export function EdgeComposedHeader({
  title,
  subtitle,
  source,
}: EdgeComposedHeaderProps) {
  return (
    <header className="rounded-[2rem] border border-emerald-400/20 bg-emerald-950/60 p-8 shadow-[0_20px_80px_rgba(6,78,59,0.35)]">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-emerald-100">
          Edge composition example
        </span>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
          Source: {source}
        </span>
      </div>

      <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
        {title}
      </h1>

      <p className="mt-4 max-w-2xl text-base text-emerald-50/85">
        {subtitle}
      </p>
    </header>
  )
}
