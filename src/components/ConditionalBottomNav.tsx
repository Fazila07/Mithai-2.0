'use client'

import { usePathname } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

export default function ConditionalBottomNav() {
  const pathname = usePathname()
  // Hide BottomNav on all admin pages
  if (pathname.startsWith('/admin')) return null
  return <BottomNav />
}
