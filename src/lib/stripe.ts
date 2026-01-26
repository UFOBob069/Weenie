/**
 * Stripe Integration Module
 *
 * This module provides stubbed functions for Stripe checkout integration.
 * Replace the TODO comments with actual Stripe API calls when ready.
 */

import { BEANIE } from './constants'
import { generateUploadId } from './utils'

// TODO: Install and configure Stripe
// npm install stripe @stripe/stripe-js
// import Stripe from 'stripe'

// TODO: Initialize Stripe with your secret key
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2023-10-16',
// })

export interface BeanieOrderData {
  colorId: string
  sizeId: string
  quantity: number
  isCustom: boolean
  uploadId?: string
}

export interface CheckoutSession {
  id: string
  url: string
}

/**
 * Create a Stripe checkout session for beanie orders
 *
 * @param orderData - The beanie order details
 * @returns A checkout session with redirect URL
 */
export async function createCheckoutSession(
  orderData: BeanieOrderData
): Promise<CheckoutSession> {
  const { colorId, sizeId, quantity, isCustom, uploadId } = orderData

  const price = isCustom ? BEANIE.customPrice : BEANIE.price
  const productName = isCustom ? 'Custom Weenie Beanie' : 'Weenie Beanie'

  const color = BEANIE.colors.find((c) => c.id === colorId)
  const size = BEANIE.sizes.find((s) => s.id === sizeId)

  // TODO: Replace this stub with actual Stripe checkout session creation
  // const session = await stripe.checkout.sessions.create({
  //   mode: 'payment',
  //   payment_method_types: ['card'],
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: 'usd',
  //         product_data: {
  //           name: productName,
  //           description: `${color?.name || colorId} - ${size?.name || sizeId}`,
  //           images: ['https://weenieinabeanie.com/images/beanie-product.jpg'],
  //         },
  //         unit_amount: Math.round(price * 100), // Stripe uses cents
  //       },
  //       quantity,
  //     },
  //   ],
  //   metadata: {
  //     order_id: generateUploadId(), // Use same format for order IDs
  //     color_id: colorId,
  //     size_id: sizeId,
  //     custom: String(isCustom),
  //     upload_id: uploadId || '',
  //   },
  //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/beanie`,
  // })
  //
  // return {
  //   id: session.id,
  //   url: session.url!,
  // }

  // Stubbed response for development
  console.log('Creating checkout session:', {
    productName,
    color: color?.name,
    size: size?.name,
    quantity,
    price,
    isCustom,
    uploadId,
  })

  return {
    id: `stub_session_${generateUploadId()}`,
    url: '/checkout-stub', // Would be Stripe URL in production
  }
}

/**
 * Retrieve a checkout session by ID
 *
 * @param sessionId - The Stripe session ID
 * @returns The session details
 */
export async function getCheckoutSession(sessionId: string) {
  // TODO: Replace with actual Stripe retrieval
  // const session = await stripe.checkout.sessions.retrieve(sessionId)
  // return session

  console.log('Retrieving session:', sessionId)
  return null
}

/**
 * Webhook handler for Stripe events
 *
 * @param payload - The raw request body
 * @param signature - The Stripe signature header
 * @returns The verified event
 */
export async function handleWebhook(payload: string, signature: string) {
  // TODO: Implement webhook handling
  // const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
  //
  // try {
  //   const event = stripe.webhooks.constructEvent(payload, signature, webhookSecret)
  //
  //   switch (event.type) {
  //     case 'checkout.session.completed':
  //       const session = event.data.object
  //       // TODO: Send order confirmation email
  //       // TODO: Store order in database
  //       // TODO: If custom order, queue illustration task
  //       console.log('Order completed:', session.id)
  //       break
  //
  //     case 'payment_intent.payment_failed':
  //       // TODO: Handle failed payment
  //       break
  //   }
  //
  //   return { received: true }
  // } catch (err) {
  //   console.error('Webhook error:', err)
  //   throw err
  // }

  console.log('Webhook received:', { payload: payload.slice(0, 100), signature })
  return { received: true }
}
