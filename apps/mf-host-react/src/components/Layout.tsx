import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/products', label: 'Products' },
  { to: '/cart', label: 'Cart' },
  { to: '/admin', label: 'Admin' },
]

export function Layout() {
  return (
    <div className="shell">
      <header className="hero-panel">
        <div>
          <p>React host</p>
          <p className="eyebrow">DropJdid Micro-Frontend Lab</p>
          <h1>React host orchestrating React and Vue remotes at runtime</h1>
          <p className="hero-copy">
            This shell trains Module Federation boundaries: runtime imports, remote health,
            cross-framework composition, and failure recovery.
          </p>
        </div>
        <nav className="nav-row" aria-label="Module federation pages">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-pill nav-pill-active' : 'nav-pill')}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
