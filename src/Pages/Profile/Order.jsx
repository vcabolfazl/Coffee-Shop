import React from 'react'
export default function Order() {

 return (
  <div className='grid gap-3 col-span-4 '>
   <div className="relative overflow-y-auto shadow-md sm:rounded-lg h-[50vh]">
    <p className='text-2xl dark:text-white text-center my-10'>متاسفانه خریدی ندارید</p>
    {/* <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-gray-400">
      <tr>
       <th scope="col" className="">
        <span className="sr-only">Image</span>
       </th>
       <th scope="col" className="py-3">
        نام محصول
       </th>
       <th scope="col" className="">
        مبلغ
       </th>
       <th scope="col" className="">
        وضعیت
       </th>
      </tr>
     </thead>
     <tbody>
     {
       ShoppingCart ?
        (ShoppingCart.map(order => (
         <tr className="text-center bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="w-28 p-4">
           <Link>
            <img src={order.src[0]} alt="Apple Watch" />
           </Link>
          </td>
          <td className="py-4 font-semibold text-gray-900 dark:text-white">
           <Link className='line-clamp-1'>
            {order.title}
           </Link>
          </td>
          <td className="py-4 px-2 font-semibold text-gray-900 dark:text-white">
           {order.price.toLocaleString("en-US")}
          </td>
          <td className="py-4">
           درحال ارسال
          </td>
         </tr>
        )))
      }
     </tbody>
    </table> */}
   </div>
  </div>
 )
}
