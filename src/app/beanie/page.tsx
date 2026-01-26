import type { Metadata } from 'next'
import { BEANIE } from '@/lib/constants'
import { BeanieProduct } from '@/components/beanie/BeanieProduct'

export const metadata: Metadata = {
  title: 'Weenie Beanie',
  description: `${BEANIE.name} - ${BEANIE.description}`,
}

export default function BeaniePage() {
  return <BeanieProduct />
}
