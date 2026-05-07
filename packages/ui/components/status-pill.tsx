import { PropsWithChildren } from "react";

export function StatusPill({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
      {children}
    </span>
  )
}


