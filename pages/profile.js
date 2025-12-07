import ProfileStats from '../components/ProfileStats'
import { useApp } from '../components/AppContext'
import BackButton from '../components/BackButton'

export default function Profile(){
  const { user } = useApp()
  return (
    <main className="max-w-md mx-auto pt-8 p-4">
      <div className="mb-4"><BackButton /></div>
      {user?.loggedIn ? (
        <ProfileStats user={user} />
      ) : (
        <div className="bg-white p-6 rounded-xl border border-[var(--softgray)] text-center">
          <div className="mb-3">Visita pública: descubre el impacto de la comunidad.</div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="bg-[var(--cream)] p-3 rounded-lg">
              <div className="text-sm text-gray-500">kg de basura evitada</div>
              <div className="font-semibold">{user?.kg_saved ?? 0} kg</div>
            </div>
            <div className="bg-[var(--cream)] p-3 rounded-lg">
              <div className="text-sm text-gray-500">Objetos salvados</div>
              <div className="font-semibold">{user?.items_saved ?? 0}</div>
            </div>
          </div>
          <a href="/login" className="btn-primary">Iniciar sesión</a>
        </div>
      )}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Impacto</h3>
        <div className="bg-white p-4 rounded-xl border border-[var(--softgray)]">Aquí podría ir un dashboard más detallado</div>
      </div>
    </main>
  )
}
