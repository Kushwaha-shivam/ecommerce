"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'


const Tshirts = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3005/api/getproducts").then((res) => setData(res.data.products))
  }, [])

  return (
    <>
      <div className="container py-16 mx-auto">
        <div className="flex flex-wrap justify-center rounded-md">
          {
            data.map((item, index) => {
              return (
                <div key={index} className="lg:w-1/4 lg:mb-5 lg:mr-5 md:w-1/3 md:mb-5 md:m4-5 p-3 mb-5 hover:shadow-md rounded">
                  <Link href={'/docs/product'} >
                    <img alt="ecommerce" src={item.image} />
                    <div className="p-2">
                      <h3 className=" text-gray-500 text-sm font-semibold mb-1">{item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-md font-semibold">{item.title}</h2>
                      <p className="mt-1 text-2xl font-bold">₹{item.price}</p>
                    </div>
                  </Link>
                </div>
              )

            })
          }
        </div>
      </div>
    </>
  )
}

export default Tshirts
