import Button from "../components/Button";
import { useState } from "react";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const btnHandler = () => {
    setActive(!isActive);
  };
  return (
    <>
      <nav className="relative container mx-auto p-6">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <h1 className="text-3xl font-bold text-primaryColor cursor-pointer">
            TailwindReact
          </h1>

          {/* menu items */}
          <div className="hidden space-x-6 md:flex">
            <a href="/" className="hover:text-primaryColor">
              Pricing
            </a>
            <a href="/" className="hover:text-primaryColor">
              Product
            </a>
            <a href="/" className="hover:text-primaryColor">
              About Us
            </a>
            <a href="/" className="hover:text-primaryColor">
              Careers
            </a>
            <a href="/" className="hover:text-primaryColor">
              Community
            </a>
          </div>
          {/* button */}
          <Button className="hidden p-3 px-6 bg-primaryColor hover:bg-PrimaryColorLight" />
          {/* Hamburger Icon */}
          <button
            onClick={btnHandler}
            className={`block hamburger md:hidden focus:outline-none ${
              isActive && "open"
            }`}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className={`absolute flex-col flex items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
              !isActive && "hidden"
            }`}>
            <a className="hover:text-primaryColor" href="/">
              Pricing
            </a>
            <a className="hover:text-primaryColor" href="/">
              Product
            </a>
            <a className="hover:text-primaryColor" href="/">
              About Us
            </a>
            <a className="hover:text-primaryColor" href="/">
              Careers
            </a>
            <a className="hover:text-primaryColor" href="/">
              Community
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
