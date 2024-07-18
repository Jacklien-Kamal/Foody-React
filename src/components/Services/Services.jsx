import React from "react";
import food1 from '../../assets/biryani2.png'
import CarouselRatio from "../carousel/carousel";
export default function Services() {

    const cards=[
        {
            imgUrl:food1,
            title:"Biryani",
            description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
        },
        {
            imgUrl:food1,
            title:"Chiken kari",
            description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
        },{
            imgUrl:food1,
            title:"Cold Cofee",
            description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
        }
    ]
  return (
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <div>
        {/* header */}
        <div className="text-center max-w-[400px] mx-auto mb-2 ">
          <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>
          <h1 className="text-5xl font-bold pb-1">Categories</h1>
          <p className="text-xs font-medium text-gray-400 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis delectus architecto error nesciunt,
          </p>
        </div>

        {/* Cards */}
      <CarouselRatio/>

      <hr/>
      </div>
    </div>
  );
}
