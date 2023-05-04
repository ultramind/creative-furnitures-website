import React from "react";
import logo from "../../assets/images/logo_dark.png";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full ">
      {/* top */}
      <div className="flex justify-between text-lg items-center px-[20%] h-12">
        <h3>+234 07062668228</h3>
        <div className="flex gap-6">
          <span>Compare</span>
          <span className="flex gap-2">
            <FaRegUser /> Login
          </span>
        </div>
      </div>
      {/* NavBar */}
      <div className="flex justify-between text-lg px-[20%] items-center h-16 border-t-2 border-gray-200">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* links */}
        <div className="links space-x-8 font-bold">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            About Us
          </a>
          <a href="#" className="hover:text-primary">
            Categories
          </a>
          <a href="#" className="hover:text-primary">
            Contact Us
          </a>
        </div>
        {/* cart */}
        <div className="flex space-x-4">
          <a href="#">
            <IoSearchOutline size={25} />
          </a>
          <a href="#" className="relative">
            <span className="absolute -right-3 -top-3 bg-primary h-5 w-5 flex justify-center items-center text-white text-sm rounded-full">2</span>
            <AiOutlineShoppingCart size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
