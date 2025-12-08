import Link from 'next/link'
import { useState } from 'react'

export default function ProductCard({item}){
  const [imgError, setImgError] = useState(false)
  
  return (
    <Link href={`/product/${item.id}`}>
      <div className="card cursor-pointer overflow-hidden group hover:border-green-400 h-full flex flex-col">
        <div className="h-32 md:h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative overflow-hidden flex-shrink-0">
          {!imgError ? (
            <img 
              loading="lazy" 
              src={item.image} 
              alt={item.title} 
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📦</div>
                <div className="text-xs text-gray-600">Imagen no disponible</div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img src="/leaf-eco.svg" alt="eco" className="absolute top-2 md:top-3 left-2 md:left-3 w-5 md:w-7 h-5 md:h-7 opacity-90 group-hover:animate-bounce-slow drop-shadow" />
          <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-green-600 text-white px-2 py-0.5 md:py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.condition}
          </div>
        </div>
        <div className="p-3 md:p-4 flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-800 truncate group-hover:text-green-700 transition text-sm md:text-base">{item.title}</h3>
              <div className="text-xs text-gray-400 mt-1">📍 {item.distance}</div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="text-green-600 font-bold text-base md:text-lg">{item.price} ✪</div>
            <div className="text-xs bg-green-50 px-2 py-0.5 md:py-1 rounded text-green-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ver detalles
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
