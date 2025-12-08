import { useState } from 'react'

const slides = [
  {id:1, title:'Tu consumo puede cambiar el planeta.', subtitle:'Descubre alternativas circulares', image:'/placeholder-earth.png'},
  {id:2, title:'Comparte, intercambia y reutiliza.', subtitle:'Conecta con tu comunidad', image:'/placeholder-community.png'},
  {id:3, title:'Crea impacto sin gastar dinero.', subtitle:'Gana créditos y sube de nivel', image:'/placeholder-impact.png'}
]

export default function OnboardingCarousel(){
  const [idx, setIdx] = useState(0)
  return (
    <div className="p-3 md:p-6">
      <div className="h-48 md:h-64 bg-white rounded-lg md:rounded-xl flex flex-col items-center justify-center mb-4">
        <div className="text-lg md:text-2xl font-bold text-center px-2">{slides[idx].title}</div>
        <div className="text-xs md:text-sm text-gray-500 mt-2 px-2 text-center">{slides[idx].subtitle}</div>
      </div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-3">
        <div className="flex gap-2">
          {slides.map((s,i)=> (
            <button key={s.id} onClick={()=>setIdx(i)} className={`w-2.5 md:w-3 h-2.5 md:h-3 rounded-full transition-colors ${i===idx? 'bg-[var(--darkgreen)]': 'bg-gray-300'}`} />
          ))}
        </div>
        <div className="w-full sm:w-auto">
          {idx===slides.length-1 ? (
            <button onClick={()=> window.location.href = '/auth'} className="btn-primary w-full sm:w-auto text-sm md:text-base py-2">Crear cuenta</button>
          ) : (
            <button onClick={()=>setIdx((idx+1)%slides.length)} className="w-full sm:w-auto px-3 md:px-4 py-2 bg-white border border-[var(--softgray)] rounded-lg text-sm md:text-base">Siguiente</button>
          )}
        </div>
      </div>
    </div>
  )
}
