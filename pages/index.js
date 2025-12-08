import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import FAB from '../components/FAB'
import { useState } from 'react'
import { useApp } from '../components/AppContext'

export default function Home(){
  const [q, setQ] = useState('')
  const filters = ['Ropa','Tecnología','Hogar']
  const { products } = useApp()
  const list = (products || []).filter(p=> p.title.toLowerCase().includes(q.toLowerCase()))
  return (
    <main className="max-w-2xl mx-auto pt-6">
      <Header onSearch={setQ} />
      <section className="px-4">
        <div className="hero p-8 mb-6 flex flex-col md:flex-row items-center gap-6 relative">
          <div className="absolute -top-8 left-6 w-16 h-16 hidden md:block">
            <img src="/leaf-eco.svg" alt="Ecotruque" className="w-full h-full animate-bounce-slow" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-3 flex items-center gap-2">
              <img src="/leaf-eco.svg" alt="Ecotruque" className="w-8 h-8 inline-block md:hidden mr-1" /> 
              <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">Ecotruque</span>
            </h1>
            <p className="text-gray-600 mb-5 text-lg">El marketplace donde compartes, intercambias y reutilizas. Gana créditos y crea impacto ambiental.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="/auth" className="btn-primary">Crear cuenta</a>
              <button onClick={()=> document.getElementById('main-search')?.focus()} className="px-5 py-2 rounded-lg border-2 border-green-200 hover:bg-green-50 transition font-semibold">Explorar</button>
            </div>
          </div>
          <div className="w-56 h-40 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl soft-border flex items-center justify-center relative shadow-lg">
            <img src="https://images.unsplash.com/photo-1503342452485-86f7f2a1e0a5?auto=format&fit=crop&w=600&q=60" alt="eco" className="w-full h-full object-cover rounded-2xl" />
            <img src="/leaf-eco.svg" alt="Ecotruque" className="absolute bottom-3 right-3 w-12 h-12 animate-bounce-slow drop-shadow-lg" />
          </div>
        </div>
      </section>
      <div className="px-4">
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
          {filters.map(f=> <button key={f} className="px-4 py-2 rounded-full border-2 border-green-200 hover:bg-green-50 hover:border-green-400 transition whitespace-nowrap font-semibold text-gray-700">{f}</button>)}
        </div>
        <div id="product-list" className="grid grid-cols-1 gap-4">
          {list.map(item=> <ProductCard key={item.id} item={item} />)}
        </div>
      </div>
      <FAB />
    </main>
  )
}
