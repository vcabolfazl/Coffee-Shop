import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Blogs from '../../Components/Blogs'
export default function AboutBlog() {
 const [blogData, setBlogData] = useState([])
 useEffect(() => {
  window.scrollTo(0, 0)
  fetch(`http://localhost:3000/Datas.json`)
   .then(res => res.json())
   .then(BlogData => {
    const blogInfo = BlogData.BlogDatas.find(blog => {
     return blog.id === parseInt(param.id)
    })
    setBlogData(blogInfo)

   })
 }, [])
 let param = useParams()
 return (
  <>
   <div className='container px-2 md:my-9'>
    <div className="grid grid-cols-1 mt-28 gap-10 md:grid-cols-3  shadow-2xl p-8">
     <div className='col-span-1 md:col-span-2 dark:text-white flex pt-12 '>
      <div className="leading-10">
       <h1 className='text-3xl text-orange-300 font-MorabbaB'>{blogData.title}</h1>
      </div>
     </div>
     <div className="flex justify-center">
      <video controls autoPlay playsInline className='col-span-1 h-[80vh] rounded-xl shadow-2xl'>
       {
        blogData.video &&
        <source src={blogData.video} type="video/mp4" />
       }
      </video>
     </div>
    </div>
    <Blogs />
   </div>
  </>
 )
}