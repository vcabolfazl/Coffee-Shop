import React from 'react'
import Home from './Home'
import Login from './login'
import Signup from './signup'
import ForgotPassword from './forgotPassword'
// import ProductInfo from './components/AboutProduct/productInfo'
// import Error from './components/404'
// import ProductsPage from './components/ProductsPage/ProductsPage'
// import BlogPage from './components/Blogs/BlogPage'
// import Bloginfo from './components/Blogs/Bloginfo'
// import CartPage from './components/CartPage/CartPage'
// import ShopInfo from './components/infoShop/ShopInfo'
// import Profile from "./components/Profile/Profile"
// import ForgotPassword from './components/Login/forgotPassword'
// import Information from './components/Profile/Information'
// import Order from './components/Profile/order'
// import ForgotPasswordUser from './components/Profile/forgotPassword'

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
    // {
    //     path: '/Blogs',
    //     element: <BlogPage />,
    // },
    // {
    //     path: '/Blogs/Blog/:id',
    //     element: <Bloginfo />,
    // },
    // {
    //     path: '/Profile',
    //     element: <Profile />,
    //     children: [
    //         {
    //             path: '/Profile',
    //             element: <Information />,
    //         },
    //         {
    //             path: 'Order',
    //             element: <Order />,
    //         },
    //         {
    //             path: 'Password',
    //             element: <ForgotPasswordUser />,
    //         },
    //         {
    //             path: 'Information',
    //             element: <Information />,
    //         },

    //     ]
    // },
    // {
    //     path: '/Cart',
    //     element: <CartPage />,
    // },
    // {
    //     path: '/Info',
    //     element: <ShopInfo />,
    // },
    // {
    //     path: '/cInfo',
    //     element: <ShopInfo />,
    // },
    // {
    //     path: '/product/:id',
    //     element: <ProductInfo />,
    // },
    // {
    //     path: '/Products',
    //     element: <ProductsPage />,

    // },
    // {
    //     path: '/Products/:category',
    //     element: <ProductsPage />,
    //     children: [
    //         { path: 'coffeeAndEspresso' },
    //         { path: 'Accessories' },
    //         { path: 'espressoMaker' },
    //         { path: 'TestPack' },
    //         { path: 'TurkCoffee' },
    //     ]
    // },
    // {
    //     path: '*',
    //     element: <Error />,

    // },


]
export default Router