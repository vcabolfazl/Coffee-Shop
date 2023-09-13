import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Blogs() {
    const [allBlogs, setAllBlogs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/Datas.json`)
            .then(res => res.json())
            .then(categorysData => {
                setAllBlogs(categorysData.BlogDatas)
            })
    }, [])

    return (
        <>
            <section className="mt-20 ">
                <div className="container px-2">
                    {/* <!-- Start Titel --> */}
                    <div className="flex justify-between items-center">
                        <h1 className="dark:text-white text-2xl md:text-5xl font-MorabbaM">مطالب خواندنی</h1>
                        <div className="flex items-center text-left text-orange-300 gap-x-1">
                            <Link to={'/Blogs'} className="text-xs md:text-2xl">مشاهده همه </Link>
                            <svg className="w-4 h-4">
                                <use href="#chevron-left"></use>
                            </svg>
                        </div>
                    </div>
                    {/* <!-- End Titel --> */}
                    <div className="grid gap-7 mt-12 dark:text-white grid-cols-2 md:grid-cols-4">
                        {/* <!-- Start Blog Card --> */}
                        {
                            allBlogs.slice(-4).map(blog => (
                                <div key={blog.id} className="p-2 bg-white dark:bg-zinc-700 rounded-xl shadow-2xl">
                                    <Link to={`/Blogs/Blog/${blog.id}`}>
                                        <div className="image">
                                            <img className="rounded-md" src={blog.img} alt="" />
                                        </div>
                                        <div className="flex mt-4">
                                            <div className="">
                                                <p className="line-clamp-2 px-1">{blog.title}</p>

                                            </div>
                                            <span className=" block w-px h-14 bg-white/20"></span>
                                            <div className="flex flex-wrap items-center justify-center text-center">
                                                <span className="text-emerald-600">{blog.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                        {/* <!-- End Blog Card --> */}
                    </div>
                </div>
            </section>

        </>
    )
}
