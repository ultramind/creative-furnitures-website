import React from "react";
import image from "../../assets/images/items/item-7.png";

const BigCard = () => {
  return (
    <div className="w-[60%] bg-orange-100 h-auto flex justify-center items-center">
      <div className="p-8 justify-start space-y-3">
        <h2 className="text-2xl">Super Sale</h2>
        <h1 className="text-4xl font-semibold">New Collection</h1>
        <a href="#" className="text-2xl block hover:text-primary">
          Shop Now
        </a>
      </div>
      <div className="float-right w-[50%]">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default BigCard;
