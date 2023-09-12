import React, { useEffect } from 'react'
import { Link, NavLink, useRoutes } from 'react-router-dom'
import { useState } from 'react';
import Router from '../Pages/Router';
export default function Header() {
 const [AllPrice, setAllPrice] = useState(4755000)
 const [allCategorys, setAllCategorys] = useState([])
 const [cart, SetCart] = useState([])
 const darkMode = () => {
  document.documentElement.classList.toggle("dark")
 }

 // Mobile
 const [menu, setMenu] = useState('hidden')
 const [Cartmenu, setcartMenu] = useState('hidden')
 const [DropMenuState, setDropMenu] = useState(false)
 const [overlay, setOverlay] = useState('hidden')
 const [activeIndex, setActiveIndex] = useState(null);
 // 

 useEffect(() => {
  fetch(`http://localhost:3000/Datas.json`)
   .then(res => res.json())
   .then(categorysData => {
    setAllCategorys(categorysData.Categorys)
   })
  fetch(`http://localhost:3000/Datas.json`)
   .then(res => res.json())
   .then(cartProducts => {
    SetCart(cartProducts.Cart)
   })
 }, [])
 const param = useRoutes(Router)
 return (
  <>
   <section className={" mb-36 header w-100 md:block hidden z-50 "}>
    {/* <!-- Start Navbar --> */}
    <header style={{ zIndex: '999' }}
     className={`fixed z-50 right-0 left-0 h-24 px-20 w-full mx-auto
                    text-xl text-white justify-between p-3 flex items-center bg-black/50
                    backdrop-blur-[6px] ${param.ref ? "top-0" : " top-9 px-5 w-[95%] xl:px-10 xl:w-[90%] rounded-3xl"} `}>
     {/* <!-- Start Right Side Header --> */}
     <div className="col-right flex items-center gap-x-0 xl:gap-x-9">
      {/* <!-- Logo in Navbar --> */}
      <Link className="flex-shrink-0">
       <img alt="" src="images/app-logo.png" className=" w-[80%] xl:w-[100%]" />
      </Link>
      {/* <!-- Start Navbar Menu --> */}
      <ul className="flex gap-x-5 text-base xl:gap-x-9 xl:text-xl text-gray-300">
       <li className="font-danaM text-orange-200"><NavLink to={'/'} className={(link) => link.isActive ? "hover__link" : ''}> صفحه اصلی </NavLink></li>
       <li className="relative group flex gap-x-1">
        <Link to={'/Products/'} className="group-hover:text-orange-300 transition-all"> فروشگاه </Link>
        <svg className="w-4 m-auto h-4 group-hover:rotate-180 transition-all duration-450">
         <use href="#chevron-down"></use>
        </svg>
        <ul
         className="absolute  invisible transition-all group-hover:visible bg-white
                                    dark:bg-zinc-700 w-52 mt-12 rounded-2xl p-5 space-y-4 text-md text-zinc-700 border-t-[3px]
                                    border-t-orange-300 dark:text-white">
         {
          allCategorys.map(category => (
           <Link to={`/Products/${category.category}`} key={category.id}>
            <li className='my-2'>
             <p className="hover__link text-base font-bold"> {category.title} </p>
            </li>
           </Link>
          ))
         }
        </ul>
       </li>
       <li><NavLink to={"/Blogs"} className={(link) => link.isActive ? "hover__link" : ''}> آموزش‌ها </NavLink></li>
       <li><NavLink to={'/Info'} className={(link) => link.isActive ? "hover__link" : ''}> درباره ما </NavLink></li>
       <li><NavLink to={'/cInfo'} className={(link) => link.isActive ? "hover__link" : ''}> تماس با ما </NavLink></li>
      </ul>
      {/* <!-- End Navbar Menu --> */}
     </div>
     {/* <!-- End Right Side Header --> */}

     {/* <!-- Start Left Side Header --> */}
     <div className="col-left flex gap-x-2 xl:gap-x-9 text-orange-200 items-center">
      {/* <!-- Start Dark Mode & Shopping Btn --> */}
      <div className="flex gap-x-2 xl:gap-x-5  ">
       {/* <!-- Start Shopping Btn --> */}
       <div className="relative group transition-all">
        {
         // datas.userCart &&
         cart.length ?
          <span className='absolute top-[-5px] px-1.5 right-[-5px]  bg-orange-200 text-white rounded-full text-sm font-bold'>{cart.length}</span>
          : ''
        }
        <Link ><svg className="w-8 h-8">
         <use href="#shoppingCart"></use>
        </svg></Link>
        {/* <!-- start Hover Box --> */}

        <div
         className={`absolute invisible  left-0  transition-all group-hover:visible bg-white dark:bg-zinc-700 w-96 mt-5 rounded-2xl  p-6  text-md text-zinc-700 border-t-[3px] border-t-orange-300 dark:text-white z-50`}>
         {/* <!-- Navbar the Box --> */}
         {
          cart.length ?
           <>
            <div className="flex justify-between text-xs mb-5">
             <p className="text-gray-300 lenghtCard"><span>{cart.length}</span> مورد</p>
             <Link to={'/Cart'} className="text-orange-300">
              مشاهده سبد خرید
              <svg className="w-3 h-3 inline">
               <use href="#chevron-left"></use>
              </svg>
             </Link>
            </div>
            {/* <!-- Start Shopping Product --> */}
            <div className="ProductBox">
             {
              cart.map(Product => (
               <div className="" key={Product.id}>
                <div className="flex items-center">
                 <button>
                  <svg className='w-6 h-6'>
                   <use href='#trash'></use>
                  </svg>
                 </button>
                 <div className="max-w-[120px]">
                  <img alt="" src={Product.images[0]} />
                 </div>
                 <div className="text-base">
                  <p className="line-clamp-2">{Product.title}</p>
                  {
                   Product.discountPrice ?
                    <del className="text-xs my-4 flex items-center gap-x-1 text-teal-600 dark:text-emerald-500">{Product.discountPrice.toLocaleString('en-US')}
                     <span>
                      <svg className='w-4 h-4'>
                       <use href='#toman'></use>
                      </svg>
                     </span>
                    </del>
                    : <br />
                  }
                  <div className="flex justify-between">
                   <p className='flex items-center gap-1'>{Product.price.toLocaleString('en-US')}
                    <svg className='w-5 h-5 '>
                     <use href='#toman'></use>
                    </svg>
                   </p>
                   <div className="flex items-center gap-x-1 bg-zinc-800 px-3 py-2 rounded-xl ">
                    <svg className='w-6 h-4'>
                     <use href='#Plus'></use>
                    </svg>
                    <p>1</p>
                    <svg className='w-6 h-4'>
                     <use href='#minus'></use>
                    </svg>
                   </div>
                  </div>
                 </div>

                </div>
                <hr className="my-6" />
               </div>

              ))
             }
            </div>
            {/* <!-- End Shopping Product --> */}

            {/* <!-- Purchase department --> */}
            <div className="flex justify-between items-center mt-8">
             <div>
              <p className="text-gray-300 text-xs">مبلغ قابل پرداخت</p>
              <p className="text-sm flex items-center py-1 gap-x-1"><span className="font-bold">{AllPrice.toLocaleString('en-US')}</span>
               <svg className='w-5 h-5'>
                <use href='#toman'></use>
               </svg>
              </p>
             </div>
             <div className="">
              <Link
               className="w-36 h-14 bg-teal-600 dark:bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-teal-600 transition-colors rounded-xl py-4 px-7 text-white">ثبت
               سفارش</Link>
             </div>
            </div>
           </>
           : <p className='text-base'>هنوز هیچ کالایی به سبد خریدت اضافه نکردی</p>
         }
        </div>
        {/* <!-- End Hover Box --> */}
       </div>
       {/* <!-- End Shopping Btn --> */}

       {/* <!-- Start Dark Mode Btn --> */}
       <div className="dark__mode cursor-pointer" onClick={darkMode}>
        {/* <!-- End Dark Mode Btn --> */}
        <svg className="w-8 h-8 block dark:hidden">
         <use href="#moon"></use>
        </svg>
        <svg className="w-8 h-8 hidden dark:block">
         <use href="#sun"></use>
        </svg>
       </div>
      </div>
      {/* <!-- End Dark Mode & Shopping Btn --> */}

      {/* <!-- Hyphen --> */}
      <span className=" block w-px h-14 bg-white/20"></span>

      {/* <!-- Start Login Btn --> */}
      <div className="">
       <Link to={'/Login'} className="flex items-center gap-x-2.5">
        <svg className="w-6 h-6 rotate-180">
         <use href="#arrow-right-on"></use>
        </svg>
        <span className="hidden lg:inline-block">ورود | ثبت نام</span>
       </Link>
      </div>
      {/* <!-- End Login Btn --> */}

     </div>
     {/* <!-- End Left Side Header --> */}
    </header>
    {/* <!-- End Navbar --> */}
   </section>
   <section className="md:hidden block w-full">
    <header className="fixed top-0 left-0 right-0 z-50 flex bg-white dark:bg-zinc-700 dark:text-white h-16 items-center p-3 justify-between">
     {/* <!-- Hamburger Menu Btn--> */}
     <button id="HamburgerMenuBtn" onClick={() => {
      setMenu(' visible')
      setOverlay(' visible')
     }}>
      <svg className="w-6 h-6">
       <use href="#hamburgerMenu"></use>
      </svg>
     </button>
     {/* <!-- Start symbol Menu --> */}
     <div id="hamberMenu" className={menu + "  overflow-auto"}>
      {/* <!-- First Row --> */}
      <div className="flex items-center justify-between">
       <svg className="w-10 h-10">
        <use href="#logo"></use>
       </svg>

       <svg className="w-[100px] h-10">
        <use href="#logoType"></use>
       </svg>

       <svg className="w-6 h-6 dark:text-white exitMenu" onClick={() => {
        setMenu('hidden')
        setOverlay('hidden')
       }}>
        <use href="#x-mark"></use>
       </svg>
      </div>
      <hr className="my-6" />
      {/* <!-- Second Row --> */}
      <ul className="w-full space-y-4">
       <li><NavLink to={"/"} className={(link) => link.isActive ? "li__item active" : 'li__item'}>
        <svg className="w-6 h-6">
         <use href="#home-icone"></use>
        </svg>
        <span>صفحه اصلی</span>
       </NavLink></li>
       <li>
        <div className="dropMenu flex justify-between items-center li__item">
         <div className="flex gap-x-2">
          <svg className="w-6 h-6">
           <use href="#shoppingBag"></use>
          </svg>
          <span>فروشگاه</span>
         </div>
         <svg className="w-4 h-4" onClick={() => DropMenuState ? setDropMenu(status => !status) : setDropMenu(status => !status)}>
          <use href="#chevron-down"></use>
         </svg>
        </div>
        <ul id="dropMenuBox" className={`mt-3 pr-[48px] space-y-3 text-sm ${DropMenuState ? "visible" : "hidden"}`}>
         {
          allCategorys.map(category => (
           <li key={category.id} className={activeIndex === category.id ? 'drop__item--action' : ''} onClick={() => setActiveIndex(category.id)}>
            <Link to={`/Products/${category.category}`}>
             <p className="drop__item ">{category.title}</p>
            </Link>
           </li>
          ))
         }
        </ul>
       </li>
       <li><NavLink to={"/Info"} className={(link) => link.isActive ? "li__item active" : 'li__item'}>
        <svg className="w-6 h-6">
         <use href="#bag-icon"></use>
        </svg>ب
        درباره ما
       </NavLink>
       </li>
       <li><NavLink to={"/Blogs"} className={(link) => link.isActive ? "li__item active" : 'li__item'}>
        <svg className="w-6 h-6">
         <use href="#blog"></use>
        </svg>

        آموزش‌ها
       </NavLink ></li>
       <li><NavLink to={"/cInfo"} className={(link) => link.isActive ? "li__item active" : 'li__item'}>
        <svg className="w-6 h-6">
         <use href="#call"></use>
        </svg>
        تماس با ما
       </NavLink></li>
      </ul>
      <hr className="my-6" />
      {/* <!-- third Row --> */}
      <ul className="pr-2.5 space-y-6">
       <li><Link className="li__link">
        <svg className="w-6 h-6 rotate-180">
         <use href="#arrow-right-on"></use>
        </svg>
        ورود | ثبت‌نام</Link></li>
       <li className="dark__modeM li__link">
        <svg className="w-6 h-6 hidden dark:block"><use href="#sun"></use></svg><span className="hidden dark:block">تم روشن</span>
        <svg className="w-6 h-6 block dark:hidden"><use href="#moon"></use></svg><span className="block dark:hidden">تم تاریک</span>
       </li>
       <li><Link className="li__link">
        <svg className="w-6 h-6">
         <use href='#shoppingBag'></use>
        </svg>
        سبد خرید
       </Link></li>
      </ul>
     </div>
     {/* <!-- End Hamburger Menu --> */}
     {/* <!-- logo --> */}
     <svg className="w[100px] h-10">
      <use href="#logoType"></use>
     </svg>
     {/* <!-- Cart Svg --> */}
     <button className="shoppigCartBtn relative" onClick={() => {
      setcartMenu(' visible')
      setOverlay(' visible')
     }}>
      {
       cart.length ?
        <span className='absolute top-[-5px] px-1 text-center right-[-5px]  bg-orange-200 text-white rounded-full text-xs font-bold'>{cart.length}</span>
        : ''
      }
      <svg className="w-6 h-6">
       <use href="#shoppingCart"></use>
      </svg>
     </button>
     <div className={"shoppingCart px-4 py-5 space-y-5 " + Cartmenu}>
      <div className="flex justify-between items-center">
       <svg className="w-5 h-5 exitShoppingCart" onClick={() => {
        setcartMenu(' hidden')
        setOverlay(' hidden')
       }}>
        <use href="#x-mark"></use>
       </svg>
       <p>سبد خرید</p>
      </div>
      <hr />
      <div className="max-h-[400px] overflow-y-auto space-y-5">
       {
        cart.length ?
         cart.map(Product => (
          <div key={Product.id}>
           <div className="w-full flex items-center gap-x-1">
            <button >
             <svg className='w-6 h-6'>
              <use href='#trash'></use>
             </svg>
            </button>
            <div className="">
             <img alt='' src={Product.images[0]} className="max-w-[90px]" />
            </div>
            <div className="space-y-2">
             <p className="text-sm line-clamp-2">{Product.title}</p>
             {
              Product.discountPrice &&
              <del className="text-xs flex items-center gap-x-1 text-teal-600 dark:text-emerald-500"><span>{Product.discountPrice.toLocaleString('en-US')}</span>
               <svg className='w-4 h-4'>
                <use href='#toman'></use>
               </svg>
              </del>
             }
             <p className='flex items-center gap-1'>{Product.price.toLocaleString('en-US')}
              <svg className='w-5 h-5 '>
               <use href='#toman'></use>
              </svg>
             </p>
             <div className="flex justify-center pb-3">
              <div className="flex items-center px-3 py-2 bg-zinc-800 rounded-md gap-1">
               <svg className='w-6 h-4' >
                <use href='#Plus'></use>
               </svg>
               <p>1</p>
               <svg className='w-6 h-4' >
                <use href='#minus'></use>
               </svg>
              </div>
             </div>

            </div>
           </div>
           <hr />
          </div>
         ))
         : <p className='text-base'>هنوز هیچ کالایی به سبد خریدت اضافه نکردی</p>
       }
      </div>
      <div className="absolute flex items-center justify-center bottom-8 left-0 right-0 gap-x-4 ">
       <Link to={'/Cart'} className="w-28 bg-teal-600 py-2.5 px-4 rounded-xl">ثبت سفارش</Link>
       <div className="">
        <p className="text-xs">مبلغ قابل پرداخت</p>
        <p className='flex items-center gap-1 py-1'>
         {0}
         <svg className='w-5 h-5'>
          <use href='#toman'></use>
         </svg>
        </p>
       </div>
      </div>
     </div>
    </header>
    <div className={overlay + "  overlay fixed inset-0 h-full bg-black/40 z-10 "} onClick={() => {
     setMenu('hidden')
     setOverlay('hidden')
     setcartMenu('hidden')
    }}></div>
   </section>

  </>
 )
}