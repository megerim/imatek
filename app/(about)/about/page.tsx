export const metadata = {
  title: 'Sign In - Open PRO',
  description: 'Page description',
}
import Ekip from '@/components/ekip'
import AboutParagraph from '@/components/about/about'
import Link from 'next/link'

export default function SignIn() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Hakkımızda</h1>
            <AboutParagraph/>
            <br/>
            <Ekip/>
          </div>

         
        </div>
      </div>
    </section>
  )
}