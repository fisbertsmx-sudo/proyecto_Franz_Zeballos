import '../styles/globals.css'
import { useEffect } from 'react'
import BottomNav from '../components/BottomNav'
import { AppProvider } from '../components/AppContext'

export default function App({ Component, pageProps }){
  useEffect(()=>{},[])
  return (
    <AppProvider>
      <div className="min-h-screen pb-20">
        <Component {...pageProps} />
        <BottomNav />
      </div>
    </AppProvider>
  )
}
