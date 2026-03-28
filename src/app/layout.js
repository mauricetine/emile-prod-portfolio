import './globals.css'

export const metadata = {
  title: 'Emile Prod - Portfolio Design Graphique',
  description: 'Studio de design graphique créatif - Logos, Flyers, Retouche Photo, Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
