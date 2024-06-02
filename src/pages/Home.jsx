import React from "react";
import Welcom from "../components/welcome/welcome";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Menu from "../components/menu/Menu";
import AppStore from "../components/AppStore/AppStore";

export default function Home() {
  return (
    <div>
      <Welcom />
      <Services />
      <Banner />
      <Menu />
      <AppStore />

    </div>
  );
}
 