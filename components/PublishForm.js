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
  const { addToast } = useApp()

  function publish(){
    if(!title) return addToast('Añade un título', { type: 'error' })
    const p = addProduct({ title, description, category, price: Number(price) || 0 })
    addToast('Artículo publicado', { type: 'info' })
    router.push('/')
  }

  return (
    <div className="p-3 md:p-6">
      <div className="flex gap-2 mb-4">
        <button onClick={()=>setType('object')} className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base ${type==='object' ? 'bg-[var(--primary)] text-white' : 'bg-white border'}`}>Objeto</button>
        <button onClick={()=>setType('service')} className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base ${type==='service' ? 'bg-[var(--primary)] text-white' : 'bg-white border'}`}>Servicio</button>
      </div>
      <div className="mb-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Título" className="w-full px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base" />
      </div>
      <div className="mb-3">
        <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Descripción" className="w-full px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base" rows={4} />
      </div>
      <div className="mb-3">
        <input type="file" className="w-full text-sm md:text-base" />
      </div>
      <div className="mb-3">
        <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base">
          <option>Ropa</option>
          <option>Tecnología</option>
          <option>Hogar</option>
        </select>
      </div>
      <div className="mb-3">
        <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Precio en créditos" className="w-full px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base" />
      </div>
      <div className="mb-3">
        <div className="text-xs md:text-sm text-gray-600 mb-2">Método de intercambio</div>
        <div className="flex gap-2 flex-wrap">
          <button className="px-2 md:px-3 py-1.5 md:py-2 rounded-lg border text-sm md:text-base">Créditos</button>
          <button className="px-2 md:px-3 py-1.5 md:py-2 rounded-lg border text-sm md:text-base">Efectivo</button>
          <button className="px-2 md:px-3 py-1.5 md:py-2 rounded-lg border text-sm md:text-base">Híbrido</button>
        </div>
      </div>
      <div className="mt-4">
        <button onClick={publish} className="btn-primary w-full text-sm md:text-base py-2 md:py-2">Publicar</button>
      </div>
    </div>
  )
}
