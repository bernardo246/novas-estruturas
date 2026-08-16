'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Services(){
  const headingRef = useScrollReveal<HTMLHeadingElement>()

  return (
    <section id="services" className="py-20 bg-[var(--bg-secondary)]/40">
      <div className="max-w-6xl mx-auto px-5">
        <h2 ref={headingRef} className="reveal text-3xl md:text-4xl font-extrabold text-[var(--text-primary)]">
          Serviços
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ y: 14, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              whileHover={{ y: -6 }}
              className="p-6 glass-card service-card rounded-xl transition-transform flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--brand-yellow)] text-[var(--bg)] grid place-items-center text-xs font-semibold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-semibold mt-4 text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] flex-1">{item.description}</p>
              <span className="service-arrow mt-4 text-[var(--text-secondary)] text-lg" aria-hidden>
                →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
