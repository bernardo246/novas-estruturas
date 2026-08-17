"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="font-mono text-xs text-text-secondary">
        carregando estrutura 3D…
      </span>
    </div>
  ),
});

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 18, mass: 0.4 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight || 1), 1);
      setScrollProgress(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(px);
    mouseY.set(py);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-navy-radial" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/images/hero-arco-fogo-publico.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />

      <div className="section-container relative grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-12 !py-0 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.25em] text-brand-light uppercase">
            Engenharia &amp; montagem de estruturas para eventos
          </p>
          <h1 className="section-title text-balance mt-4 text-white">
            Novas Estruturas
          </h1>
          <p className="mt-4 text-lg text-brand-light md:text-xl">
            Estruturas que transformam eventos em experiências.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
            Projetamos, montamos e operamos estruturas metálicas, coberturas
            e palcos para eventos de grande porte — unindo engenharia
            rigorosa a um resultado visual marcante, do rooftop à orla.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="focus-ring animate-glow-pulse rounded-xl bg-brand px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Entre em contato
            </a>
            <a
              href="#projetos"
              className="focus-ring rounded-xl border border-border-soft bg-white/5 px-6 py-3 text-center text-sm font-medium text-text-secondary transition-colors hover:border-brand-light hover:text-brand-light"
            >
              Conheça nossos projetos
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border-soft pt-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                Estruturas entregues
              </dt>
              <dd className="mt-1 font-display text-2xl text-white">120+</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                Público atendido
              </dt>
              <dd className="mt-1 font-display text-2xl text-white">50k+</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                Anos de operação
              </dt>
              <dd className="mt-1 font-display text-2xl text-white">10+</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md [perspective:1000px]"
        >
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute -bottom-8 -right-4 h-48 w-48 rounded-full bg-brand-glow/20 blur-3xl" />

          <motion.div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="glass-card animate-float relative h-full w-full overflow-hidden rounded-3xl shadow-glow"
          >
            <div className="bg-grid-pattern absolute inset-0 opacity-30" />
            <Scene3D scrollProgress={scrollProgress} />
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border-soft p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-brand-light"
          />
        </div>
      </div>
    </section>
  );
}
