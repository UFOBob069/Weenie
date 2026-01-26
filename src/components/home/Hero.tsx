import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, BookOpen } from 'lucide-react'
import { AMAZON_BOOK_URL, BOOK } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-winter">
      {/* Decorative snowflakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="snowflake text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              '--delay': `${Math.random() * 10}s`,
              '--duration': `${8 + Math.random() * 8}s`,
            } as React.CSSProperties}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="container-wide section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-weenie-red">Weenie</span>{' '}
              <span className="text-weenie-yellow">in a</span>{' '}
              <span className="text-weenie-teal">Beanie</span>
            </h1>

            <p className="text-xl sm:text-2xl text-foreground/80 font-display font-semibold mb-4">
              A cozy winter story kids love.
            </p>

            <p className="text-lg text-foreground/70 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {BOOK.description.slice(0, 150)}...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={AMAZON_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
                Buy the Book on Amazon
              </a>
              <Link href="/beanie" className="btn-secondary text-lg">
                <ShoppingBag className="w-5 h-5 mr-2" aria-hidden="true" />
                Get a Weenie Beanie
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <span className="inline-flex items-center text-sm text-foreground/60">
                <span className="mr-2" aria-hidden="true">✓</span>
                Ages {BOOK.ageRange}
              </span>
              <span className="inline-flex items-center text-sm text-foreground/60">
                <span className="mr-2" aria-hidden="true">✓</span>
                {BOOK.format}
              </span>
              <span className="inline-flex items-center text-sm text-foreground/60">
                <span className="mr-2" aria-hidden="true">✓</span>
                Prime Eligible
              </span>
            </div>
          </div>

          {/* Book Cover Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-96 animate-float">
              {/* Shadow */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-weenie-brown/20 rounded-full blur-xl"
                aria-hidden="true"
              />
              {/* Book cover placeholder */}
              <div className="relative bg-white rounded-lg shadow-cozy-lg overflow-hidden aspect-[3/4]">
                {/* TODO: Replace with actual book cover image */}
                <div className="absolute inset-0 bg-gradient-to-br from-weenie-teal/20 to-weenie-red/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-6xl block mb-4" role="img" aria-hidden="true">🐕</span>
                    <p className="font-display font-bold text-2xl text-weenie-red">Weenie</p>
                    <p className="font-display font-bold text-lg text-weenie-yellow">in a</p>
                    <p className="font-display font-bold text-2xl text-weenie-teal">Beanie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
