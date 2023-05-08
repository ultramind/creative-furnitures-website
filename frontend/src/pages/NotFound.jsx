import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const NotFound = () => {
  const title = "Page Not Found";
  return (
    <>
      <Breadcrumb title={title} />
      <div className="px-[15%] h-[50vh] flex flex-col items-center justify-center">
        <div className=" flex flex-col space-y-4 text-center justify-center w-1/2">
          <h1 className="text-8xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">
            Oops! The Page you requested was not found!
          </h2>
          <p>
            The page you are looking for was moved, removed, renamed or might
            never existed.
          </p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 block w-full focus:outline-none border-none"
            />
            <button className="block py-2 px-4 bg-primary font-bold text-white">
              <AiOutlineSearch size={25} />
            </button>
          </div>
          <Link
            to="/"
            className="block bg-primary text-white py-3 w-1/3 mx-auto rounded-lg text-xl"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
