import { Link, useParams } from 'react-router-dom'
import { getProject } from '../content/projects'
import Icon from '../components/Icon'
import { useReveal } from '../components/useReveal'

function Section({
  label,
  title,
  children,
}: {
  label: string
  title?: string
  children: React.ReactNode
}) {
  return (
    <section className="reveal" style={{ paddingBlock: 'clamp(30px, 5vw, 54px)', borderTop: '1px solid var(--line)' }}>
      <div
        style={{
          display: 'grid',
          gap: 'clamp(14px, 3vw, 40px)',
          gridTemplateColumns: 'minmax(0, 1fr)',
        }}
      >
        <div className="mono" style={{ color: 'var(--accent)' }}>
          {label}
        </div>
        <div style={{ maxWidth: '68ch' }}>
          {title && (
            <h2 className="display" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', margin: '0 0 16px' }}>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const p = getProject(slug)
  useReveal([slug])

  if (!p) {
    return (
      <div className="wrap" style={{ paddingBlock: 120 }}>
        <h1 className="display" style={{ fontSize: '2rem' }}>Not found</h1>
        <Link to="/" className="mono" style={{ color: 'var(--accent)' }}>
          ← Back to work
        </Link>
      </div>
    )
  }

  return (
    <article className="wrap" style={{ paddingTop: 'clamp(40px, 7vw, 80px)' }}>
      <Link to="/" className="mono" style={{ color: 'var(--muted)' }}>
        ← Work
      </Link>

      <header style={{ paddingBlock: 'clamp(26px, 5vw, 46px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ color: 'var(--text)' }}>
            <Icon name={p.icon} size={30} />
          </span>
          <span
            className="mono"
            style={{
              color: p.status === 'Live' ? 'var(--accent)' : 'var(--muted)',
              border: '1px solid var(--line)',
              padding: '3px 9px',
              borderRadius: 999,
            }}
          >
            {p.status}
          </span>
        </div>

        <h1 className="display" style={{ fontSize: 'clamp(2.4rem, 7vw, 4.2rem)', margin: '20px 0 0' }}>
          {p.name}
        </h1>

        <div className="mono" style={{ color: 'var(--muted)', marginTop: 12 }}>
          {p.tags.join(' · ')} · {p.year}
        </div>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)',
            lineHeight: 1.55,
            color: 'var(--text)',
            maxWidth: '54ch',
            marginTop: 22,
          }}
        >
          {p.blurb}
        </p>

        {/* Links — only real ones are clickable. Nothing here 404s. */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 26 }}>
          {p.links.map((l) =>
            l.href ? (
              <a
                key={l.label}
                href={l.href}
                className="mono"
                style={{
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                  padding: '9px 16px',
                  borderRadius: 999,
                }}
              >
                {l.label} ↗
              </a>
            ) : (
              <span
                key={l.label}
                className="mono"
                style={{
                  border: '1px dashed var(--line)',
                  color: 'var(--muted)',
                  padding: '9px 16px',
                  borderRadius: 999,
                }}
                title={l.note}
              >
                {l.label} — {l.note}
              </span>
            )
          )}
        </div>
      </header>

      <Section label="What it does">
        <p style={{ color: 'var(--muted)', fontSize: '1.02rem' }}>{p.what}</p>
      </Section>

      <Section label="Why it was hard">
        <p style={{ color: 'var(--muted)', fontSize: '1.02rem' }}>{p.hard}</p>
      </Section>

      <Section label="How it works">
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 12 }}>
          {p.how.map((h) => (
            <li key={h} style={{ display: 'flex', gap: 12, color: 'var(--muted)' }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Decisions">
        <div style={{ display: 'grid', gap: 26 }}>
          {p.decisions.map((d) => (
            <div key={d.title}>
              <h3 className="display" style={{ fontSize: '1.12rem', fontWeight: 600, margin: '0 0 7px' }}>
                {d.title}
              </h3>
              <p style={{ color: 'var(--muted)', margin: 0 }}>{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Structural, never optional. */}
      <Section label="What I measured">
        <div
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          }}
        >
          {p.measured.map((m) => (
            <div
              key={m.label}
              style={{ border: '1px solid var(--line)', background: 'var(--surface)', padding: 20 }}
            >
              <div className="display" style={{ fontSize: '2rem', color: 'var(--accent)' }}>
                {m.value}
              </div>
              <div className="mono" style={{ marginTop: 6, color: 'var(--text)' }}>
                {m.label}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.86rem', marginTop: 10, marginBottom: 0 }}>
                {m.source}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* The differentiator. Every project has one. */}
      <Section label="Known gaps" title="What doesn't work, and why that's the interesting part">
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 14 }}>
          {p.knownGaps.map((g) => (
            <li key={g} style={{ display: 'flex', gap: 12, color: 'var(--muted)' }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div style={{ borderTop: '1px solid var(--line)', paddingBlock: 40 }}>
        <Link to="/" className="mono" style={{ color: 'var(--accent)' }}>
          ← All work
        </Link>
      </div>
    </article>
  )
}
