'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About(){
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="about" ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)]">
            SOBRE A<br />NOVAS ESTRUTURAS
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            A Novas Estruturas atua na montagem de estruturas para eventos com foco em segurança,
            acabamento e execução eficiente. Nossa equipe entrega soluções para projetos de diferentes
            portes, sempre com planejamento técnico e atenção ao detalhe.
          </p>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            Trabalhamos com estruturas para shows, eventos corporativos, feiras e ações especiais,
            adaptando cada montagem ao perfil da operação e da experiência desejada.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="relative h-44 sm:h-56 rounded-xl overflow-hidden shadow-lg ring-2 ring-[var(--brand-yellow)]/40"
          >
            <Image src="/images/5.jpg" alt="Montagem de estrutura para evento" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative h-44 sm:h-56 rounded-xl overflow-hidden shadow-lg ring-2 ring-[var(--brand-navy)]/40"
          >
            <Image src="/images/7.png" alt="Detalhe estrutural de cobertura para evento" fill className="object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
