export default function Toasts({ toasts=[] }){
  return (
    <div className="fixed right-4 bottom-24 space-y-2 z-50">
      {toasts.map(t=> (
        <div key={t.id} className={`max-w-xs px-4 py-2 rounded-lg shadow-md text-sm ${t.type==='error' ? 'bg-red-50 text-red-800' : 'bg-white text-gray-800'}`}>
          {t.message}
        </div>
      ))}
    </div>
  )
}
