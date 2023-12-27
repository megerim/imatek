import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="İmatek">
              <Image src={"/images/logo.webp"} width={64} height={64} alt="Logo" className='w-64 h-32' />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/about"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/projeler"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Projelerimiz
                </Link>
              </li>
              <li>
                <Link href="/contact" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
