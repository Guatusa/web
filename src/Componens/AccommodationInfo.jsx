import React from "react";
import { services } from "../assets/Data";
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AccommodationInfo = () => {

  const { t } = useTranslation();

  const [active, setActive] = React.useState(services[0]);

  const handleLearnMore = () => {
    // Aquí puedes agregar cualquier acción que desees cuando el usuario haga clic en "Saber más".
    alert(`Más detalles sobre ${active.title}`);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Imagen Activa */}
      <div className="relative mb-6 group"> {/* Se añadió la clase "group" aquí */}
        <div className="w-full h-[320px] md:h-[480px] overflow-hidden rounded-lg">
          <img
            className="h-full w-full object-cover object-center"
            src={active.src}
            alt={t(active.title)}
          />
        </div>

        {/* Botón "Saber más" debajo de la imagen */}
        <div className="pt-3">
          <a
            href="#"
            className="w-full py-2 px-4 text-gray-800 group-hover:text-dark-green rounded-lg flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <h2 className="text-2xl text-dark-green">{t(active.title)}</h2>
            {/* Flecha con movimiento al pasar sobre la imagen */}
            <FaArrowRight
              size={20}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-2" 
            />
          </a>
        </div>
      </div>

      {/* Título y Descripción debajo de la imagen */}
      <div className="text-center mb-6">
        <p className="text-sm md:text-base mt-2">{t(active.description)}</p>
      </div>

      {/* Miniaturas */}
      <div className="flex justify-center gap-4 flex-wrap">
        {services.map((service, index) => (
          <div key={index} className="shrink-0 group">
            <img
              onClick={() => setActive(service)}
              src={service.src}
              className="h-20 w-32 md:h-28 md:w-48 max-w-full cursor-pointer rounded-lg object-cover object-center transition-transform duration-200 hover:scale-105"
              alt={`Miniatura ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationInfo;
