import React from "react";
import logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import Theme from "./Theme";

export default function Navbar() {
  const navbarLinks = ["Home", "About", "Contact"];
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <a
              href="#"
              className="flex gap-x-1 items-center font-bold text-2xl sm:text-3xl"
            >
              <img src={logo} className="w-10 h-10" />
              Foody
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Theme/>
            <ul className="hidden sm:flex gap-4 text-lg">
              {navbarLinks.map((link,indx) => (
                <li key={indx} >
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-secondary "
                  >
                    {link}
                  </a>
                </li>
              ))}

            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary text-white text-lg sm:flex items-center px-4 py-1 rounded-full hover:scale-105 duration-300"> Order
            <FaCartShopping className='inline-block ml-2'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
