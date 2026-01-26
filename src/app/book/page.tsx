import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, CheckCircle, Star, BookOpen, ArrowRight } from 'lucide-react'
import { BOOK, AMAZON_BOOK_URL } from '@/lib/constants'
import { Badge, Card, CardContent } from '@/components/ui'
import { formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'The Book',
  description: `${BOOK.title} - ${BOOK.description}`,
}

export default function BookPage() {
  const features = [
    { icon: '📖', text: `${BOOK.pages} beautifully illustrated pages` },
    { icon: '👶', text: `Perfect for ages ${BOOK.ageRange}` },
    { icon: '📚', text: `Premium ${BOOK.format.toLowerCase()} binding` },
    { icon: '🎨', text: 'Vibrant, full-color illustrations' },
    { icon: '💝', text: 'Heartwarming story of friendship' },
    { icon: '🌨️', text: 'Cozy winter theme kids love' },
  ]

  const reviews = [
    {
      rating: 5,
      text: "My daughter asks for this book every night. The illustrations are stunning!",
      author: "Sarah M.",
    },
    {
      rating: 5,
      text: "As a dachshund owner, this book melted my heart. A new family favorite.",
      author: "Mike T.",
    },
    {
      rating: 5,
      text: "Perfect gift for any dog-loving kid. The story is sweet and the art is beautiful.",
      author: "Emily R.",
    },
  ]

  return (
    <div className="gradient-winter">
      {/* Hero Section */}
      <section className="section pb-0">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="flex justify-center lg:sticky lg:top-24">
              <div className="relative">
                {/* Shadow */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-weenie-brown/20 rounded-full blur-xl"
                  aria-hidden="true"
                />
                {/* Book cover */}
                <div className="relative bg-white rounded-lg shadow-cozy-lg overflow-hidden w-80 sm:w-96 aspect-[3/4]">
                  {/* TODO: Replace with actual book cover image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-weenie-teal/20 to-weenie-red/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <span className="text-7xl block mb-4" role="img" aria-hidden="true">🐕</span>
                      <p className="font-display font-bold text-3xl text-weenie-red">Weenie</p>
                      <p className="font-display font-bold text-xl text-weenie-yellow">in a</p>
                      <p className="font-display font-bold text-3xl text-weenie-teal">Beanie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div>
              <Badge variant="success" className="mb-4">
                <Star className="w-3 h-3 mr-1 fill-current" aria-hidden="true" />
                Bestselling Children&apos;s Book
              </Badge>

              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                {BOOK.title}
              </h1>

              <p className="text-xl text-weenie-teal font-semibold mb-6">
                {BOOK.subtitle}
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {BOOK.description}
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-soft text-sm font-medium">
                  <BookOpen className="w-4 h-4 mr-2 text-weenie-teal" aria-hidden="true" />
                  {BOOK.format}
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-soft text-sm font-medium">
                  👶 Ages {BOOK.ageRange}
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-soft text-sm font-medium">
                  📖 {BOOK.pages} pages
                </span>
              </div>

              {/* Price & CTA */}
              <Card className="mb-8">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Available on Amazon</p>
                      <p className="font-display text-3xl font-bold text-weenie-red">
                        {formatPrice(BOOK.amazonPrice)}
                      </p>
                    </div>
                    <a
                      href={AMAZON_BOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto"
                    >
                      Buy on Amazon
                      <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Trust badges */}
                  <div className="border-t border-weenie-teal/10 p-4 bg-weenie-cream/50 rounded-b-softer">
                    <div className="flex flex-wrap justify-center gap-6">
                      <span className="inline-flex items-center text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 mr-2 text-weenie-green" aria-hidden="true" />
                        Sold on Amazon
                      </span>
                      <span className="inline-flex items-center text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 mr-2 text-weenie-green" aria-hidden="true" />
                        Prime Eligible
                      </span>
                      <span className="inline-flex items-center text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 mr-2 text-weenie-green" aria-hidden="true" />
                        Free Returns
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-xl" role="img" aria-hidden="true">{feature.icon}</span>
                    <span className="text-sm text-foreground/80">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              What Parents Are Saying
            </h2>
            <p className="text-foreground/70">
              Join thousands of families who&apos;ve made Weenie part of their bedtime routine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} variant="elevated">
                <CardContent className="p-0">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-weenie-yellow fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <p className="text-sm font-semibold text-foreground">— {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <a
              href={AMAZON_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Get Your Copy Today
              <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Beanie Cross-sell */}
      <section className="bg-weenie-teal/10 py-12">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Complete the Experience
              </h3>
              <p className="text-foreground/70">
                Get a matching Weenie Beanie to bring the story to life!
              </p>
            </div>
            <Link href="/beanie" className="btn-secondary whitespace-nowrap">
              Shop Beanies
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
