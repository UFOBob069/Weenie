'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-weenie-cream/95 backdrop-blur-sm border-b border-weenie-teal/10">
      <nav className="container-wide" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label={`${SITE_NAME} - Home`}
          >
            <span className="text-2xl" role="img" aria-hidden="true">🐕</span>
            <span className="font-display text-xl md:text-2xl font-bold text-weenie-red group-hover:text-weenie-red/80 transition-colors">
              Weenie
            </span>
            <span className="hidden sm:inline font-display text-xl md:text-2xl font-bold text-weenie-teal group-hover:text-weenie-teal/80 transition-colors">
              in a Beanie
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-foreground/80 hover:text-weenie-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/beanie"
              className="btn-primary flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              Shop Beanie
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-weenie-red transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            mobileMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-weenie-teal/10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-lg text-foreground/80 hover:text-weenie-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/beanie"
              className="btn-primary text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingBag className="w-4 h-4 mr-2 inline" aria-hidden="true" />
              Shop Beanie
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
