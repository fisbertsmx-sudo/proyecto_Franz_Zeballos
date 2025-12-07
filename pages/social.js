import SocialFeed from '../components/SocialFeed'
import BackButton from '../components/BackButton'

export default function Social(){
  return (
    <main className="max-w-2xl mx-auto pt-8 p-4">
      <div className="mb-4"><BackButton /></div>
      <h2 className="text-2xl font-bold px-4 mb-4">Comunidad</h2>
      <SocialFeed />
    </main>
  )
}
