import { useRouter } from 'next/router'
import { useState } from 'react'
import { useApp } from '../../components/AppContext'
import BackButton from '../../components/BackButton'

export default function ProductDetail(){
  const router = useRouter()
  const { id } = router.query
  const { products, requestItem, toggleSave } = useApp()
  const { addToast } = useApp()
  const [imgError, setImgError] = useState(false)
  const item = (products || []).find(p=>p.id===id) || (products && products[0]) || { title:'Cargando...', image:'' }

  async function handleRequest(){
    const res = requestItem(item.id)
    if(res.ok) addToast('Solicitud enviada. Créditos descontados.', { type: 'info' })
    else addToast(res.msg || 'No fue posible solicitar', { type: 'error' })
  }

  return (
    <main className="w-full max-w-lg mx-auto pt-4 md:pt-8 p-3 md:p-4">
      <div className="mb-4"><BackButton /></div>
      <div className="bg-white rounded-lg md:rounded-xl shadow-lg border p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 relative">
        <div className="absolute -top-8 left-6 w-16 h-16 hidden md:block">
          <img src="/leaf-eco.svg" alt="Ecotruque" className="w-full h-full animate-bounce-slow" />
        </div>
        <div className="flex-shrink-0 w-full md:w-56 h-40 md:h-44 bg-gray-100 rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center">
          {item.image && !imgError ? (
            <img 
              src={item.image} 
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-lg md:rounded-xl shadow-md" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">📦</div>
                <div className="text-sm text-gray-600">Imagen no disponible</div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="text-lg md:text-2xl font-bold text-green-700 mb-1 flex items-center gap-2">
              <img src="/leaf-eco.svg" alt="Ecotruque" className="w-5 md:w-7 h-5 md:h-7 inline-block md:hidden mr-1" /> Ecotruque
            </div>
            <h1 className="text-lg md:text-xl font-bold mb-2">{item.title}</h1>
            <div className="text-gray-500 text-xs md:text-sm mb-2">{item.condition} • {item.distance}</div>
            <div className="text-green-600 font-bold text-base md:text-lg mb-2">{item.price} ✪</div>
            <p className="mb-3 text-gray-700 text-sm md:text-base">{item.description || 'Sin descripción.'}</p>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={handleRequest} className="btn-primary flex-1 text-sm md:text-base py-2 md:py-2">Solicitar</button>
            <button onClick={()=> router.push('/social')} className="flex-1 px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base">Contactar</button>
            <button onClick={()=> toggleSave(item.id)} className="px-2 md:px-3 py-2 rounded-lg border text-sm md:text-base">Guardar</button>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-green-700 text-sm md:text-base font-semibold flex flex-col items-center">
        <img src="/leaf-eco.svg" alt="Ecotruque" className="w-7 md:w-8 h-7 md:h-8 mb-2 animate-bounce-slow" />
        ¿Te gustó? <span className="text-green-600">¡Comparte y ayuda a crecer Ecotruque!</span>
      </div>
    </main>
  )
}
