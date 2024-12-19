import { Link } from "react-scroll";
import { navData } from "../assets/Data";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from '../assets/images/Sin título-3.png';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Header1 = () => {
  const { t, i18n } = useTranslation();

  const [click, setClick] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
  };

  const link = navData.map(([id, title, url]) => (
    <li className="navlink" key={id}>
      <Link spy={true} smooth={true} to={url}>
      {t(title)}
      </Link>
    </li>
  ));

  return (

    <div className="">
  {/* Barra superior con correo e iconos */}
  <div className="w-full flex flex-col sm:flex-row justify-between items-center p-2 bg-[#000000] text-white z-20">
    <div className="flex items-center mb-2 sm:mb-0">
      <FaPhone size={16} className="mr-2 transform rotate-[110deg]" />
      <span className="text-sm">(506) 5555-9012</span>
    </div>
    <div className="flex items-center mb-2 sm:mb-0">
      <FaEnvelope size={16} className="mr-2" />
      <span className="text-sm">contact@realestate.com</span>
    </div>
    <div className="flex space-x-4">
      <a href="https://www.facebook.com" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
      <a href="https://www.instagram.com" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
    </div>
  </div>

{/* Navbar principal */}
<nav className="flex flex-row justify-between items-center p-2 md:px-8 bg-white text-black mt-2 mx-auto w-full h-16">
  {/* Logo */}
  <div className="flex-shrink-0">
    <img alt="Logo" src={logo} className="h-12 w-auto" /> {/* Logo más pequeño */}
  </div>

  {/* Menú de navegación para pantallas grandes */}
  <ul className="hidden lg:flex lg:items-center lg:gap-4 text-[18px]">
    {link}
  </ul>

  {/* Botones de cambio de idioma */}
  <div className="hidden lg:flex lg:gap-2 lg:items-center">
    <button onClick={() => i18n.changeLanguage('en')} className="bg-[#000000] text-white px-2 py-1 rounded-lg text-xs">EN</button>
    <button onClick={() => i18n.changeLanguage('es')} className="bg-[#000000] text-white px-2 py-1 rounded-lg text-xs ml-2">ES</button>
  </div>

  {/* Menú móvil */}
  <div onClick={() => setClick(!click)} className="lg:hidden relative">
    <div className="flex flex-col gap-1 absolute top-0 right-5 z-50">
      <div className={`${click ? 'bg-white rotate-45' : 'bg-black'} menubar w-4 h-0.5`}></div>
      <div className={`${click ? 'bg-white hidden' : 'bg-black'} menubar w-3 h-0.5`}></div>
      <div className={`${click ? 'bg-white -rotate-45' : 'bg-black'} menubar w-4 h-0.5`}></div>
    </div>
    <div className={`${click ? 'block' : 'hidden'} fixed top-0 right-0 w-[80%] bg-black h-[100vh] p-10 z-20`}>
      <ul className="flex flex-col gap-4 text-[16px] text-white">
        {link}
      </ul>
    </div>
  </div>
</nav>




  {/* Banner principal */} 
 {/* <div className="relative bg-banner bg-cover  bg-center bg-no-repeat lg:h-[500px] px-4 lg:px-20 py-5 flex items-center justify-center">
    <div className="absolute inset-0 bg-black opacity-50"></div> 
    <div className="relative flex flex-col text-white items-center text-center ">
      <h1 className="text-5xl mb-6 font-bold">{t('welcome')} <span className="text-7xl font-bold">in Costa Rica</span> </h1>
      <p className="text-[25px] mb-6 ">{t('description')}</p>
    </div>
  </div>*/}

  <div className="relative bg-banner bg-cover bg-center bg-no-repeat lg:h-[700px] px-4 lg:px-20 py-5 flex items-center justify-center animate-zoomOutBg">
  <div className="absolute inset-0 bg-black opacity-30"></div> {/* Capa de color negro con opacidad */}
  <div className="relative flex flex-col text-white items-center text-center">
    <h1 className="text-5xl mb-6 font-bold">{t('welcome')} <span className="text-7xl font-bold text-custom-green">in Costa Rica</span></h1>
    <p className="text-[25px] mb-6">{t('description')}</p>
  </div>
</div>


</div>

  );
};

export default Header1;