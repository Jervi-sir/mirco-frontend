import { PropsWithChildren, ReactNode } from "react";

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