"use client"
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'

const product = () => {

    const [pin, setPin] = useState("");
    const [serviceable, setServiceable] = useState();


    const checkPinCodeServicability = async () => {
        try {
            const result = await axios.post("http://localhost:3005/api/pincode");
            // we'll implement this checkservice after some time 
            // This is an incomplete task 

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="container py-16 mx-auto">
                <div className="lg:w-4/5 mx-auto  flex justify-center flex-wrap">
                    <img alt="ecommerce" className=" h-[30rem] w-[20rem]   md:h-[35rem] md:w-[25rem] rounded shadow-lg" src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/j/f/n/-original-imagu3shp5pxwb77.jpeg" />

                    <div className="ml-10 mt-5">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Red T-shirt</h1>

                        <div className="price-container text-2xl text-gray-900">₹9,999</div>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <button className="flex mr-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-sm">Add to Cart</button>

                            <Link href='/order'>
                                <button className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-sm">Buy Now</button>
                            </Link>

                        </div>
                        <div className="checkpincode flex mt-4  rounded-sm">
                            <input onChange={(e) => setPin(e.target.value)} className='w-[75%] focus:outline-none py-2 px-3 border-slate-600 border-2 bg-gray-100' type="number" placeholder='Enter your pincode' />
                            <button onClick={checkPinCodeServicability} className=" text-white bg-indigo-500 border-0 py-1 px-2 ml-1 focus:outline-none hover:bg-indigo-600 rounded-sm">Check</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default product
