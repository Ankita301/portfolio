import { Link } from 'react-router-dom'
import { profile, roles } from '../content/profile'
import { projects } from '../content/projects'
import Icon from '../components/Icon'
import { useReveal } from '../components/useReveal'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mono"
      style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 10 }}
    >
      <span style={{ width: 18, height: 1, background: 'var(--accent)' }} />
      {children}
    </div>
  )
}

function Hero() {
  return (
    <section style={{ paddingTop: 'clamp(64px, 12vw, 140px)', paddingBottom: 'clamp(48px, 8vw, 96px)' }}>
      <div className="wrap">
        <Eyebrow>{profile.location}</Eyebrow>

        <h1
          className="display"
          style={{ fontSize: 'clamp(2.6rem, 8.5vw, 6rem)', margin: '28px 0 0', maxWidth: 16 + 'ch' }}
        >
          Ankita
          <br />
          Bhargava
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.4vw, 1.5rem)',
            lineHeight: 1.45,
            maxWidth: '34ch',
            margin: '26px 0 0',
            color: 'var(--text)',
          }}
        >
          I build secure, grounded, production-ready AI products over{' '}
          <span style={{ color: 'var(--accent)' }}>complex enterprise data</span>.
        </p>

        {/* Signature: the career as a stack, read bottom-up the way infrastructure is. */}
        <div style={{ marginTop: 'clamp(44px, 7vw, 80px)', maxWidth: 780 }}>
          <Eyebrow>The stack, bottom-up</Eyebrow>
          <div style={{ marginTop: 18, borderTop: '1px solid var(--line)' }}>
            {[...profile.thesis].reverse().map((t, i) => (
              <div
                key={t.layer}
                className="reveal layer-row"
                style={{
                  alignItems: 'baseline',
                  padding: '16px 0',
                  borderBottom: '1px solid var(--line)',
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <div className="mono" style={{ color: 'var(--accent)' }}>
                  {t.layer}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.98rem' }}>{t.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
    <Link
      to={`/projects/${p.slug}`}
      className="reveal"
      style={{
        display: 'block',
        border: '1px solid var(--line)',
        background: 'var(--surface)',
        padding: 'clamp(20px, 3vw, 30px)',
        transition: 'border-color .25s, transform .25s, background .25s',
        transitionDelay: `${i * 60}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.background = 'var(--surface-2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--line)'
        e.currentTarget.style.background = 'var(--surface)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <span style={{ color: 'var(--text)' }}>
          <Icon name={p.icon} size={24} />
        </span>
        <span
          className="mono"
          style={{
            color: p.status === 'Live' ? 'var(--accent)' : 'var(--muted)',
            border: '1px solid var(--line)',
            padding: '3px 8px',
            borderRadius: 999,
          }}
        >
          {p.status}
        </span>
      </div>

      <h3 className="display" style={{ fontSize: '1.65rem', margin: '18px 0 0', fontWeight: 600 }}>
        {p.name}
      </h3>

      <div className="mono" style={{ color: 'var(--muted)', marginTop: 8 }}>
        {p.tags.join(' · ')} · {p.year}
      </div>

      <p style={{ color: 'var(--muted)', margin: '14px 0 0', fontSize: '0.96rem', lineHeight: 1.6 }}>
        {p.blurb}
      </p>

      <div
        className="mono"
        style={{ marginTop: 20, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 8 }}
      >
        Read <span aria-hidden>→</span>
      </div>
    </Link>
  )
}

function WorkStack() {
  return (
    <section style={{ paddingBlock: 'clamp(48px, 8vw, 90px)' }}>
      <div className="wrap">
        <Eyebrow>Product work</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', margin: '16px 0 0' }}>
          Ten years, four layers
        </h2>
        <p style={{ color: 'var(--muted)', maxWidth: '58ch', marginTop: 14 }}>
          {profile.summary}
        </p>

        <div style={{ marginTop: 40, borderTop: '1px solid var(--line)' }}>
          {roles.map((r, i) => (
            <div
              key={r.company}
              className="reveal layer-row"
              style={{
                borderBottom: '1px solid var(--line)',
                padding: '24px 0',
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <div className="mono" style={{ color: 'var(--accent)', paddingTop: 5 }}>
                {r.layer}
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 14px',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span className="display" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
                      {r.company}
                    </span>
                    <span style={{ color: 'var(--muted)', marginLeft: 10, fontSize: '0.95rem' }}>
                      {r.title}
                    </span>
                  </div>
                  <span className="mono" style={{ color: 'var(--muted)' }}>
                    {r.dates}
                  </span>
                </div>

                <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: 6 }}>{r.context}</div>

                {r.scope && (
                  <div
                    className="mono"
                    style={{
                      marginTop: 10,
                      color: 'var(--text)',
                      background: 'var(--accent-soft)',
                      border: '1px solid var(--line)',
                      padding: '7px 11px',
                      display: 'inline-block',
                      letterSpacing: '0.08em',
                      textTransform: 'none',
                      fontSize: '0.74rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {r.scope}
                  </div>
                )}

                {r.link && (
                  <a
                    href={r.link.href}
                    className="mono"
                    style={{ display: 'inline-block', marginTop: 12, color: 'var(--accent)' }}
                  >
                    {r.link.label} ↗
                  </a>
                )}

                {r.metric && (
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 14 }}>
                    <span
                      className="display"
                      style={{ fontSize: '1.7rem', color: 'var(--accent)', fontWeight: 800 }}
                    >
                      {r.metric.value}
                    </span>
                    <span className="mono" style={{ color: 'var(--muted)' }}>
                      {r.metric.label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <Link to="/about" className="mono" style={{ color: 'var(--accent)' }}>
            Full background →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useReveal()

  return (
    <>
      <Hero />

      <section style={{ paddingBlock: 'clamp(40px, 6vw, 70px)' }}>
        <div className="wrap">
          <Eyebrow>AI products I've built</Eyebrow>
          <h2 className="display" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', margin: '16px 0 34px' }}>
            Four products, four different problems
          </h2>

          <div
            className="card-grid"
            style={{ display: 'grid', gap: 18 }}
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      <WorkStack />
    </>
  )
}
