import React from 'react'
export default function Order() {

 return (
  <div className='grid gap-3 col-span-4 '>
   <div class="relative overflow-y-auto shadow-md sm:rounded-lg h-[50vh]">
    <p className='text-2xl dark:text-white text-center my-10'>متاسفانه خریدی ندارید</p>
    {/* <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
     <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-gray-400">
      <tr>
       <th scope="col" class="">
        <span class="sr-only">Image</span>
       </th>
       <th scope="col" class="py-3">
        نام محصول
       </th>
       <th scope="col" class="">
        مبلغ
       </th>
       <th scope="col" class="">
        وضعیت
       </th>
      </tr>
     </thead>
     <tbody>
     {
       ShoppingCart ?
        (ShoppingCart.map(order => (
         <tr class="text-center bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-28 p-4">
           <Link>
            <img src={order.src[0]} alt="Apple Watch" />
           </Link>
          </td>
          <td class="py-4 font-semibold text-gray-900 dark:text-white">
           <Link className='line-clamp-1'>
            {order.title}
           </Link>
          </td>
          <td class="py-4 px-2 font-semibold text-gray-900 dark:text-white">
           {order.price.toLocaleString("en-US")}
          </td>
          <td class="py-4">
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
