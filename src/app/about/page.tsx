import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, BookOpen, ArrowRight } from 'lucide-react'
import { Badge, Card, CardContent } from '@/components/ui'
import { AMAZON_BOOK_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Andre, the real dachshund who inspired Weenie in a Beanie, and learn about the story behind this cozy children\'s book.',
}

export default function AboutPage() {
  return (
    <div className="gradient-winter">
      {/* Hero Section */}
      <section className="section pb-0">
        <div className="container-narrow text-center">
          <Badge variant="warning" className="mb-4">
            <Heart className="w-3 h-3 mr-1 fill-current" />
            Our Story
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            The Heart Behind{' '}
            <span className="text-weenie-red">Weenie</span>{' '}
            <span className="text-weenie-teal">in a Beanie</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Every great story starts with inspiration. Ours began with a long-haired
            dachshund named Andre and a colorful beanie on a snowy winter day.
          </p>
        </div>
      </section>

      {/* Andre Section */}
      <section id="andre" className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Photo frame */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-softest overflow-hidden bg-white shadow-cozy-lg rotate-2 hover:rotate-0 transition-transform duration-300">
                  {/* TODO: Replace with actual photo of Andre */}
                  <div className="w-full h-full bg-gradient-to-br from-weenie-brown/30 to-weenie-orange/20 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-8xl block mb-4" role="img" aria-hidden="true">🐕</span>
                      <p className="font-display font-bold text-weenie-brown text-2xl">Andre</p>
                      <p className="text-weenie-brown/60">The Real Weenie</p>
                    </div>
                  </div>
                </div>
                {/* Heart decoration */}
                <div className="absolute -bottom-4 -right-4 bg-weenie-red text-white p-4 rounded-full shadow-lg">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Meet Andre
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Andre is a long-haired miniature dachshund with the biggest personality
                  you&apos;ve ever seen packed into such a small, wiggly body. With his
                  soulful brown eyes and perpetually wagging tail, he&apos;s been stealing
                  hearts since the day he came into our lives.
                </p>
                <p>
                  One crisp winter morning, the first real snow of the season began to fall.
                  Andre, who had never seen snow before, was hesitant to go outside. That&apos;s
                  when we bundled him up in a colorful striped beanie to keep his little ears warm.
                </p>
                <p>
                  The moment he stepped into the snow, everything changed. His curiosity overcame
                  his hesitation, and he bounded through the white powder with pure joy. His ears
                  poking out of the beanie, snowflakes catching on his whiskers — it was magic.
                </p>
                <p className="font-semibold text-foreground">
                  That&apos;s the moment <em>Weenie in a Beanie</em> was born.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Why We Wrote This Book
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed text-left">
              <p>
                We wanted to capture the pure, unfiltered joy that Andre showed us that
                snowy day and share it with children everywhere. There&apos;s something
                magical about seeing the world through a dog&apos;s eyes — everything is
                an adventure, every new experience is exciting, and warmth can be found
                in the simplest things.
              </p>
              <p>
                <em>Weenie in a Beanie</em> is more than just a cute story about a dog
                in a hat. It&apos;s about facing new experiences with courage, finding
                warmth in unexpected places, and the special bond between pets and
                their families.
              </p>
              <p>
                We hope that when you read this book to your little ones, they&apos;ll
                feel the same cozy warmth that Andre brings to our lives every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-weenie-cream">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            What We Believe In
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <span className="text-4xl block mb-4" role="img" aria-hidden="true">🐾</span>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Pet Love
                </h3>
                <p className="text-foreground/70">
                  Our pets teach us about unconditional love, loyalty, and living in the moment.
                  They deserve to be celebrated.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <span className="text-4xl block mb-4" role="img" aria-hidden="true">📚</span>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Quality Stories
                </h3>
                <p className="text-foreground/70">
                  Children deserve beautiful books with meaningful messages that they&apos;ll
                  want to read again and again.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <span className="text-4xl block mb-4" role="img" aria-hidden="true">🧣</span>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Cozy Moments
                </h3>
                <p className="text-foreground/70">
                  The best memories are made in cozy moments — reading together, staying warm,
                  and sharing stories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-weenie-navy text-white">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Meet Weenie?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Join thousands of families who&apos;ve made Weenie part of their bedtime routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AMAZON_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-weenie-yellow text-weenie-navy font-semibold rounded-soft hover:bg-weenie-yellow/90 transition-colors"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Get the Book
            </a>
            <Link
              href="/beanie"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-soft hover:bg-white/10 transition-colors"
            >
              Shop Beanies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
