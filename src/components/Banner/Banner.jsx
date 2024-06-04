import React from 'react'
import food1 from '../../assets/biryani5.png'

export default function 
() {
  return (
    <div className="flex justify-center items-center backdrop-blur-xl  sm:py-12 dark:bg-gray-900 dark:text-white py-12 ">
      <div
        data-aos="slide-up"
        data-aos-duration="300"
        className="container"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Image section */}
          <div>
            <img
              src={food1}
              alt="biryani img"
              className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            />
          </div>
          {/* text content section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Lorem, ipsum dolor.
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Eaque reiciendis inventore iste ratione ex alias quis magni at
              optio
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae ab sed, exercitationem minima aliquid eligendi
              distinctio? Fugit repudiandae numquam hic quo recusandae.
              Excepturi totam ad nam velit quasi quidem aspernatur.
            </p>
           
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md hover:scale-105">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
