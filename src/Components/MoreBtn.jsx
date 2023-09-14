import React from 'react'
import { Link } from 'react-router-dom'

export default function MoreBtn({title , href}) {
 return (
  <Link href={`${href}`} class="text-xs md:text-base
  flex items-center float-left bg-orange-300 py-2 px-3 rounded-full">
   {title}
   <svg class="w-4 h-4 md:w-5 md:h-5">
    <use href="#chevron-left"></use></svg>
  </Link>
 )
}
