
"use client";

import { contactLinks } from "@/data/projects";

export default function Contact() {
  return (
    <section id="contato" className="section-container">
      <h2 className="section-title">Entre em contato para realizar o orçamento</h2>
      <p className="mt-6 max-w-3xl text-lg text-textSecondary">
        Estruturas que transformam eventos em experiências.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="focus-ring rounded-xl border border-borderSoft bg-card p-5 text-lg font-semibold transition hover:border-brand hover:shadow-glow"
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}


/*
"use client";

import { motion } from "framer-motion";
import type { SVGProps } from "react";

const EVENT_TYPES = [
  "Show / grande evento",
  "Casa noturna",
  "Corporativo / feira",
  "Casamento / social",
  "Outro",
];

const CHANNELS = [
  { label: "WhatsApp", value: "+55 81 97326-3734", icon: IconWhatsapp },
  { label: "E-mail", value: "contato@novasestruturas.com.br", icon: IconMail },
  { label: "Instagram", value: "@novasestruturas", icon: IconInstagram },
  { label: "Telefone", value: "+55 81 97326-3734", icon: IconPhone },
];

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Formulário 100% visual — nenhum dado é armazenado, enviado a uma API
    // própria ou persistido em cookies/localStorage.
    event.preventDefault();
  };

  return (
    <section id="contato" className="relative">
      <div className="section-container grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-light">
            Fale com a gente
          </p>
          <h2 className="section-title text-balance mt-4 text-white">
            Entre em contato
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
            Vamos transformar seu próximo evento em uma experiência
            memorável.
          </p>

          <ul className="mt-10 space-y-4">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <li key={channel.label} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-soft bg-white/5 text-brand-light">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                      {channel.label}
                    </p>
                    <p className="text-sm text-white">{channel.value}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="glass-card rounded-3xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Nome" name="nome" placeholder="Seu nome completo" />
            <Field
              label="E-mail"
              name="email"
              type="email"
              placeholder="voce@email.com"
            />
            <Field
              label="Telefone"
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
            />
            <div>
              <label
                htmlFor="tipo-evento"
                className="font-mono text-[11px] uppercase tracking-wider text-text-secondary"
              >
                Tipo de evento
              </label>
              <select
                id="tipo-evento"
                name="tipoEvento"
                className="focus-ring mt-2 w-full rounded-xl border border-border-soft bg-card px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-light"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="mensagem"
              className="font-mono text-[11px] uppercase tracking-wider text-text-secondary"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              placeholder="Conte um pouco sobre o seu evento…"
              className="focus-ring mt-2 w-full resize-none rounded-xl border border-border-soft bg-card px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-text-secondary/60 focus:border-brand-light"
            />
          </div>

          <button
            type="submit"
            className="focus-ring animate-glow-pulse mt-6 w-full rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover sm:w-auto"
          >
            Solicitar orçamento
          </button>

          <p className="mt-4 text-xs leading-relaxed text-text-secondary">
            Este formulário é apenas informativo: nenhum dado é armazenado
            neste site. Prefira nos chamar diretamente pelo WhatsApp ou
            e-mail ao lado.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-wider text-text-secondary"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="focus-ring mt-2 w-full rounded-xl border border-border-soft bg-card px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-text-secondary/60 focus:border-brand-light"
      />
    </div>
  );
}

function IconWhatsapp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M4 20l1.3-3.9A7.9 7.9 0 1 1 8.9 19L4 20Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 9.5c0 3.3 2.7 6 6 6" strokeLinecap="round" />
    </svg>
  );
}
function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M6 3h3l1.5 4.5L8 9a12 12 0 0 0 7 7l1.5-2.5L21 15v3a2 2 0 0 1-2 2C10.7 20 4 13.3 4 5a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
*/ // PARA POSSIVEL FEATURE A SER IMPLEMENTADA