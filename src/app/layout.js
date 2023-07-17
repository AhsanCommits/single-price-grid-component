import './globals.css'
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Mentor | Single Price Grid Component',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
