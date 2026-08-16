'use client'

import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

export default function ImpactSection() {
  const glowRef = useParallax<HTMLDivElement>({ scrollStrength: 30, mouseStrength: 14 })

  return (
    <section id="impact" className="impact-hero relative overflow-hidden px-5">
      {/* ambient light layers — yellow glow with navy depth behind it */}
      <div ref={glowRef} className="parallax pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(245,183,0,0.16), transparent 70%)' }}
        />
        <div
          className="absolute left-[30%] top-[60%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(20,33,61,0.5), transparent 70%)' }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="headline relative z-10 max-w-4xl mx-auto text-[var(--text-primary)]"
      >
        Grandes eventos começam com{' '}
        <span className="text-[var(--brand-yellow)]">grandes estruturas</span>.
      </motion.p>
    </section>
  )
}
