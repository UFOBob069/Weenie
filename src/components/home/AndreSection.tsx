import Image from 'next/image'
import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui'

export function AndreSection() {
  return (
    <section className="section bg-weenie-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Andre's Photo */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Photo frame */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-softest overflow-hidden bg-white shadow-cozy-lg rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/andre.jpg"
                    alt="Andre, the real Weenie in a Beanie"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Heart decoration */}
              <div
                className="absolute -bottom-2 -right-2 bg-weenie-red text-white p-3 rounded-full shadow-lg"
                aria-hidden="true"
              >
                <Heart className="w-6 h-6 fill-current" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge variant="warning" className="mb-4">
              <Heart className="w-3 h-3 mr-1" aria-hidden="true" />
              Meet the Inspiration
            </Badge>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              The Real Weenie:{' '}
              <span className="text-weenie-red">Andre</span>
            </h2>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed mb-8">
              <p>
                Every great story starts with inspiration, and ours began with a
                long-haired dachshund named Andre. With his soulful brown eyes and
                wagging tail, Andre has been bringing joy to everyone he meets.
              </p>
              <p>
                When the first snow fell one winter morning, we bundled Andre up
                in a colorful beanie. The way his ears poked out, the happiness in
                his eyes — that&apos;s the moment <em>Weenie in a Beanie</em> was born.
              </p>
              <p>
                This book is our love letter to Andre and to every pup who makes
                winter a little warmer just by being themselves.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-weenie-teal font-semibold hover:text-weenie-teal/80 transition-colors"
            >
              Read the full story
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
