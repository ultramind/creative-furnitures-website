import React from "react";
import { GiTruck, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";

const WhyUs = () => {
  return (
    <div className=" flex flex-row flex-wrap my-12 justify-center px-8 md:px-[15%]">
      <div className="basis-64 grow shrink border-2 border-gray-300 p-4 flex justify-center items-center space-x-4">
        <GiTruck size={50} className="text-primary" />
        <div>
          <h2>Free Delivery</h2>
          <p>All over Nigeria</p>
        </div>
      </div>
      <div className="basis-64 grow shrink border-2 border-gray-300 p-4 flex justify-center items-center space-x-4 ">
        <GiTakeMyMoney size={50} className="text-primary" />
        <div>
          <h2>Free Delivery</h2>
          <p>30 days monry return</p>
        </div>
      </div>
      <div className="basis-64 grow shrink border-2 border-gray-300 p-4 flex justify-center items-center space-x-4">
        <MdOutlineSupportAgent size={50} className="text-primary" />
        <div>
          <h2>24/7 Online Support</h2>
          <p>Customer Support</p>
        </div>
      </div>
      <div className="basis-64 grow shrink border-2 border-gray-300 p-4 flex justify-center items-center space-x-4">
        <SiSpringsecurity size={50} className="text-primary" />
        <div>
          <h2>Payment Security</h2>
          <p>Safe Payment</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
