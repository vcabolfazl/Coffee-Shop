import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { SignupError, Signupsuccess } from '../Alert/Alerts'
import useInput from '../Hooks/useInput'
import useShowPassword from '../Hooks/useShowPassword'
export default function Login() {
 useEffect(() => {
  window.scroll(0, 0)
 }, [])
 const [usernameValue, usernameBinding, userNamereset] = useInput('')
 const [password, PasswordBinding, passwordReset] = useInput('')
 const [showPasswordStatus, showPasswordType, showPasswordStatusValue, showPasswordTypeValue] = useShowPassword('eye-slash')
 const isLogin = (e) => {
  e.preventDefault()
  const pattern = /^[a-zA-Z0-9_]+$/;
  if (pattern.test(usernameValue) && password.length) {
   <>
    {/* {Signupsuccess("ورود با موفقیت انجام شد")} */}
   </>
   userNamereset()
   passwordReset()
  } else {
   <>
    {/* {SignupError("اطلاعات وارد شده صحیح نیست")} */}
   </>
   userNamereset()
   passwordReset()
  }
 }

 return (
  <>
   <div className="container flex justify-center items-center h-[80vh] font-danaB mt-28">
    <div className='relative'>
     <div className='w-full flex items-start absolute top-[-50px]'>
      <img alt='' src="/assets/images/22.png" className="coffeeIcone w-44 absolute left-0 ml-[-67px]" />
     </div>
     <div className="w-full flex items-center justify-center mt-[10%]">
      <form onSubmit={isLogin} className="form space-y-4 rounded-2xl backdrop-blur-[2px] text-center p-10 bg-gray-300/40 dark:bg-zinc-950/20 z-10 w-full">
       {/* <i className="icone"> */}
       <div className='relative flex items-center'>
        <svg className="w-6 h-6 absolute text-zinc-500 left-1">
         <use href="#userIcone"></use>
        </svg>
        {/* </i> */}
        <input type="text" {...usernameBinding} placeholder="نام کاربری" className="w-full p-3 rounded-md text-base" maxLength="15" required />
       </div>
       <div className='relative flex items-center'>
        <svg className="w-6 h-6 absolute text-zinc-500 left-1 cursor-pointer" onClick={() => {
         showPasswordStatusValue()
         showPasswordTypeValue()
        }}>
         <use href={`#${showPasswordStatus}`}></use>
        </svg>
        <input type={showPasswordType} {...PasswordBinding} placeholder="رمز عبور" className="outline-none w-full p-3 rounded-md text-base" maxLength="15" required />
       </div>
       <input type="submit" value="ورود" className="border text-orange-300 border-orange-300 cursor-pointer transition-colors hover:bg-orange-300 hover:text-white outline-none w-full p-3 rounded-md text-base" />
       <p className="mt-3 dark:text-white text-sm">حساب کاربری ندارید؟ <Link to={'/signup'} className='text-orange-300'> اکنون ثبت نام کنید </Link></p>
       <p className="mt-3 dark:text-white text-sm">رمز عبور خود را فراموش کردید؟ <Link to={'/forgotPassword'} className='text-orange-300'> فراموشی رمز عبور</Link></p>
      </form>
     </div>
     <div className='w-full flex items-center justify-center absolute'>
      <img alt='' src="/assets/images/11.png" className=" lockIcone w-32 absolute right-0 mr-[-67px] rotate-12" />
     </div>

    </div>
   </div>
  </>
 )
}
