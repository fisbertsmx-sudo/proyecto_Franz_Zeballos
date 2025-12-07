import { Search } from 'lucide-react'
import { useApp } from './AppContext'
import Link from 'next/link'

export default function Header({location='Ciudad', onSearch}){
  const { user, logout } = useApp()
  return (
    <header className="px-4 py-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs text-gray-500">Ubicación</div>
          <div className="font-semibold">{location}</div>
        </div>
        <div className="flex items-center gap-3">
          {user?.loggedIn ? (
            <>
              <div className="text-right mr-2">
                <div className="text-xs text-gray-500">Créditos</div>
                <div className="font-semibold text-green-600">{user.credits} ✪</div>
              </div>
              <button onClick={logout} className="px-3 py-1 rounded-lg border">Salir</button>
            </>
          ) : (
            <Link href="/login" className="px-3 py-1 rounded-lg border">Iniciar</Link>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <input id="main-search" onChange={(e)=>onSearch?.(e.target.value)} placeholder="Buscar artículos, p.ej. bicicleta" className="flex-1 px-4 py-2 rounded-lg border border-[var(--softgray)]" />
        <button className="p-2 rounded-lg bg-white border border-[var(--softgray)]"><Search size={18} /></button>
      </div>
    </header>
  )
}
