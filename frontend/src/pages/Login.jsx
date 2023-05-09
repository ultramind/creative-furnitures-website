import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const Login = () => {
  const title = "Login";
  return (
    <>
      <Breadcrumb title={title} />
      <div className="py-16 px-8 md:px-[15%] flex flex-col justify-center items-center">
        <div className="w-full md:w-[40%] px-8 py-16 bg-white space-y-6 shadow-xl">
          <h1 className="text-4xl font-bold">Login</h1>
          <form action="" className="space-y-6">
            <input
              type="email"
              className="block border-2 w-full p-2"
              placeholder="Your Email"
            />
            <input
              type="PASS"
              className="block border-2 w-full p-2"
              placeholder="Your Password"
            />
            <div className="flex justify-between text-gray-500">
              <div className="flex space-x-3">
                <input type="checkbox" /> <p>Remember me</p>
              </div>
              <Link to="forgot-password">Forgot Password? </Link>
            </div>
            <button className="w-full bg-primary p-2 text-white text-xl duration-300 transition-all hover:bg-white hover:text-primary hover:border-[1px] border-primary">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
