import { useState } from 'react'
import { useApp } from './AppContext'

export default function SocialFeed(){
  const { posts, addPost } = useApp()
  const [text, setText] = useState('')
  const { addToast } = useApp()

  function create(){
    if(!text.trim()) return
    addPost(text.trim())
    setText('')
    addToast('Post creado', { type: 'info' })
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="¿Qué quieres compartir?" className="flex-1 px-4 py-2 rounded-lg border" />
        <button onClick={create} className="px-3 py-2 rounded-lg bg-[var(--primary)] text-white">Crear</button>
      </div>
      {posts.map(p=> (
        <div key={p.id} className="bg-white rounded-xl p-3 border border-[var(--softgray)]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200" />
            <div>
              <div className="font-semibold">{p.author}</div>
              <div className="text-xs text-gray-500">{p.time}</div>
            </div>
          </div>
          <div className="mb-2">{p.content}</div>
          <div className="flex gap-4 text-sm text-gray-500">
            <div>❤ {p.likes}</div>
            <div>💬 {p.comments}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
