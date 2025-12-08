import ProfileStats from '../components/ProfileStats'
import { useApp } from '../components/AppContext'
import BackButton from '../components/BackButton'

export default function Profile(){
  const { user } = useApp()
  return (
    <main className="w-full max-w-md mx-auto pt-4 md:pt-8 p-3 md:p-4">
      <div className="mb-4"><BackButton /></div>
      {user?.loggedIn ? (
        <ProfileStats user={user} />
      ) : (
        <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl border border-[var(--softgray)] text-center relative">
          <img src="/leaf-eco.svg" alt="Ecotruque" className="w-9 md:w-10 h-9 md:h-10 mx-auto mb-2 animate-bounce-slow" />
          <div className="text-xl md:text-2xl font-bold text-green-700 mb-2">Ecotruque</div>
          <div className="mb-3 text-sm md:text-base">Visita pública: descubre el impacto de la comunidad.</div>
          <div className="mb-4 grid grid-cols-2 gap-3 md:gap-4">
            <div className="bg-[var(--cream)] p-2 md:p-3 rounded-lg shadow-sm">
              <div className="text-xs md:text-sm text-gray-500">kg de basura evitada</div>
              <div className="font-semibold text-sm md:text-base">{user?.kg_saved ?? 0} kg</div>
            </div>
            <div className="bg-[var(--cream)] p-2 md:p-3 rounded-lg shadow-sm">
              <div className="text-xs md:text-sm text-gray-500">Objetos salvados</div>
              <div className="font-semibold text-sm md:text-base">{user?.items_saved ?? 0}</div>
            </div>
          </div>
          <a href="/login" className="btn-primary block text-sm md:text-base py-2 md:py-2">Iniciar sesión</a>
        </div>
      )}
      <div className="mt-6">
        <h3 className="font-semibold mb-2 text-sm md:text-base">Impacto</h3>
        <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-[var(--softgray)] text-sm md:text-base">Aquí podría ir un dashboard más detallado</div>
      </div>
    </main>
  )
}
