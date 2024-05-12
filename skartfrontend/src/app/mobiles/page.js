import Link from 'next/link'
import React from 'react'

const Mobiles = () => {

  return (
    <>
      <div className="container py-16 px-5 mx-auto">
        <div className="flex flex-col  justify-between items-center rounded-md md:flex-col md:justify-between">

          <Link href={'/docs/product'}>
            <div className="item-container md:flex md:flex-row md:mb-2 mb-5 mt-4 md:w-full">
              <div className="mb-5 flex flex-col justify-center items-center  ">
                <img className=" h-50 w-40  mb-2 rounded-lg" alt="hero" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/i/c/galaxy-a15-5g-sm-a156elbnins-samsung-original-imagwkgykezdha6z.jpeg" />
                <span className='font-extrabold  text-2xl'>₹13,499</span>
              </div>
              <div className="flex flex-col md:justify-center md:left-20 relative ">
                <h1 className="text-lg md:text-2xl font-bold mb-4">SAMSUNG Galaxy A15 5G
                </h1>
                <ul className="mb-4 ">
                  <li>8 GB RAM | 128 GB ROM</li>
                  <li>16.71 cm (6.58 inch) Full HD+ Display</li>
                  <li>50MP + 2MP | 8MP Front Camera</li>
                  <li>5000 mAh Battery</li>
                  <li>Dimensity 6020 Processor</li>
                </ul>
              </div>
            </div>
          </Link>
          <hr className='bg-gray-700  w-full md:w-3/4 ' />

        </div>
      </div>


    </>
  )
}

export default Mobiles
