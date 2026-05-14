import { SessionProvider } from 'next-auth/react'

// Admin login has its own layout — no sidebar, no header
export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
