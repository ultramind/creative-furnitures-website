import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({ product }) => {
  const { title, description, image, price, stock } = product;
  return (
    <div className="border-2 w-1/5 grow  shrink border-gray-200 rounded-xl h-auto">
      <div className="h-[70%]">
        <img src={image} alt="" />
      </div>
      <div className="space-y-2 py-4 px-4 justify-center text-center h-[25%]">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-primary">
          ${price}{" "}
          <span className="line-through text-gray-400">${price - 50}</span>
        </p>
        <div className="flex justify-around w-1/2 mx-auto">
          <span className="m-auto flex justify-center">
            <AiFillStar className="text-orange-400" />
            <AiFillStar className="text-orange-400" />
            <AiFillStar className="text-orange-400" />
            <AiFillStar className="text-orange-400" />
            <AiFillStar className="text-orange-400" />
          </span>

          <span className="text-gray-400">({stock})</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
