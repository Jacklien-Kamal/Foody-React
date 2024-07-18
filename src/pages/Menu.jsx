import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import {getMeals } from "../services/fetchingData";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

    useEffect(() => {
      const fetchFoods = async () => {
          const response = await getMeals();
          setFoods(response);
      };
      fetchFoods();

  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };
 





  
  return (
    <div className="bg-white py-10 dark:bg-gray-950 dark:text-white ">
      <h1 className="text-[50px] font-bold pb-8 px-32 ">Food List</h1>
      <div className="grid grid-cols-1 gap-10 px-10 lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {foods.slice(0, visibleCount).map((food, idx) => (
         <Card key={idx} foods={foods} food={food} />
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
