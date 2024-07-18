import React, { useEffect, useState } from "react";

import { getMeals } from "../../services/fetchingData";
import Card from "../card/Card";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchCategories=async ()=>{
          const meals=await getMeals();
          setFoods(meals)
          
        }
    
        fetchCategories();
      }, []);
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  return (
    <div className="px-10 pb-48 dark:bg-gray-950 dark:text-white h-[100%]">
      <h1 className="font-bold text-2xl py-10 lg:px-32">You Cart</h1>
      <div className="grid grid-cols-1 gap-10 px-10 lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {cartItems.map((food, idx) => (
                   <Card key={idx} foods={foods} food={food} />

        ))}
      </div>
    </div>
  );
}
