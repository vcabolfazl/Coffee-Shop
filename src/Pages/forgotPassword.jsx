import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

// import { SignupError, Signupsuccess } from '../Alert/Alerts'

import useInput from '../Hooks/useInput'
export default function ForgotPassword() {
 useEffect(() => {
  window.scroll(0, 0)
 }, [])
 const [emailValue, emailBinding, emailReset] = useInput('')
 const isLogin = (e) => {
  e.preventDefault()
  const pattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
  if (pattern.test(emailValue)) {
   <>
    {/* { Signupsuccess("ایمیل خود را چک کنید لینک تعویض پسورد ارسال شد") } */}
   </>
   emailReset()
  } else {
   <>
    {/* { SignupError("ایمیل وارد شده صحیح نیست") } */}
   </>
   emailReset()
  }
 }

 return (
  <>
   <div className="container flex justify-center items-center h-[100vh] font-danaB mt-5">
    <div className='relative'>
     <div className='w-full flex items-start absolute top-[-50px]'>
      <img alt='' src="/assets/images/key.png" className="coffeeIcone w-48 absolute left-0 ml-[-87px] rotate-[-15deg]" />
     </div>
     <div className="w-full flex items-center justify-center mt-[10%]">
      <form onSubmit={isLogin} className="form space-y-4 rounded-2xl backdrop-blur-[2px] text-center p-10 bg-gray-300/40 dark:bg-zinc-950/20 z-10 w-full">
       {/* <i className="icone"> */}
       <div className='relative flex items-center'>
        <svg className="w-6 h-6 absolute text-zinc-500 left-1">
         <use href="#email"></use>
        </svg>
        {/* </i> */}
        <input {...emailBinding} type="email" placeholder="ادرس ایمیل" className="outline-none w-full p-3 rounded-md text-base" required />
       </div>
       <input type="submit" value="ارسال" className="border text-orange-300 border-orange-300 cursor-pointer transition-colors hover:bg-orange-300 hover:text-white outline-none w-full p-3 rounded-md text-base" />
       <p className="mt-3 dark:text-white text-sm">حساب کاربری ندارید؟ <Link to={'/signup'} className='text-orange-300'> اکنون ثبت نام کنید </Link></p>
       <p className="mt-3 dark:text-white text-sm">حساب کاربری دارید؟ <Link to={'/Login'} className='text-orange-300'> وارد شوید </Link></p>
      </form>
     </div>
     <div className='w-full flex items-center justify-center absolute'>
      <img alt='' src="/assets/images/cof.png" className=" lockIcone w-44 absolute right-0 mr-[-67px] rotate-4" />
     </div>

    </div>
   </div>
  </>
 )
}