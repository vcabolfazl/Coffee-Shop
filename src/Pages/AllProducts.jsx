import { React, useState, useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import { useParams } from 'react-router-dom'

export default function AllProducts() {
 let param = useParams()
 const [allProducts, setAllProducts] = useState([])
 const [productMap, setProductMap] = useState([])
 useEffect(() => {
  fetch(`http://localhost:3000/Datas.json`)
   .then(res => res.json())
   .then(allproduct => {
    setAllProducts(allproduct.Products)
    if (param.category) {
     setProductMap(allproduct.Products.filter(product => product.category === param.category))
    } else {
     setProductMap(allproduct.Products)
    }
   })
 }, [])
 useEffect(() => {
  let res = allProducts.filter(product => product.category === param.category)
  setProductMap(res)
  console.log(res)
 }, [param])

 const [activeIndex, setActiveIndex] = useState(null);

 const handleClick = (index) => {
  setActiveIndex(index);
 }
 return (
  <>
   {/* --> Start Navbar */}
   <div className='w-full font-dana bg-white md:mt-[-3rem]'>
    <div className='container rounded-md mt-36'>
     <ul className='flex justify-start gap-x-2.5 md:gap-x-6 p-2 cursor-pointer text-sm md:text-base'>
      <li className='font-danaB cursor-default'>دسته بندی : </li>
      <li className={activeIndex === 0 ? 'text-orange-500' : ''} onClick={() => {
       setProductMap(productMap.sort((a, b) => a.price - b.price))
       handleClick(0)
      }}> ارزان‌ترین </li>
      <li className={activeIndex === 1 ? 'text-orange-500' : ''} onClick={() => {
       setProductMap(productMap.sort((a, b) => b.price - a.price))
       handleClick(1)
      }}> گران‌ترین </li>
      <li className={activeIndex === 2 ? 'text-orange-500' : ''} onClick={() => {
       setProductMap(productMap.reverse())
       handleClick(2)
      }}> جدید‌ترین </li>
      <li className={activeIndex === 3 ? 'text-orange-500' : ''} onClick={() => {
       setProductMap(productMap.sort((a, b) => b.salesNum - a.salesNum))
       handleClick(3)

      }}> پرفروش‌ترین </li>
     </ul>
    </div>
   </div>
   {/* End Navbar <--*/}

   {/* --> Start Body Section */}
   <div className='container px-2 mt-11  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>

    {
     productMap.map(item => (
      <ProductCard key={item.id} {...item} />
     ))
    }
   </div>
   {/* End Body Section <-- */}

  </>
 )
}
