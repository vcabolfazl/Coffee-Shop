import React from 'react'
import useInput from '../Hooks/useInput'
// import AddToCart from '../Contexts/AddToCart'
export default function Cart() {
    const datas = [
        {
            id: 13,
            title: "اسپرسو ساز مباشی مدل ECM2010",
            images: [
                "/assets/images/products/p10.png",
                "/assets/images/products/p10(2).png",
                "/assets/images/products/p10(3).png"
            ],
            price: 4700000,
            discount: null,
            discountPrice: null,
            score: 3,
            category: "espressoMaker",
            salesNum: 35,
            description: "- پیچ تنظیم میزان بخار خروجی - دارای نمایشگر حالت آماده به کار قهوه ، بخار و میزان دمای آب - بویلر قوی و ریخته گری شده از جنس آلومینیوم - فیلترها از جنس استیل ضد زنگ - سینی چکه گیر با قابلیت جدا شدن جهت شستشوی آسان - سیستم محافظت و کنترل از فشار بالا و حرارت بیش از حد - دستگاه نیمه صنعتی با فشار بخار قوی - غلظت زیاد قهوه خروجی - صدا و لرزش پائین دستگاه",
            count: 10
        },
        {
            id: 12,
            title: "پودر قهوه ترک فرمند کد 2500 - 100 گرم",
            images: [
                "/assets/images/products/p14.png"
            ],
            price: 55000,
            discount: 13,
            discountPrice: 47700,
            score: 5,
            category: "TurkCoffee",
            salesNum: 67,
            description: "- ارزش غذایی محصول در هر ۱۰۰ گرم: - انرژی: ۳۸۶ کیلو کالری - قند: ۰ گرم - چربی: ۸.۲ گرم - نمک: ۱ گرم - اسید های چرب ترانس: ۰ گرم"
        }
    ]
    const [nameValue, nameBinding, nameRest] = useInput("")
    const [phoneValue, phoneBinding, phoneRest] = useInput("")
    const [addressValue, addressBinding, addressRest] = useInput("")
    const sendForm = e => {
        e.preventDefault()
        if (nameValue && phoneValue && addressValue) {
            nameRest()
            phoneRest()
            addressRest()
        }
    }
    return (
        <div className="md:ltr mt-32 container md:rounded-3xl py-5 gap-5 px-10 dark:bg-zinc-700 shadow-2xl grid md:grid-cols-3  dark:text-white">

            <form onSubmit={sendForm} className="rtl left md:col-span-1 my-auto space-y-5 border p-5 rounded-2xl">
                <div className="space-y-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className='mt-2'>نام و نام خانوادگی گیرنده : </label>
                        <input id='name' {...nameBinding} className='w-full outline-none text-zinc-700 font-danaM px-3 py-2 rounded-md' type="text" placeholder='فارسی وارد کنید' required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="num" className='mt-2'>شماره تلفن گیرنده : </label>
                        <input id='num' {...phoneBinding} className='w-full outline-none text-zinc-700 font-danaM px-3 py-2 rounded-md' type="number" placeholder='09366030198' required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="address" className='mt-2'>ادرس گیرنده : </label>
                        <textarea id='address' {...addressBinding} className='w-full outline-none text-zinc-700 font-danaM px-3 py-2 rounded-md' type="text" placeholder='توضیحات شامل : شهر, خیابان اصلی, کوچه, پلاک و واحد ' required></textarea>
                    </div>
                </div>

                <div className="flex justify-between">
                    <h3>قیمت کالاها ({datas.length})</h3>
                    <h3 className='flex items-center gap-1'>100,000
                        <svg className='w-5 h-5 dark:text-white'>
                            <use href='#toman'></use>
                        </svg></h3>
                </div>
                <div className="flex justify-between text-rose-600 dark:text-rose-500 font-danaB">
                    <h3>سود شما از خرید</h3>
                    <h3 className='flex items-center gap-1'>
                        20,000
                        <svg className='w-5 h-5'>
                            <use href='#toman'></use>
                        </svg>
                    </h3>
                </div>
                <div className="flex justify-between">
                    <h3>جمع سبد خرید</h3>
                    <h3 className='flex items-center gap-1'>
                        80,000
                        <svg className='w-5 h-5 '>
                            <use href='#toman'></use>
                        </svg>
                    </h3>
                </div>
                <input type='submit' className="w-full cursor-pointer bg-rose-600 hover:bg-rose-500 text-white rounded-3xl py-3 font-danaB" value='پرداخت' />


            </form>
            <div className="rtl md:col-span-2">
                <h1 className="text-2xl md:text-3xl font-MorabbaM my-5 text-orange-300">سبد خرید شما</h1>
                <div className="h-[60vh] md:h-[70vh] overflow-y-auto">
                    {
                        datas.map(Product => (
                            <div key={Product.id}>
                                <div className="w-full flex items-center gap-x-2">
                                    <svg className='w-6 h-6 float-left text-rose-600 dark:text-rose-500'>
                                        <use href='#trash'></use>
                                    </svg>
                                    <img alt='' src={Product.images[0]} className="max-w-[90px]" />
                                    <div className="space-y-2">
                                        <p className="text-sm line-clamp-2">{Product.title}</p>
                                        {
                                            Product.offPrice &&
                                            <del className="text-xs flex items-center gap-x-1 text-teal-600 dark:text-emerald-500"><span>{Product.offPrice.toLocaleString('en-US')}</span>
                                                <svg className='w-4 h-4'>
                                                    <use href='#toman'></use>
                                                </svg>
                                            </del>
                                        }
                                        <p className='flex items-center gap-1'>{Product.price.toLocaleString('en-US')}
                                            <svg className='w-5 h-5 '>
                                                <use href='#toman'></use>
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                                <hr className='my-5' />
                            </ div>


                        ))
                    }

                </div>

            </div>
        </div>

    )
}