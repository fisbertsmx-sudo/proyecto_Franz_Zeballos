import { Search } from 'lucide-react'
import { useApp } from './AppContext'
import Link from 'next/link'

export default function Header({location='Ciudad', onSearch}){
  const { user, logout } = useApp()
  return (
    <header className="px-4 py-5 bg-gradient-to-br from-white via-green-50 to-white shadow-sm border-b border-green-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <img src="/leaf-eco.svg" alt="Ecotruque" className="w-6 h-6" />
            <div className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">Ecotruque</div>
          </div>
          <div className="text-xs text-gray-400">📍 {location}</div>
        </div>
        <div className="flex items-center gap-3">
          {user?.loggedIn ? (
            <>
              <div className="text-right mr-2 bg-green-50 px-3 py-1 rounded-lg border border-green-200">
                <div className="text-xs text-gray-500">Créditos</div>
                <div className="font-bold text-green-600">{user.credits} ✪</div>
              </div>
              <button onClick={logout} className="px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-50 transition">Salir</button>
            </>
          ) : (
            <Link href="/login" className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition">Iniciar</Link>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <input id="main-search" onChange={(e)=>onSearch?.(e.target.value)} placeholder="🔍 Buscar artículos..." className="flex-1 px-4 py-2 rounded-lg border border-green-200 bg-white focus:outline-none focus:border-green-400 focus:shadow-sm" />
        <button className="p-2 rounded-lg bg-green-50 border border-green-200 hover:bg-green-100 transition"><Search size={18} className="text-green-700" /></button>
      </div>
    </header>
  )
}
