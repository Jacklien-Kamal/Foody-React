import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { getTrendingMeals } from "../../services/fetchingData";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";

function TrendingMeals() {
  const [trendingMeals, setTrendingMeals] = useState([]);

  useEffect(() => {
    const fetchTrendingMeals = async () => {
      const response = await getTrendingMeals();
      setTrendingMeals(response);
    };
    fetchTrendingMeals();
  }, []);

  return (
    <div className="bg-white py-10 dark:bg-gray-950 dark:text-white">
      <h1 className="text-[50px] font-bold pb-8 px-32">Trending Meals</h1>
      <div className="grid grid-cols-1 gap-10 px-10 lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {trendingMeals.map((meal, idx) => (
          <div className="bg-white shadow-lg rounded-xl  dark:bg-gray-800 dark:text-white  duration-200 px-8  py-2">
            <Link to={`/mealDetails/${meal.idMeal}`}>
              <img
                src={meal.strMealThumb}
                alt={meal.strTags}
                className="w-[400px] mt-3 h-[200px] mx-auto  rounded-lg sm:w-[200px] sm:h-[120px] md:w-[350px] md:h-[200px] lg:w-[320px] lg:h-[220px]  hover:scale-105 duration-300 cursor-pointer"
              />
            </Link>

            <p className="text-sm  py-2 sm:text-lg md:text-xl lg:text-2xl pe-10 text-ellipsis overflow-hidden h-10 ...  ">
              {meal.strMeal}
            </p>
            <p className="text-gray-400  sm:text-xs lg:text-sm">
              {meal.strCategory}
            </p>
            <p className="font-medium text-2xl flex items-center text-orange-400">
              ★★★★★ 
              <span className=" ps-1 text-xs font-light underline cursor-pointer hover:no-underline">
                 ({Math.floor(Math.random()*500)} Review)
              </span>
            </p>
            <p className="text-secondary text-xl">
              <NumericFormat
                value={meal.idMeal}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
              />
            </p>
            
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingMeals;
