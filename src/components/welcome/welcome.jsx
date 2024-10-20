import React, { useState } from "react";
import food1 from "../../assets/biryani3.png";
import food2 from "../../assets/biryani5.png";
import food3 from "../../assets/biryani2.png";
import bgVector from "../../assets/banner.jpg";

export default function Welcom() {
  // const [img, setImg] = useState(food1);
  // const imgList = [
  //   {
  //     id: "1",
  //     img: food1,
  //   },
  //   {
  //     id: "2",
  //     img: food2,
  //   },
  //   {
  //     id: "3",
  //     img: food3,
  //   },
  // ];
  const bgStyle = {
    backgroundImage: `url(${bgVector})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  
  return (
    <>
      <div
        className=" min-h-[550px] sm:min-h-[700px] bg-gray-100 flex items-center justify-center dark:bg-[#272626] dark:text-white duration-200 "
        style={bgStyle}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="flex justify-center">
            {/* text+button */}
            <div 
             data-aos="zoom-in"
             data-aos-duration="300"
             data-aos-once="true"
            className="text-center sm:text-left py-20 bg-white bg-opacity-50 px-10 flex flex-col justify-center ">
              <div className="flex flex-col gap-4 justify-center text-center pt-12 sm:pt-0 sm:text-left order-2 sm:order-2 text-black">
                <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold  ">
                 Flowers For Events
                </h1>
                <hr className="border-0 h-1 w-72 mx-auto bg-black" />
                <p className="text-sm sm:text-2xl text-black text-center">
                Fresh, Seasonal, Beautiful


                </p>
              </div>

              {/* <button className="px-3 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 duration-300 my-2 ">
                Order Now
              </button> */}
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
}
