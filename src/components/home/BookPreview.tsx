import { BOOK, AMAZON_BOOK_URL } from '@/lib/constants'
import { Badge } from '@/components/ui'
import { ExternalLink } from 'lucide-react'

export function BookPreview() {
  // Placeholder pages - replace with actual interior page images
  const previewPages = [
    { id: 1, alt: 'Weenie discovers a colorful beanie in the snow' },
    { id: 2, alt: 'Weenie meets forest friends in the winter woods' },
    { id: 3, alt: 'Weenie shares warmth with a shivering bunny' },
    { id: 4, alt: 'All the forest animals gather for a cozy celebration' },
  ]

  return (
    <section className="section bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="info" className="mb-4">Sneak Peek</Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            A Story of Warmth & Friendship
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {BOOK.description}
          </p>
        </div>

        {/* Preview Pages */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {previewPages.map((page) => (
            <div
              key={page.id}
              className="aspect-square bg-gradient-to-br from-weenie-cream to-white rounded-softer shadow-cozy overflow-hidden group hover:shadow-cozy-lg transition-shadow"
            >
              {/* TODO: Replace with actual interior page images */}
              <div className="w-full h-full flex items-center justify-center p-4">
                <div className="text-center">
                  <span className="text-4xl block mb-2" role="img" aria-hidden="true">
                    {page.id === 1 ? '❄️' : page.id === 2 ? '🌲' : page.id === 3 ? '🐰' : '🎉'}
                  </span>
                  <p className="text-xs text-foreground/60 leading-tight">{page.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Details & CTA */}
        <div className="bg-weenie-cream rounded-softest p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {BOOK.title}
              </h3>
              <div className="flex flex-wrap gap-3 text-sm text-foreground/70">
                <span>Ages: {BOOK.ageRange}</span>
                <span className="text-weenie-teal">•</span>
                <span>{BOOK.format}</span>
                <span className="text-weenie-teal">•</span>
                <span>{BOOK.pages} pages</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <a
                href={AMAZON_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Buy on Amazon
                <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
              </a>
              <span className="text-sm text-foreground/60 flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" stroke="currentColor" fill="none" />
                </svg>
                Prime Eligible
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
