'use client'

import { motion } from 'framer-motion'

export default function Services(){
  const items = [
    {
      title: 'Montagem de estruturas',
      description: 'Planejamento e execução de estruturas para eventos de diferentes portes.'
    },
    {
      title: 'Estruturas para eventos',
      description: 'Soluções modulares para áreas técnicas, circulação e operação.'
    },
    {
      title: 'Coberturas',
      description: 'Coberturas com foco em proteção, estética e segurança operacional.'
    },
    {
      title: 'Palcos',
      description: 'Montagem de palco com reforço estrutural e suporte técnico.'
    },
    {
      title: 'Estruturas corporativas',
      description: 'Ambientes para convenções, ativações e experiências de marca.'
    },
    {
      title: 'Soluções personalizadas',
      description: 'Projetos sob medida conforme necessidade técnica e visual do cliente.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-[var(--bg-secondary)]/40">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Serviços</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ y: 14, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              whileHover={{ y: -6 }}
              className="p-6 glass-card service-card rounded-xl transition-transform"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--brand-yellow)] text-[var(--bg)] grid place-items-center text-xs font-semibold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-semibold mt-4 text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
