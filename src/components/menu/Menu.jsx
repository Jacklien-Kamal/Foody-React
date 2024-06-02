import React, { useState, useEffect } from "react";
import axios from "axios";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/resturants");
        console.log(response.data);
        setFoods(response.data); // Assuming response.data is an array of food items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
    // fetchData();
  };
  const addToCart = (foodId) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const foodItem = foods.find((food) => food.id === foodId);
    if (foodItem) {
      cart.push(foodItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.getElementById(`addToCartBtn_${foodId}`).disabled = 'true';
      // Change button text to "Added"
      document.getElementById(`addToCartBtn_${foodId}`).innerText = "Added";
    }
  };

  return (
    <div className="bg-white py-10 dark:bg-gray-950 dark:text-white ">
      <h1 className="text-[70px] font-bold text-center pb-8">Food List</h1>
      <div className="grid grid-cols-1 gap-10 px-10 lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {foods.slice(0, visibleCount).map((food) => (
          <div
            key={food.id}
            className="bg-white shadow-lg rounded-xl  dark:bg-gray-800 dark:text-white  duration-200 px-8  "
          >
            <img
              src={food.image_url}
              alt={food.name}
              className="w-[400px] h-[200px] mx-auto  rounded-lg sm:w-[200px] sm:h-[120px] md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[200px]"
            />


            <span className="text-sm pfont-bold py-2 pb-0 sm:text-lg md:text-xl lg:text-2xl pe-10">
              {food.name}
            </span>
            <p className="text-gray-400 pb-4 sm:text-xs lg:text-sm">
              {food.cuisine}
            </p>
            <p className="text-primary text-xl">{food.price}</p>
            <p className="text-sm sm:text-xs lg:text-sm">{food.description}</p>
            <button
            id={`addToCartBtn_${food.id}`}
              className="bg-secondary text-white px-3 mt-4 text-xl rounded-xl mb-5 py-1 hover:scale-105 sm:text-sm  lg:text-lg"
              onClick={() => addToCart(food.id)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {visibleCount < foods.length && (
        <div className="flex justify-center mt-5">
          <button
            className="text-secondary font-bold text-2xl py-1 hover:scale-125"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
