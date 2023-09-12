import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function ProductCard({ id, title, images, price, discount, discountPrice, score, category, salesNum, description, count }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const condition = true
    // function addToCart(e) {
    //     let num = 1
    //     if (count !== 0) {
    //         if (!cerchrepet) {
    //             Add.setuserCart(prev => (
    //                 [...prev, { id, title, images, price, discount, discountPrice, score, category, salesNum, description, count, num: num }]
    //             ))
    //             return
    //         } else {
    //             let cerchrepet = Add.userCart.filter(item => item.id === id)
    //             cerchrepet[0].num++
    //         }
    //         Add.setShowCart("visible")
    //         setTimeout(() => {
    //             Add.setShowCart("invisible")
    //         }, 1000);
    //     }
    // }
    return (
        <>
            <div className="ProductCard relative grid  grid-rows-6 ">
                <Link to={`/product/${id}`} className='row-span-5'>

                    {
                        discount && count < 0 && discountPrice &&
                        <span className="absolute bg-orange-300 py-1 px-3.5 text-white rounded-full">{discount}%</span>
                    }
                    <img alt='' src={images[0]} />

                    <h3 className="line-clamp-2 mt-2">{title}</h3>

                </Link>
                {
                    count !== 0 ?
                        <p className="my-2.5 flex items-center text-emerald-500 line-clamp-1 space-x-3 font-sans">
                            <span>{price.toLocaleString('en-US')} </span> <span>
                                <svg className='w-5 h-5 text-emerald-500'>
                                    <use href='#toman'></use>
                                </svg>
                            </span>
                            {
                                discountPrice && discount &&
                                <del className="flex items-center gap-x-1 text-gray-400 text-sm"><span> {discountPrice.toLocaleString('en-US')} </span>
                                    <svg className='w-4 h-4 dark:text-white'>
                                        <use href='#toman'></use>
                                    </svg>
                                </del>
                            }
                        </p>
                        : <p className='text-rose-600 dark:text-rose-500 text-center md:pt-5'>متاسفانه موجود نمی باشد</p>
                }

                <div className="flex row-span-1  justify-between items-center">
                    <div className="grid grid-cols-2 gap-x-1 md:gap-x-2">
                        <button >
                            <svg className="wH-5 p-1 rounded-full bg-gray-100 dark:bg-zinc-800">
                                <use href="#shoppingCart"></use>
                            </svg>
                        </button>
                        <button>
                            <svg className="wH-5 p-1">
                                <use href="#arrows-left-right"></use>
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-end">
                        {

                            [...Array(score)].map((_, index) => (
                                condition ? < svg key={index} className="wH-5 text-yellow-400">
                                    <use href="#star"></use>
                                </svg> : <></>
                            ))


                        }
                        {/* <svg className="wH-5 text-yellow-400">
                            <use href="#star"></use>
                        </svg>
                        <svg className="wH-5 text-yellow-400">
                            <use href="#star"></use>
                        </svg>
                        <svg className="wH-5 text-yellow-400">
                            <use href="#star"></use>
                        </svg>
                        <svg className="wH-5 text-yellow-400">
                            <use href="#star"></use>
                        </svg> */}

                    </div>
                </div>
            </div >
        </>
    )
}
