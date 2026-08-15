'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div className="text-lg font-bold text-[var(--text-primary)]">Novas Estruturas</div>

        <nav aria-label="Main navigation" className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6">
            <li><a href="#about" className="hover:text-[var(--brand-yellow)] transition">Sobre</a></li>
            <li><a href="#services" className="hover:text-[var(--brand-yellow)] transition">Serviços</a></li>
            <li><a href="#projects" className="hover:text-[var(--brand-yellow)] transition">Projetos</a></li>
            <li><a href="#contact" className="hover:text-[var(--brand-yellow)] transition">Contato</a></li>
          </ul>

          <a className="ml-4 px-4 py-2 btn-primary hidden md:inline-block font-semibold" href="#contact">Contato</a>

          {/* Mobile menu button */}
          <button
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded bg-[var(--brand-navy)]/10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="md:hidden w-full bg-[rgba(5,5,5,0.95)] shadow border-t" style={{borderColor: 'var(--border-soft)'}}>
            <div className="max-w-6xl mx-auto p-4">
              <ul className="flex flex-col gap-3">
                <li><a href="#about" onClick={() => setOpen(false)} className="block py-2">Sobre</a></li>
                <li><a href="#services" onClick={() => setOpen(false)} className="block py-2">Serviços</a></li>
                <li><a href="#projects" onClick={() => setOpen(false)} className="block py-2">Projetos</a></li>
                <li><a href="#contact" onClick={() => setOpen(false)} className="block py-2">Contato</a></li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
