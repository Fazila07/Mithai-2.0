'use client'

import { Menu, Bell, LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

interface Props {
  onMenuClick: () => void
  title: string
}

export default function AdminHeader({ onMenuClick, title }: Props) {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu size={20} className="text-gray-600" />
        </button>
        <h1 className="font-semibold text-gray-800 text-lg">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffa520] to-[#900c00] flex items-center justify-center text-white text-xs font-bold">
            {session?.user?.name?.[0]?.toUpperCase() ?? 'A'}
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-gray-800 leading-tight">{session?.user?.name ?? 'Admin'}</p>
            <p className="text-[10px] text-gray-400">Administrator</p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="ml-1 p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
            title="Sign out"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}
