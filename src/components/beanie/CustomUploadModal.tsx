'use client'

import { useState, useCallback, useRef } from 'react'
import { X, Upload, Camera, Check, AlertCircle } from 'lucide-react'
import { cn, validatePhotoUpload } from '@/lib/utils'

interface CustomUploadModalProps {
  isOpen: boolean
  onClose: () => void
  onUploadComplete: (file: File) => void
}

export function CustomUploadModal({ isOpen, onClose, onUploadComplete }: CustomUploadModalProps) {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
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

  const handleConfirm = () => {
    if (selectedFile) {
      onUploadComplete(selectedFile)
      // Reset state
      setSelectedFile(null)
      setPreview(null)
      setError(null)
    }
  }

  const handleClose = () => {
    setSelectedFile(null)
    setPreview(null)
    setError(null)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-weenie-navy/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative bg-white rounded-softest shadow-2xl max-w-lg w-full max-h-[90vh] overflow-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="upload-modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-weenie-teal/10 p-4 flex items-center justify-between rounded-t-softest">
          <h2 id="upload-modal-title" className="font-display text-xl font-bold text-foreground">
            Upload Your Dog&apos;s Photo
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-weenie-cream rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
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
          {!preview ? (
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                'border-2 border-dashed rounded-softer p-8 text-center cursor-pointer transition-all',
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
              <Upload className="w-12 h-12 text-weenie-teal mx-auto mb-4" />
              <p className="font-semibold text-foreground mb-2">
                Drag & drop your photo here
              </p>
              <p className="text-sm text-foreground/60">
                or click to browse
              </p>
            </div>
          ) : (
            /* Preview */
            <div className="space-y-4">
              <div className="relative aspect-square rounded-softer overflow-hidden bg-weenie-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="Preview of uploaded photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-weenie-green text-white p-2 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/70">{selectedFile?.name}</span>
                <button
                  onClick={() => {
                    setSelectedFile(null)
                    setPreview(null)
                  }}
                  className="text-weenie-red hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-4 p-3 bg-weenie-red/10 rounded-soft flex items-center gap-2 text-weenie-red">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Illustration Preview */}
          <div className="mt-6 p-4 bg-weenie-cream rounded-soft">
            <p className="text-sm text-foreground/70 text-center">
              <span className="font-semibold text-foreground">What happens next:</span><br />
              We&apos;ll turn your photo into a Weenie-style illustration and embroider it on your beanie.
              You&apos;ll receive a preview via email before we ship!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-weenie-teal/10 p-4 flex gap-4 rounded-b-softest">
          <button
            onClick={handleClose}
            className="flex-1 btn-outline"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedFile}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Photo
          </button>
        </div>
      </div>
    </div>
  )
}
