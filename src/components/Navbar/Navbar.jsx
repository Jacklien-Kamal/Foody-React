import React, { useState, useEffect } from "react";
import logo from "../../assets/food-logo.png";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import Theme from "./Theme";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const navbarLinks = [
    { title: "Home", link: "/" },
    { title: "Menu", link: "/menu" },
    { title: "Contact", link: "#" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = async (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() !== "") {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
      );
      setSearchResults(response.data.meals || []);
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  };

  const handleResultClick = () => {
    setIsDropdownVisible(false);
    setSearchQuery("");
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="mx-10 sm:container">
        <div className="flex items-center  justify-between py-4">
          <Theme />

            <Link to="/" className="flex items-center  gap-x-1 font-bold text-2xl md:text-3xl  ">
              <img src={logo} className="hidden md:block w-12 h-12" alt="Logo" />
              Foody
            </Link>

          <div className="flex items-center gap-4">
            {/* <button
              className="sm:hidden text-2xl"
              onClick={toggleMenu}
            >
               {isOpen ? <FaBars /> : <FaBars />} 
            </button> */}
            <ul className={`sm:flex gap-4 text-lg flex`}>
             
              <li className="relative">
                <input
                  type="text"
                  placeholder="Search for a meal..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="py-1 px-2 w-48 md:w-60 text-black border border-gray-300 rounded-full focus:outline-none"
                />
                {isDropdownVisible && (
                  <ul className="absolute bg-white border border-gray-300 rounded-md w-full mt-1 z-20">
                    {searchResults.map((result, idx) => (
                      <li key={idx} className="p-2  text-gray-800 hover:bg-gray-200 cursor-pointer">
                        <Link to={`/mealDetails/${result.idMeal}`} onClick={handleResultClick}>
                          {result.strMeal}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/cart"
                  className=" text-lg sm:flex items-center px-4 py-2 rounded-full hover:scale-105 duration-300"
                >
                  
                  <FaCartShopping className="inline-block ml-2 text-3xl " />
                </Link>
              </li> 
            </ul>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="container  list-none flex  items-center  py-2">
      {navbarLinks.map((link, indx) => (
                <li key={indx}>
                  <Link
                    to={link.link}
                    className="inline-block  text-xl  px-4 hover:text-secondary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
      </div>
    </div>
  );
}