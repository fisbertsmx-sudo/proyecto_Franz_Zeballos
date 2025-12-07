export default function ProfileStats({user}){
  return (
    <div className="p-4 bg-white rounded-xl border border-[var(--softgray)]">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">{user.initials}</div>
        <div>
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm text-gray-500">{user.level}</div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-sm text-gray-500">Créditos</div>
          <div className="text-2xl font-bold text-green-600">{user.credits} ✪</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-[var(--cream)] p-3 rounded-lg text-center">
          <div className="text-sm text-gray-500">kg de basura evitada</div>
          <div className="font-semibold">{user.kg_saved} kg</div>
        </div>
        <div className="bg-[var(--cream)] p-3 rounded-lg text-center">
          <div className="text-sm text-gray-500">Objetos salvados</div>
          <div className="font-semibold">{user.items_saved}</div>
        </div>
      </div>
    </div>
  )
}
