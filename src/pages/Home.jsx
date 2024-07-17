import React from "react";
import Welcom from "../components/welcome/welcome";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import AppStore from "../components/AppStore/AppStore";
import CarouselRatio from "../components/carousel/carousel";

export default function Home() {
  return (
    <div>
      <Welcom />
      <Services />
      <Banner />
      <AppStore />
    </div>
  );
}
 