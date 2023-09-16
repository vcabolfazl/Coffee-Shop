import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { SignupError, Signupsuccess } from '../Alert/Alerts'
import useInput from '../Hooks/useInput'
import useShowPassword from '../Hooks/useShowPassword'
import Alert from '../Components/Alert'
export default function Signup() {
 useEffect(() => {
  window.scroll(0, 0)
 }, [])
 const [nameValue, nameBinding, nameReset] = useInput('')
 const [userNameValue, userNameBinding, userNamereset] = useInput('')
 const [phoneValue, phoneBinding, phoneRest] = useInput('')
 const [emailValue, emailBinding, emailReset] = useInput('')
 const [passwordValue, PasswordBinding, passwordReset] = useInput('')
 const [rePasswordvalue, rePasswordBinding, rePasswordReset] = useInput('')
 const [showPasswordStatus, showPasswordType, showPasswordStatusValue, showPasswordTypeValue] = useShowPassword('')
 const [showRePasswordStatus, showRePasswordType, showRePasswordStatusValue, showRePasswordTypeValue] = useShowPassword('')

 const sendSingup = (e) => {
  e.preventDefault()
  const pattern = [/^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/, /^[a-zA-Z0-9_]+$/,];
  if (pattern[0].test(emailValue) && pattern[1].test(userNameValue) && phoneValue.length === 11 && passwordValue === rePasswordvalue && nameValue) {
   Alert("ثـبت نام با موفقیت انجام شد", "success")
   nameReset()
   userNamereset()
   phoneRest()
   emailReset()
   passwordReset()
   rePasswordReset()
  } else {
   Alert("اطلاعات وارد شده صحیح نیست", "warning")

  }
 }
 return (
  <>
   <div className="container flex justify-center items-center h-[80vh] font-danaB select-none mt-28" >
    <div className='relative'>
     <div className='w-full flex items-start absolute top-[-80px]'>
      <img alt='' src="/assets/images/1144.png" className="coffeeIcone w-56 absolute left-0 ml-[-100px]" />
     </div>
     <div className="w-full flex items-center justify-center mt-[10%]">
      <form onSubmit={sendSingup} className="form grid grid-cols-2 gap-4 rounded-2xl backdrop-blur-[2px] text-center p-10 bg-gray-300/40 dark:bg-zinc-950/20 z-10 w-full">
       {/* <i className="icone"> */}
       <div className='relative flex items-center'>
        <svg className="w-6 h-6 absolute text-zinc-500 left-1">
         <use href="#userAdd"></use>
        </svg>
        {/* </i> */}
        <input type="text" {...nameBinding} placeholder=" نام و نام خانوادگی " className="outline-none w-full p-3 rounded-md text-base" maxLength="25" required />
       </div >
       <div className='relative flex items-center'>
        <svg className="w-6 h-6 absolute text-zinc-500 left-1">
         <use href="#userIcone"></use>
        </svg>
        {/* </i> */}
        <input type="text" {...userNameBinding} placeholder=" نام کاربری " className="outline-none w-full p-3 rounded-md text-base" maxLength="25" required />
       </div>
       <div className='relative flex items-center'>
        <svg className="w-6 h-6 absolute text-zinc-500 left-1">
         <use href="#call"></use>
        </svg>
        {/* </i> */}
        <input type="number" {...phoneBinding} placeholder="شماره موبایل" className="outline-none w-full p-3 rounded-md text-base" maxLength="11" required />
       </div>
       <div className='relative flex items-center'>
        <svg className="w-6 h-6 absolute text-zinc-500 left-1 z-10">
         <use href="#email"></use>
        </svg>
        {/* </i> */}
        <input type="email" {...emailBinding} placeholder="آدرس ایمیل" className="outline-none w-full p-3 rounded-md text-base" maxLength="25" required />
       </div>
       <div className='relative flex items-center'>
        <svg className="w-6 h-6 absolute text-zinc-500 left-1 cursor-pointer" onClick={() => {
         showPasswordStatusValue()
         showPasswordTypeValue()
        }}>
         <use href={`#${showPasswordStatus}`}></use>
        </svg>
        <input type={showPasswordType} {...PasswordBinding} placeholder="رمز عبور" className="outline-none w-full p-3 rounded-md text-base" maxLength="20" required minLength={8} />
       </div>
       <div className='relative flex items-center'>
        <svg className="w-6 h-6 absolute text-zinc-500 left-1 cursor-pointer" onClick={() => {
         showRePasswordStatusValue()
         showRePasswordTypeValue()
        }}>
         <use href={`#${showRePasswordStatus}`}></use>
        </svg>
        <input type={showRePasswordType} {...rePasswordBinding} placeholder="تکرار رمز عبور" className="outline-none w-full p-3 rounded-md text-base" maxLength="20" required minLength={8} />
       </div>
       <input type="submit" value="ثبت نام" className="border text-orange-300 border-orange-300 cursor-pointer transition-colors hover:bg-orange-300 hover:text-white outline-none w-full p-3 rounded-md text-base" required />
       <p className="mt-3 dark:text-white text-sm">حساب کاربری دارید؟ <Link to={'/Login'} className='text-orange-300'> وارد شوید </Link></p>
      </form>
     </div>
     <div className='w-full flex items-center justify-center absolute'>
      <img alt='' src="/assets/images/23.png" className=" lockIcone w-32 absolute right-0 mr-[-67px] rotate-12" />
     </div>

    </div>
   </div>
  </>
 )
}
