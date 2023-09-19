import React from 'react'
import routes from './routes'
import { useRoutes, Link } from 'react-router-dom'

export default function Profile() {
    let router = useRoutes(routes)
    return (
        <>
            <div className="container px-2 mt-44">
                <div className="md:w-1/2 grid grid-cols-6 dark:bg-zinc-700 mx-auto my-20 rounded-xl shadow-2xl">
                    <nav className='col-span-2 w-full h-full border-l border-zinc-300 p-5 rounded-inherit rounded-s-xl'>
                        <ul className='space-y-5 dark:text-white'>
                            <li>
                            <Link to={"/Profile"} className='flex gap-x-1 items-center'>
                                <svg className='w-6 h-6'>
                                    <use href='#userIcone'></use>
                                </svg>
                                <p>اطلاعات حساب</p>
                            </Link>
                            </li>
                            <li>
                                <Link to={"Password"} className='flex gap-x-1 items-center'>
                                    <svg className='w-6 h-6'>
                                        <use href='#lock'></use>
                                    </svg>
                                    <p>تغییر رمز عبور</p>
                                </Link>
                            </li>
                            <li>
                            <Link to={"Order"} className='flex gap-x-1 items-center' >
                                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                    <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                                </svg>
                                <p>سفارشات</p>
                            </Link>
                            </li>
                            <li>
                            <Link to={"/"} className='flex gap-x-1 items-center'>  
                                <svg className='w-6 h-6 rotate-180'>
                                    <use href='#arrow-right-on'></use>
                                </svg>
                                <p>خروج از حساب</p>
                            </Link>
                            </li>
                        </ul>
                    </nav>
                    {router}
                </div>
            </div>
        </>
    )
}
