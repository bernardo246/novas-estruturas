Novas Estruturas — Scaffold inicial

Arquitetura mínima criada a partir das especificações fornecidas.

Próximos passos recomendados:

1. Entrar na pasta do projeto:
   cd novas-estruturas

2. Instalar dependências principais e 3D/Animações sugeridas:
   npm install
   npm install three @react-three/fiber @react-three/drei framer-motion
   (já instalado: three, @react-three/fiber, @react-three/drei, framer-motion, @types/three)
   npm install -D @types/three tailwindcss postcss autoprefixer eslint

3. Inicializar Tailwind (se ainda não):
   npx tailwindcss init -p  # já existe tailwind.config.cjs e postcss.config.cjs no scaffold

4. Ajustar package.json versões e configurar aliases se quiser (ex.: tsconfig "paths").

5. Executar em dev:
   npm run dev

OBS: O diretório public/images já existe e deve conter as imagens reais do cliente. Não incluir armazenamento/BD no projeto.
