# Novas Estruturas — Site Institucional

Site institucional estático em Next.js/React/TypeScript para a Novas
Estruturas, empresa especializada em montagem de estruturas para eventos.

## Stack

- Next.js 16 (App Router, geração estática)
- React 19 + TypeScript
- Tailwind CSS v4
- Three.js + React Three Fiber + Drei (`Scene3D.tsx`)
- Framer Motion (animações de scroll e tilt 3D)
- Fontes self-hosted via `@fontsource` (Space Grotesk, Inter, JetBrains Mono)

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run lint
npm run build
npm run start
```

## Estrutura

```text
src/
├── app/
│   ├── layout.tsx      # metadata, SEO, JSON-LD, fontes
│   ├── page.tsx        # composição das seções
│   └── globals.css     # tokens de design (azul-marinho + preto)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx         # tilt 3D reativo ao mouse + Scene3D
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Scene3D.tsx      # estrutura metálica em Three.js/R3F
│   ├── Contact.tsx      # formulário 100% visual, sem armazenamento
│   └── Footer.tsx
└── data/
    └── projects.ts      # portfólio estático (sem CMS)
public/images/            # imagens reais fornecidas pelo cliente
```

## Paleta de cores

Azul-marinho + preto (`--bg`, `--brand`, `--brand-light`, `--brand-glow`),
sem verde, laranja ou dourado como acento — conforme especificação v2.
