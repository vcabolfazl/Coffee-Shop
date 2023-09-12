import React from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
export default function Home() {
  return (
    <>
      {/* --> Start Background  Desktop*/}
      <section className=" md:flex justify-center items-end hidden">
        <div className="hed__desktop w-full">

          <div className="absolute bottom-0 right-0 left-0 z-50 flex justify-center">
            <Link className='w-8 h-8 rounded-full border-2 border-orange-300 absolute bottom-0 translate-y-2/4 z-10 flex justify-center items-center'>
              <svg className='w-4 h-4 dark:text-gray-100 text-zinc-800'>
                <use href='#chevron-down'></use>
              </svg>
            </Link>
            <div className='overflow-hidden w-[302px] h-[151px] relative'>
              <div className='flex justify-center'>
                <div className='Ellipse w-[302px] h-[302px] flex justify-center absolute border-white/20'>
                  <div className='Ellipse w-[145px] h-[145px] flex justify-center border-white/50 '>
                    <div className='Ellipse w-[70px] h-[70px] border-white/80 '>

                    </div>
                  </div>
                </div>
                <Link href='#NewProduct' className='absolute bottom-0'>
                  <svg className='w-[100px] h-[22px] text-gray-100 dark:text-zinc-800 z-10'>
                    <use href='#curve'></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            loop={true}
            effect={'fade'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/assets/images/headerBgDesktop.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/4.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* End Background Desktop <--*/}

      {/* --> Start Background  Mobile */}
      <section className="hed__mobile block md:hidden  mt-16"></section>
      {/* End Background  Mobile <-- */}
    </>
  )
}
