import React, { useState } from "react";
import food1 from "../../assets/biryani3.png";
import food2 from "../../assets/biryani5.png";
import food3 from "../../assets/biryani2.png";
import bgVector from "../../assets/vector3.png";

export default function Welcom() {
  const [img, setImg] = useState(food1);
  const imgList = [
    {
      id: "1",
      img: food1,
    },
    {
      id: "2",
      img: food2,
    },
    {
      id: "3",
      img: food3,
    },
  ];
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
        className=" min-h-[550px] sm:min-h-[600px] bg-gray-100 flex items-center justify-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgStyle}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text+button */}
            <div 
             data-aos="zoom-in"
             data-aos-duration="300"
             data-aos-once="true"
            className="text-center sm:text-left pt-20">
              <div className="flex flex-col gap-4 justify-center text-center pt-12 sm:pt-0 sm:text-left order-2 sm:order-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold  ">
                  Welcome
                  <span class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                    {" "}
                    Foody{" "}
                  </span>
                  Zone
                </h1>
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                </p>
              </div>

              <button className="px-3 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 duration-300 my-2 ">
                Order Now
              </button>
            </div>
            {/* images */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-1 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={img}
                  className="w-[400px] sm:w-[500px] mx-auto animate-spin"
                />
              </div>

              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {imgList.map((img) => (
                  <img
                    src={img.img}
                    key={img.id}
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer"
                    onClick={() => {
                      setImg(img.img);
                    }}
                  />
                ))}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
