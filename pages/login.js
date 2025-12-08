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
    <main className="max-w-md mx-auto pt-12 p-4">
      <h2 className="text-2xl font-bold mb-2">Ecotruque</h2>
      <div className="text-lg text-gray-600 mb-4">Iniciar sesión</div>
      <form onSubmit={handleLogin} className="bg-white p-4 rounded-xl border border-[var(--softgray)]">
        <div className="mb-3">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Correo electrónico" className="w-full px-4 py-2 rounded-lg border" />
        </div>
        <div className="mb-3">
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Contraseña" type="password" className="w-full px-4 py-2 rounded-lg border" />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="btn-primary flex-1">Entrar</button>
          <a href="/auth" className="flex-1 px-4 py-2 rounded-lg border text-center">Crear cuenta</a>
        </div>
      </form>
    </main>
  )
}
