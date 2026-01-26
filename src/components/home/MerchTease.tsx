import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { BEANIE } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'
import { Badge } from '@/components/ui'

export function MerchTease() {
  return (
    <section className="section bg-weenie-navy text-white overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-weenie-yellow/20 text-weenie-yellow mb-4">
              <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
              New Merch
            </Badge>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get Your Own{' '}
              <span className="text-weenie-yellow">Weenie Beanie</span>
            </h2>

            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              {BEANIE.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {BEANIE.colors.map((color) => (
                <div key={color.id} className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full border-2 border-white/30"
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                  <span className="text-sm text-white/70">{color.name}</span>
                </div>
              ))}
            </div>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-display text-3xl font-bold text-weenie-yellow">
                {formatPrice(BEANIE.price)}
              </span>
              <span className="text-white/60">Standard</span>
              <span className="text-white/40">|</span>
              <span className="font-display text-2xl font-bold text-weenie-orange">
                {formatPrice(BEANIE.customPrice)}
              </span>
              <span className="text-white/60">Custom</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/beanie"
                className="inline-flex items-center justify-center px-6 py-3 bg-weenie-yellow text-weenie-navy font-semibold rounded-soft transition-all hover:bg-weenie-yellow/90 hover:-translate-y-0.5"
              >
                Shop Beanies
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
              <Link
                href="/beanie#custom"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-soft transition-all hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
                Customize Your Own
              </Link>
            </div>
          </div>

          {/* Beanie Visual */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute inset-0 bg-weenie-yellow/20 rounded-full blur-3xl"
                aria-hidden="true"
              />

              {/* Beanie mockup placeholder */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-weenie-red/90 rounded-full flex items-center justify-center shadow-2xl">
                {/* TODO: Replace with actual beanie product image */}
                <div className="text-center">
                  <span className="text-8xl block mb-2" role="img" aria-hidden="true">🧶</span>
                  <p className="font-display font-bold text-white text-xl">Weenie Beanie</p>
                </div>

                {/* Decorative pom pom */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-weenie-orange rounded-full shadow-lg"
                  aria-hidden="true"
                />
              </div>

              {/* Customization callout */}
              <div className="absolute -bottom-4 -right-4 bg-white text-weenie-navy rounded-soft p-4 shadow-cozy-lg max-w-xs">
                <p className="font-semibold text-sm">
                  <Sparkles className="w-4 h-4 inline mr-1 text-weenie-orange" aria-hidden="true" />
                  Upload a photo of your dog — we&apos;ll turn it into a Weenie!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
