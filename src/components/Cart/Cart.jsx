import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { NumericFormat } from "react-number-format";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (foodId) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.idMeal !== foodId);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  };

  return (
    <div className="px-10 pb-48 dark:bg-gray-950 dark:text-white h-[100%] lg:px-32">
      <h1 className="font-bold text-2xl py-10">Your Cart</h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {cartItems.map((food, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl dark:bg-gray-800 dark:text-white duration-200 px-8"
          >
            <img
              src={food.strMealThumb}
              alt={food.strMeal}
              className="w-[300px] h-[200px] mx-auto rounded-lg md:w-[330px] md:h-[150px] lg:w-[300px] lg:h-[200px] hover:scale-105 cursor-pointer"
            />
            <p className="text-sm py-2 sm:text-lg md:text-xl lg:text-2xl pe-10 text-ellipsis overflow-hidden h-10">
              {food.strMeal}
            </p>
            <p className="text-gray-400 pb-4 sm:text-xs lg:text-sm">
              {food.strCategory}
            </p>
            <p className="text-secondary text-xl">
              <NumericFormat
                value={food.idMeal}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
              />
            </p>
            <p className="text-sm text-gray-400 sm:text-xs lg:text-sm text-ellipsis overflow-hidden h-20">
              {food.strInstructions}
            </p>
            <div className="grid grid-cols-2 gap-x-20 items-center">
              <button className="bg-secondary text-white w-28 mt-4 text-sm rounded-xl mb-5 py-1 hover:scale-105 sm:text-sm lg:text-lg">
                Order Now
              </button>
              <FaTrashAlt
                className="text-2xl text-primary cursor-pointer hover:text-red-500 hover:scale-110"
                onClick={() => removeFromCart(food.idMeal)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
