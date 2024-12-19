import React, { useState } from 'react';
import { Link } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';
import { navData } from "../assets/Data";
import {FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/images/Sin título-3.png';
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const link = navData.map(([id, title, url]) => (
    <li className={`flex items-center py-2 rounded-md ${id === 8 ? 
      "bg-black text-white hover:bg-dark-green shadow-md px-4 cursor-pointer" : "navlink" }`}  key={id}>
        
      <Link smooth={true} to={url} onClick={toggleNav} className="flex items-center w-full justify-between" >
        <span className="flex items-center">
          {t(title)}
          {id === 8 && ( <FaArrowRight size={20} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2"/> )}
        </span>
      </Link>
    </li>
  ));

  return (
    <header className="fixed w-full top-0 left-0 z-50">

      {/* Navbar principal */}
      <nav className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-20 py-2 bg-white shadow-lg">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img alt="Logo" src={logo} className="h-16 w-auto" />
        </div>

        {/* Botón del menú de hamburguesa */}
        <div className="lg:hidden flex items-center space-x-4">
          <FaBars size={24} className="text-black hover:text-dark-green cursor-pointer" onClick={toggleNav} />
        </div>

        {/* Enlaces de navegación en dispositivos grandes */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          {link}
        </ul>

        {/* Menú de hamburguesa en dispositivos móviles */}
        <div className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ${isNavOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
          <div className="flex justify-between items-center p-4 border-b">
            <img alt="Logo" src={logo} className="h-12 w-auto" />
            <FaTimes size={24} className="text-black" onClick={toggleNav} />
          </div>
          <ul className="flex flex-col p-4 space-y-4">
            {link}
          </ul>
        </div>

        {/* Íconos de carrito y selector de idioma */}
        <div className="hidden lg:flex items-center space-x-4">
          <button onClick={() => handleLanguageChange('en')} className="bg-[#000000] text-white px-2 py-1 rounded-lg text-xs">EN</button>
          <button onClick={() => handleLanguageChange('es')} className="bg-[#000000] text-white px-2 py-1 rounded-lg text-xs ml-2">ES</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

