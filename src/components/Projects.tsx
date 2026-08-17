"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const SPAN_CLASSES: Record<string, string> = {
  wide: "sm:col-span-2 aspect-[16/9]",
  tall: "sm:row-span-2 aspect-[3/4] sm:aspect-auto sm:h-full",
  normal: "aspect-[4/3]",
};

export default function Projects() {
  return (
    <section id="projetos" className="relative bg-bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-light">
            Portfólio
          </p>
          <h2 className="section-title text-balance mt-4 text-white">
            Projetos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Estruturas reais, em operação — projetadas, montadas e
            acompanhadas pela nossa equipe do início ao fim do evento.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className={`glass-card group relative overflow-hidden rounded-2xl ${
                SPAN_CLASSES[project.span ?? "normal"]
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 transition-transform duration-400 ease-out group-hover:translate-y-0">
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-light">
                  {project.category}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.description}
                </p>
                <span className="mt-2 block text-[11px] text-text-secondary">
                  {project.location}
                </span>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-glow transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
