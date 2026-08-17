"use client";

import { motion } from "framer-motion";
import type { SVGProps } from "react";

type Service = {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
};

const SERVICES: Service[] = [
  {
    title: "Montagem de estruturas",
    description:
      "Execução completa de montagem e desmontagem em campo, com equipe própria e cronograma alinhado ao evento.",
    icon: IconTruss,
  },
  {
    title: "Estruturas para eventos",
    description:
      "Arcos, treliças e módulos metálicos dimensionados para grandes públicos, shows e ativações.",
    icon: IconArch,
  },
  {
    title: "Coberturas",
    description:
      "Coberturas técnicas em lona e estrutura metálica, preparadas para diferentes condições climáticas.",
    icon: IconRoof,
  },
  {
    title: "Palcos",
    description:
      "Palcos modulares com capacidade de carga calculada para som, luz, telões e artistas.",
    icon: IconStage,
  },
  {
    title: "Estruturas corporativas",
    description:
      "Estandes, backdrops e ambientações estruturais para feiras, congressos e ativações de marca.",
    icon: IconCorporate,
  },
  {
    title: "Soluções personalizadas",
    description:
      "Projetos sob medida, do conceito à engenharia, para peças estruturais únicas e esculturais.",
    icon: IconCustom,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-light">
            O que fazemos
          </p>
          <h2 className="section-title text-balance mt-4 text-white">
            Serviços
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Da fundação à iluminação, cuidamos de cada etapa da estrutura do
            seu evento.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card group rounded-2xl p-6 transition-colors duration-300 hover:border-brand-light hover:shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-soft bg-white/5 text-brand-light transition-colors group-hover:border-brand-light">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IconTruss(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M3 18h18M4 18V9l4-4 4 4-4 4M12 5l4 4 4-4M20 9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconArch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M4 20V10a8 8 0 0 1 16 0v10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20h4M16 20h4" strokeLinecap="round" />
    </svg>
  );
}
function IconRoof(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M3 11 12 4l9 7M5 10v9h14v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconStage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <path d="M7 14V8a5 5 0 0 1 10 0v6" strokeLinecap="round" />
    </svg>
  );
}
function IconCorporate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="4" y="4" width="7" height="7" rx="0.5" />
      <rect x="13" y="4" width="7" height="7" rx="0.5" />
      <rect x="4" y="13" width="7" height="7" rx="0.5" />
      <rect x="13" y="13" width="7" height="7" rx="0.5" />
    </svg>
  );
}
function IconCustom(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.5M12 18.5V21M21 12h-2.5M5.5 12H3M18 6l-1.8 1.8M7.8 16.2 6 18M18 18l-1.8-1.8M7.8 7.8 6 6" strokeLinecap="round" />
    </svg>
  );
}
