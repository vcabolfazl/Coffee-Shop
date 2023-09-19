import React from 'react'
import useInput from '../../Hooks/useInput'
import Alert from '../../Components/Alert'
export default function Information() {



 const [nameValue, nameBinding] = useInput("ابوالفضل شریفی")
 const [usernameValue, usernameBinding] = useInput("vc_abolfazl")
 const [phoneValue, phoneBinding] = useInput("09044775292")
 const [emailValue, emailBinding] = useInput("abolfazl.org@Yahoo.com")

 const editeInfo = e => {
  e.preventDefault()
  const pattern = [/^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/, /^[a-zA-Z0-9_]+$/,];
  if (pattern[0].test(emailValue) && pattern[1].test(usernameValue) && phoneValue.length === 11 && nameValue) {
   Alert("اطلاعات با موفقیت ثبت شد", "success")
  } else {
   Alert("اطلاعات وارد شده صحیح نیست", "error")
  }
 }
 return (
  <>
   <form onSubmit={editeInfo} className='grid gap-3 col-span-4 p-5'>
    <div className="grid gap-2">
     <label htmlFor="name" className='dark:text-white'> نام و نام خانوادگی  :</label>
     <input id='name' {...nameBinding} type="text" className='px-3 w-full py-2 rounded-lg' maxLength={25} required />

    </div>

    <div className="grid gap-2">
     <label htmlFor="username" className='dark:text-white'> نام کاربری   :</label>
     <input id='username' {...usernameBinding} type="text" className='px-3 w-full py-2 rounded-lg' max={25} minLength={5} required />

    </div>

    <div className="grid gap-2">
     <label htmlFor="phone" className='dark:text-white'>شماره تلفن   :</label>
     <input id='phone' {...phoneBinding} type="number" className='px-3 w-full py-2 rounded-lg' maxLength={11} minLength={11} required />

    </div>

    <div className="grid gap-2">
     <label htmlFor="email" className='dark:text-white'> ایمیل   : </label>
     <input id='email' {...emailBinding} type="email" className='px-3 w-full py-2 rounded-lg' required />
    </div>
    <input type="submit" className='border w-fit px-8 py-2 rounded-md mx-auto border-orange-300 dark:text-white font-danaB text-md my-4' value={"ثبت"} />
   </form>

  </>
 )
}