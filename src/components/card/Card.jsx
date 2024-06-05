import React, { useState } from 'react'

export default function Card({foods,food}) {
    const [isAdded,setIsAdded]=useState(false)

    const addToCart = (foodId) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const foodItem = foods.find((food) => food.id === foodId);
        if (foodItem) {
          cart.push(foodItem);
          localStorage.setItem("cart", JSON.stringify(cart));
          setIsAdded(true)
        }
      };
      const removeFromCart = (foodId) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter((item) => item.id !== foodId);
        localStorage.setItem("cart", JSON.stringify(cart));
        setIsAdded(false);
      };
    
    
  return (
    <div
    className="bg-white shadow-lg rounded-xl  dark:bg-gray-800 dark:text-white  duration-200 px-8  "
  >
    <img
      src={food.image_url}
      alt={food.name}
      className="w-[400px] h-[200px] mx-auto  rounded-lg sm:w-[200px] sm:h-[120px] md:w-[350px] md:h-[200px] lg:w-[300px] lg:h-[200px]  hover:scale-105 cursor-pointer"
    />

    <span className="text-sm pfont-bold py-2 pb-0 sm:text-lg md:text-xl lg:text-2xl pe-10">
      {food.name}
    </span>
    <p className="text-gray-400 pb-4 sm:text-xs lg:text-sm">
      {food.cuisine}
    </p>
    <p className="text-secondary text-xl">{food.price}</p>
    <p className="text-sm sm:text-xs lg:text-sm">{food.description}</p>
    {isAdded?(
       <button
       id={`addToCartBtn_${food.id}`}
       className="bg-gray-500 text-white px-3 mt-4 text-xl rounded-xl mb-5 py-1 hover:scale-105 sm:text-sm  lg:text-lg"
       onClick={() => removeFromCart(food.id)}
       >
       Added
     </button>
    ):(
       <button
       id={`addToCartBtn_${food.id}`}
       className="bg-secondary text-white px-3 mt-4 text-xl rounded-xl mb-5 py-1 hover:scale-105 sm:text-sm  lg:text-lg"
       onClick={() => addToCart(food.id)}
     >
       Add to cart
     </button>
    )}
   
  </div>  )
}
