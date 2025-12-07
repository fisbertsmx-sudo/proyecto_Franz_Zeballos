import Link from 'next/link'

export default function ProductCard({item}){
  return (
    <Link href={`/product/${item.id}`}>
      <div className="block bg-white rounded-xl shadow-sm overflow-hidden border border-[var(--softgray)]">
        <div className="h-44 bg-gray-100 flex items-center justify-center">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        </div>
        <div className="p-3">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold">{item.title}</div>
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
