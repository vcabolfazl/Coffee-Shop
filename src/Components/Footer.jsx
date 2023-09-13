import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
 return (
  <>
   <section className="mt-28">
    <footer className="bg-zinc-800 dark:bg-zinc-700 text-gray-300 pt-14">
     <div className="container px-2">
      <div className="md:flex justify-between items-center space-y-4 gap-4">
       {/* <!-- Start Col-1 --> */}
       <div className="w-full md:w-1/3">
        <div className="flex gap-x-5 items-center mb-4">
         <svg className="w-14 h-14">
          <use href="#logo"></use>
         </svg>
         <svg className="w-32 h-14">
          <use href="#logoType"></use>
         </svg>
        </div>
        <span>ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای
         تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم
         ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</span>
       </div>
       {/* <!-- End Col-1 --> */}

       {/* <!-- Start Col-2 --> */}
       <div className="w-full md:w-1/3">
        <h4 className="text-2xl text-white mb-4">دسترسی سریع</h4>
        <div className="flex gap-x-16 items-end">
         <ul className="space-y-5">
          <li className="flex items-center gap-x-2"><i className=" footer__item"></i><Link >حریم
           خصوصی</Link></li>
          <li className="flex items-center gap-x-2"><i className=" footer__item"></i><Link >عودت
           کالا</Link></li>
          <li className="flex items-center gap-x-2"><i className=" footer__item"></i><Link >شرایط
           استفاده</Link></li>
          <li className="flex items-center gap-x-2"><i className=" footer__item"></i><Link >ثبت
           سفارش</Link></li>
         </ul>
         <ul className="space-y-5">
          <li className="flex items-center gap-x-2"><i className=" footer__item"></i><Link >پرسش های
           متداول</Link></li>
          <li className="flex items-center gap-x-2"><i className=" footer__item"></i><Link >فرصت های
           شغلی</Link></li>
          <li className="flex items-center gap-x-2"><i className=" footer__item"></i><Link >ضمانت نامه
           ها</Link></li>
          <li className="flex items-center gap-x-2"><i className=" footer__item"></i><Link >ارتباط با
           ما</Link></li>
         </ul>
        </div>
       </div>
       {/* <!-- End Col-2 --> */}

       {/* <!-- Start Col-3 --> */}
       <div className="w-full md:w-1/3 space-y-5">
        <h4 className="text-2xl text-white mb-4">در تماس باشیم</h4>
        <div className="flex items-center gap-x-2">
         <svg className="w-5 h-5">
          <use href="#map-pin"></use>
         </svg>
         مشهد بلوار پیروزی میدان حر
        </div>
        <div className="md:flex justify-between space-y-5 md:space-y-0">
         <div className="flex items-center gap-x-2">
          <svg className="w-5 h-5">
           <use href="#email"></use>
          </svg>
          info@Coffee.com
         </div>
         <div className="flex items-center gap-x-2">
          <svg className="w-5 h-5">
           <use href="#phone"></use>
          </svg>
          0936-603-0198
         </div>
         <div className="">
          051-123456
         </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-center">
         <Link
          className="flex items-center gap-x-2 text-lg text-orange-300 border-2 border-orange-300 py-1 px-4 rounded-lg">
          <svg className="w-8 h-8 text-orange-300">
           <use href="#instagram"></use>
          </svg>
          <span className="font-danaB">golden_coffee@</span>
         </Link>
         <Link
          className="flex items-center gap-x-2 text-lg text-zinc-700 bg-instagram py-1 px-4 rounded-lg">
          <svg className="w-8 h-8 text-zinc-700">
           <use href="#telegram"></use>
          </svg>
          <span className="font-danaB">golden_coffee@</span>
         </Link>
        </div>
       </div>
       {/* <!-- End Col-3 --> */}

      </div>
      <hr className="my-12" />
      <div className="flex justify-center dark:text-white pb-9 font-MorabbaM">
       <p> طراحی توسعه توسط <span className="text-orange-300">ابوالفضل شریفی</span></p>
      </div>
     </div>
    </footer>
   </section>

  </>
 )
}
