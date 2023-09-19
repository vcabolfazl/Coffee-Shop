import React from 'react'
import Home from './Home'
import Login from './login'
import Signup from './signup'
import ForgotPassword from './forgotPassword'
import AllProducts from './AllProducts'
import AboutProduct from './AboutProduct'
import BlogPage from './Blogs/BlogPage'
import AboutBlog from './Blogs/AboutBlog'
import Cart from './Cart'
import AboutStore from './AboutStore'
import Profile from './Profile/Profile'
import Order from './Profile/Order'
import Information from './Profile/Information'
import ForgotPasswordUser from './Profile/forgotPassword'

let Router = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/Login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/forgotPassword',
        element: <ForgotPassword />,
    },
    {
        path: '/Products',
        element: <AllProducts />,
        
    },
    {
        path: '/Products/:category',
        element: <AllProducts />,
    },
    {
        path: '/product/:id',
        element: <AboutProduct />,
    },
    {
        path: '/Blogs',
        element: <BlogPage />,
    },
    {
        path: '/Blogs/Blog/:id',
        element: <AboutBlog />,
    },
    {
        path: '/Cart',
        element: <Cart />,
    },
            {
                path: '/Information',
                element: <AboutStore />,
            },
    {
        path: '/Profile',
        element: <Profile />,
        children: [
            {
                path: '/Profile',
                element: <Information />,
            },
            {
                path: 'Order',
                element: <Order />,
            },
            {
                path: 'Password',
                element: <ForgotPasswordUser />,
            },

        ]
    },
    // {
    //     path: '/Info',
    //     element: <ShopInfo />,
    // },
    // {
    //     path: '/cInfo',
    //     element: <ShopInfo />,
    // },
    // {
    //     path: '*',
    //     element: <Error />,

    // },


]
export default Router