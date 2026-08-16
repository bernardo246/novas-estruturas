'use client'

import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Projects(){
  const headingRef = useScrollReveal<HTMLHeadingElement>()

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 ref={headingRef} className="reveal text-3xl md:text-4xl font-extrabold text-[var(--text-primary)]">
          Projetos
        </h2>
        <p className="mt-3 text-[var(--text-secondary)]">
          Portfólio com imagens reais de montagens executadas pela Novas Estruturas.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className={`project-item group relative overflow-hidden rounded-xl shadow ${i % 5 === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <Image
                src={p.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                alt={p.title}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-[var(--bg)]/90 via-[var(--brand-navy)]/40 to-transparent opacity-95 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <div className="text-[var(--text-primary)] flex items-end justify-between w-full gap-3">
                  <div>
                    <strong>{p.title}</strong>
                    <div className="text-xs mt-1 text-[var(--text-secondary)]">{p.description}</div>
                  </div>
                  <span className="project-arrow shrink-0 text-[var(--brand-yellow)] text-xl" aria-hidden>
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
