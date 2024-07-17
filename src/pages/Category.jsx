import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/card/Card';

export default function Category() {
    const { categoryName } = useParams();
  const [foods, setFoods] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(
       "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
            );
    
            console.log(response.data.meals);

            setFoods(response.data.meals)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      }, []);
      foods.map((food)=>{
        if(food.strCategory==categoryName){
            foodCategory.push(food)
        }
      })
      console.log(foodCategory);
  return (
<div className="bg-white py-10 dark:bg-gray-950 dark:text-white ">
      <h1 className="text-[50px] font-bold pb-8 container ">{categoryName}</h1>
      <div className="grid grid-cols-1 gap-10 px-10 lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {foodCategory.map((food, idx) => (
         <Card key={idx} foods={foodCategory} food={food} />
        ))}
      </div>
</div>  
)
}
