import React, { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import Router from './Pages/Router';
import Header from './Components/Header';
import Svg from './Components/Svg';
import Footer from './Components/Footer';
export default function App() {
  const router = useRoutes(Router)

  const [loader, setLoder] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router])
  
  useEffect(() => {

    setLoder(true)
  }, [router])

  if (!loader) {
    return (
      <div className='overlay fixed inset-0 h-full z-10 flex items-center bg-'>
        <img alt='' src='/images/gif/1.gif' className='object-cover' />
      </div>
    )
  }
  return (
    <>
      <Svg />
      {router}
      <Header />
      <Footer />
    </>
  )
}
