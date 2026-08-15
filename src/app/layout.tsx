import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://novasestruturas.com.br'),
  title: 'Novas Estruturas | Estruturas para Eventos',
  description: 'Novas Estruturas — soluções profissionais em estruturas e montagem para eventos.',
  openGraph: {
    title: 'Novas Estruturas | Estruturas para Eventos',
    description: 'Novas Estruturas — soluções profissionais em estruturas e montagem para eventos.',
    images: ['/images/10.jpg']
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
