'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, Mail, Loader2 } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    setLoading(false)
    if (res?.error) {
      setError('Invalid email or password')
    } else {
      router.push('/admin')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a0a0a] px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #ffa520 0%, transparent 50%), radial-gradient(circle at 75% 75%, #900c00 0%, transparent 50%)' }}
      />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffa520] to-[#900c00] flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-400 mt-1">Mithai 2.0 — Sign in to continue</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@mithai.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#900c00]/20 focus:border-[#900c00] transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#900c00]/20 focus:border-[#900c00] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#900c00] text-white py-3 rounded-xl font-semibold text-sm transition-all hover:bg-[#b01600] disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-[#900c00]/25"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            This portal is for administrators only.{' '}
            <a href="/" className="text-[#900c00] font-medium hover:underline">
              Go to store →
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
