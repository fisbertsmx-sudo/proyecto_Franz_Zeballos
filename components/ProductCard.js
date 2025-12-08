import Link from 'next/link'

export default function ProductCard({item}){
  return (
    <Link href={`/product/${item.id}`}>
      <div className="card cursor-pointer overflow-hidden group">
        <div className="h-44 bg-gray-100 flex items-center justify-center relative">
          <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-200" />
          <img src="/leaf-eco.svg" alt="eco" className="absolute top-2 left-2 w-7 h-7 opacity-80 group-hover:animate-bounce-slow" />
        </div>
        <div className="p-3">
          <div className="flex justify-between items-start gap-3">
            <div className="flex-1">
              <div className="font-semibold truncate">{item.title}</div>
              <div className="text-xs text-gray-500">{item.condition} • {item.distance}</div>
            </div>
            <div className="text-right">
              <div className="text-green-600 font-bold">{item.price} ✪</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
