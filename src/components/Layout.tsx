import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../content/profile'

function readTheme(): 'dark' | 'light' | null {
  try {
    const t = localStorage.getItem('theme')
    return t === 'dark' || t === 'light' ? t : null
  } catch {
    return null
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(readTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme) root.setAttribute('data-theme', theme)
    else root.removeAttribute('data-theme')
    try {
      if (theme) localStorage.setItem('theme', theme)
    } catch {
      /* private mode — theme just won't persist */
    }
  }, [theme])

  const resolved =
    theme ??
    (window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

  return (
    <button
      onClick={() => setTheme(resolved === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${resolved === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        background: 'transparent',
        border: '1px solid var(--line)',
        color: 'var(--muted)',
        borderRadius: 999,
        width: 34,
        height: 34,
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        transition: 'color .2s, border-color .2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--accent)'
        e.currentTarget.style.borderColor = 'var(--accent)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--muted)'
        e.currentTarget.style.borderColor = 'var(--line)'
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {resolved === 'dark' ? (
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
          </>
        )}
      </svg>
    </button>
  )
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navLink = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'var(--text)' : 'var(--muted)',
    transition: 'color .2s',
  })

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'color-mix(in srgb, var(--ink) 88%, transparent)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div
          className="wrap"
          style={{
            height: 62,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <Link to="/" className="mono" style={{ color: 'var(--text)', letterSpacing: '0.18em' }}>
            AB<span style={{ color: 'var(--accent)' }}>.</span>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <NavLink to="/" end className="mono" style={navLink}>
              Work
            </NavLink>
            <NavLink to="/about" className="mono" style={navLink}>
              About
            </NavLink>
            <a
              href={`mailto:${profile.email}`}
              className="mono"
              style={{ color: 'var(--muted)' }}
            >
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer style={{ borderTop: '1px solid var(--line)', marginTop: 96 }}>
        <div
          className="wrap"
          style={{
            paddingBlock: 40,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <div>
            <div className="display" style={{ fontSize: 20 }}>
              {profile.name}
            </div>
            <div className="mono" style={{ color: 'var(--muted)', marginTop: 6 }}>
              {profile.location}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a className="mono" style={{ color: 'var(--muted)' }} href={`mailto:${profile.email}`}>
              Email
            </a>
            <a className="mono" style={{ color: 'var(--muted)' }} href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="mono" style={{ color: 'var(--muted)' }} href={profile.github}>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
