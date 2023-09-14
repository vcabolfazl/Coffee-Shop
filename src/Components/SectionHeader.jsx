import React from 'react'
import { Link } from 'react-router-dom'

export default function SectionHeader({ title, subTitle, btnTitle, btnHref }) {
  return (
    <div className="flex justify-between items-end">
      <div className="dark:text-white leading-10">
        <h1 className="text-2xl md:text-5xl font-MorabbaM mb-3">{title}</h1>
        {
          subTitle
            ? <p className="font-MorabbaL text-md md:text-3xl">{subTitle}</p>
            : null
        }
      </div>
      {
        btnTitle && btnHref
          ? (<div className="flex items-center text-left text-orange-300 gap-x-1">
            <Link href={`/${btnHref}`} className="text-xs md:text-xl">{btnTitle}</Link>
            <svg className="w-4 h-4 mt-2.5">
              <use href="#chevron-left"></use>
            </svg>
          </div>)
          : null
      }
    </div>
  )
}
