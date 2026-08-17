"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PILLARS = [
  {
    label: "Engenharia própria",
    text: "Projetos estruturais calculados e validados antes de cada montagem, com foco em segurança e cargas reais de vento e público.",
  },
  {
    label: "Equipe de campo",
    text: "Montagem executada por equipe própria treinada, com acompanhamento técnico do início ao desmonte do evento.",
  },
  {
    label: "Materiais de ponta",
    text: "Estruturas em aço e alumínio, lonas técnicas e acabamentos pensados para resistir a diferentes condições climáticas.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="sobre" ref={ref} className="relative bg-bg-secondary">
      <div className="section-container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border-soft"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-[-6%]">
            <Image
              src="/images/about-montagem-rooftop-dia.jpg"
              alt="Equipe da Novas Estruturas realizando montagem técnica em rooftop à beira-mar, em Recife"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/70 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-light">
            Sobre a Novas Estruturas
          </p>
          <h2 className="section-title text-balance mt-4 text-white">
            Estrutura sólida por trás de cada grande momento
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-secondary">
            A Novas Estruturas é especializada em montagem de estruturas para
            eventos — de arcos monumentais e coberturas de rooftop a palcos e
            ambientações completas. Atuamos do projeto à operação, entregando
            estruturas seguras e visualmente marcantes para públicos de
            todos os portes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Cada projeto nasce da combinação entre engenharia estrutural e
            direção visual, para que a estrutura não seja apenas suporte —
            seja parte da experiência do evento.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <motion.li
                key={pillar.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-2xl p-4"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-light">
                  {pillar.label}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {pillar.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
