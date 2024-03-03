import Link from 'next/link'
import React from 'react'

const Shoes = () => {
  return (
    <>
      <div className="container py-16 mx-auto">
        <div className="flex flex-wrap justify-center rounded-md">

          <div className="lg:w-1/5 lg:p-0 lg:mr-2 md:w-1/3 p-3 mb-5 hover:shadow-md rounded">
            <Link href={'/docs/product'} >
              <img alt="ecommerce" className="" src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/i/j/c/-original-imagx9kxrat3fgwh.jpeg" />
              <div className="p-2">
                <h3 className=" text-gray-500 text-sm font-semibold mb-1">ROADSTER
                </h3>
                <h2 className="text-gray-900 title-font text-md font-semibold">Metcon 8 Training & Gym Shoes For Men  (Black)</h2>
                <p className="mt-1 text-2xl font-bold">₹11,895</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shoes
