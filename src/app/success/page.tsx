import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-mithai-off px-4 py-12">
      <div className="w-full max-w-xl rounded-[2rem] bg-white/95 p-10 text-center shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
        <h1 className="text-4xl font-semibold text-mithai-charcoal">Order confirmed</h1>
        <p className="mt-4 text-sm text-slate-500">
          Your order was successfully placed. Thank you for choosing Mithai 2.0.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/shop" className="rounded-3xl bg-mithai-pink px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-600">
            Continue shopping
          </Link>
          <Link href="/" className="rounded-3xl border border-slate-300 px-6 py-3 text-sm font-semibold text-mithai-charcoal transition hover:bg-slate-100">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
