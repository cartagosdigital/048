import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '048 Higienização de Estofados | Grande Florianópolis',
  description:
    'Higienização profissional de sofás, poltronas e colchões. Atendemos Kobrasol e toda a Grande Florianópolis. Resultados visíveis, produtos certificados.',
  keywords: 'higienização estofados florianópolis, limpeza sofá kobrasol, lavagem colchão são josé',
  openGraph: {
    title: '048 Higienização de Estofados',
    description: 'Seu estofado renovado, no conforto da sua casa.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
