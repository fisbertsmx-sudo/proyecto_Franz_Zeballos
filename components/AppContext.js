import { createContext, useContext, useEffect, useState } from 'react'
import { products as initialProducts, posts as initialPosts, user as initialUser } from '../data/sampleData'

const AppContext = createContext(null)

export function AppProvider({ children }){
  const [products, setProducts] = useState([])
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const [toasts, setToasts] = useState([])

  useEffect(()=>{
    try{
      const p = JSON.parse(localStorage.getItem('products'))
      const ps = JSON.parse(localStorage.getItem('posts'))
      const u = JSON.parse(localStorage.getItem('user'))
      setProducts(p && Array.isArray(p) ? p : initialProducts)
      setPosts(ps && Array.isArray(ps) ? ps : initialPosts)
      setUser(u ? {...u, loggedIn: !!u.loggedIn} : {...initialUser, loggedIn: false})
    }catch(e){
      setProducts(initialProducts)
      setPosts(initialPosts)
      setUser({...initialUser, loggedIn: false})
    }
  },[])

  useEffect(()=>{ if(products.length) localStorage.setItem('products', JSON.stringify(products)) },[products])
  useEffect(()=>{ if(posts.length) localStorage.setItem('posts', JSON.stringify(posts)) },[posts])
  useEffect(()=>{ if(user) localStorage.setItem('user', JSON.stringify(user)) },[user])
  useEffect(()=>{ localStorage.setItem('toasts', JSON.stringify(toasts || [])) },[toasts])

  function addProduct(data){
    const id = Date.now().toString()
    const colors = ['#FF6B6B', '#4ECDC4', '#95E1D3', '#F38181', '#FFD93D', '#A8D8EA']
    const emojis = ['🚴', '☕', '🪑', '💻', '💡', '📚']
    const randomIndex = Math.floor(Math.random() * colors.length)
    const color = colors[randomIndex]
    const emoji = emojis[randomIndex]
    
    const svgImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='${encodeURIComponent(color)}' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='72' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${emoji}%3C/text%3E%3C/svg%3E`
    
    const item = {
      id,
      title: data.title || 'Sin título',
      condition: data.condition || 'Usado',
      price: data.price || 0,
      distance: '0.5km',
      image: data.image || svgImage
    }
    setProducts(prev=>[item,...prev])
    return item
  }

  function addPost(content){
    const p = { id: Date.now().toString(), author: user?.name || 'Anon', time: 'Ahora', content, likes:0, comments:0 }
    setPosts(prev=>[p,...prev])
    return p
  }

  function toggleSave(id){
    setProducts(prev=> prev.map(it=> it.id===id ? {...it, saved: !it.saved} : it))
  }

  function requestItem(id){
    const item = products.find(p=>p.id===id)
    if(!item) return { ok:false, msg:'No encontrado' }
    if(user && user.credits >= item.price){
      setUser(u=> ({...u, credits: u.credits - item.price }))
      return { ok:true }
    }
    return { ok:false, msg:'Créditos insuficientes' }
  }

  function updateUser(data){ setUser(u=>({...u,...data})) }

  function login(payload){
    const newUser = { ...initialUser, ...payload, loggedIn: true }
    setUser(newUser)
    return newUser
  }

  function logout(){
    const loggedOut = {...initialUser, loggedIn: false}
    setUser(loggedOut)
    return loggedOut
  }

  function addToast(message, opts={ type: 'info', duration: 3500 }){
    const id = Date.now().toString()
    const t = { id, message, type: opts.type || 'info' }
    setToasts(prev => [t, ...prev])
    if(opts.duration !== 0){
      setTimeout(()=> setToasts(prev => prev.filter(x=>x.id!==id)), opts.duration || 3500)
    }
    return id
  }

  return (
    <AppContext.Provider value={{ products, posts, user, addProduct, addPost, toggleSave, requestItem, updateUser, login, logout, toasts, addToast }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp(){
  const ctx = useContext(AppContext)
  if(!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

export default AppContext
