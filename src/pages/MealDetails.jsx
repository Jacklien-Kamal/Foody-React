import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { getMealById } from "../services/fetchingData";

export default function MealDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
   const getMeal=async()=>{
   const meal=await getMealById(id)
   setProduct(meal)

   }
   getMeal();
  }, [id]);

 

  if (!product) {
    return (
      <div className="mt-40 text-center font-bold text-red-500">
        This Product not found!
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (product[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: product[`strIngredient${i}`],
        measure: product[`strMeasure${i}`],
      });
    }
  }
  console.log(product);
  const youtubeEmbedUrl = product.strYoutube
  ? `https://www.youtube.com/embed/${product.strYoutube.split("v=")[1]}`
  : null;

  return (
    <div className=" dark:bg-gray-950 dark:text-white">
      <div className=" pt-16 lg:flex gap-20  container   ">
        <div>
          <p className="my-4 font-light">{product.strCategory}</p>
          <div>
            <img
              src={product.strMealThumb}
              className="w-[500px] h-50"
              alt={product.strMeal}
            />
          </div>
        </div>
        <div className="my-4  text-[#383633]  dark:text-white">
          
          <div className="">
        <h1 className=" font-bold text-3xl my-2 text-secondary ml-8 mb-10">Ingredients</h1>
        <ul className="  grid grid-cols-4 gap-6">
          {ingredients.map((item, index) => (
            <li key={index} className="flex flex-col items-center align-center">
              <img  src={`https://www.themealdb.com/images/ingredients/${item.ingredient}.png`} alt={item.ingredient} className="w-20"/>
           <p className="">{item.ingredient}</p>
           <p className="">{item.measure}</p>
            </li>
          ))}
        </ul>
      </div>
          
        </div>

      </div>
      <div className="container flex flex-col   pb-40">
      <span>
            <p className="py-1 font-medium text-2xl">{product.strMeal}</p>
            <p className="  font-light ">{product.strCategory}</p>
            <p className="font-medium text-2xl flex items-center text-orange-400">
              ★★★★★{" "}
              <span className="text-xs font-light underline cursor-pointer hover:no-underline">
                (1 Review)
              </span>
            </p>
          </span>
          <p className="py-1 font-medium text-xl">
            <NumericFormat
              value={product.idMeal}
              displayType="text"
              thousandSeparator={true}
              prefix="$"
            />
          </p>
        
      <h1 className=" font-bold text-3xl my-2 text-secondary">How to Do?      </h1>
      
      <p className="py-1 text-sm  w-[90%]">
            {product.strInstructions}
          </p>
          {youtubeEmbedUrl && (
            <div >
              <iframe
              className="mt-5 md:w-[600px]  md:h-[300px] xl:w-[1160px] xl:h-[500px]"
               
                src={youtubeEmbedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      
        </div>
    
  );
}
