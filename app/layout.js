import { Sora } from 'next/font/google'
import "./globals.css" 
const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ `bg-[#151312] ${sora.className}`}>
      <body>{children}</body>
    </html>
  )
}