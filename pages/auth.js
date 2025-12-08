import AuthForm from '../components/AuthForm'

export default function Auth(){
  return (
    <main className="w-full max-w-md mx-auto pt-6 md:pt-12 p-3 md:p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-2">Ecotruque</h2>
      <div className="text-base md:text-lg text-gray-600 mb-4">Crear cuenta / Iniciar sesión</div>
      <AuthForm />
    </main>
  )
}
