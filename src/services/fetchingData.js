import axios from "axios";

    export async function getMeals() {
      try {
        const response = await axios.get(
   "https://www.themealdb.com/api/json/v1/1/search.php?f=s"
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