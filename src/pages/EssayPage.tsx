import { Link, useParams } from 'react-router-dom'
import { getEssay } from '../content/writing'
import { useReveal } from '../components/useReveal'

export default function EssayPage() {
  const { slug } = useParams()
  const e = getEssay(slug)
  useReveal([slug])

  if (!e) {
    return (
      <div className="wrap" style={{ paddingBlock: 120 }}>
        <h1 className="display" style={{ fontSize: '2rem' }}>Not found</h1>
        <Link to="/" className="mono" style={{ color: 'var(--accent)' }}>
          ← Back
        </Link>
      </div>
    )
  }

  return (
    <article className="wrap" style={{ paddingTop: 'clamp(40px, 7vw, 80px)', paddingBottom: 60 }}>
      <Link to="/" className="mono" style={{ color: 'var(--muted)' }}>
        ← Writing
      </Link>

      <header style={{ paddingBlock: 'clamp(26px, 5vw, 46px)', maxWidth: '72ch' }}>
        <div className="mono" style={{ color: 'var(--accent)' }}>
          {e.kind} · {e.date} · {e.readTime}
        </div>
        <h1 className="display" style={{ fontSize: 'clamp(1.9rem, 5vw, 3rem)', margin: '18px 0 0', lineHeight: 1.12 }}>
          {e.title}
        </h1>
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
            lineHeight: 1.55,
            color: 'var(--muted)',
            marginTop: 20,
          }}
        >
          {e.dek}
        </p>
      </header>

      <div style={{ maxWidth: '68ch' }}>
        {e.sections.map((s, i) => (
          <section
            key={s.heading ?? i}
            className="reveal"
            style={{ paddingBlock: 'clamp(18px, 3vw, 30px)', borderTop: i === 0 ? '1px solid var(--line)' : undefined }}
          >
            {s.heading && (
              <h2 className="display" style={{ fontSize: 'clamp(1.2rem, 2.6vw, 1.5rem)', margin: '0 0 12px', fontWeight: 600 }}>
                {s.heading}
              </h2>
            )}
            {s.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} style={{ color: 'var(--text)', fontSize: '1.02rem', lineHeight: 1.65, margin: '0 0 14px' }}>
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--line)', paddingBlock: 40 }}>
        <Link to="/" className="mono" style={{ color: 'var(--accent)' }}>
          ← All work
        </Link>
      </div>
    </article>
  )
}
