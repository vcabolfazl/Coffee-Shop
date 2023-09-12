import React from 'react'
import Home from './Home'
// import ProductInfo from './components/AboutProduct/productInfo'
// import Error from './components/404'
// import Login from './components/Login/login'
// import Signup from './components/Login/signup'
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
    //     path: '/signup',
    //     element: <Signup />,
    // },
    // {
    //     path: '/Login',
    //     element: <Login />,
    // },
    // {
    //     path: '/forgotPassword',
    //     element: <ForgotPassword />,
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