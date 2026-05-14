'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Package,
  ShoppingBag,
  Clock,
  CheckCircle,
  Truck,
  TrendingUp,
  Users,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'

interface Stats {
  totalProducts: number
  totalOrders: number
  pendingOrders: number
  packedOrders: number
  deliveredOrders: number
  totalRevenue: number
  totalCustomers: number
}

interface Order {
  _id: string
  orderNumber: string
  customer: { name: string; email: string; phone: string }
  total: number
  status: string
  paymentStatus: string
  createdAt: string
  items: { name: string; quantity: number }[]
}

interface LowStockProduct {
  _id: string
  name: string
  stock: number
  category: string
  price: number
  images: string[]
}

const STATUS_COLORS: Record<string, string> = {
  Pending: 'bg-yellow-100 text-yellow-700',
  Confirmed: 'bg-blue-100 text-blue-700',
  'In Process': 'bg-orange-100 text-orange-700',
  Packed: 'bg-purple-100 text-purple-700',
  Shipped: 'bg-cyan-100 text-cyan-700',
  Delivered: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
  sub,
}: {
  icon: React.ElementType
  label: string
  value: string | number
  color: string
  sub?: string
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gray-200" />
        <div className="flex-1">
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
          <div className="h-6 bg-gray-200 rounded w-1/3" />
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [recentOrders, setRecentOrders] = useState<Order[]>([])
  const [lowStock, setLowStock] = useState<LowStockProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((r) => r.json())
      .then((d) => {
        if (d.error) { setError(d.error); return }
        setStats(d.stats)
        setRecentOrders(d.recentOrders)
        setLowStock(d.lowStockProducts)
      })
      .catch(() => setError('Failed to load dashboard data'))
      .finally(() => setLoading(false))
  }, [])

  const statCards = stats
    ? [
        { icon: Package, label: 'Total Products', value: stats.totalProducts, color: 'bg-[#900c00]' },
        { icon: ShoppingBag, label: 'Total Orders', value: stats.totalOrders, color: 'bg-[#ffa520]' },
        { icon: Clock, label: 'Pending Orders', value: stats.pendingOrders, color: 'bg-orange-500', sub: 'Awaiting action' },
        { icon: CheckCircle, label: 'Packed Orders', value: stats.packedOrders, color: 'bg-purple-500' },
        { icon: Truck, label: 'Delivered', value: stats.deliveredOrders, color: 'bg-green-500' },
        {
          icon: TrendingUp,
          label: 'Total Revenue',
          value: `₹${stats.totalRevenue.toLocaleString('en-IN')}`,
          color: 'bg-emerald-600',
          sub: 'Paid orders only',
        },
        { icon: Users, label: 'Customers', value: stats.totalCustomers, color: 'bg-blue-500' },
      ]
    : []

  if (error) {
    return (
      <div className="rounded-2xl bg-red-50 border border-red-200 p-8 text-center">
        <p className="text-red-600 font-medium">{error}</p>
        <p className="text-sm text-red-400 mt-1">Make sure your MONGODB_URI is set in .env.local</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 7 }).map((_, i) => <SkeletonCard key={i} />)
          : statCards.map((card) => <StatCard key={card.label} {...card} />)}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="text-sm text-[#900c00] font-medium flex items-center gap-1 hover:underline"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-6 space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-10 bg-gray-100 rounded animate-pulse" />
                ))}
              </div>
            ) : recentOrders.length === 0 ? (
              <div className="p-10 text-center text-gray-400">
                <ShoppingBag size={32} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm">No orders yet</p>
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 text-left">Order</th>
                    <th className="px-6 py-3 text-left">Customer</th>
                    <th className="px-6 py-3 text-left">Items</th>
                    <th className="px-6 py-3 text-right">Total</th>
                    <th className="px-6 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentOrders.map((order) => (
                    <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3">
                        <Link href={`/admin/orders`} className="font-mono text-xs text-[#900c00] font-semibold hover:underline">
                          #{order.orderNumber}
                        </Link>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          {new Date(order.createdAt).toLocaleDateString('en-IN')}
                        </p>
                      </td>
                      <td className="px-6 py-3">
                        <p className="font-medium text-gray-800">{order.customer.name}</p>
                        <p className="text-[10px] text-gray-400">{order.customer.email}</p>
                      </td>
                      <td className="px-6 py-3 text-gray-500">
                        {order.items.length} item{order.items.length > 1 ? 's' : ''}
                      </td>
                      <td className="px-6 py-3 text-right font-semibold text-gray-800">
                        ₹{order.total.toLocaleString('en-IN')}
                      </td>
                      <td className="px-6 py-3 text-center">
                        <span className={`px-2 py-1 rounded-full text-[11px] font-semibold ${STATUS_COLORS[order.status] ?? 'bg-gray-100 text-gray-600'}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Low Stock */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
            <AlertTriangle size={16} className="text-orange-500" />
            <h2 className="font-semibold text-gray-800">Low Stock Alert</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {loading ? (
              <div className="p-6 space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-8 bg-gray-100 rounded animate-pulse" />
                ))}
              </div>
            ) : lowStock.length === 0 ? (
              <div className="p-10 text-center text-gray-400">
                <CheckCircle size={32} className="mx-auto mb-2 text-green-400" />
                <p className="text-sm">All products are well stocked!</p>
              </div>
            ) : (
              lowStock.map((p) => (
                <div key={p._id} className="flex items-center gap-3 px-6 py-3">
                  {p.images?.[0] ? (
                    <img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Package size={16} className="text-gray-400" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{p.name}</p>
                    <p className="text-xs text-gray-400">{p.category}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${p.stock === 0 ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
                    {p.stock} left
                  </span>
                </div>
              ))
            )}
          </div>
          {!loading && lowStock.length > 0 && (
            <div className="px-6 py-3 border-t border-gray-100">
              <Link href="/admin/products" className="text-sm text-[#900c00] font-medium flex items-center gap-1 hover:underline">
                Manage products <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}