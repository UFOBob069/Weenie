import Link from 'next/link'
import { SITE_NAME, FOOTER_LINKS, AMAZON_BOOK_URL } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-weenie-navy text-white">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl" role="img" aria-hidden="true">🐕</span>
              <span className="font-display text-xl font-bold text-white">
                Weenie in a Beanie
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              A cozy winter story that warms hearts and celebrates the magic of friendship,
              one snowy adventure at a time.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-weenie-yellow">
              Shop
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={AMAZON_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Buy on Amazon ↗
                </a>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-weenie-yellow">
              About
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-weenie-yellow">
              Legal
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <p className="text-white/40 text-xs text-center md:text-right max-w-md">
              {SITE_NAME} is not affiliated with Amazon. The book is sold exclusively through Amazon.com.
              All product names, logos, and brands are property of their respective owners.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-2 bg-gradient-to-r from-weenie-red via-weenie-orange to-weenie-yellow" />
    </footer>
  )
}
