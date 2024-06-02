import React from "react";
import bike from "../../assets/mobile_bike.gif";
import appStore from "../../assets/app_store.png";
import playStore from "../../assets/play_store.png";
export default function () {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="container py-12  grid grid-cols-1 sm:grid-cols-2 place-items-center ">
        <div className="max-w-[450px]">
          <p className="text-center text-gray-700 font-bold text-2xl  lg:text-3xl md:text-2xl sm:text-2xl  sm:text-left  dark:text-[white] ">
            Foodly is available for Android and IOS{" "}
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start items-center py-3">
            <img
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              src={playStore}
            />
            <img
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              src={appStore}
            />
          </div>
        </div>
        <div>
          <img
            src={bike}
            className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
          />
        </div>
      </div>
    </div>
  );
}
