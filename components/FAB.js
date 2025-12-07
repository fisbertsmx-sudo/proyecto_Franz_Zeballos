import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function FAB(){
  return (
    <Link href="/publish" className="fixed right-6 bottom-28 bg-[var(--primary)] text-white p-4 rounded-full shadow-xl z-40 flex items-center justify-center">
      <Plus />
    </Link>
  )
}
