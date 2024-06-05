import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/a51ef70a-5a39-41d2-b5f2-d9b2e01f0566"
        );
        setFoods(response.data.resturants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };
 
  return (
    <div className="bg-white py-10 dark:bg-gray-950 dark:text-white ">
      <h1 className="text-[70px] font-bold text-center pb-8">Food List</h1>
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
