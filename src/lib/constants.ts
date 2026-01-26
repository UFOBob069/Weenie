/**
 * Site-wide constants for Weenie in a Beanie
 */

export const SITE_NAME = 'Weenie in a Beanie'
export const SITE_DESCRIPTION = 'A cozy winter story kids love. Join Weenie the dachshund on a heartwarming adventure!'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://weenieinabeanie.com'

// Amazon book link
export const AMAZON_BOOK_URL = 'https://www.amazon.com/dp/XXXXXXXXXX' // TODO: Update with actual ASIN

// Book details
export const BOOK = {
  title: 'Weenie in a Beanie',
  subtitle: 'A cozy winter story kids love',
  description: `When the first snowflakes of winter begin to fall, a little dachshund named Weenie discovers the magic of staying warm with a special beanie. Join Weenie on a heartwarming adventure through snowy woods, where friendship and coziness go paw in paw.`,
  ageRange: '2-6 years',
  format: 'Hardcover',
  pages: 32,
  price: 18.99,
  amazonPrice: 18.99,
}

// Beanie product details
export const BEANIE = {
  name: 'Weenie Beanie',
  description: 'A cozy knit beanie featuring an embroidered Weenie dachshund design. Perfect for keeping little (and big!) heads warm during winter adventures.',
  price: 29.99,
  customPrice: 49.99,
  colors: [
    { id: 'red', name: 'Warm Red', hex: '#C94B4B' },
    { id: 'navy', name: 'Cozy Navy', hex: '#2A4365' },
    { id: 'cream', name: 'Winter Cream', hex: '#F5F0E8' },
    { id: 'teal', name: 'Snowy Teal', hex: '#3B9B9B' },
  ],
  sizes: [
    { id: 'child', name: 'Child (2-8 years)', circumference: '18-20"' },
    { id: 'adult', name: 'Adult', circumference: '21-23"' },
  ],
  shipping: {
    standard: { price: 4.99, days: '5-7 business days' },
    express: { price: 12.99, days: '2-3 business days' },
  },
}

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/book', label: 'The Book' },
  { href: '/beanie', label: 'Weenie Beanie' },
  { href: '/about', label: 'About' },
]

export const FOOTER_LINKS = {
  shop: [
    { href: '/book', label: 'The Book' },
    { href: '/beanie', label: 'Weenie Beanie' },
    { href: '/beanie#custom', label: 'Custom Beanie' },
  ],
  about: [
    { href: '/about', label: 'About Weenie' },
    { href: '/about#andre', label: 'Meet Andre' },
    { href: '/faq', label: 'FAQ' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}
