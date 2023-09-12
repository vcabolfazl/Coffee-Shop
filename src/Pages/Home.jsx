import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import ProductCard from '../Components/ProductCard';
export default function Home() {
  const [allProducts, setAllProducts] = useState([])
  const [allCategorys, setAllCategorys] = useState([])
  useEffect(() => {
      fetch(`http://localhost:3000/Datas.json`)
          .then(res => res.json())
          .then(allproducts => {
              setAllProducts(allproducts.Products)
          })
      fetch(`http://localhost:3000/Datas.json`)
          .then(res => res.json())
          .then(categorysData => {
              setAllCategorys(categorysData.Categorys)
          })
  }, [])

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

      {/* --> Start New Product */}
      <section id='NewProduct' className="md:newProduct mt-5 relative">
        <div className="p-2 md:container md:pt-48">
          {/* <!-- Start Titel --> */}
          <div className="flex justify-between items-end">
            <div className="dark:text-white leading-10">
              <h1 className="text-2xl md:text-5xl font-MorabbaM">جدیدترین محصولات</h1>
              <p className="font-MorabbaL text-md md:text-3xl">فرآوری شده از دانه قهوه</p>
            </div>
            <div className="flex items-center text-left text-orange-300 gap-x-1">
              <Link href="#" className="text-xs md:text-2xl">مشاهده همه محصولات</Link>
              <svg className="w-4 h-4">
                <use href="#chevron-left"></use>
              </svg>
            </div>
          </div>
          {/* <!-- End Titel --> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full mt-12 gap-5">
            {
              allProducts.slice(-8).map(product => (
                <ProductCard key={product.id} {...product} />
              ))
            }
          </div>
        </div>
      </section>
      {/* End New Product <-- */}

    </>
  )
}
