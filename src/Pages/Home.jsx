import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import ProductCard from '../Components/ProductCard';
import Blogs from '../Components/Blogs';
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
          <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mt-12">
            {
              allProducts.slice(-8).map(product => (
                <ProductCard key={product.id} {...product} />
              ))
            }
          </div>
        </div>
      </section>
      {/* End New Product <-- */}

      {/* --> Start Categorys */}
      <section className="mt-20 block">
        <div className=" px-2 container">
          {/* <!-- Start Baner --> */}
          <div className="grid grid-cols-1 md:grid-cols-2  justify-center gap-5">
            <div className="relative flex items-center">
              <div className="absolute text-white right-12">
                <h1 className="text-4xl font-semibold">انواع قهوه</h1>
                <p className="text-xl">ترکیبی و تک خاستگاه</p>
              </div>
              <img alt='' src="/assets/images/categories/category-right.jpg" className="rounded-xl" />
            </div>
            <div className="relative flex items-center">
              <div className="absolute text-white right-12">
                <h1 className="text-4xl font-semibold">پودر های فوری</h1>
                <p className="text-xl">نسکافه ، هات چاکلت ، ماسالا</p>
              </div>
              <img alt='' src="/assets/images/categories/category-left.jpg" className="rounded-xl" />
            </div>
          </div>
          {/* <!-- End Baner --> */}

          {/* <!-- Category --> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-16 mt-20">
            {
              allCategorys.map(item => (
                <Link to={`category/${item.category}`} key={item.id}>
                  <div className="text-center dark:text-white">
                    <img src={item.img} alt="" />
                    <p className="line-clamp-1">{item.title}</p>
                  </div>
                </Link>
              ))
            }
          </div>
          {/* <!-- Category --> */}
        </div>
      </section>
      {/* End Categorys <-- */}

      {/* --> Start Slider */}
      <section className="mt-20">‌
        <div className="px-2 container">
          <div className="">
            <div className="swiper mySwiper">
              {/* <!-- Start Titel --> */}
              <div className="flex justify-between items-end px-">
                <div className="dark:text-white leading-10">
                  <h1 className="text-2xl md:text-5xl font-MorabbaM">محصولات پر فروش</h1>
                  <p className="font-MorabbaL text-md md:text-3xl">پیشنهاد قهوه خور ها ...</p>
                </div>
                {/* <!-- Btn Slider --> */}
                <div className="flex gap-x-4 text-black dark:text-white">
                  <div className="swiper-button-next bg-white dark:text-white dark:bg-zinc-700">
                  </div>
                  <div className="swiper-button-prev bg-white dark:text-white dark:bg-zinc-700">
                  </div>
                </div>
              </div>
              {/* <!-- End Titel --> */}

              {/* <!-- Slider --> */}
              <div className='mt-20'>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  slidesPerView={1}
                  loop={true}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    480: { slidesPerView: 3, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                    1500: { slidesPerView: 5, spaceBetween: 20 },
                  }}
                  className="mySwiper"
                >
                  {
                    allProducts.slice(-10).map(Slid => (
                      <SwiperSlide key={Slid.id}>
                        <ProductCard {...Slid} />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>

            </div>
          </div>
        </div>
      </section >
      {/* End Slider <-- */}

      {/* --> Start Club */}
      <section className="">
        <div className="px-2 container">
          <div className="club px-2 md:px-11 text-white flex flex-wrap justify-between">
            <div className="flex items-center gap-x-9">
              <div className="">
                <img src="/assets/images/club/diamond.png" alt="" />
              </div>
              <div className="font-MorabbaL leading-10">
                <h1 className="text-2xl md:text-5xl">کافی کلاب</h1>
                <p className="">میدونستی میتونی با امتیاز هات قهوه بگیری ؟</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-x-4 md:gap-x-24">
              <div className="flex gap-x-5">
                <Link href="" className="clubBtn">
                  <svg className="w-7 md:w-10 h-7 md:h-10 m-4 mb-2 mt-2 md:m-auto md:mt-4">
                    <use href="#discovery"></use>
                  </svg>
                  <p className="text-xs md:text-base">چرخ و بخت</p>
                </Link>
                <Link href="" className="clubBtn">
                  <svg className="w-7 md:w-10 h-7 md:h-10 m-4 mb-2 mt-2 md:m-auto md:mt-4">
                    <use href="#Ticket-Star"></use>
                  </svg>
                  <p className="text-xs md:text-base">ماموریت ها</p>
                </Link>
                <Link href="" className="clubBtn">
                  <svg className="w-7 md:w-10 h-7 md:h-10 m-4 mb-2 mt-2 md:m-auto md:mt-4">
                    <use href="#activity"></use>
                  </svg>
                  <p className="text-xs md:text-base">جایزه ها</p>
                </Link>
              </div>
              <div className="text-center">
                <h2 className="text-3xl">542</h2>
                <h3>امتیـــــــاز شما</h3>
                <Link href="#" className="text-xs md:text-base flex w-full bg-orange-300 py-2 px-3 rounded-full">
                  دریافت جایزه
                  <svg className="w-4 h-4 md:w-5 md:h-5">
                    <use href="#chevron-left"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Club <-- */}

      {/* --> Start Categorys Banner */}
      <section className='px-2 container w-full  my-20'>
        <div className='grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5'>

          <div className='col-span-1 hidden lg:flex items-start'>
            <video autoPlay muted playsInline loop className='rounded-3xl'>
              <source src={"/assets/images/12.mp4"} type="video/mp4" />
            </video>
          </div>


          <div className='col-span-2 grid grid-cols-2 gap-5 h-fit items-center'>
            <div className='bannerCategory bannerCategory2 h-fit flex items-center text-white p-3 lg:p-12 leading-10 gap-x-5 rounded-2xl'>
              <div className="">
                <p> خرید قهوه</p>
                <h1 className='text-4xl font-semibold'> پونو قهوه </h1>
                <h2 >انواع قهوه اسپرسو ، قهوه ترک ، قهوه دمی ، دان قهوه، قهوه عربیکا، قهوه روبوستا</h2>

                <Link href="#" className="text-xs md:text-base flex items-center float-left bg-orange-300 py-2 px-3 rounded-full">خرید آنلاین<svg className="w-4 h-4 md:w-5 md:h-5"><use href="#chevron-left"></use></svg></Link>

              </div>
            </div>
            <div className='bannerCategory bannerCategory1 h-fit flex items-center text-white p-3 lg:p-12 leading-10 gap-x-5 rounded-2xl'>
              <div className="">
                <p> خرید قهوه</p>
                <h1 className='text-4xl font-semibold'> پونو قهوه </h1>
                <h2 >انواع قهوه اسپرسو ، قهوه ترک ، قهوه دمی ، دان قهوه، قهوه عربیکا، قهوه روبوستا</h2>

                <Link href="#" className="text-xs md:text-base flex items-center float-left bg-orange-300 py-2 px-3 rounded-full">خرید آنلاین<svg className="w-4 h-4 md:w-5 md:h-5"><use href="#chevron-left"></use></svg></Link>

              </div>
            </div>

            <div className='bannerCategory bannerCategory4 h-fit flex items-center text-white p-3 lg:p-12 leading-10 gap-x-5 rounded-2xl'>
              <div className="">
                <p> خرید قهوه</p>
                <h1 className='text-4xl font-semibold'> پونو قهوه </h1>
                <h2 >انواع قهوه اسپرسو ، قهوه ترک ، قهوه دمی ، دان قهوه، قهوه عربیکا، قهوه روبوستا</h2>

                <Link href="#" className="text-xs md:text-base flex items-center float-left bg-orange-300 py-2 px-3 rounded-full">خرید آنلاین<svg className="w-4 h-4 md:w-5 md:h-5"><use href="#chevron-left"></use></svg></Link>

              </div>
            </div>

            <div className='bannerCategory bannerCategory3 h-fit flex items-center text-white p-3 lg:p-12 leading-10 gap-x-5 rounded-2xl'>
              <div className="">
                <p> خرید قهوه</p>
                <h1 className='text-4xl font-semibold'> پونو قهوه </h1>
                <h2 >انواع قهوه اسپرسو ، قهوه ترک ، قهوه دمی ، دان قهوه، قهوه عربیکا، قهوه روبوستا</h2>

                <Link href="#" className="text-xs md:text-base flex items-center float-left bg-orange-300 py-2 px-3 rounded-full">خرید آنلاین<svg className="w-4 h-4 md:w-5 md:h-5"><use href="#chevron-left"></use></svg></Link>

              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-[200px] bannerCategory5 my-5 rounded-3xl p-5 text-white flex items-center'>
          <div className='leading-10 w-full'>
            <p>انواع شکلات ، بیسکوئیت و خوشمزه های خاص خارجی</p>
            <h1 className='text-2xl md:text-5xl font-MorabbaM'>خوشمزه های <span className='text-orange-300'>خیلی خاص</span></h1>
            <Link href="#" className="text-xs md:text-base flex items-center shadow-2xl float-left bg-orange-300 py-2 px-3 rounded-full">خرید آنلاین<svg className="w-4 h-4 md:w-5 md:h-5"><use href="#chevron-left"></use></svg></Link>
          </div>
        </div>
      </section>
      {/* End Categorys Baner <-- */}

      {/* Blogs */}
      <Blogs />

      {/* --> Start About */}
      <section className="mt-20">
        <div className="container px-2">
          <div className="md:flex items-center gap-x-5 space-y-5 justify-between dark:text-white">
            <div className="image">
              <img src="/assets/images/contact.png" alt="" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-MorabbaM">یکی از بهترین قهوه ها !</h1>
              <h3 className="font-MorabbaL text-2xl md:text-3xl">کیفیت قهوه را از ما بخواهید ...</h3>
              <p className="text-xl md:text-3xl text-gray-400">. . .</p>
              <br />
              <span className=" text-base md:text-2xl">فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه
                معطری پیدا کنند و دسرهای خوشمزه ما
                را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز
                شما را می سازد!</span>
              <br />
              <div className="inline-block border-2 py-4 px-6 border-orange-300 text-orange-300 rounded-full">
                <Link href="#" className="flex gap-x-2 items-center">
                  <svg className="w-6 h-6">
                    <use href="#phone"></use>
                  </svg>
                  ثبت سفارش تلفنی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About <-- */}

      {/* --> Start Services */}
      <section className="mt-20">
        <div className="container px-2 grid grid-cols-2 lg:grid-cols-4 gap-x-2 dark:text-white">
          <div className="md:flex items-center justify-center text-center gap-x-4 mt-7">
            <div className="">
              <svg className="w-20 h-20 m-auto">
                <use href="#support"></use>
              </svg>
            </div>
            <div className="">
              <p className="font-danaM text-lg">پشتیبانی شبانه روزی</p>
              <span>7 روز هفته ، 24 ساعته</span>
            </div>
          </div>
          <div className="md:flex items-center justify-center text-center gap-x-4 mt-7">
            <div className="">
              <svg className="w-20 h-20 m-auto">
                <use href="#express"></use>
              </svg>
            </div>
            <div className="">
              <p className="font-danaM text-lg">امکان تحویل اکسپرس</p>
              <span>ارسال بسته با سرعت باد</span>
            </div>
          </div>
          <div className="md:flex items-center justify-center text-center gap-x-4 mt-7">
            <div className="">
              <svg className="w-20 h-20 m-auto">
                <use href="#coffee"></use>
              </svg>
            </div>
            <div className="">
              <p className="font-danaM text-lg">رست تخصصی</p>
              <span>تازه برشته شده و با کیفیت</span>
            </div>
          </div>
          <div className="md:flex items-center justify-center text-center gap-x-4 mt-7">
            <div className="">
              <svg className="w-20 h-20 m-auto">
                <use href="#pitcher"></use>
              </svg>
            </div>
            <div className="">
              <p className="font-danaM text-lg">اکسسوری قهوه</p>
              <span>وسایل و ادوات دم‌آوری</span>
            </div>
          </div>
        </div>
      </section>
      {/* End Services  <--*/}
    </>
  )
}
