import PublishForm from '../components/PublishForm'
import FAB from '../components/FAB'
import BackButton from '../components/BackButton'

export default function Publish(){
  return (
    <main className="w-full max-w-lg mx-auto pt-6 md:pt-12 p-3 md:p-4">
      <div className="mb-4"><BackButton /></div>
      <h2 className="text-xl md:text-2xl font-bold mb-2">Ecotruque</h2>
      <div className="text-base md:text-lg text-gray-600 mb-4">Publicar artículo o servicio</div>
      <PublishForm />
      <FAB />
    </main>
  )
}
