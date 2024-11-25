import { Sora } from 'next/font/google'

import "./globals.css" 
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ `bg-[#151312] ${sora.className}`}>

      <body className='bg-[#151312]'>
      <Navbar/>
        
        {children}
<Footer/>
      </body>
    </html>
  )
}