import { Search } from 'lucide-react'
import { useApp } from './AppContext'
import Link from 'next/link'

export default function Header({location='Ciudad', onSearch}){
  const { user, logout } = useApp()
  return (
    <header className="px-3 md:px-4 py-3 md:py-5 bg-gradient-to-br from-white via-green-50 to-white shadow-sm border-b border-green-100 w-full">
      <div className="flex items-center justify-between mb-3 md:mb-4 gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 md:gap-2 mb-1">
            <img src="/leaf-eco.svg" alt="Ecotruque" className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
            <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent truncate">Ecotruque</div>
          </div>
          <div className="text-xs text-gray-400">📍 {location}</div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          {user?.loggedIn ? (
            <>
              <div className="text-right mr-1 md:mr-2 bg-green-50 px-2 md:px-3 py-1 rounded-lg border border-green-200 hidden sm:block">
                <div className="text-xs text-gray-500">Créditos</div>
                <div className="font-bold text-green-600 text-sm">{user.credits} ✪</div>
              </div>
              <button onClick={logout} className="px-2 md:px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-50 transition text-sm md:text-base">Salir</button>
            </>
          ) : (
            <Link href="/login" className="px-3 md:px-4 py-1 md:py-2 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition text-sm md:text-base whitespace-nowrap">Iniciar</Link>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <input id="main-search" onChange={(e)=>onSearch?.(e.target.value)} placeholder="🔍 Buscar..." className="flex-1 px-3 md:px-4 py-2 rounded-lg border border-green-200 bg-white focus:outline-none focus:border-green-400 focus:shadow-sm text-sm md:text-base" />
        <button className="p-2 rounded-lg bg-green-50 border border-green-200 hover:bg-green-100 transition flex-shrink-0"><Search size={16} className="text-green-700 md:w-5 md:h-5" /></button>
      </div>
    </header>
  )
}
