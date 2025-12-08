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
    const item = {
      id,
      title: data.title || 'Sin título',
      condition: data.condition || 'Usado',
      price: data.price || 0,
      distance: '0.5km',
      image: data.image || 'https://images.unsplash.com/photo-1526178619724-1d6a3b8d7b7a?auto=format&fit=crop&w=800&q=60'
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
