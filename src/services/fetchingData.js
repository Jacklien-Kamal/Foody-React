import axios from "axios";

    export async function getMeals() {
      try {
        const response = await axios.get(
   "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        );

        return response.data.meals
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    export async function getMealById(id) {
        try {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          return response.data.meals[0]
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      export async function getFoosCategories() {
        try {
          const response = await axios.get(
     "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
          );
  
          return response.data.meals

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      export async function getCategories() {
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            return response.data.categories;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      
      }


      export async function getTrendingMeals() {
        try {
          const response = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/search.php?f=v"
          );
        
          return response.data.meals.slice(0, 4);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      

export async function searchMeals(query) {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    return response.data.meals || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}