import React, { useState } from "react";
import logo from "../../assets/images/logo_dark.png";
import { IoGitCompare, IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const [navEffect, setNavEffect] = useState(false);

  const activateStickyNav = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight >= 250) {
      setNavEffect(true);
      console.log(scrollHeight);
    } else {
      setNavEffect(false);
      console.log(scrollHeight);
    }
  };

  addEventListener("scroll", activateStickyNav);

  return (
    <div
      className={`${
        navEffect
          ? "w-[100%] fixed -top-14 left-0 bg-white shadow-lg z-50 transition-all duration-300  py-2"
          : ""
      }`}
    >
      {/* top */}
      <div className="flex flex-col justify-between text-lg items-center md:flex-row px-8 lg:px-[10%] h-12 md:px-[15%]">
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
      <div className="flex relative z-50 justify-between text-lg px-8 lg:px-[10%] items-center h-16 border-t-2 border-gray-200 md:px-[15%]">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* links */}
        <div
          className={`${
            toggle ? "top-14 opacity-100" : "-top-[600px] opacity-0"
          } flex flex-col space-y-4 absolute z-10 left-0  px-8 py-6 bg-[#F6F6F6] w-full transition-all duration-500 md:flex md:flex-row md:space-x-6 md:relative md:opacity-100 md:bg-inherit md:justify-center md:items-center md:space-y-0 md:top-0 md:p-0`}
        >
          <NavLink
            onClick={() => setToggle(!toggle)}
            to="/"
            className="border-b-2 border-none hover:text-primary"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            to="/about-us"
            className="border-b-2 border-none hover:text-primary"
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            to="categories"
            className="border-b-2 border-none hover:text-primary"
          >
            Categories
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            to="contact-us"
            className="border-b-2 border-none hover:text-primary"
          >
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
          {toggle ? (
            <button onClick={() => setToggle(!toggle)}>
              <AiOutlineClose size={25} className="block md:hidden" />
            </button>
          ) : (
            <button onClick={() => setToggle(!toggle)}>
              <GiHamburgerMenu size={25} className="block md:hidden" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
