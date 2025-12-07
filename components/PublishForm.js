import { useState } from 'react'
import { useApp } from './AppContext'
import { useRouter } from 'next/router'

export default function PublishForm(){
  const [type, setType] = useState('object')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Ropa')
  const [price, setPrice] = useState('')
  const { addProduct } = useApp()
  const router = useRouter()

  function publish(){
    if(!title) return alert('Añade un título')
    const p = addProduct({ title, description, category, price: Number(price) || 0 })
    router.push('/')
  }

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <button onClick={()=>setType('object')} className={`px-4 py-2 rounded-lg ${type==='object' ? 'bg-[var(--primary)] text-white' : 'bg-white border'}`}>Objeto</button>
        <button onClick={()=>setType('service')} className={`px-4 py-2 rounded-lg ${type==='service' ? 'bg-[var(--primary)] text-white' : 'bg-white border'}`}>Servicio</button>
      </div>
      <div className="mb-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Título" className="w-full px-4 py-2 rounded-lg border" />
      </div>
      <div className="mb-3">
        <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Descripción" className="w-full px-4 py-2 rounded-lg border" rows={4} />
      </div>
      <div className="mb-3">
        <input type="file" className="w-full" />
      </div>
      <div className="mb-3">
        <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full px-4 py-2 rounded-lg border">
          <option>Ropa</option>
          <option>Tecnología</option>
          <option>Hogar</option>
        </select>
      </div>
      <div className="mb-3">
        <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Precio en créditos" className="w-full px-4 py-2 rounded-lg border" />
      </div>
      <div className="mb-3">
        <div className="text-sm text-gray-600 mb-2">Método de intercambio</div>
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded-lg border">Créditos</button>
          <button className="px-3 py-2 rounded-lg border">Efectivo</button>
          <button className="px-3 py-2 rounded-lg border">Híbrido</button>
        </div>
      </div>
      <div className="mt-4">
        <button onClick={publish} className="btn-primary w-full">Publicar</button>
      </div>
    </div>
  )
}
