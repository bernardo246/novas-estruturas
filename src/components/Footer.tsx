import Image from "next/image";

const SECTION_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/5581999990000" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg-secondary">
      <div className="section-container grid grid-cols-1 gap-10 !py-14 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-border-soft">
              <Image
                src="/images/logo-novas-estruturas.jpg"
                alt="Logo Novas Estruturas"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-sm font-semibold tracking-wide text-white">
              NOVAS ESTRUTURAS
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
            Engenharia e montagem de estruturas para eventos — coberturas,
            palcos e soluções personalizadas.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5">
            {SECTION_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring rounded-md text-sm text-text-secondary transition-colors hover:text-brand-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">
            Contato &amp; redes
          </p>
          <ul className="mt-4 space-y-2.5">
            <li className="text-sm text-text-secondary">
              contato@novasestruturas.com.br
            </li>
            <li className="text-sm text-text-secondary">(81) 99999-0000</li>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-md text-sm text-text-secondary transition-colors hover:text-brand-light"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border-soft">
        <div className="section-container flex flex-col items-center justify-between gap-2 !py-6 text-xs text-text-secondary sm:flex-row">
          <p>© {new Date().getFullYear()} Novas Estruturas. Todos os direitos reservados.</p>
          <p>Estruturas que transformam eventos em experiências.</p>
        </div>
      </div>
    </footer>
  );
}
