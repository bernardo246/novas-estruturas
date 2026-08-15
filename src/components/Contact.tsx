'use client'

import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="py-20 bg-[var(--brand-blue)]/[0.06]">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-[var(--brand-blue)]">Entre em contato</h2>
        <p className="mt-2 text-slate-700">Vamos transformar seu próximo evento em uma experiência memorável.</p>

        <div className="mt-6 text-sm text-gray-600 grid sm:grid-cols-2 gap-2">
          <p>WhatsApp: (00) 00000-0000</p>
          <p>E-mail: contato@novasestruturas.com</p>
          <p>Instagram: @novasestruturas</p>
          <p>Telefone: (00) 0000-0000</p>
        </div>
      </div>
    </section>
  )
}
