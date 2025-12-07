import Link from 'next/link'
import { Home, Search, PlusCircle, Users, User } from 'lucide-react'

export default function BottomNav(){
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-lg flex gap-6 items-center z-40">
      <Link href="/">
        <div className="flex flex-col items-center text-sm text-gray-700"><Home size={20} /><span>Inicio</span></div>
      </Link>
      <Link href="/onboarding">
        <div className="flex flex-col items-center text-sm text-gray-700"><Search size={20} /><span>Buscar</span></div>
      </Link>
      <Link href="/publish">
        <div className="flex flex-col items-center text-sm text-green-600"><PlusCircle size={28} /></div>
      </Link>
      <Link href="/social">
        <div className="flex flex-col items-center text-sm text-gray-700"><Users size={20} /><span>Comunidad</span></div>
      </Link>
      <Link href="/profile">
        <div className="flex flex-col items-center text-sm text-gray-700"><User size={20} /><span>Perfil</span></div>
      </Link>
    </nav>
  )
}
