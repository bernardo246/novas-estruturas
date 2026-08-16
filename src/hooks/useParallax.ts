'use client'

import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

type UseParallaxOptions = {
  /** How far the element can move on the Y axis while scrolling, in px. */
  scrollStrength?: number
  /** How far the element can move in response to the mouse, in px. */
  mouseStrength?: number
  /** Disable the mouse-driven effect (useful on touch devices). */
  disableMouse?: boolean
}

/**
 * Applies a subtle scroll + mouse driven parallax transform to the
 * returned ref. Movements are intentionally small — the goal is a "site
 * that feels alive", never a page that feels like it's scrolling too much.
 *
 * Usage:
 *   const ref = useParallax({ scrollStrength: 24, mouseStrength: 10 })
 *   <div ref={ref} className="parallax">...</div>
 */
export function useParallax<T extends HTMLElement = HTMLElement>(
  options: UseParallaxOptions = {}
): RefObject<T | null> {
  const { scrollStrength = 20, mouseStrength = 12, disableMouse = false } = options
  const ref = useRef<T | null>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight || 1
      // -1 (above viewport) .. 1 (below viewport), 0 = centered
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH
      target.current.y = -progress * scrollStrength
    }

    const onMouseMove = (e: MouseEvent) => {
      if (disableMouse) return
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      target.current.x = nx * mouseStrength
      target.current.y += ny * mouseStrength * 0.4
    }

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08
      current.current.y += (target.current.y - current.current.y) * 0.08
      el.style.transform = `translate3d(${current.current.x.toFixed(2)}px, ${current.current.y.toFixed(2)}px, 0)`
      raf.current = requestAnimationFrame(tick)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    if (!disableMouse) window.addEventListener('mousemove', onMouseMove, { passive: true })
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (!disableMouse) window.removeEventListener('mousemove', onMouseMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [scrollStrength, mouseStrength, disableMouse])

  return ref
}

export default useParallax
