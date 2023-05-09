import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="px-[15%] flex flex-col justify-between py-16 items-center space-y-4 bg-gray-200 md:flex-row">
      <div className="text-4xl font-semibold">{title}</div>
      <div className="flex items-center space-x-4 text-lg">
        <Link
          to="/"
          className="hover:text-primary transition-all ease-in-out duration-75"
        >
          Home
        </Link>{" "}
        <IoIosArrowForward />{" "}
        <Link
          to=""
          className="hover:text-primary transition-all ease-in-out duration-75"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumb;
