import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BsZoomIn, BsShare } from "react-icons/bs";

const Card = ({ product }) => {
  const { title, description, image, price, stock } = product;
  const [hover, setHover] = useState(false);
  const handleHoverEffect = () => {
    setHover(!hover);
  };
  return (
    <div
      onMouseEnter={handleHoverEffect}
      onMouseLeave={handleHoverEffect}
      className="card relative flex flex-col border-2 basis-60 shrink grow overflow-hidden border-gray-200 rounded-xl p-2 justify-between md:grow-0"
    >
      <div className="">
        <img
          src={image}
          alt=""
          className={`${
            hover ? "scale-150" : "scale-1"
          } ease-in-out transition-all duration-300`}
        />
      </div>
      <div className="space-y-2 py-4 px-4 justify-center text-center">
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
      {/* hover card */}
      <div
        className={`card-hover ${
          hover ? "opacity-100 " : " opacity-0"
        } flex flex-col justify-between items-center overflow-hidden py-0 left-0 ease-in-out transition-all duration-700`}
      >
        <div className="flex mt-[40%] gap-4">
          <div className="bg-white rounded-full w-10 h-10 flex text-xl cursor-pointer justify-center items-center ">
            <BsShare className=" " />
          </div>
          <div className="bg-white rounded-full w-10 h-10 flex text-xl cursor-pointer justify-center items-center ">
            <BsZoomIn className=" " />
          </div>
          <div className="bg-white rounded-full w-10 h-10 flex text-xl cursor-pointer justify-center items-center ">
            <MdFavoriteBorder className=" " />
          </div>
        </div>
        <div className="flex bg-white placeholder-opacity-100 w-full h-[37%] flex-col space-y-4 justify-center items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="bg-primary px-4 py-2 text-white rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
