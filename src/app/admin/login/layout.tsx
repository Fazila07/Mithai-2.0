import Providers from '@/components/Providers'

// Admin login has its own layout — no sidebar, no header
export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      {children}
    </Providers>
  )
}
