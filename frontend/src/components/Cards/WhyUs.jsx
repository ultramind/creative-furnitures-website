import React from "react";
import { GiTruck, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";

const WhyUs = () => {
  return (
    <div className="px-[15%] my-16 flex flex-col justify-center items-center">
      <div className="grow py-4 px-2 flex  space-x-6 items-center justify-center border-2 border-gray-300 md:flex-row">
        <GiTruck size={50} className="text-primary" />
        <div>
          <h2>Free Delivery</h2>
          <p>All over Nigeria</p>
        </div>
      </div>
      <div className="grow py-4 px-2 flex space-x-6 items-center justify-center border-2 border-gray-300 border-x-0">
        <GiTakeMyMoney size={50} className="text-primary" />
        <div>
          <h2>Free Delivery</h2>
          <p>30 days monry return</p>
        </div>
      </div>
      <div className="grow py-4 px-2 flex space-x-6 items-center justify-center border-2 border-gray-300 border-r-0">
        <MdOutlineSupportAgent size={50} className="text-primary" />
        <div>
          <h2>24/7 Online Support</h2>
          <p>Customer Support</p>
        </div>
      </div>
      <div className="grow py-4 px-2 flex space-x-6 items-center justify-center border-2 border-gray-300">
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
