import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { TfiTwitter } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="px-[20%] py-20 bg-[#202325] text-white flex space-x-12">
      <div className="flex-col space-y-4 w-1/2">
        <h2 className="text-xl font-bold mb-4">Contact Info</h2>
        <p>123 Street, Old Trafford, NewYork, USA</p>
        <a href="" className="block">
          info2creativefurniture.com
        </a>
        <a href="" className="block">
          +234 80377955383
        </a>
        <div className="flex space-x-4">
          <a href="" className="block">
            <FaFacebookF />
          </a>
          <a href="" className="block">
            <GrInstagram />
          </a>
          <a href="" className="block">
            <TfiTwitter />
          </a>
        </div>
      </div>
      <div className="flex-col space-y-4 w-1/4">
        <h2 className="text-xl font-bold mb-4">Useful Links</h2>

        <div className="space-y-4">
          <a href="" className="block">
            About Us
          </a>
          <a href="" className="block">
            FAQ
          </a>
          <a href="" className="block">
            Locations
          </a>
          <a href="" className="block">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex-col space-y-4 w-1/4">
        <h2 className="text-xl font-bold mb-4">My Account</h2>

        <div className="space-y-4">
          <a href="" className="block">
            My Account
          </a>
          <a href="" className="block">
            Discount
          </a>
          <a href="" className="block">
            Orders History
          </a>
          <a href="" className="block">
            Ordeer Tracking
          </a>
        </div>
      </div>
      <div className="">
        <h2 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h2>
        <p>
          If you want to get an email from us every time we have a new special
          offer, then sign up here!
        </p>
        <div className="mt-4">
          <form action="">
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Enter Email"
                className="px-4 py-2 inline-block w-full"
              />
              <button className="block py-2 px-4 bg-primary font-bold">
                <MdOutlineUnsubscribe size={25} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
