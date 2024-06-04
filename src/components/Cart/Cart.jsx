import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);
  
    const handleRemoveFromCart = (id) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };
  
  return (
    <div className="px-10 pb-48 dark:bg-gray-950 dark:text-white h-[100%]]">
      <h1 className="font-bold text-2xl py-10">You Cart</h1>
      <div className="grid grid-cols-1 gap-10 px-10 lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">        {cartItems.map((food,idx) => (
          <div
          key={idx}
          className="bg-white shadow-lg rounded-xl  dark:bg-gray-800 dark:text-white  duration-200 px-8  "
        >
          <img
            src={food.image_url}
            alt={food.name}
            className="w-[400px] h-[200px] mx-auto  rounded-lg sm:w-[200px] sm:h-[120px] md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[200px] hover:scale-105 cursor-pointer"
          />

<span className="text-sm pfont-bold py-2 pb-0 sm:text-lg md:text-xl lg:text-2xl pe-10">
              {food.name}
            </span>
            <p className="text-gray-400 pb-4 sm:text-xs lg:text-sm">
              {food.cuisine}
            </p>
            <p className="text-secondary text-xl">{food.price}</p>
          <p className="text-sm sm:text-xs lg:text-sm">{food.description}</p>
          <div className="grid grid-cols-2 gap-x-10 items-center">
          <button
            className="bg-secondary text-white px-3 mt-4 text-xl rounded-xl mb-5 py-1 hover:scale-105 sm:text-sm  lg:text-lg"
            onClick={() => addToCart(food.id)}
          >
            buy now
          </button>
          <FaTrashAlt className="text-2xl text-primary  cursor-pointer hover:text-[red] hover:scale-120 " onClick={()=>{handleRemoveFromCart(food.id)}}/>
          </div>

        </div>
        ))}
      </div>
    </div>
  );
}
