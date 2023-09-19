import React from 'react'
import useShowPassword from '../../Hooks/useShowPassword'
import useInput from '../../Hooks/useInput'
import Alert from '../../Components/Alert'
export default function ForgotPasswordUser() {
 const [oldPasswordValue, oldPasswordBinding, oldPasswordReset] = useInput('')
 const [oldPasswordStatus, oldPasswordType, oldPasswordstatusValue, oldPasswordtypeValue] = useShowPassword('')

 const [newPasswordValue, newPasswordBinding, newPasswordReset] = useInput('')
 const [newPasswordStatus, newPasswordType, newPasswordstatusValue, newPasswordtypeValue] = useShowPassword('')

 const [reNewPasswordValue, reNewPasswordBinding, reNewPasswordReset] = useInput('')
 const [rePasswordStatus, rePasswordType, rePasswordValue, rePasswordtypeValue] = useShowPassword('')

 const ForgotPassword = e => {
  e.preventDefault()
  if (newPasswordValue === reNewPasswordValue && newPasswordValue.length <= 8 && oldPasswordValue) {
   Alert("رمز عبور با موفقیت تغییر کرد", "success")

   oldPasswordReset()
   newPasswordReset()
   reNewPasswordReset()
  } else {
   Alert("اطلاعات وارد شده صحیح نمیباشد", "error")
   oldPasswordReset()
   newPasswordReset()
   reNewPasswordReset()
  }
 }
 return (
  <>
   <form onSubmit={ForgotPassword} className='grid gap-3 col-span-4 p-5'>
    <label htmlFor="oldPass" className='dark:text-white'> رمز عبور فعلی :</label>
    <div className='relative flex items-center'>
     <svg className="w-6 h-6 absolute text-zinc-500 left-1 cursor-pointer" onClick={() => {
      oldPasswordstatusValue()
      oldPasswordtypeValue()
     }}>
      <use href={`#${oldPasswordStatus}`}></use>
     </svg>
     <input id='oldPass' type={oldPasswordType} {...oldPasswordBinding} placeholder="" className="px-3 w-full py-2 rounded-md text-base" maxLength="25" minLength={8} required />
    </div >

    <label htmlFor="newPass" className='dark:text-white'> رمز عبور جدید  :</label>
    <div className='relative flex items-center'>
     <svg className="w-6 h-6 absolute text-zinc-500 left-1 cursor-pointer" onClick={() => {
      newPasswordstatusValue()
      newPasswordtypeValue()
     }}>
      <use href={`#${newPasswordStatus}`}></use>
     </svg>
     <input id='newPass' type={newPasswordType} {...newPasswordBinding} placeholder="حداقل 8 کاراکتر" className="px-3 w-full py-2 rounded-md text-base" maxLength="25" minLength={8} required />
    </div>

    <label htmlFor="rePass" className='dark:text-white'>تکرار رمز عبور جدید   :</label>
    <div className='relative flex items-center'>
     <svg className="w-6 h-6 absolute text-zinc-500 left-1 cursor-pointer" onClick={() => {
      rePasswordValue()
      rePasswordtypeValue()
     }}>
      <use href={`#${rePasswordStatus}`}></use>
     </svg>

     <input id='rePass' type={rePasswordType} {...reNewPasswordBinding} placeholder="تکرار رمز بالا" className="px-3 w-full py-2 rounded-md text-base" maxLength="25" minLength={8} required />

    </div>
    <input type="submit" className='cursor-pointer border w-fit px-8 py-2 rounded-md mx-auto border-orange-300 dark:text-white font-danaB text-md my-4' value={"ثبت"} />
   </form>

  </>
 )
}