import AuthForm from '../components/AuthForm'

export default function Auth(){
  return (
    <main className="max-w-md mx-auto pt-12 p-4">
      <h2 className="text-2xl font-bold mb-2">Ecotruque</h2>
      <div className="text-lg text-gray-600 mb-4">Crear cuenta / Iniciar sesión</div>
      <AuthForm />
    </main>
  )
}
