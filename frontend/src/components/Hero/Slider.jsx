import React, { useState } from "react";
import img from "../../assets/images/items/item-4.png";

const Slider = ({ slider }) => {
  const { title, description, image, bgColor } = slider;
  return (
    <div
      className={`flex ${bgColor} h-[75vh] flex-col-reverse py-12 pl-6 text-left md:flex-row md:px-[10%] justify-center items-center md:h-[50vh]`}
    >
      <div className="space-y-4 md:space-y-8">
        <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error
          quidem cum, aperiam optio sed sit doloremque harum excepturi ratione.
        </p>
        <a
          href="#"
          className="inline-block px-5 py-2 border-2 border-gray-600 rounded-lg ease-in-out duration-150 hover:bg-primary hover:text-white hover:border-primary"
        >
          Shop Now
        </a>
      </div>
      <div className="">
        <img src={image} alt="" className="" />
      </div>
    </div>
  );
};

export default Slider;
