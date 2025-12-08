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
    <main className="w-full max-w-full mx-auto pt-4 md:pt-6 px-0">
      <Header onSearch={setQ} />
      <section className="px-3 md:px-4">
        <div className="hero p-4 md:p-8 mb-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 relative">
          <div className="absolute -top-8 left-3 md:left-6 w-12 md:w-16 h-12 md:h-16 hidden md:block">
            <img src="/leaf-eco.svg" alt="Ecotruque" className="w-full h-full animate-bounce-slow" />
          </div>
          <div className="flex-1 w-full">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 flex items-center gap-2">
              <img src="/leaf-eco.svg" alt="Ecotruque" className="w-6 md:w-8 h-6 md:h-8 inline-block md:hidden mr-1" /> 
              <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">Ecotruque</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mb-3 md:mb-5">El marketplace donde compartes, intercambias y reutilizas. Gana créditos y crea impacto ambiental.</p>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              <a href="/auth" className="btn-primary text-sm md:text-base px-3 md:px-4 py-2">Crear cuenta</a>
              <button onClick={()=> document.getElementById('main-search')?.focus()} className="px-3 md:px-5 py-2 rounded-lg border-2 border-green-200 hover:bg-green-50 transition font-semibold text-sm md:text-base">Explorar</button>
            </div>
          </div>
          <div className="w-40 md:w-56 h-32 md:h-40 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl soft-border flex items-center justify-center relative shadow-lg flex-shrink-0">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%234CAF50' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='80' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🌱%3C/text%3E%3C/svg%3E" alt="eco" className="w-full h-full object-cover rounded-2xl" />
            <img src="/leaf-eco.svg" alt="Ecotruque" className="absolute bottom-2 md:bottom-3 right-2 md:right-3 w-8 md:w-12 h-8 md:h-12 animate-bounce-slow drop-shadow-lg" />
          </div>
        </div>
      </section>
      <div className="px-3 md:px-4">
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-3 md:-mx-4 px-3 md:px-4">
          {filters.map(f=> <button key={f} className="px-3 md:px-4 py-2 rounded-full border-2 border-green-200 hover:bg-green-50 hover:border-green-400 transition whitespace-nowrap font-semibold text-gray-700 text-sm md:text-base">{f}</button>)}
        </div>
        <div id="product-list" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map(item=> <ProductCard key={item.id} item={item} />)}
        </div>
      </div>
      <FAB />
    </main>
  )
}
