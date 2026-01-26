import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { Badge } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Weenie in a Beanie website and services.',
}

export default function TermsPage() {
  return (
    <div className="gradient-winter min-h-screen">
      <section className="section">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">
              <FileText className="w-3 h-3 mr-1" />
              Legal
            </Badge>
            <h1 className="font-display text-4xl font-extrabold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-foreground/70">
              Last updated: January 2026
            </p>
          </div>

          <div className="bg-white rounded-softest shadow-cozy p-8 md:p-12 prose prose-lg max-w-none">
            <h2 className="font-display text-2xl font-bold text-foreground">Agreement to Terms</h2>
            <p className="text-foreground/80">
              By accessing or using the Weenie in a Beanie website (weenieinabeanie.com),
              you agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our website.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Products and Services</h2>
            <h3 className="font-display text-xl font-bold text-foreground mt-4">Book Sales</h3>
            <p className="text-foreground/80">
              The Weenie in a Beanie book is sold exclusively through Amazon.com. We are
              not responsible for Amazon&apos;s fulfillment, shipping, or return policies.
              Please refer to Amazon&apos;s terms of service for book purchases.
            </p>

            <h3 className="font-display text-xl font-bold text-foreground mt-4">Beanie Products</h3>
            <p className="text-foreground/80">
              Beanies are sold directly through our website. Prices are listed in US dollars
              and are subject to change without notice. We reserve the right to limit
              quantities or refuse orders at our discretion.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Custom Beanie Orders</h2>
            <p className="text-foreground/80">By ordering a custom beanie, you:</p>
            <ul className="text-foreground/80 space-y-2">
              <li>Grant us permission to use your uploaded photo solely for creating your custom illustration</li>
              <li>Confirm you own the rights to the photo or have permission to use it</li>
              <li>Understand that custom orders are final sale and non-refundable</li>
              <li>Agree that the final illustration is an artistic interpretation and may differ from the photo</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Intellectual Property</h2>
            <p className="text-foreground/80">
              All content on this website, including text, images, logos, illustrations,
              and the &quot;Weenie in a Beanie&quot; brand, is our intellectual property or
              licensed to us. You may not reproduce, distribute, or create derivative
              works without our written permission.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">User Conduct</h2>
            <p className="text-foreground/80">You agree not to:</p>
            <ul className="text-foreground/80 space-y-2">
              <li>Use our website for any unlawful purpose</li>
              <li>Upload harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our website</li>
              <li>Upload photos that you do not have the right to use</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Shipping and Delivery</h2>
            <p className="text-foreground/80">
              We ship to the United States only. Shipping times are estimates and not
              guaranteed. We are not responsible for delays caused by carriers, customs,
              or events outside our control.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Returns and Refunds</h2>
            <ul className="text-foreground/80 space-y-2">
              <li><strong>Standard Beanies:</strong> May be returned within 30 days if unworn and in original condition. Refund will be issued to the original payment method.</li>
              <li><strong>Custom Beanies:</strong> Are final sale due to their personalized nature. We will replace defective items at no cost.</li>
              <li><strong>Damaged Items:</strong> Contact us within 7 days of delivery with photos. We will replace damaged items at no cost.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Limitation of Liability</h2>
            <p className="text-foreground/80">
              To the fullest extent permitted by law, Weenie in a Beanie shall not be
              liable for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of our website or products.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Disclaimer</h2>
            <p className="text-foreground/80">
              Our website and products are provided &quot;as is&quot; without warranties of any kind,
              either express or implied. We do not guarantee that our website will be
              uninterrupted, secure, or error-free.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Amazon Disclaimer</h2>
            <p className="text-foreground/80">
              Weenie in a Beanie is not affiliated with, endorsed by, or sponsored by
              Amazon.com. The book is sold through Amazon as an independent seller.
              All Amazon-related trademarks are property of Amazon.com, Inc.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Governing Law</h2>
            <p className="text-foreground/80">
              These Terms shall be governed by and construed in accordance with the laws
              of the State of California, United States, without regard to its conflict
              of law provisions.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Changes to Terms</h2>
            <p className="text-foreground/80">
              We reserve the right to modify these Terms at any time. Changes will be
              effective immediately upon posting to our website. Your continued use of
              our website after changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Contact</h2>
            <p className="text-foreground/80">
              For questions about these Terms, please contact us at:
            </p>
            <p className="text-foreground/80">
              <strong>Email:</strong> legal@weenieinabeanie.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
