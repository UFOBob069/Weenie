import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession, BeanieOrderData } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { colorId, sizeId, quantity, isCustom, uploadId } = body

    if (!colorId || !sizeId || !quantity) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate custom orders have upload
    if (isCustom && !uploadId) {
      return NextResponse.json(
        { error: 'Custom orders require a photo upload' },
        { status: 400 }
      )
    }

    const orderData: BeanieOrderData = {
      colorId,
      sizeId,
      quantity: parseInt(quantity, 10),
      isCustom: Boolean(isCustom),
      uploadId,
    }

    const session = await createCheckoutSession(orderData)

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
