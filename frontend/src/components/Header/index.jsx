import React from "react";
import logo from "../../assets/images/logo_dark.png";
import { IoGitCompare, IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div className="w-full ">
      {/* top */}
      <div className="flex justify-between text-lg items-center px-[20%] h-12 md:px-[15%]">
        <h3>+234 07062668228</h3>
        <div className="flex items-center gap-6">
          <Link to="login" className="flex gap-2">
            <IoGitCompare /> Compare
          </Link>
          <Link to="login" className="flex gap-2">
            <FaRegUser /> Login
          </Link>
        </div>
      </div>
      {/* NavBar */}
      <div className="flex justify-between text-lg px-[20%] items-center h-16 border-t-2 border-gray-200 md:px-[15%]">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* links */}
        <div className="links space-x-8 font-">
          <NavLink to="/" className="hover:text-primary">
            Home
          </NavLink>
          <NavLink to="/about-us" className="hover:text-primary">
            About Us
          </NavLink>
          <NavLink to="categories" className="hover:text-primary">
            Categories
          </NavLink>
          <NavLink to="contact-us" className="hover:text-primary">
            Contact Us
          </NavLink>
        </div>
        {/* cart */}
        <div className="flex space-x-6">
          <Link to="#">
            <IoSearchOutline size={25} />
          </Link>
          <Link to="#" className="relative">
            <span className="absolute -right-3 -top-3 bg-primary h-5 w-5 flex justify-center items-center text-white text-sm rounded-full">
              2
            </span>
            <AiOutlineShoppingCart size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
