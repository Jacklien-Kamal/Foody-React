import React, { useState } from "react";
import logo from "../../assets/food-logo.png";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import Theme from "./Theme";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarLinks = [
    { title: "Home", link: "/" },
    { title: "Menu", link: "/menu" },
    { title: "Contact", link: "#" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Theme />

          <div>
            <Link to="/" className="flex gap-x-1 items-center font-bold text-2xl md:text-2xl">
              <img src={logo} className="w-10 h-10" alt="Logo" />
              Foody
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="sm:hidden text-2xl"
              onClick={toggleMenu}
            >
              {isOpen ? <FaBars /> : <FaBars />}
            </button>
            <ul className={`sm:flex gap-4 text-lg ${isOpen ? "block" : "hidden"} sm:block`}>
              {navbarLinks.map((link, indx) => (
                <li key={indx}>
                  <Link
                    to={link.link}
                    className="inline-block py-2 px-4 hover:text-secondary"
                  >
                    {link.title}
                  </Link>
                </li>
                
              ))}
              <Link
              to="/cart"
              className="bg-gradient-to-r from-primary to-secondary text-white text-lg sm:flex items-center px-4  rounded-full hover:scale-105 duration-300"
            >
              Cart
              <FaCartShopping className="inline-block ml-2" />
            </Link>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}
