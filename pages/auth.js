import AuthForm from '../components/AuthForm'

export default function Auth(){
  return (
    <main className="max-w-md mx-auto pt-12 p-4">
      <h2 className="text-2xl font-bold mb-2">Crear cuenta / Iniciar sesión</h2>
      <AuthForm />
    </main>
  )
}
