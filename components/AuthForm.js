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
    <div className="p-6">
      <div className="mb-4">
        <input value={name} onChange={e=>setName(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-[var(--softgray)]" placeholder="Nombre" />
      </div>
      <div className="mb-4">
        <input className="w-full px-4 py-2 rounded-lg border border-[var(--softgray)]" placeholder="Correo o teléfono" />
      </div>
      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">Selecciona tus intereses</div>
        <div className="flex flex-wrap gap-2">
          {interests.map(i=> (
            <button key={i} onClick={()=>toggle(i)} className={`px-3 py-1 rounded-full border ${selected.includes(i)? 'bg-[var(--primary)] text-white' : 'bg-white'}`}>{i}</button>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={createAccount} className="btn-primary flex-1">Crear cuenta</button>
        <button className="flex-1 px-4 py-2 rounded-lg border">Iniciar sesión</button>
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">O iniciar con</div>
      <div className="flex gap-2 mt-2">
        <button className="flex-1 px-3 py-2 rounded-lg border">Google</button>
        <button className="flex-1 px-3 py-2 rounded-lg border">Teléfono</button>
      </div>
    </div>
  )
}
