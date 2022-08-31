import React from "react";
import Button from "../components/Button";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <h1 className="text-3xl font-bold text-white cursor-pointer	hover:text-primaryColor">
            TailwindReact
          </h1>
          {/* Social Links Container */}
          <div className="flex justify-center space-x-4">
            {/* Link 1 */}
            <FaFacebook className="text-white text-3xl cursor-pointer hover:text-primaryColor" />
            {/* Link 2 */}
            <FaYoutube className="text-white text-3xl cursor-pointer hover:text-primaryColor" />
            {/* Link 3 */}
            <FaTwitter className="text-white text-3xl cursor-pointer hover:text-primaryColor" />
            {/* Link 4 */}
            <FaPinterest className="text-white text-3xl cursor-pointer hover:text-primaryColor" />
            {/* Link 5 */}
            <FaInstagram className="text-white text-3xl cursor-pointer hover:text-primaryColor" />
          </div>
        </div>
        {/*List Container*/}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="/" className="hover:text-PrimaryColorLight ">
              Home
            </a>
            <a href="/" className="hover:text-PrimaryColorLight">
              Pricing
            </a>
            <a href="/" className="hover:text-PrimaryColorLight">
              Products
            </a>
            <a href="/" className="hover:text-PrimaryColorLight">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="/" className="hover:text-PrimaryColorLight">
              Careers
            </a>
            <a href="/" className="hover:text-PrimaryColorLight">
              Community
            </a>
            <a href="/" className="hover:text-PrimaryColorLight">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <Button className="p-3 px-6 bg-primaryColor hover:bg-PrimaryColorLight">
                Go
              </Button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
