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
        <div className="hero p-6 mb-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Marketplace Circular</h1>
            <p className="text-gray-600 mb-4">Comparte, intercambia y reutiliza con tu comunidad. Gana créditos y sube de nivel ayudando al planeta.</p>
            <div className="flex gap-3">
              <a href="/auth" className="btn-primary">Crear cuenta</a>
              <button onClick={()=> document.getElementById('main-search')?.focus()} className="px-4 py-2 rounded-lg border">Explorar</button>
            </div>
          </div>
          <div className="w-48 h-36 bg-white rounded-xl soft-border flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1503342452485-86f7f2a1e0a5?auto=format&fit=crop&w=600&q=60" alt="eco" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>
      <div className="px-4">
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
          {filters.map(f=> <button key={f} className="px-3 py-2 rounded-full border whitespace-nowrap">{f}</button>)}
        </div>
        <div id="product-list" className="grid grid-cols-1 gap-4">
          {list.map(item=> <ProductCard key={item.id} item={item} />)}
        </div>
      </div>
      <FAB />
    </main>
  )
}
