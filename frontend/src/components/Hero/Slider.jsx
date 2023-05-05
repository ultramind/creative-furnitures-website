import React, { useState } from "react";
import img from "../../assets/images/items/item-4.png";

const Slider = ({ slider }) => {
  const { title, description, image, bgColor } = slider;
  return (
    <div
      className={`px-[20%] text-left ${bgColor} flex h-[70vh] justify-around items-center md:px-[15%] `}
    >
      <div className="w-[55%] space-y-8">
        <h1 className="text-6xl font-bold md:text-5xl">{title}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error
          quidem cum, aperiam optio sed sit doloremque harum excepturi ratione
          eaque eius ipsam! Incidunt nostrum iure nihil quam ipsam placeat.
        </p>
        <a
          href="#"
          className="inline-block px-5 py-2 border-2 border-gray-600 rounded-lg "
        >
          Shop Now
        </a>
      </div>
      <div>
        <img src={image} alt="" className="w-[100%]" />
      </div>
    </div>
  );
};

export default Slider;
