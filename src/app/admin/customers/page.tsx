'use client'

import { useEffect, useState, useCallback } from 'react'
import toast from 'react-hot-toast'
import { Search, Users, ChevronLeft, ChevronRight } from 'lucide-react'

interface Customer {
  _id: string
  name: string
  email: string
  phone?: string
  createdAt: string
  totalOrders: number
  totalSpent: number
  lastOrderDate: string | null
}

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)

  const fetchCustomers = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams({ page: String(page), limit: '20', search })
    try {
      const res = await fetch(`/api/admin/customers?${params}`)
      const data = await res.json()
      setCustomers(data.customers ?? [])
      setTotalPages(data.pagination?.pages ?? 1)
      setTotal(data.pagination?.total ?? 0)
    } catch {
      toast.error('Failed to load customers')
    } finally {
      setLoading(false)
    }
  }, [page, search])

  useEffect(() => { fetchCustomers() }, [fetchCustomers])

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex gap-3 items-center">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search by name, email, phone..." value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#900c00]/20 focus:border-[#900c00]" />
        </div>
        <span className="text-sm text-gray-500">{total} customers</span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3 text-left">Customer</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-center">Total Orders</th>
                <th className="px-6 py-3 text-right">Total Spent</th>
                <th className="px-6 py-3 text-left">Last Order</th>
                <th className="px-6 py-3 text-left">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    {Array.from({ length: 6 }).map((__, j) => (
                      <td key={j} className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-24" /></td>
                    ))}
                  </tr>
                ))
              ) : customers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center text-gray-400">
                    <Users size={40} className="mx-auto mb-3 opacity-30" />
                    <p className="font-medium">No customers yet</p>
                  </td>
                </tr>
              ) : (
                customers.map((c) => (
                  <tr key={c._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ffa520] to-[#900c00] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          {c.name[0]?.toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{c.name}</p>
                          <p className="text-xs text-gray-400">{c.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{c.phone || '—'}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                        {c.totalOrders}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-800">
                      ₹{c.totalSpent.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-xs">
                      {c.lastOrderDate ? new Date(c.lastOrderDate).toLocaleDateString('en-IN') : '—'}
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-xs">
                      {new Date(c.createdAt).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!loading && totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                className="p-2 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                className="p-2 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
