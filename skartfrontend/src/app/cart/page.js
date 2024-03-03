import React from 'react'
import cartimg from '../../../public/cart.png';
import Image from 'next/image';
import Link from 'next/link';



const Cart = () => {
    return (
        <div className='cart-container h-[50vh] mt-8 bg-slate-200 pt-10 pb-5 flex flex-col items-center justify-evenly '>
            <Image
                src="/cart.png"
                alt="Empty Cart"
                height={100}
                width={100}
            />
            <h1 className='text-2xl font-bold'>Your Cart is Empty!</h1>
            <Link href={'/'}>
                <button className=' text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-sm'>
                    Shop Now
                </button>
            </Link>





        </div>
    )
}

export default Cart
