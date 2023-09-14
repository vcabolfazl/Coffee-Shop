import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'
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
                    <SectionHeader
                        title={"مطالب خواندنی"}
                        btnTitle={"مشاهده همه"}
                        btnHref={"/Blogs"}
                    />
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
