import type { ReactNode } from 'react'
import { RoutePillLink } from './route-pill-link'

type ZoneShellProps = {
  pathname: string
  eyebrow: string
  email?: string | null
  title: string
  description: string
  children: ReactNode
  links?: ReactNode[]
}

export function ZoneShell({
  pathname,
  eyebrow,
  email,
  title,
  description,
  children,
  links,
}: ZoneShellProps) {

  const isActive = (href: string, match: 'exact' | 'prefix' = 'exact') => {
    if (match === 'prefix') {
      return pathname === href || pathname.startsWith(`${href}/`)
    }
    return pathname === href
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
      <header className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.45)]">

        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          {eyebrow}
        </p>

        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-300">
          {description}
        </p>

        <div className="mt-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
          {email ? `Signed in as ${email}` : 'Not signed in'}
        </div>

        {/* MAIN ROUTES */}
        <div className="mt-6 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Main Zone routes
          </p>

          <nav className="mt-6 flex flex-wrap gap-3">
            <RoutePillLink href="/" active={isActive('/')}>
              Home
            </RoutePillLink>

            <RoutePillLink href="/about" active={isActive('/about')}>
              About
            </RoutePillLink>

            <RoutePillLink href="/pricing" active={isActive('/pricing')}>
              Pricing
            </RoutePillLink>
          </nav>
        </div>

        {/* MULTI ZONES */}
        {links ? (
          <div className="mt-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Multi zones routes
            </p>

            <div className="flex flex-wrap gap-3">
              {links}

              <RoutePillLink
                href="/shop"
                active={isActive('/shop', 'prefix')}
              >
                Shop
              </RoutePillLink>

              <RoutePillLink
                href="/shop/products"
                active={isActive('/shop/products')}
              >
                Shop products route
              </RoutePillLink>

              <RoutePillLink
                href="/dashboard"
                active={isActive('/dashboard')}
              >
                Dashboard
              </RoutePillLink>

              <RoutePillLink
                href={email ? '/me' : '/login'}
                active={isActive(email ? '/me' : '/login')}
              >
                {email ? 'Profile' : 'Login'}
              </RoutePillLink>

              {email ? (
                <RoutePillLink
                  href="/logout"
                  active={isActive('/logout')}
                >
                  Logout
                </RoutePillLink>
              ) : null}
            </div>
          </div>
        ) : null}
      </header>

      {children}
    </main>
  )
}