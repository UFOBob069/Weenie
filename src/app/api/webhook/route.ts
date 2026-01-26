import { NextRequest, NextResponse } from 'next/server'
import { handleWebhook } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }

    const result = await handleWebhook(payload, signature)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

// Note: App Router route handlers receive the raw body by default
// No additional configuration needed for Stripe webhook verification
