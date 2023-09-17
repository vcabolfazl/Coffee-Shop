import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function BlogPage() {
 const [Blogs, setBlogs] = useState([])
 const [currentPage, setCurrentPage] = useState(1);
 const [paginatedBlogs, setPaginatedBlogs] = useState([]);
 let pageSize = 4;
 let pagesNumbers;
 useEffect(() => {
  fetch(`http://localhost:3000/Datas.json`)
   .then(res => res.json())
   .then(categorysData => {
    setBlogs(categorysData.BlogDatas)
   })
  let endIndex = pageSize * currentPage;
  let startIndex = endIndex - pageSize;
  let allShownBloga = Blogs.slice(startIndex, endIndex);
  setPaginatedBlogs(allShownBloga);
 }, [])

 useEffect(() => {
  let endIndex = pageSize * currentPage;
  let startIndex = endIndex - pageSize;
  let allShownBloga = Blogs.slice(startIndex, endIndex);
  setPaginatedBlogs(allShownBloga);
 }, [currentPage, Blogs, pageSize]);

 const pagesCount = Math.ceil(Blogs.length / pageSize);
 pagesNumbers = Array.from(Array(pagesCount).keys());

 const changePaginate = (newPage) => {
  setCurrentPage(newPage);
 };
 useEffect(() => {
  window.scrollTo(0, 0)
 }, [])
 return (
  <>
   <div className="container mt-44 ltr px-2 grid grid-cols-2 md:grid-cols-4 gap-5 dark:text-white">
    {
     paginatedBlogs.map(Blog => (
      <div className="p-2 bg-white dark:bg-zinc-700 rounded-xl shadow-2xl" key={Blog.id}>
       <Link to={`/Blogs/Blog/${Blog.id}`}>
        <div className="image">
         <img className="rounded-md" src={Blog.img} alt="" />
        </div>
        <div className="flex mt-4">
         <div className="">
          <p className="line-clamp-2 px-1">{Blog.title}</p>

         </div>
         <span className=" block w-px h-14 bg-white/20"></span>
         <div className="flex flex-wrap items-center justify-center text-center">
          <span className="text-emerald-600">{Blog.date}</span>
         </div>
        </div>
       </Link>
      </div>
     ))
    }
   </div>
   <div className="container mt-10 ltr">
    <div className="flex justify-center w-full">
     <ul className='flex gap-x-5'>
      {
       pagesNumbers.map(pageNumber => (
        <Link key={pageNumber + 1}
         onClick={() => changePaginate(pageNumber + 1)}
         className={pageNumber + 1 === currentPage
          ? "px-4 py-2 bg-orange-300 shadow-2xl dark:text-white rounded-xl"
          : "px-4 py-2 bg-dark dark:bg-zinc-700  shadow-2xl dark:text-white rounded-xl"
         }>
         {pageNumber + 1}
        </Link>
       ))
      }
     </ul>
    </div>
   </div >
  </>
 )
}
