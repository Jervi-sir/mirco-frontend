import type { ReactNode } from 'react'

type RoutePillLinkProps = {
  href: string
  children: ReactNode
  active?: boolean
}

const baseClassName =
  'rounded-full border px-4 py-2 text-sm transition-colors'

const inactiveClassName = 'border-white/15 bg-white/5 text-white'
const activeClassName = 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100'

export function RoutePillLink({
  href,
  children,
  active = false,
}: RoutePillLinkProps) {
  return (
    <a
      href={href}
      className={`${baseClassName} ${active ? activeClassName : inactiveClassName
        }`}
    >
      {children}
    </a>
  )
}