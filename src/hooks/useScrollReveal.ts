'use client'

import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

type UseScrollRevealOptions = {
  /** Fraction of the element that must be visible before it reveals (0–1). */
  threshold?: number
  /** Extra margin around the viewport, e.g. '0px 0px -10% 0px'. */
  rootMargin?: string
  /** Reveal only once, then stop observing. Defaults to true. */
  once?: boolean
}

/**
 * Attaches an IntersectionObserver to the returned ref and toggles the
 * `.show` class (see `.reveal` / `.reveal.show` in globals.css) when the
 * element enters the viewport.
 *
 * Usage:
 *   const ref = useScrollReveal()
 *   <div ref={ref} className="reveal">...</div>
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T | null> {
  const { threshold = 0.2, rootMargin = '0px 0px -10% 0px', once = true } = options
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect users who prefer reduced motion: show immediately.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('show')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('show')
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}

/**
 * Convenience helper for staggered children — returns an inline
 * transitionDelay style for the given index (0ms / 100ms / 200ms / 300ms...).
 */
export function revealDelay(index: number, step = 100) {
  return { transitionDelay: `${index * step}ms` }
}

export default useScrollReveal
