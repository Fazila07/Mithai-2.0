import Link from 'next/link'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-mithai-off px-4 py-12">
      <div className="w-full max-w-md rounded-[2rem] bg-white/95 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
        <h1 className="text-3xl font-semibold text-mithai-charcoal">Log in</h1>
        <p className="mt-3 text-sm text-slate-500">Access your account and continue shopping healthy mithai.</p>

        <form className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-mithai-pink"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              name="password"
              required
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-mithai-pink"
              placeholder="Enter your password"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-3xl bg-mithai-pink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          New to Mithai 2.0?{' '}
          <Link href="/signup" className="font-semibold text-mithai-charcoal hover:text-mithai-pink">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  )
}
