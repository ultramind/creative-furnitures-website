import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = ({ title }) => {
  return (
    <div className="px-[15%] flex justify-between py-16 items-center bg-gray-200">
      <div className="text-4xl font-semibold">{title}</div>
      <div className="flex items-center space-x-4 text-lg">
        <a
          href="/"
          className="hover:text-primary transition-all ease-in-out duration-75"
        >
          Home
        </a>{" "}
        <IoIosArrowForward />{" "}
        <a
          href=""
          className="hover:text-primary transition-all ease-in-out duration-75"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default Breadcrumb;
