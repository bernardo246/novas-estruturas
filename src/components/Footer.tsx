export default function Footer(){
  return (
    <footer className="py-10 bg-[var(--brand-black)] text-white border-t border-[var(--brand-yellow)]/40">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-[var(--brand-yellow)]">Novas Estruturas</div>
          <p className="text-sm text-white/75 mt-2">Soluções profissionais em estruturas e montagem para eventos.</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-2 text-[var(--brand-yellow)]">Seções</div>
          <div className="flex flex-col gap-1">
            <a href="#about" className="hover:text-[var(--brand-yellow)] transition">Sobre</a>
            <a href="#services" className="hover:text-[var(--brand-yellow)] transition">Serviços</a>
            <a href="#projects" className="hover:text-[var(--brand-yellow)] transition">Projetos</a>
            <a href="#contact" className="hover:text-[var(--brand-yellow)] transition">Contato</a>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-2 text-[var(--brand-yellow)]">Redes e contato</div>
          <div className="flex flex-col gap-1 text-white/75">
            <span>WhatsApp</span>
            <span>Instagram</span>
            <span>E-mail</span>
            <span>Telefone</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 mt-6 text-xs text-white/55">
        Novas Estruturas © {new Date().getFullYear()} — Todos os direitos reservados.
      </div>
    </footer>
  )
}
