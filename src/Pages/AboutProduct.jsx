import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
// import Blogs from '../Blogs/Blogs';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { EffectCube, Pagination } from 'swiper/modules';
import ProductCard from '../Components/ProductCard';
import Slider from '../Components/Slider';
export default function AboutProduct() {
 const [AllProductData, setAllProductData] = useState([])
 const [ProductData, setProductData] = useState([])
 const [allCategorys, setAllCategorys] = useState([])
 useEffect(() => {
  window.scrollTo(0, 0);

  fetch(`http://localhost:3000/Datas.json`)
   .then(res => res.json())
   .then(categorysData => {
    setAllProductData(categorysData.Products)
    setProductData(categorysData.Products.filter(item => item.id === parseInt(param.id)))
    console.log(ProductData)
   })

 }, [])
 let param = useParams()
 // let product = ProductData.filter(item => item.id === parseInt(param.id))
 let order = AllProductData.filter(Produ => (
  Produ.category === ProductData[0].category
 ))
 let Allprod = order.filter(Produ => (
  Produ.id !== ProductData[0].id
 ))
 return (
  <>

   {
    ProductData.length &&
    <>
     <div className="container px-2 mt-36 dark:text-white grid md:grid-cols-3 items-center  justify-between gap-6 leading-10">
      <div className="w-96">
       <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
         shadow: true,
         slideShadows: true,
         shadowOffset: 20,
         shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
       >
        {
         ProductData[0].images.map(img => (
          <SwiperSlide key={img}>
           <img alt='' className='m-0 left-0 right-0 mx-auto' src={img} />
          </SwiperSlide>
         ))
        }
       </Swiper>
      </div>
      <div className=" border rounded-xl p-5">
       <h1 className='text-xl font-MorabbaB text-orange-300'>{ProductData[0].title}</h1>

         <h4 className='text-xl font-danaM mt-3'>توضیحات : </h4>
         <p className='max-h-96 overflow-y-auto px-2'>{ProductData[0].description}</p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
       <div className="grid p-5  items-end justify-center gap-4">
        <h3>درخواست مرجوع کردن کالا با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد . )</h3>
        <h3 className='flex items-center gap-1'>قیمت اصلی محصول : {ProductData[0].price.toLocaleString('en-US')}
         <svg className='w-5 h-5 dark:text-white'>
          <use href='#toman'></use>
         </svg></h3>
        {
         ProductData[0].count !== 0 ?
          ProductData[0].discountPrice &&
          <h3 className='flex items-center gap-1'>قیمت با {ProductData[0].discount}  درصد تخفیف  : {ProductData[0].discountPrice.toLocaleString('en-US')}
           <svg className='w-5 h-5 dark:text-white'>
            <use href='#toman'></use>
           </svg>
          </h3>
          : ""
        }
        {
         ProductData[0].count !== 0 ?
          <h3 className='text-green-600'>موجود در انبار</h3>
          : <h3 className='text-red-600'> متاسفانه در انبار موجود نیست </h3>
        }
        <button className='px-5 py-2 bg-rose-600 hover:bg-rose-500 rounded-xl text-white'>افزودن به سبد خرید</button>
       </div>
      </div>
     </div>

     {/* <!-- Slider --> */}
     <div className='mt-32 px-2 container'>
      <h2 className='text-orange-300 my-8 text-3xl'>کالا های مشابح</h2>
      <Slider
       Products={Allprod}
      />
     </div>
     {/* <Blogs /> */}
    </>

   }
  </>
 )
}
