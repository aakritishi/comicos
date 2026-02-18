import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <section className="flex flex-2 items-center justify-end gap-5 w-[96%] my-3">
        <FaRegUser size={22} />
        <IoCartOutline size={28} />
      </section>
      <section className="hidden md:grid grid-cols-[15%_60%_25%] items-center w-full bg-[#07070A] text-white py-3">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="log-alt-text"
              className="h-12 w-14 rounded-full ml-6"
            />
          </Link>
        </div>
        <div className="flex justify-center gap-3 lg:gap-10 text-lg font-medium">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/shop" className="">
            Shop
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
          <Link to="/gallery" className="">
            Gallery
          </Link>
        </div>
        <div className="w-[92%]">
          <Input type="text" name="search" placeholder="Search..." />
        </div>
      </section>
      <section>
        <div className="flex md:hidden justify-between items-center w-full bg-[#07070A] text-white py-3 px-4">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="log-alt-text"
                className="h-12 w-14 rounded-full"
              />
            </Link>
          </div>
          <div>
            <IoMenu size={28} onClick={onMenuClick} />
          </div>
        </div>
      </section>
      {isMenuOpen && (
        <div>
          <div className="w-full text-white p-6 bg-[#07070A] flex flex-col items-center justify-center gap-5">
            <RxCross1 size={28} className="self-end" onClick={onMenuClick} />
            <Link to="/" className="text-lg font-medium" onClick={onMenuClick}>
              Home
            </Link>
            <Link
              to="/shop"
              className="text-lg font-medium"
              onClick={onMenuClick}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium"
              onClick={onMenuClick}
            >
              Contact
            </Link>
            <Link
              to="/gallery"
              className="text-lg font-medium"
              onClick={onMenuClick}
            >
              Gallery
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
