import { useState } from 'react'
import { useApp } from '../components/AppContext'
import { useRouter } from 'next/router'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useApp()
  const router = useRouter()

  function handleLogin(e){
    e.preventDefault()
    // Simulado: aceptamos cualquier credencial
    login({ name: email || 'Usuario', email, credits: 100 })
    router.push('/')
  }

  return (
    <main className="w-full max-w-md mx-auto pt-6 md:pt-12 p-3 md:p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-2">Ecotruque</h2>
      <div className="text-base md:text-lg text-gray-600 mb-4">Iniciar sesión</div>
      <form onSubmit={handleLogin} className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-[var(--softgray)]">
        <div className="mb-3">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Correo electrónico" className="w-full px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base" />
        </div>
        <div className="mb-3">
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Contraseña" type="password" className="w-full px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base" />
        </div>
        <div className="flex gap-2 flex-col sm:flex-row">
          <button type="submit" className="btn-primary flex-1 text-sm md:text-base py-2 md:py-2">Entrar</button>
          <a href="/auth" className="flex-1 px-3 md:px-4 py-2 rounded-lg border text-center text-sm md:text-base">Crear cuenta</a>
        </div>
      </form>
    </main>
  )
}
