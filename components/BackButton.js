import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/router'

export default function BackButton({ className='' }){
  const router = useRouter()
  return (
    <button onClick={()=>router.back()} className={`flex items-center gap-2 text-sm text-gray-700 ${className}`}>
      <ChevronLeft /> Volver
    </button>
  )
}
