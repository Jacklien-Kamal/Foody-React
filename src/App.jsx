import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu";
import MealDetails from "./pages/MealDetails";
import Category from "./pages/Category";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/mealDetails/:id" element={<MealDetails />} />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
