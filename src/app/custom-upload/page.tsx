import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CustomUploadFlow } from '@/components/custom-upload/CustomUploadFlow'

export const metadata: Metadata = {
  title: 'Custom Beanie Upload',
  description: 'Upload a photo of your dog and we\'ll turn it into a Weenie-style illustration for your custom beanie.',
}

export default function CustomUploadPage() {
  return (
    <div className="gradient-winter min-h-screen">
      <section className="section">
        <div className="container-narrow">
          <Link
            href="/beanie"
            className="inline-flex items-center text-weenie-teal hover:text-weenie-teal/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Beanie
          </Link>

          <CustomUploadFlow />
        </div>
      </section>
    </div>
  )
}
