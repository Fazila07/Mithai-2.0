'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'
import Providers from '@/components/Providers'
import { Toaster } from 'react-hot-toast'

const PAGE_TITLES: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/products': 'Products',
  '/admin/products/new': 'Add Product',
  '/admin/orders': 'Orders',
  '/admin/customers': 'Customers',
  '/admin/coupons': 'Coupons',
  '/admin/settings': 'Settings',
}

function AdminShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const title = Object.entries(PAGE_TITLES).find(([key]) =>
    pathname === key || (key !== '/admin' && pathname.startsWith(key))
  )?.[1] ?? 'Admin'

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Main content — shifts right for sidebar */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64 transition-all duration-300">
        <AdminHeader onMenuClick={() => setMobileOpen(true)} title={title} />
        <main className="flex-1 p-4 sm:p-6 overflow-auto">{children}</main>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: { borderRadius: '12px', fontSize: '14px' },
          success: { iconTheme: { primary: '#900c00', secondary: '#fff' } },
        }}
      />
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <AdminShell>{children}</AdminShell>
    </Providers>
  )
}
