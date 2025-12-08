import Link from 'next/link'

export default function ProductCard({item}){
  return (
    <Link href={`/product/${item.id}`}>
      <div className="card cursor-pointer overflow-hidden group hover:border-green-400">
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative overflow-hidden">
          <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img src="/leaf-eco.svg" alt="eco" className="absolute top-3 left-3 w-7 h-7 opacity-90 group-hover:animate-bounce-slow drop-shadow" />
          <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.condition}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start gap-2 mb-2">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 truncate group-hover:text-green-700 transition">{item.title}</h3>
              <div className="text-xs text-gray-400 mt-1">📍 {item.distance}</div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="text-green-600 font-bold text-lg">{item.price} ✪</div>
            <div className="text-xs bg-green-50 px-2 py-1 rounded text-green-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ver detalles
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
