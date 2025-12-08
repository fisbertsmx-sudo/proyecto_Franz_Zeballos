import '../styles/globals.css'
import { useEffect } from 'react'
import BottomNav from '../components/BottomNav'
import { AppProvider, useApp } from '../components/AppContext'
import Toasts from '../components/Toasts'

function AppShell({ Component, pageProps }){
  const { toasts } = useApp()
  return (
    <div className="min-h-screen pb-20">
      <Component {...pageProps} />
      <BottomNav />
      <Toasts toasts={toasts} />
    </div>
  )
}

export default function App({ Component, pageProps }){
  useEffect(()=>{},[])
  return (
    <AppProvider>
      <AppShell Component={Component} pageProps={pageProps} />
    </AppProvider>
  )
}
