'use client'

import { useState, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Upload, Camera, Check, AlertCircle, ArrowRight, Sparkles } from 'lucide-react'
import { cn, validatePhotoUpload, generateUploadId } from '@/lib/utils'
import { BEANIE } from '@/lib/constants'
import { Card, CardContent, Badge } from '@/components/ui'
import { formatPrice } from '@/lib/utils'

export function CustomUploadFlow() {
  const router = useRouter()
  const [step, setStep] = useState<'upload' | 'preview' | 'options'>('upload')
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState(BEANIE.colors[0])
  const [selectedSize, setSelectedSize] = useState(BEANIE.sizes[0])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((file: File) => {
    setError(null)

    const validation = validatePhotoUpload(file)
    if (!validation.valid) {
      setError(validation.error || 'Invalid file')
      return
    }

    setSelectedFile(file)

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
      setStep('preview')
    }
    reader.readAsDataURL(file)
  }, [])

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }, [handleFile])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }, [handleFile])

  const handleCheckout = () => {
    const uploadId = generateUploadId()

    // TODO: Integrate with actual file upload service (Cloudinary/UploadThing)
    // TODO: Integrate with Stripe checkout
    console.log('Custom beanie checkout:', {
      uploadId,
      file: selectedFile?.name,
      color: selectedColor.id,
      size: selectedSize.id,
      price: BEANIE.customPrice,
    })

    alert('Checkout coming soon! This will redirect to Stripe.')
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <Badge variant="warning" className="mb-4">
          <Sparkles className="w-3 h-3 mr-1" />
          Custom Design
        </Badge>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Create Your Custom Weenie Beanie
        </h1>
        <p className="text-lg text-foreground/70 max-w-lg mx-auto">
          Upload a clear photo of your dog and we&apos;ll transform it into a Weenie-style
          illustration for your very own custom beanie.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {['Upload Photo', 'Preview', 'Checkout'].map((label, index) => {
          const stepIndex = ['upload', 'preview', 'options'].indexOf(step)
          const isActive = index <= stepIndex
          const isCurrent = index === stepIndex

          return (
            <div key={label} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors',
                    isActive
                      ? 'bg-weenie-teal text-white'
                      : 'bg-weenie-teal/20 text-weenie-teal/50'
                  )}
                >
                  {isActive && index < stepIndex ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={cn(
                    'text-sm font-medium hidden sm:inline',
                    isCurrent ? 'text-foreground' : 'text-foreground/50'
                  )}
                >
                  {label}
                </span>
              </div>
              {index < 2 && (
                <div
                  className={cn(
                    'w-12 h-0.5 mx-2',
                    index < stepIndex ? 'bg-weenie-teal' : 'bg-weenie-teal/20'
                  )}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Step Content */}
      <Card variant="elevated" className="max-w-xl mx-auto">
        <CardContent className="p-0">
          {step === 'upload' && (
            <div className="p-6">
              {/* Instructions */}
              <div className="bg-weenie-teal/10 rounded-soft p-4 mb-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-weenie-teal" />
                  Photo Tips for Best Results
                </h3>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Use a clear, well-lit photo of your dog</li>
                  <li>• Face should be visible and in focus</li>
                  <li>• Solid or simple background works best</li>
                  <li>• JPG or PNG, max 10MB</li>
                </ul>
              </div>

              {/* Upload Area */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                  'border-2 border-dashed rounded-softer p-12 text-center cursor-pointer transition-all',
                  dragActive
                    ? 'border-weenie-teal bg-weenie-teal/10'
                    : 'border-weenie-teal/30 hover:border-weenie-teal/50 hover:bg-weenie-cream'
                )}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleChange}
                  className="hidden"
                  aria-label="Upload photo"
                />
                <Upload className="w-16 h-16 text-weenie-teal mx-auto mb-4" />
                <p className="font-semibold text-lg text-foreground mb-2">
                  Drag & drop your photo here
                </p>
                <p className="text-foreground/60">
                  or click to browse
                </p>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-weenie-red/10 rounded-soft flex items-center gap-2 text-weenie-red">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}
            </div>
          )}

          {step === 'preview' && preview && (
            <div className="p-6">
              <div className="relative aspect-square rounded-softer overflow-hidden bg-weenie-cream mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="Preview of uploaded photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-weenie-green text-white p-2 rounded-full shadow-lg">
                  <Check className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm mb-6">
                <span className="text-foreground/70">{selectedFile?.name}</span>
                <button
                  onClick={() => {
                    setSelectedFile(null)
                    setPreview(null)
                    setStep('upload')
                  }}
                  className="text-weenie-red hover:underline"
                >
                  Change Photo
                </button>
              </div>

              <div className="p-4 bg-weenie-cream rounded-soft mb-6">
                <p className="text-sm text-foreground/70 text-center">
                  <Sparkles className="w-4 h-4 inline mr-1 text-weenie-orange" />
                  We&apos;ll transform this photo into a Weenie-style illustration
                </p>
              </div>

              <button
                onClick={() => setStep('options')}
                className="btn-primary w-full"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}

          {step === 'options' && (
            <div className="p-6">
              {/* Color Selection */}
              <div className="mb-6">
                <label className="label">Beanie Color: {selectedColor.name}</label>
                <div className="flex gap-3">
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
                    />
                  ))}
                </div>
              </div>

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

              {/* Summary */}
              <div className="p-4 bg-weenie-cream rounded-soft mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Custom Weenie Beanie</span>
                  <span className="font-display text-xl font-bold text-weenie-red">
                    {formatPrice(BEANIE.customPrice)}
                  </span>
                </div>
                <div className="text-sm text-foreground/70 mt-2">
                  {selectedColor.name} • {selectedSize.name}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep('preview')}
                  className="btn-outline flex-1"
                >
                  Back
                </button>
                <button
                  onClick={handleCheckout}
                  className="btn-primary flex-1"
                >
                  Checkout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
