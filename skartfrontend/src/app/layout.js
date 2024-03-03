import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'sKart - Shop by heart',
  description: 'E-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<Navbar />}
        {children}
        {<Footer />}
      </body>
    </html>
  )
}
