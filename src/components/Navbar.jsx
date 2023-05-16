/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import {
  FaBars,
  faBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

import Logo from "../assets/logo1.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>{" "}
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={clickHandler}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          nav
            ? " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={clickHandler} to="about" smooth={true} duration={500}>
            About
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={clickHandler} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={clickHandler} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={clickHandler}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0310c0]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://github.com/Hawkazizi"
            >
              Github <FaGithub size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#31aec4]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://t.me/V4Vouch"
            >
              Telegram <FaTelegramPlane size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="hawk.dreamz@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
