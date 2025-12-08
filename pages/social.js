import SocialFeed from '../components/SocialFeed'
import BackButton from '../components/BackButton'

export default function Social(){
  return (
    <main className="max-w-2xl mx-auto pt-8 p-4">
      <div className="mb-4"><BackButton /></div>
      <div className="flex items-center gap-2 px-4 mb-2">
        <img src="/leaf-eco.svg" alt="Ecotruque" className="w-8 h-8 animate-bounce-slow" />
        <h2 className="text-2xl font-bold">Ecotruque</h2>
      </div>
      <div className="text-lg text-gray-600 px-4 mb-4">Comunidad</div>
      <SocialFeed />
    </main>
  )
}
