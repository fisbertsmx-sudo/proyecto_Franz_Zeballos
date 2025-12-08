import { useState } from 'react'
import { useApp } from './AppContext'
import { useRouter } from 'next/router'

const interests = ['Ropa','Tecnología','Hogar','Jardín','Niños']

export default function AuthForm(){
  const [selected, setSelected] = useState([])
  const [name, setName] = useState('')
  const { updateUser } = useApp()
  const router = useRouter()
  const { addToast } = useApp()

  const toggle = (i)=>{
    setSelected(prev => prev.includes(i) ? prev.filter(x=>x!==i) : [...prev, i])
  }

  function createAccount(){
    const payload = { name: name || 'Usuario', interests: selected }
    updateUser(payload)
    addToast('Cuenta creada', { type: 'info' })
    router.push('/')
  }

  return (
    <div className="p-3 md:p-6">
      <div className="mb-4">
        <input value={name} onChange={e=>setName(e.target.value)} className="w-full px-3 md:px-4 py-2 rounded-lg border border-[var(--softgray)] text-sm md:text-base" placeholder="Nombre" />
      </div>
      <div className="mb-4">
        <input className="w-full px-3 md:px-4 py-2 rounded-lg border border-[var(--softgray)] text-sm md:text-base" placeholder="Correo o teléfono" />
      </div>
      <div className="mb-4">
        <div className="text-xs md:text-sm text-gray-600 mb-2">Selecciona tus intereses</div>
        <div className="flex flex-wrap gap-2">
          {interests.map(i=> (
            <button key={i} onClick={()=>toggle(i)} className={`px-2 md:px-3 py-1 rounded-full border text-xs md:text-sm transition-colors ${selected.includes(i)? 'bg-[var(--primary)] text-white' : 'bg-white'}`}>{i}</button>
          ))}
        </div>
      </div>
      <div className="flex gap-2 flex-col sm:flex-row">
        <button onClick={createAccount} className="btn-primary flex-1 text-sm md:text-base py-2 md:py-2">Crear cuenta</button>
        <button className="flex-1 px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base">Iniciar sesión</button>
      </div>
      <div className="mt-4 text-center text-xs md:text-sm text-gray-500">O iniciar con</div>
      <div className="flex gap-2 mt-2 flex-col sm:flex-row">
        <button className="flex-1 px-3 py-2 rounded-lg border text-xs md:text-sm">Google</button>
        <button className="flex-1 px-3 py-2 rounded-lg border text-xs md:text-sm">Teléfono</button>
      </div>
    </div>
  )
}
