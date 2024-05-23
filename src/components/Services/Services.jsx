import React from "react";
import food1 from '../../assets/biryani2.png'
import food2 from '../../assets/biryani3.png'
import food3 from '../../assets/biryani4.png'
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
          <h1 className="text-5xl font-bold pb-1">Services</h1>
          <p className="text-xs font-medium text-gray-400 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis delectus architecto error nesciunt,
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-28 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center mt-16  ">
            {cards.map((card,idx)=>(
            <div key={idx} className="group max-h-[210px] bg-white shadow-xl text-center max-w-[300px] duration-300 rounded-2xl cursor-pointer hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-white  ">
                <div>
                <img src={card.imgUrl} className="w-52 mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"/>

                </div>
                <div className="-translate-y-12 ">
                <h1 className="text-2xl font-bold"> {card.title}</h1>
                <p className="text-sm opacity-75 "> {card.description}</p>
                </div>
            
            </div>
))}
        </div>
      </div>
    </div>
  );
}
