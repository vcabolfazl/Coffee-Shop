import React from 'react'
import { useRoutes } from 'react-router-dom'
import Router from './Pages/Router';
import { useState } from 'react';
import { useEffect } from 'react';
// import Svg from './components/svg/svg';
export default function App() {

  const router = useRoutes(Router)
  const [loader, setLoder] = useState(false)
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
      {/* <Svg /> */}
      {router}
    </>
  )
}
