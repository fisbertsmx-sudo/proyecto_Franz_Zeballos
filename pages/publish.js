import PublishForm from '../components/PublishForm'
import FAB from '../components/FAB'
import BackButton from '../components/BackButton'

export default function Publish(){
  return (
    <main className="max-w-lg mx-auto pt-12 p-4">
      <div className="mb-4"><BackButton /></div>
      <h2 className="text-2xl font-bold mb-4">Publicar artículo o servicio</h2>
      <PublishForm />
      <FAB />
    </main>
  )
}
