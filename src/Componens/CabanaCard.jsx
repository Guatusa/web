import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importa el ícono de flecha

const CabanaCard = ({ image, title, description, link }) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
        <div className="p-4">
           {/*<h3 className="text-2xl sm:text-xl lg:text-2xl font-semibold text-gray-800">{title}</h3>*/}
          <p className="text-dark text-sm mt-2">{description}</p>

          {/* Nueva etiqueta <a> con la flecha */}
          <a href={link} className="w-full py-2 flex items-center text-dark-green font-semibold text-2xl sm:text-xl lg:text-2xl">
            {title}
            {/* Flecha con movimiento al pasar sobre la tarjeta */}
            <FaArrowRight size={20} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CabanaCard;
