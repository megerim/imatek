import {Providers} from "./providers";
import './css/style.css'
import 'leaflet/dist/leaflet.css';


import { Inter, Architects_Daughter } from 'next/font/google'
import { FloatingNavDemo } from "@/components/floatingnav";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'İmatek Yapı ve Mühendislik',
  description: 'İmatek Yapı ve Mühendislik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <Providers>
          <FloatingNavDemo />
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
        </Providers>
      </body>
    </html>
  )
}
 