import * as React from "react";
import Box from "@mui/joy/Box";

import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CarouselRatio() {
  const carouselRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState([]);

  const handleNext = () => {
    if (currentIndex < category.length - 4) {
      setCurrentIndex((prev) => prev + 1);
      carouselRef.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      carouselRef.current.scrollBy({ left: -900, behavior: "smooth" });
    }
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (response) {
          const data = response.data.categories;
          setCategory(data.splice(0,6));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: '100%',
      }}
      className='px-7 md:px-20'
    >
      <GoChevronLeft
        className="text-5xl cursor-pointer text-gray-500 hover:text-black"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      />

      <Box
        ref={carouselRef}
        className="flex "
        sx={{
          gap: 4,
          py: 9,
          
          overflow: "auto",
          width: '100%', // 343px * 4 (each card's width)
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
       
           {category.map((item,idx)=>(
           <Link to={`/category/${item.strCategory}`}>  <div key={idx} className="group p-3 max-h-[200px] bg-white shadow-xl text-center min-w-[160px] md:min-w-[300px] duration-300 rounded-2xl cursor-pointer hover:text-white dark:bg-gray-800 dark:hover:bg-secondary dark:text-white hover:bg-secondary ">
               <div>
            <img src={item.strCategoryThumb} className="w-52 mx-auto transform -translate-y-14 md:-translate-y-20 group-hover:scale-105 group-hover:rotate-12 duration-300 "/>
           
               </div>
               <div className="-translate-y-12 ">
               <h1 className="text-sm md:text-2xl font-bold"> {item.strCategory}</h1>
               <p className="text-sm opacity-75 text-ellipsis  overflow-clip h-16 "> {item.strCategoryDescription}</p>
               </div>
           
           </div>
           </Link>   
))}
      </Box>

      <GoChevronRight
        className="text-5xl cursor-pointer text-gray-500 hover:text-black"
        onClick={handleNext}
        disabled={currentIndex === category.length - 4}
      />
    </Box>

  );
}
