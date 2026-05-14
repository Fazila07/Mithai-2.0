'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Tag,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/admin/customers', label: 'Customers', icon: Users },
  { href: '/admin/coupons', label: 'Coupons', icon: Tag },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

interface Props {
  mobileOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ mobileOpen, onClose }: Props) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const isActive = (item: (typeof NAV_ITEMS)[0]) => {
    if (item.exact) return pathname === item.href
    return pathname.startsWith(item.href)
  }

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 flex flex-col
          bg-[#1a0a0a] text-white transition-all duration-300
          ${collapsed ? 'w-[72px]' : 'w-64'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/10 flex-shrink-0">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ffa520] to-[#900c00] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <div>
                <p className="font-semibold text-sm leading-tight">Mithai 2.0</p>
                <p className="text-[10px] text-white/50 leading-tight">Admin Panel</p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ffa520] to-[#900c00] flex items-center justify-center mx-auto">
              <span className="text-white text-sm font-bold">M</span>
            </div>
          )}

          {/* Mobile close */}
          <button onClick={onClose} className="lg:hidden p-1 rounded hover:bg-white/10">
            <X size={16} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item)
              const Icon = item.icon
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                      ${active
                        ? 'bg-[#ffa520]/20 text-[#ffa520]'
                        : 'text-white/60 hover:text-white hover:bg-white/8'
                      }
                      ${collapsed ? 'justify-center' : ''}
                    `}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon size={18} className="flex-shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                    {active && !collapsed && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ffa520]" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Collapse toggle (desktop only) */}
        <div className="hidden lg:flex border-t border-white/10 p-3 justify-end">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
      </aside>
    </>
  )
}
