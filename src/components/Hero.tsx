'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false
})

export default function Hero(){
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="hero-bg" />

      <div className="container max-w-6xl mx-auto px-5 py-12 grid lg:grid-cols-2 gap-10 items-center z-10">
        <div className="text-center lg:text-left">
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)]">Novas Estruturas</motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg md:text-2xl text-[var(--text-secondary)]">Estruturas que transformam eventos em experiências.</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 flex justify-center lg:justify-start gap-4 flex-wrap">
            <a href="#projects" className="btn-primary">Conheça nossos projetos</a>
            <a href="#contact" className="btn-secondary">Entre em contato</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-2xl glass-card"
        >
          <Image
            src="/images/10.jpg"
            alt="Estrutura para evento montada pela Novas Estruturas"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(5,5,5,0.35), transparent)'}} />
          <div className="absolute bottom-4 left-4 text-[var(--text-secondary)] text-sm">Projeto em destaque</div>
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-6 top-20 w-72 h-72 xl:w-80 xl:h-80 pointer-events-none opacity-90">
        <Scene3D />
      </div>
    </section>
  )
}
