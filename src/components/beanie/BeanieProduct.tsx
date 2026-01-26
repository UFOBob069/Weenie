'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Truck, Shield, Check, Minus, Plus, Upload } from 'lucide-react'
import { BEANIE } from '@/lib/constants'
import { formatPrice, cn } from '@/lib/utils'
import { Badge, Card, CardContent } from '@/components/ui'
import { CustomUploadModal } from './CustomUploadModal'

export function BeanieProduct() {
  const [selectedColor, setSelectedColor] = useState(BEANIE.colors[0])
  const [selectedSize, setSelectedSize] = useState(BEANIE.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [isCustom, setIsCustom] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const currentPrice = isCustom ? BEANIE.customPrice : BEANIE.price
  const totalPrice = currentPrice * quantity

  const handleAddToCart = () => {
    if (isCustom && !uploadedFile) {
      setShowUploadModal(true)
      return
    }
    // TODO: Integrate with Stripe checkout
    console.log('Add to cart:', {
      product: 'beanie',
      color: selectedColor.id,
      size: selectedSize.id,
      quantity,
      isCustom,
      uploadedFile: uploadedFile?.name,
      totalPrice,
    })
    alert('Checkout coming soon! This will redirect to Stripe.')
  }

  const handleUploadComplete = (file: File) => {
    setUploadedFile(file)
    setShowUploadModal(false)
  }

  return (
    <div className="gradient-winter min-h-screen">
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-softest shadow-cozy overflow-hidden">
                {/* TODO: Replace with actual product images */}
                <div
                  className="w-full h-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${selectedColor.hex}20` }}
                >
                  <div className="text-center">
                    <div
                      className="w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg transition-colors duration-300"
                      style={{ backgroundColor: selectedColor.hex }}
                    >
                      <span className="text-7xl" role="img" aria-hidden="true">🧶</span>
                    </div>
                    <p className="font-display font-bold text-xl text-foreground">
                      {selectedColor.name}
                    </p>
                    {isCustom && (
                      <p className="text-sm text-weenie-teal mt-2">
                        + Custom Weenie Design
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Color thumbnails */}
              <div className="flex gap-3 justify-center">
                {BEANIE.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      'w-12 h-12 rounded-full border-4 transition-all hover:scale-110',
                      selectedColor.id === color.id
                        ? 'border-weenie-teal scale-110'
                        : 'border-transparent'
                    )}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select ${color.name}`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <Badge variant="success" className="mb-4">
                In Stock
              </Badge>

              <h1 className="font-display text-4xl font-extrabold text-foreground mb-2">
                {BEANIE.name}
              </h1>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                {BEANIE.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-3xl font-bold text-weenie-red">
                  {formatPrice(currentPrice)}
                </span>
                {isCustom && (
                  <span className="text-sm text-foreground/60 line-through">
                    {formatPrice(BEANIE.price)}
                  </span>
                )}
              </div>

              {/* Customization Toggle */}
              <Card id="custom" className="mb-6 border-2 border-weenie-teal/20">
                <CardContent className="p-0">
                  <button
                    onClick={() => setIsCustom(!isCustom)}
                    className={cn(
                      'w-full p-4 flex items-start gap-4 transition-colors rounded-softer',
                      isCustom ? 'bg-weenie-teal/10' : 'hover:bg-weenie-cream'
                    )}
                  >
                    <div
                      className={cn(
                        'w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors',
                        isCustom
                          ? 'bg-weenie-teal border-weenie-teal text-white'
                          : 'border-weenie-teal/30'
                      )}
                    >
                      {isCustom && <Check className="w-4 h-4" />}
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-weenie-orange" aria-hidden="true" />
                        <span className="font-semibold text-foreground">
                          Customize My Beanie
                        </span>
                        <span className="text-sm text-weenie-teal font-semibold">
                          +{formatPrice(BEANIE.customPrice - BEANIE.price)}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70 mt-1">
                        Upload a photo of your dog and we&apos;ll turn it into a Weenie-style
                        illustration for your beanie.
                      </p>
                    </div>
                  </button>

                  {isCustom && (
                    <div className="border-t border-weenie-teal/20 p-4">
                      {uploadedFile ? (
                        <div className="flex items-center justify-between bg-weenie-green/10 rounded-soft p-3">
                          <div className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-weenie-green" />
                            <span className="text-sm font-medium text-foreground">
                              {uploadedFile.name}
                            </span>
                          </div>
                          <button
                            onClick={() => setShowUploadModal(true)}
                            className="text-sm text-weenie-teal hover:underline"
                          >
                            Change
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowUploadModal(true)}
                          className="w-full flex items-center justify-center gap-2 p-4 border-2 border-dashed border-weenie-teal/30 rounded-soft text-weenie-teal hover:bg-weenie-teal/5 transition-colors"
                        >
                          <Upload className="w-5 h-5" />
                          <span className="font-medium">Upload Photo</span>
                        </button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="label">Size</label>
                <div className="flex gap-3">
                  {BEANIE.sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        'flex-1 p-4 rounded-soft border-2 transition-all text-center',
                        selectedSize.id === size.id
                          ? 'border-weenie-teal bg-weenie-teal/10'
                          : 'border-weenie-teal/20 hover:border-weenie-teal/40'
                      )}
                    >
                      <span className="font-semibold block">{size.name}</span>
                      <span className="text-sm text-foreground/60">{size.circumference}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="label">Color: {selectedColor.name}</label>
                <div className="flex gap-3">
                  {BEANIE.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        'w-10 h-10 rounded-full border-4 transition-all hover:scale-110',
                        selectedColor.id === color.id
                          ? 'border-weenie-teal scale-110'
                          : 'border-transparent'
                      )}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="label">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-soft border-2 border-weenie-teal/20 flex items-center justify-center hover:bg-weenie-teal/10 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-soft border-2 border-weenie-teal/20 flex items-center justify-center hover:bg-weenie-teal/10 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="btn-primary w-full text-lg mb-4"
              >
                {isCustom && !uploadedFile ? (
                  <>
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Photo & Checkout
                  </>
                ) : (
                  <>
                    Add to Cart — {formatPrice(totalPrice)}
                  </>
                )}
              </button>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
                <span className="inline-flex items-center">
                  <Truck className="w-4 h-4 mr-2 text-weenie-teal" />
                  Free shipping over $50
                </span>
                <span className="inline-flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-weenie-teal" />
                  Secure checkout
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="bordered">
              <CardContent>
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-weenie-teal" />
                  Standard Shipping
                </h3>
                <p className="text-foreground/70">
                  {formatPrice(BEANIE.shipping.standard.price)} • {BEANIE.shipping.standard.days}
                </p>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardContent>
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-weenie-orange" />
                  Express Shipping
                </h3>
                <p className="text-foreground/70">
                  {formatPrice(BEANIE.shipping.express.price)} • {BEANIE.shipping.express.days}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Cross-sell */}
      <section className="py-12 bg-weenie-cream">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Don&apos;t Forget the Book!
              </h3>
              <p className="text-foreground/70">
                Get the matching story book to complete the cozy experience.
              </p>
            </div>
            <Link href="/book" className="btn-outline whitespace-nowrap">
              Shop the Book
            </Link>
          </div>
        </div>
      </section>

      {/* Upload Modal */}
      <CustomUploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onUploadComplete={handleUploadComplete}
      />
    </div>
  )
}
