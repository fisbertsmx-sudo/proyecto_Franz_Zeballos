import { useRouter } from 'next/router'
import { useApp } from '../../components/AppContext'
import BackButton from '../../components/BackButton'

export default function ProductDetail(){
  const router = useRouter()
  const { id } = router.query
  const { products, requestItem, toggleSave } = useApp()
  const item = (products || []).find(p=>p.id===id) || (products && products[0]) || { title:'Cargando...', image:'' }

  async function handleRequest(){
    const res = requestItem(item.id)
    if(res.ok) alert('Solicitud enviada. Créditos descontados.')
    else alert(res.msg || 'No fue posible solicitar')
  }

  return (
    <main className="max-w-2xl mx-auto pt-6 p-4">
      <div className="mb-4">
        <BackButton />
      </div>
      <div className="bg-white rounded-xl overflow-hidden border border-[var(--softgray)]">
        <div className="h-72 bg-gray-100">
          {item.image && <img src={item.image} className="w-full h-full object-cover" />}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold">{item.title}</h1>
              <div className="text-sm text-gray-500">{item.condition} • {item.distance}</div>
            </div>
            <div className="text-green-600 font-bold text-xl">{item.price} ✪</div>
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={handleRequest} className="btn-primary flex-1">Solicitar</button>
            <button onClick={()=> router.push('/social')} className="flex-1 px-4 py-2 rounded-lg border">Contactar</button>
            <button onClick={()=> toggleSave(item.id)} className="px-3 py-2 rounded-lg border">Guardar</button>
          </div>
        </div>
      </div>
    </main>
  )
}
