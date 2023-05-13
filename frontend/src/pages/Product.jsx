import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import image from "../assets/images/items/item-3.png";
import {
  AiOutlineHeart,
  AiOutlineSafetyCertificate,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { GiReturnArrow, GiTakeMyMoney } from "react-icons/gi";

const Product = () => {
  const title = "Product details";
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(1);
  console.log(quantity);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity(1);
    }
  };

  return (
    <>
      <Breadcrumb title={title} />
      <div className="my-24 md:px-[10%] lg:px-[15%]">
        <div className="flex flex-col justify-center  md:flex-row md: gap-12">
          {/* img */}
          <div className="basis-[50%] border-2 p-4">
            <img src={image} alt="" />
          </div>
          {/* description */}
          <div
            className="basis-[40%] flex flex-col space-y-4
          "
          >
            <h2 className="text-3xl font-bold">Title</h2>
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <h2 className="text-3xl text-primary font-bold">$500</h2>
                <p className="text-gray-500 line-through font-semibold">
                  $35.00
                </p>
              </div>
              <span>satar</span>
            </div>
            <div className="space-y-2">
              <p>description</p>
              <p className="flex gap-2 items-center">
                <AiOutlineSafetyCertificate className="text-primary" />
                Wrantee
              </p>
              <p className="flex gap-2 items-center">
                <GiReturnArrow className="text-primary" /> 6 months Day Resturn
                Policy
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <GiTakeMyMoney className="text-primary" />
                Cash on delivery available
              </p>
            </div>
            <div className="flex items-center space-x-6 border-y-2 py-6">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={decrement}
                  className="w-12 h-12 bg-gray-200 rounded-full text-4xl"
                >
                  -
                </button>
                <div className="w-16 py-2 border-2 text-center text-xl font-bold">
                  {quantity}
                </div>
                <button
                  onClick={increment}
                  className="w-12 h-12 bg-gray-200 rounded-full text-4xl"
                >
                  +
                </button>
              </div>
              <button className="py-3 px-4 flex items-center gap-3 bg-primary text-white rounded-lg ease-in-out transition-all duration-200 border-2 border-primary hover:bg-white hover:text-primary hover:border-primary hover:border-2">
                <AiOutlineShoppingCart size={20} /> Add To Cart
              </button>{" "}
              <AiOutlineHeart
                size={35}
                className="text-gray-5
              00"
              />
            </div>
            <p>
              Category: <b>Clothing</b>
            </p>
          </div>
        </div>
        {/* description */}
        <div className="my-24">
          <div className="flex gap-8 px-4 py-2 border-b-2 font-bold">
            <div onClick={() => setTab(1)} className="cursor-pointer">
              DESCRIPTION
            </div>
            <div onClick={() => setTab(2)} className="cursor-pointer">
              ADDITIONAL INFO
            </div>
          </div>
          <div className="relative p-4">
            <div
              className={` ${
                tab === 2
                  ? "opacity-0 "
                  : "desc absolute top-10 left-0 opacity-100 transition-all ease-in duration-300"
              }`}
            >
              <p>
                First tab Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Deserunt dicta dolor repellat accusantium temporibus
                dolorem id quaerat, veniam soluta eveniet natus dolorum corrupti
                fugit culpa labore ducimus inventore consequatur ipsa?
              </p>
              <p>
                <br />
                First tab Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Deserunt dicta dolor repellat accusantium temporibus
                dolorem id quaerat, veniam soluta eveniet natus dolorum corrupti
                fugit culpa labore ducimus inventore consequatur ipsa?
              </p>
            </div>
            <br />
            <div
              className={` ${
                tab === 1
                  ? "opacity-0"
                  : "desc absolute top-10 left-0 flex  w-full opacity-100 transition-all ease-in duration-300 border-2 "
              }`}
            >
              <div className="w-[20%] border-r-2">
                <div className="border-b-2 px-3 py-2 text-xl">Capacity</div>
                <div className="border-b-2 px-3 py-2 text-xl">Color</div>
                <div className="border-b-2 px-3 py-2 text-xl">
                  Water Resistance
                </div>
                <div className="border-b-2 px-3 py-2 text-xl">Material</div>
              </div>
              <div className="w-[70%]">
                <div className="border-b-2 px-3 py-2 text-xl">5KG</div>
                <div className="border-b-2 px-3 py-2 text-xl">
                  Black, Brown, Red
                </div>
                <div className="border-b-2 px-3 py-2 text-xl">Yes</div>
                <div className="border-b-2 px-3 py-2 text-xl">
                  Original Leather
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
