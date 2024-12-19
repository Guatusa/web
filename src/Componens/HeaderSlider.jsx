import React, { useState } from "react";
import { navData } from "../assets/Data";
import { Link } from "react-scroll";
import logo from '../assets/images/Sin título-3.png';

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="logo">
          <img  src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navigation links */}
        <div className="nav">
          <ul
            className={`${
              navList
                ? "absolute top-[10vh] left-0 w-full bg-green-500 text-white p-4 flex flex-col space-y-4"
                : "hidden lg:flex space-x-6"
            }`}
          >
            {navData.map((list, index) => (
              <li key={index} className="text-lg font-medium hover:text-green-600 transition">
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Button section */}
        <div className="button hidden lg:flex items-center space-x-4">
          <h4 className="font-medium">
            <span className="bg-green-500 text-white rounded-full px-2 py-1">2</span> My List
          </h4>
          <button className="btn1 flex items-center bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition">
            <i className="fa fa-sign-out mr-2"></i> Sign In
          </button>
        </div>

        {/* Toggle button for mobile */}
        <div className="toggle lg:hidden">
          <button
            className="text-black text-2xl"
            onClick={() => setNavList(!navList)}
          >
            {navList ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
