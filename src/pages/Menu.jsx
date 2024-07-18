import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import { getMeals } from "../services/fetchingData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await getMeals();
      setFoods(response);
    };
    fetchFoods();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foods.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(foods.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="bg-white py-10 dark:bg-gray-950 dark:text-white">
      <h1 className="text-[50px] font-bold pb-8 px-32">Food List</h1>
      <div className="grid grid-cols-1 gap-10 px-10 lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {currentItems.map((food, idx) => (
          <Card key={idx} foods={foods} food={food} />
        ))}
      </div>

      {totalPages > 1 && (
        <Stack spacing={2} className="flex justify-center items-center mt-5 ">
        <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            variant="outlined"
            color="success"
            sx={{ '& .MuiPaginationItem-root': {
                color:'light' ? 'green' : 'white',
              },
            }}
          />
        </Stack>
      )}
    </div>
  );
}

export default Menu;
