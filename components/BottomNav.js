import Link from 'next/link'
import { Home, Search, PlusCircle, Users, User } from 'lucide-react'

export default function BottomNav(){
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-3xl shadow-2xl flex gap-6 items-center z-40 border border-green-100">
      <Link href="/" className="nav-item text-gray-600 hover:text-green-700">
        <div className="flex flex-col items-center text-sm"><Home size={20} /><span className="text-xs mt-1">Inicio</span></div>
      </Link>
      <Link href="/onboarding" className="nav-item text-gray-600 hover:text-green-700">
        <div className="flex flex-col items-center text-sm"><Search size={20} /><span className="text-xs mt-1">Buscar</span></div>
      </Link>
      <Link href="/publish" className="nav-item">
        <div className="flex flex-col items-center text-sm text-green-600 bg-green-50 p-2 rounded-full"><PlusCircle size={28} /></div>
      </Link>
      <Link href="/social" className="nav-item text-gray-600 hover:text-green-700">
        <div className="flex flex-col items-center text-sm"><Users size={20} /><span className="text-xs mt-1">Comunidad</span></div>
      </Link>
      <Link href="/profile" className="nav-item text-gray-600 hover:text-green-700">
        <div className="flex flex-col items-center text-sm"><User size={20} /><span className="text-xs mt-1">Perfil</span></div>
      </Link>
    </nav>
  )
}
