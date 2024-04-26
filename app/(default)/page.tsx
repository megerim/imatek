export const metadata = {
  title: 'İmatek Yapı&Mühendislik',
  description: 'İmatek Yapı&Mühendislik',
}

import Hero from '@/components/hero'
import Welcomer from '@/components/welcomer'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
    <div className="mx-auto">
    <Welcomer />
    </div>
      <Hero />
      <Zigzag />
    </>
  )
}
