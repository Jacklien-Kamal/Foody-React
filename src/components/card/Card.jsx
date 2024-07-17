import React, { useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
export default function Card({foods,food}) {
    const [isAdded,setIsAdded]=useState(false)

    const addToCart = (foodId) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const foodItem = foods.find((food) => food.idMeal === foodId);
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
    <Link to={`/mealDetails/${food.idMeal}`}>
    <img
      src={food.strMealThumb}
      alt={food.strTags}
      className="w-[400px] mt-3 h-[200px] mx-auto  rounded-lg sm:w-[200px] sm:h-[120px] md:w-[350px] md:h-[200px] lg:w-[320px] lg:h-[220px]  hover:scale-105 cursor-pointer"
    />
    </Link>

    <span className="text-sm pfont-bold py-2 pb-0 sm:text-lg md:text-xl lg:text-2xl pe-10 ">
      {food.strMeal }
    </span>
    <p className="text-gray-400 pb-4 sm:text-xs lg:text-sm">
      {food.strCategory
      }
    </p>
    <p className="text-secondary text-xl">
      <NumericFormat value={food.idMeal}  displayType='text' thousandSeparator={true} prefix='$'/></p>
    <p className="text-sm text-gray-400 sm:text-xs lg:text-sm text-ellipsis overflow-hidden ... h-20 ">{food.strInstructions}</p>
    {isAdded?(
       <button
       id={`addToCartBtn_${food.idMeal}`}
       className="bg-gray-500 text-white px-3 mt-4 text-xl rounded-xl mb-5 py-1 hover:scale-105 sm:text-sm  lg:text-lg"
       onClick={() => removeFromCart(food.idMeal)}
       >
       Added
     </button>
    ):(
       <button
       id={`addToCartBtn_${food.idMeal}`}
       className="bg-secondary text-white px-3 mt-4 text-xl rounded-xl mb-5 py-1 hover:scale-105 sm:text-sm  lg:text-lg"
       onClick={() => addToCart(food.idMeal)}
     >
       Add to cart 
     </button>
    )}
 
  </div> 
  
)
}
