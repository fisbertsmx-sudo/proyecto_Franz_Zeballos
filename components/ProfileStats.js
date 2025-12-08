export default function ProfileStats({user}){
  return (
    <div className="p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-[var(--softgray)]">
      <div className="flex items-center gap-3 md:gap-4 flex-wrap">
        <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-gray-200 flex items-center justify-center text-xs md:text-base flex-shrink-0">{user.initials}</div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-sm md:text-base truncate">{user.name}</div>
          <div className="text-xs md:text-sm text-gray-500">{user.level}</div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-xs md:text-sm text-gray-500">Créditos</div>
          <div className="text-lg md:text-2xl font-bold text-green-600">{user.credits} ✪</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 md:gap-4">
        <div className="bg-[var(--cream)] p-2 md:p-3 rounded-lg text-center">
          <div className="text-xs md:text-sm text-gray-500">kg de basura evitada</div>
          <div className="font-semibold text-sm md:text-base">{user.kg_saved} kg</div>
        </div>
        <div className="bg-[var(--cream)] p-2 md:p-3 rounded-lg text-center">
          <div className="text-xs md:text-sm text-gray-500">Objetos salvados</div>
          <div className="font-semibold text-sm md:text-base">{user.items_saved}</div>
        </div>
      </div>
    </div>
  )
}
