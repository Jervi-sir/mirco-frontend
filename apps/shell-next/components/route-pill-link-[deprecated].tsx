'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

type RoutePillLinkProps = {
  href: string
  children: ReactNode
  match?: 'exact' | 'prefix'
}

const baseClassName = 'rounded-full border px-4 py-2 text-sm transition-colors'
const inactiveClassName = 'border-white/15 bg-white/5 text-white'
const activeClassName = 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100'

export function RoutePillLinkDeprecated({ href, children, match = 'exact' }: RoutePillLinkProps) {
  const pathname = usePathname()
  const isActive =
    match === 'prefix'
      ? pathname === href || pathname.startsWith(`${href}/`)
      : pathname === href

  return (
    <Link
      className={`${baseClassName} ${isActive ? activeClassName : inactiveClassName}`}
      href={href}
    >
      {children}
    </Link>
  )
}
