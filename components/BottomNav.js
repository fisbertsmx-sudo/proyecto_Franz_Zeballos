import Link from 'next/link'
import { Home, Search, PlusCircle, Users, User } from 'lucide-react'

export default function BottomNav(){
  return (
    <nav className="fixed bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 md:px-6 py-2 md:py-4 rounded-2xl md:rounded-3xl shadow-2xl flex gap-3 md:gap-6 items-center z-40 border border-green-100">
      <Link href="/" className="nav-item text-gray-600 hover:text-green-700 transition-colors">
        <div className="flex flex-col items-center text-xs md:text-sm"><Home size={18} className="md:w-5 md:h-5" /><span className="text-xs mt-0.5 md:mt-1 hidden sm:inline">Inicio</span></div>
      </Link>
      <Link href="/onboarding" className="nav-item text-gray-600 hover:text-green-700 transition-colors">
        <div className="flex flex-col items-center text-xs md:text-sm"><Search size={18} className="md:w-5 md:h-5" /><span className="text-xs mt-0.5 md:mt-1 hidden sm:inline">Buscar</span></div>
      </Link>
      <Link href="/publish" className="nav-item">
        <div className="flex flex-col items-center text-xs md:text-sm text-green-600 bg-green-50 p-1.5 md:p-2 rounded-full hover:bg-green-100 transition-colors"><PlusCircle size={24} className="md:w-7 md:h-7" /></div>
      </Link>
      <Link href="/social" className="nav-item text-gray-600 hover:text-green-700 transition-colors">
        <div className="flex flex-col items-center text-xs md:text-sm"><Users size={18} className="md:w-5 md:h-5" /><span className="text-xs mt-0.5 md:mt-1 hidden sm:inline">Comunidad</span></div>
      </Link>
      <Link href="/profile" className="nav-item text-gray-600 hover:text-green-700 transition-colors">
        <div className="flex flex-col items-center text-xs md:text-sm"><User size={18} className="md:w-5 md:h-5" /><span className="text-xs mt-0.5 md:mt-1 hidden sm:inline">Perfil</span></div>
      </Link>
    </nav>
  )
}
