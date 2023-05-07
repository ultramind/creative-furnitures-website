import React from "react";
import image from "../../assets/images/items/item-6.png";

const MediumCard = () => {
  return (
    <div className="w-[35%] p-4 bg-green-100 h-auto">
      <div className="justify-start space-y-3">
        <h2 className="text-2xl">Super Sale</h2>
        <h1 className="text-4xl font-semibold">New Collection</h1>
        <a
          href="#"
          className="text-xl block
         hover:text-primary"
        >
          Shop Now
        </a>
      </div>
      <div className="float-right -mt-12">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default MediumCard;
