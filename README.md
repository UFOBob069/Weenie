# Weenie in a Beanie Website

A joyful marketing website for the children's book "Weenie in a Beanie" and custom Weenie Beanie merchandise.

## Features

- **Book Landing Page**: Showcases the book with Amazon purchase link
- **Beanie Shop**: E-commerce for Weenie Beanie products
- **Custom Beanie Upload**: Users can upload photos of their dogs for custom embroidered illustrations
- **Responsive Design**: Mobile-first, cozy winter aesthetic
- **Stripe Integration**: Secure checkout (stubbed, ready for implementation)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom Weenie theme
- **Forms**: React Hook Form + Zod validation
- **Payments**: Stripe (stubbed)
- **Image Upload**: Cloudinary/UploadThing (stubbed)
- **Hosting**: Vercel

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your values
3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (checkout, upload, webhook)
│   ├── about/             # About page
│   ├── beanie/            # Beanie product page
│   ├── book/              # Book detail page
│   ├── custom-upload/     # Custom upload flow
│   ├── faq/               # FAQ page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── beanie/           # Beanie-specific components
│   ├── custom-upload/    # Upload flow components
│   ├── home/             # Home page sections
│   ├── layout/           # Header, Footer, Navigation
│   └── ui/               # Reusable UI components
└── lib/                   # Utilities and integrations
    ├── constants.ts      # Site-wide constants
    ├── stripe.ts         # Stripe integration (stubbed)
    ├── upload.ts         # Image upload (stubbed)
    └── utils.ts          # Helper functions
```

## Configuration

### Environment Variables

See `.env.example` for required environment variables:

- `NEXT_PUBLIC_SITE_URL`: Your production URL
- `STRIPE_SECRET_KEY`: Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook signing secret
- `CLOUDINARY_*`: Cloudinary credentials for image uploads

### Brand Colors

The site uses a custom color palette inspired by the book:

- **Weenie Red**: `#C94B4B` - Primary CTA, warmth
- **Weenie Teal**: `#3B9B9B` - Secondary, trust
- **Weenie Cream**: `#FFF8F0` - Background, warmth
- **Weenie Yellow**: `#E5B84C` - Accent, joy
- **Weenie Navy**: `#2A4365` - Footer, trust

## Integrations

### Stripe (Payments)

The checkout flow is stubbed and ready for Stripe integration. See `src/lib/stripe.ts` for implementation details.

To enable:
1. Install Stripe: `npm install stripe @stripe/stripe-js`
2. Uncomment the TODO sections in `src/lib/stripe.ts`
3. Add your Stripe keys to `.env.local`

### Image Upload

Photo uploads are stubbed and ready for Cloudinary or UploadThing. See `src/lib/upload.ts` for implementation details.

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## License

All rights reserved. "Weenie in a Beanie" is a registered trademark.
