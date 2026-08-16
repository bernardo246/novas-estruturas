'use client'

import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* subtle navy depth layer behind the card, echoing the hero background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 30%, rgba(20,33,61,0.35), transparent 40%), radial-gradient(circle at 85% 70%, rgba(245,183,0,0.06), transparent 35%)'
        }}
        aria-hidden
      />

      <div className="max-w-3xl mx-auto px-5 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold leading-tight text-[var(--text-primary)]"
        >
          VAMOS CONSTRUIR
          <br />
          SEU PRÓXIMO EVENTO?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card contact-card mt-8 rounded-2xl p-8 sm:p-10"
        >
          <p className="text-[var(--text-primary)] text-lg font-semibold">Vamos conversar.</p>

          <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm text-[var(--text-secondary)]">
            <span>WhatsApp: (00) 00000-0000</span>
            <span className="text-[var(--border-soft)]">|</span>
            <span>E-mail: contato@novasestruturas.com</span>
            <span className="text-[var(--border-soft)]">|</span>
            <span>Instagram: @novasestruturas</span>
          </div>

          <a href="#hero" className="btn-primary mt-8 inline-block font-semibold tracking-wide">
            ENTRE EM CONTATO
          </a>

          {/*
            Formulário apenas visual, conforme especificação: nenhuma informação
            do cliente é armazenada — sem banco de dados, API, cadastro,
            login, CRM, painel ou armazenamento local.
          */}
        </motion.div>
      </div>
    </section>
  )
}
