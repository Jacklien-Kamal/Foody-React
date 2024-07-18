import React from "react";
import Welcom from "../components/welcome/welcome";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import AppStore from "../components/AppStore/AppStore";
import TrendingMeals from "../components/trendingMeal/TrendingMeals";
import LargeCard from "../components/largeCard/LargeCard";

export default function Home() {
  return (
    <div className="">
      <Welcom />
      <Services />
      {/* <LargeCard/> */}
      <Banner />
      <TrendingMeals/>
      <AppStore />
    </div>
  );
}
 