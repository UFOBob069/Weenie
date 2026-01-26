import type { Metadata } from 'next'
import { Shield } from 'lucide-react'
import { Badge } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Weenie in a Beanie website and services.',
}

export default function PrivacyPage() {
  return (
    <div className="gradient-winter min-h-screen">
      <section className="section">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">
              <Shield className="w-3 h-3 mr-1" />
              Legal
            </Badge>
            <h1 className="font-display text-4xl font-extrabold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-foreground/70">
              Last updated: January 2026
            </p>
          </div>

          <div className="bg-white rounded-softest shadow-cozy p-8 md:p-12 prose prose-lg max-w-none">
            <h2 className="font-display text-2xl font-bold text-foreground">Introduction</h2>
            <p className="text-foreground/80">
              Weenie in a Beanie (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information
              when you visit our website or make a purchase.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Information We Collect</h2>
            <p className="text-foreground/80">We collect information you provide directly to us, including:</p>
            <ul className="text-foreground/80 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, shipping address</li>
              <li><strong>Payment Information:</strong> Processed securely through Stripe (we do not store card details)</li>
              <li><strong>Photos:</strong> Images you upload for custom beanie orders</li>
              <li><strong>Order Information:</strong> Products purchased, order history</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">How We Use Your Information</h2>
            <p className="text-foreground/80">We use the information we collect to:</p>
            <ul className="text-foreground/80 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Create custom beanie illustrations from your uploaded photos</li>
              <li>Respond to your questions and requests</li>
              <li>Improve our website and products</li>
              <li>Send promotional emails (with your consent)</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Photo Uploads</h2>
            <p className="text-foreground/80">
              When you upload a photo for a custom beanie order:
            </p>
            <ul className="text-foreground/80 space-y-2">
              <li>Your photo is stored securely and used solely for creating your custom illustration</li>
              <li>We do not share your photos with third parties except our illustration artists</li>
              <li>Photos are retained for 90 days after order completion, then deleted</li>
              <li>You may request early deletion by contacting us</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Cookies and Analytics</h2>
            <p className="text-foreground/80">
              We use cookies and similar technologies to:
            </p>
            <ul className="text-foreground/80 space-y-2">
              <li>Remember your preferences</li>
              <li>Understand how visitors use our website</li>
              <li>Improve site performance</li>
            </ul>
            <p className="text-foreground/80">
              We use privacy-focused analytics (Plausible) that do not track individual users
              or use cookies for advertising purposes.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Third-Party Services</h2>
            <p className="text-foreground/80">We use the following third-party services:</p>
            <ul className="text-foreground/80 space-y-2">
              <li><strong>Stripe:</strong> Payment processing</li>
              <li><strong>Vercel:</strong> Website hosting</li>
              <li><strong>Cloudinary/UploadThing:</strong> Image storage</li>
            </ul>
            <p className="text-foreground/80">
              Each service has its own privacy policy governing their use of your information.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Data Security</h2>
            <p className="text-foreground/80">
              We implement appropriate security measures to protect your personal information.
              However, no internet transmission is completely secure. We cannot guarantee the
              security of information transmitted to our website.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Your Rights</h2>
            <p className="text-foreground/80">You have the right to:</p>
            <ul className="text-foreground/80 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Children&apos;s Privacy</h2>
            <p className="text-foreground/80">
              Our website is not directed to children under 13. We do not knowingly collect
              personal information from children under 13. If you believe we have collected
              information from a child under 13, please contact us.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Changes to This Policy</h2>
            <p className="text-foreground/80">
              We may update this Privacy Policy from time to time. We will notify you of
              any changes by posting the new policy on this page and updating the
              &quot;Last updated&quot; date.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">Contact Us</h2>
            <p className="text-foreground/80">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-foreground/80">
              <strong>Email:</strong> privacy@weenieinabeanie.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
