import PublishForm from '../components/PublishForm'
import FAB from '../components/FAB'
import BackButton from '../components/BackButton'

export default function Publish(){
  return (
    <main className="max-w-lg mx-auto pt-12 p-4">
      <div className="mb-4"><BackButton /></div>
      <h2 className="text-2xl font-bold mb-2">Ecotruque</h2>
      <div className="text-lg text-gray-600 mb-4">Publicar artículo o servicio</div>
      <PublishForm />
      <FAB />
    </main>
  )
}
