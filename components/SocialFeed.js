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
    <div className="space-y-4 p-3 md:p-4">
      <div className="flex items-center gap-2 flex-col sm:flex-row">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="¿Qué quieres compartir?" className="w-full sm:flex-1 px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base" />
        <button onClick={create} className="w-full sm:w-auto px-3 md:px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm md:text-base">Crear</button>
      </div>
      {posts.map(p=> (
        <div key={p.id} className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 border border-[var(--softgray)]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gray-200 flex-shrink-0" />
            <div className="min-w-0">
              <div className="font-semibold text-sm md:text-base truncate">{p.author}</div>
              <div className="text-xs text-gray-500">{p.time}</div>
            </div>
          </div>
          <div className="mb-2 text-sm md:text-base">{p.content}</div>
          <div className="flex gap-4 text-xs md:text-sm text-gray-500">
            <div>❤ {p.likes}</div>
            <div>💬 {p.comments}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
