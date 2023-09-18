import React from 'react'
import { Link } from 'react-router-dom'
export default function AboutStore() {
 return (
  <div>
   <div className="container mt-40 grid md:grid-cols-2 gap-y-7 dark:bg-zinc-700 my-20 p-10 md:px-20 md:rounded-3xl shadow-2xl leading-10 dark:text-white text-lg">
    <div className="col-span-1">
     <h2 className='text-xl font-danaM text-orange-300'>با فخر و افتخار به اطلاع می‌رسانیم که سایت فروشگاهی‌ای را برای رزومه ساخته‌ایم.</h2>
     <p>
      این فروشگاه با بهترین قهوه‌ها با قیمت مناسب در انتظار شماست!
     </p>
     <p className='text-rose-600 dark:text-rose-500'> اما باید بگوییم که این فروشگاه فعلا فقط برای نمایش مهارت‌های ما <br /> در زمینه طراحی و توسعه وبسایت ساخته شده است و محصولی برای فروش ندارد.</p>
     <h3>تکنولوژی‌های اصلی که در پروژه استفاده شده :</h3>
     <div className="flex gap-x-3">
      <span className='px-5 py-1 bg-gray-300 dark:bg-gray-500 rounded-xl shadow-2xl font-MorabbaB'>...</span>
      <span className='p-2 bg-gray-300 dark:bg-gray-500 rounded-xl shadow-2xl'>Tailwind Css</span>
      <span className='p-2 bg-gray-300 dark:bg-gray-500 rounded-xl shadow-2xl'>React JS</span>
     </div>
     <p className='mt-5'>
      <span>کلیه حقوق برای  </span>
      <Link to={"https://github.com/vcabolfazl"} className=' font-danaM text-orange-300 underline'>
       ابوالفضل شریفی
      </Link>
      <span> محفوظ میباشد. </span> 
     </p>
    </div>
    <div className="w-full flex items-center justify-center">
     <img src="/assets/images/3212.png" alt="" />
    </div>
   </div>


  </div>
 )
}
