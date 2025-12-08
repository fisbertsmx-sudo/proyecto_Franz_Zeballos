import { useRouter } from 'next/router'
import { useApp } from '../../components/AppContext'
import BackButton from '../../components/BackButton'

export default function ProductDetail(){
  const router = useRouter()
  const { id } = router.query
  const { products, requestItem, toggleSave } = useApp()
  const { addToast } = useApp()
  const item = (products || []).find(p=>p.id===id) || (products && products[0]) || { title:'Cargando...', image:'' }

  async function handleRequest(){
    const res = requestItem(item.id)
    if(res.ok) addToast('Solicitud enviada. Créditos descontados.', { type: 'info' })
    else addToast(res.msg || 'No fue posible solicitar', { type: 'error' })
  }

  return (
    <main className="max-w-lg mx-auto pt-8 p-4">
      <div className="mb-4"><BackButton /></div>
      <div className="bg-white rounded-xl shadow-lg border p-6 flex flex-col md:flex-row gap-6 relative">
        <div className="absolute -top-8 left-6 w-16 h-16 hidden md:block">
          <img src="/leaf-eco.svg" alt="Ecotruque" className="w-full h-full animate-bounce-slow" />
        </div>
        <div className="flex-shrink-0 w-full md:w-56 h-44 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          {item.image && <img src={item.image} className="w-full h-full object-cover rounded-xl shadow-md" />}
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="text-2xl font-bold text-green-700 mb-1 flex items-center gap-2">
              <img src="/leaf-eco.svg" alt="Ecotruque" className="w-7 h-7 inline-block md:hidden mr-1" /> Ecotruque
            </div>
            <h1 className="text-xl font-bold mb-2">{item.title}</h1>
            <div className="text-gray-500 text-sm mb-2">{item.condition} • {item.distance}</div>
            <div className="text-green-600 font-bold text-lg mb-2">{item.price} ✪</div>
            <p className="mb-3 text-gray-700">{item.description || 'Sin descripción.'}</p>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={handleRequest} className="btn-primary flex-1">Solicitar</button>
            <button onClick={()=> router.push('/social')} className="flex-1 px-4 py-2 rounded-lg border">Contactar</button>
            <button onClick={()=> toggleSave(item.id)} className="px-3 py-2 rounded-lg border">Guardar</button>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-green-700 text-base font-semibold flex flex-col items-center">
        <img src="/leaf-eco.svg" alt="Ecotruque" className="w-8 h-8 mb-2 animate-bounce-slow" />
        ¿Te gustó? <span className="text-green-600">¡Comparte y ayuda a crecer Ecotruque!</span>
      </div>
    </main>
      </div>
    </main>
  )
}
