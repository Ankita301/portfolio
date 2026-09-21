type Name = 'contract' | 'story' | 'brain' | 'search'

/** One mark per project. Drawn from what the thing actually does, not decoration. */
export default function Icon({ name, size = 22 }: { name: Name; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    // A document with one clause pulled out and marked.
    case 'contract':
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v4h4" />
          <path d="M9 12h6M9 15.5h4" />
          <circle cx="17.5" cy="16.5" r="2.6" stroke="var(--accent)" />
        </svg>
      )
    // A sound wave — the story is spoken, never shown.
    case 'story':
      return (
        <svg {...common}>
          <path d="M3 11v2M7 8v8M11 5v14" stroke="var(--accent)" />
          <path d="M15 8v8M19 11v2" />
        </svg>
      )
    // Nodes compiled into links.
    case 'brain':
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2.2" stroke="var(--accent)" />
          <circle cx="5.5" cy="16" r="2.2" />
          <circle cx="18.5" cy="16" r="2.2" />
          <path d="M10.4 6.8L7 14M13.6 6.8L17 14M7.7 16h8.6" />
        </svg>
      )
    // Retrieval: a query reaching into a store.
    case 'search':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="2.6" />
          <path d="M5 6v5c0 1.4 3.1 2.6 7 2.6" />
          <path d="M5 11v5c0 1.2 2.3 2.2 5.4 2.5" />
          <circle cx="16.8" cy="16.8" r="3.2" stroke="var(--accent)" />
          <path d="M19.2 19.2L21.5 21.5" stroke="var(--accent)" />
        </svg>
      )
  }
}
