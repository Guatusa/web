import React from "react";
import { useTranslation } from "react-i18next";
import logo from '../assets/images/logoN.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y reseña */}
        <div className="flex flex-col items-center md:items-start">
          <img alt="Logo" src={logo} className="h-auto w-auto" />
          <p className="text-gray-400 text-center md:text-left">
            {t('footer_description', 'Nuestra misión es ofrecer experiencias auténticas de turismo rural, conectando a los visitantes con la cultura local y la naturaleza.')}
          </p>
        </div>

        {/* Menú de navegación */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">{t('footer_menu', 'Menú')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-white transition">{t('footer_home', 'Inicio')}</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">{t('footer_services', 'Servicios')}</a>
            </li>
            <li>
              <a href="#ourTeam" className="hover:text-white transition">{t('footer_team', 'Equipo')}</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">{t('footer_contact', 'Contacto')}</a>
            </li>
          </ul>
        </div>

        {/* Redes sociales y contacto */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4">{t('footer_follow', 'Síguenos')}</h4>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
          <h4 className="text-lg font-semibold mb-4">{t('footer_contact_title', 'Contacto')}</h4>
          <p className="text-gray-400">
            {t('footer_phone', 'Tel:')} +506 7266-8614<br />
            {t('footer_email', 'Email:')} ruralhomecom@gmail.com
          </p>
        </div>
      </div>

      {/* Pie de página */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4">
        <p>&copy; 2024 Juanilama. {t('footer_rights', 'Todos los derechos reservados.')}</p>
      </div>
    </footer>
  );
};

export default Footer;
  