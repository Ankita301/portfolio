import { profile, roles, earlier, education, skills } from '../content/profile'
import { useReveal } from '../components/useReveal'

export default function About() {
  useReveal()

  return (
    <div className="wrap" style={{ paddingTop: 'clamp(50px, 9vw, 100px)' }}>
      <div
        className="mono"
        style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 10 }}
      >
        <span style={{ width: 18, height: 1, background: 'var(--accent)' }} />
        About
      </div>

      <h1 className="display" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.6rem)', margin: '22px 0 0' }}>
        Storage taught me
        <br />
        what AI forgets.
      </h1>

      <p
        style={{
          fontSize: 'clamp(1.02rem, 2vw, 1.2rem)',
          lineHeight: 1.6,
          color: 'var(--muted)',
          maxWidth: '62ch',
          marginTop: 24,
        }}
      >
        Every AI product is a data product wearing a different hat. Ten years across enterprise
        storage, cloud security and AI infrastructure is really ten years of the same question asked
        four ways: where does the data live, who is allowed to touch it, can you trust what comes
        back, and what does it cost to find out.
      </p>

      <p style={{ color: 'var(--muted)', maxWidth: '62ch', marginTop: 18 }}>{profile.summary}</p>

      {/* Experience */}
      <section className="reveal" style={{ marginTop: 'clamp(46px, 7vw, 76px)' }}>
        <h2 className="display" style={{ fontSize: '1.5rem', marginBottom: 20 }}>
          Experience
        </h2>
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {roles.map((r) => (
            <div key={r.company} style={{ borderBottom: '1px solid var(--line)', padding: '26px 0' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px 14px',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <div className="display" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {r.company}
                  <span
                    style={{
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                      fontSize: '0.95rem',
                      marginLeft: 10,
                    }}
                  >
                    {r.title}
                  </span>
                </div>
                <span className="mono" style={{ color: 'var(--muted)' }}>
                  {r.dates}
                </span>
              </div>

              <div style={{ color: 'var(--muted)', fontSize: '0.88rem', marginTop: 6 }}>{r.context}</div>

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

              <ul style={{ margin: '16px 0 0', paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
                {r.points.map((pt) => (
                  <li key={pt} style={{ display: 'flex', gap: 12, color: 'var(--muted)', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Earlier — before product */}
      <section className="reveal" style={{ marginTop: 'clamp(46px, 7vw, 76px)' }}>
        <h2 className="display" style={{ fontSize: '1.5rem', marginBottom: 8 }}>
          Before product
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginTop: 0, marginBottom: 20, maxWidth: '58ch' }}>
          Supply chain, then consulting, then an MBA and the move into product. Pricing shows up in
          all three.
        </p>
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {earlier.map((e) => (
            <div key={e.company} style={{ borderBottom: '1px solid var(--line)', padding: '20px 0' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px 14px',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <div style={{ fontWeight: 600 }}>
                  {e.company}
                  <span
                    style={{
                      color: 'var(--muted)',
                      fontWeight: 400,
                      fontSize: '0.92rem',
                      marginLeft: 10,
                    }}
                  >
                    {e.title}
                  </span>
                </div>
                <span className="mono" style={{ color: 'var(--muted)' }}>
                  {e.dates}
                </span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', margin: '8px 0 0' }}>{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="reveal" style={{ marginTop: 'clamp(46px, 7vw, 76px)' }}>
        <h2 className="display" style={{ fontSize: '1.5rem', marginBottom: 20 }}>
          Capabilities
        </h2>
        <div style={{ display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {skills.map((s) => (
            <div key={s.group} style={{ border: '1px solid var(--line)', background: 'var(--surface)', padding: 20 }}>
              <div className="mono" style={{ color: 'var(--accent)' }}>
                {s.group}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 14 }}>
                {s.items.map((it) => (
                  <span
                    key={it}
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--muted)',
                      border: '1px solid var(--line)',
                      padding: '4px 9px',
                      borderRadius: 999,
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="reveal" style={{ marginTop: 'clamp(46px, 7vw, 76px)' }}>
        <h2 className="display" style={{ fontSize: '1.5rem', marginBottom: 20 }}>
          Education
        </h2>
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {education.map((e) => (
            <div
              key={e.school}
              style={{
                borderBottom: '1px solid var(--line)',
                padding: '18px 0',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px 14px',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{e.school}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>{e.detail}</div>
              </div>
              <span className="mono" style={{ color: 'var(--muted)' }}>
                {e.dates}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        className="reveal"
        style={{
          marginTop: 'clamp(46px, 7vw, 76px)',
          border: '1px solid var(--line)',
          background: 'var(--surface)',
          padding: 'clamp(26px, 5vw, 48px)',
        }}
      >
        <h2 className="display" style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.1rem)', margin: 0 }}>
          Think I'd be a good fit for your team?
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
          <a
            href={`mailto:${profile.email}`}
            className="mono"
            style={{
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              padding: '11px 20px',
              borderRadius: 999,
            }}
          >
            Email ↗
          </a>
          <a
            href={profile.linkedin}
            className="mono"
            style={{ border: '1px solid var(--line)', color: 'var(--muted)', padding: '11px 20px', borderRadius: 999 }}
          >
            LinkedIn ↗
          </a>
        </div>
      </section>
    </div>
  )
}
