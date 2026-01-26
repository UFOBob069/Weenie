import type { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, BookOpen, ShoppingBag, Truck, Camera, Mail } from 'lucide-react'
import { Badge, Card, CardContent } from '@/components/ui'
import { AMAZON_BOOK_URL, BEANIE } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Weenie in a Beanie book and Weenie Beanie merchandise.',
}

const faqs = [
  {
    category: 'The Book',
    icon: BookOpen,
    questions: [
      {
        q: 'Where can I buy Weenie in a Beanie?',
        a: 'Weenie in a Beanie is available exclusively on Amazon. We chose Amazon to ensure fast, reliable shipping and easy returns for our customers.',
      },
      {
        q: 'What age range is the book for?',
        a: 'The book is perfect for children ages 2-6 years old. The simple, heartwarming story and colorful illustrations appeal to toddlers, while the themes of friendship and adventure engage older kids too.',
      },
      {
        q: 'Is the book available as an ebook?',
        a: 'Currently, Weenie in a Beanie is only available as a hardcover book. We believe the physical experience of turning pages and seeing the vibrant illustrations is part of the magic!',
      },
      {
        q: 'Can I get a signed copy?',
        a: 'We occasionally do signed copy events. Follow us on social media or sign up for our newsletter to be notified of upcoming opportunities.',
      },
    ],
  },
  {
    category: 'Weenie Beanie',
    icon: ShoppingBag,
    questions: [
      {
        q: 'What sizes are available?',
        a: `We offer two sizes: Child (${BEANIE.sizes[0].circumference}, ages 2-8) and Adult (${BEANIE.sizes[1].circumference}). The knit material has some stretch for a comfortable fit.`,
      },
      {
        q: 'What colors do you offer?',
        a: `Our beanies come in ${BEANIE.colors.length} cozy colors: ${BEANIE.colors.map(c => c.name).join(', ')}. Each features an adorable embroidered Weenie design.`,
      },
      {
        q: 'How much does a beanie cost?',
        a: `Standard beanies are ${formatPrice(BEANIE.price)}. Custom beanies with your own dog's illustration are ${formatPrice(BEANIE.customPrice)}.`,
      },
      {
        q: 'What material is the beanie made of?',
        a: 'Our beanies are made from a soft, warm acrylic knit blend. They\'re machine washable on a gentle cycle and designed to keep heads cozy all winter long.',
      },
    ],
  },
  {
    category: 'Custom Beanies',
    icon: Camera,
    questions: [
      {
        q: 'How does the custom beanie process work?',
        a: 'Upload a clear photo of your dog, select your beanie color and size, and checkout. Our artists will transform your photo into a Weenie-style illustration. You\'ll receive a preview via email before we embroider and ship your custom beanie.',
      },
      {
        q: 'What kind of photo should I upload?',
        a: 'For best results, use a clear, well-lit photo where your dog\'s face is visible and in focus. A solid or simple background helps our artists capture your pup\'s unique features.',
      },
      {
        q: 'How long does a custom beanie take?',
        a: 'Custom beanies typically take 2-3 weeks from order to delivery. This includes illustration time, approval, embroidery, and shipping.',
      },
      {
        q: 'Can I request changes to the illustration?',
        a: 'Yes! When you receive your preview email, you can request one round of revisions at no additional cost. We want you to love your custom Weenie.',
      },
    ],
  },
  {
    category: 'Shipping & Returns',
    icon: Truck,
    questions: [
      {
        q: 'How much is shipping?',
        a: `Standard shipping is ${formatPrice(BEANIE.shipping.standard.price)} (${BEANIE.shipping.standard.days}). Express shipping is ${formatPrice(BEANIE.shipping.express.price)} (${BEANIE.shipping.express.days}). Free standard shipping on orders over $50!`,
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently, we ship to the United States only. We\'re working on expanding our shipping options — sign up for our newsletter to be notified when international shipping becomes available.',
      },
      {
        q: 'What is your return policy?',
        a: 'Standard beanies can be returned within 30 days for a full refund if unworn and in original condition. Custom beanies are final sale due to their personalized nature, but we\'ll work with you if there\'s an issue with the illustration.',
      },
      {
        q: 'What if my beanie arrives damaged?',
        a: 'Contact us within 7 days of delivery with photos of the damage, and we\'ll send a replacement at no cost.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="gradient-winter min-h-screen">
      {/* Header */}
      <section className="section pb-0">
        <div className="container-narrow text-center">
          <Badge variant="info" className="mb-4">
            <HelpCircle className="w-3 h-3 mr-1" />
            Help Center
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-foreground/70">
            Everything you need to know about our book and beanies.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section">
        <div className="container-wide">
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-weenie-teal/10 rounded-soft flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-weenie-teal" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {section.category}
                  </h2>
                </div>

                <div className="grid gap-4">
                  {section.questions.map((faq, index) => (
                    <Card key={index} variant="bordered">
                      <CardContent>
                        <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                        <p className="text-foreground/70">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-narrow text-center">
          <Mail className="w-12 h-12 text-weenie-teal mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-foreground/70 mb-6">
            We&apos;re here to help! Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:hello@weenieinabeanie.com"
            className="btn-primary"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </a>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-weenie-cream">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href={AMAZON_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-weenie-teal font-semibold hover:text-weenie-teal/80 transition-colors"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Buy the Book on Amazon
            </a>
            <Link
              href="/beanie"
              className="inline-flex items-center text-weenie-teal font-semibold hover:text-weenie-teal/80 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Beanies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
