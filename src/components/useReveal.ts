import { useEffect } from 'react'

/**
 * Adds .in to .reveal elements as they scroll into view.
 *
 * Content must never end up permanently invisible, so this is deliberately
 * forgiving in three ways:
 *  - an element that has already scrolled ABOVE the viewport is revealed too,
 *    because a fast scroll or an anchor jump can skip the intersecting frame
 *  - anything still hidden after a short grace period is revealed anyway
 *  - no IntersectionObserver at all means everything is visible immediately
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.in)'))
    if (els.length === 0) return

    const reveal = (el: Element) => el.classList.add('in')

    if (!('IntersectionObserver' in window)) {
      els.forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // Intersecting, or already scrolled past going up.
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            reveal(e.target)
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    els.forEach((el) => io.observe(el))

    // Safety net: never leave content hidden.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach(reveal)
    }, 2500)

    return () => {
      io.disconnect()
      window.clearTimeout(failsafe)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
