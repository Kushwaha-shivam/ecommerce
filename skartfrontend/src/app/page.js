"use client"
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Home() {

  return (
    <>
      <main className="min-h-screen flex flex-col pt-3">
        <Carousel autoPlay infiniteLoop transitionTime={1000} interval={3000} showThumbs={false} showStatus={false} >
          <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e8afba7feffa58f9.jpg" className="w-[100vw] h-[30vh]" />
          </div>
          <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e8afba7feffa58f9.jpg" className="w-[100vw] h-[30vh]" />
          </div>
          <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/50db1e7b0e6c045d.jpg" className="w-[100vw] h-[30vh]" />
          </div>
          <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/50db1e7b0e6c045d.jpg" className="w-[100vw] h-[30vh]" />
          </div>
          <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/50db1e7b0e6c045d.jpg" className="w-[100vw] h-[30vh]" />
          </div>

        </Carousel>
      </main>
    </>

  )
}
