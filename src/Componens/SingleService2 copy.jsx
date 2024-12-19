import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";


{/*<Card className="w-74 h-[32rem] max-w-xs rounded-lg shadow-lg bg-white m-4 relative overflow-hidden transition-transform transform hover:scale-105">
  <div className="relative h-64">
    <img className="w-full h-full object-cover transition-transform duration-300"
         src={img} alt="Lodging"/>
    <div className="absolute inset-0 bg-teal-500 opacity-0 hover:opacity-30 transition-opacity duration-300 z-10"></div>
  </div>

  <CardBody className="px-6 py-4 relative">
    <div className="absolute inset-0 bg-teal-500 opacity-0 hover:opacity-30 transition-opacity duration-300 z-10"></div>
    <Typography 
      variant="h5" 
      className="font-bold mb-2 text-teal-600 relative transition-colors duration-300 hover:text-white"
    >
      {title}
    </Typography>
    <Typography 
      className="text-gray-700 text-base relative transition-colors duration-300 hover:text-white"
    >
      {details}
    </Typography>
  </CardBody>
</Card>*/}
import { rancho, rancho1, rancho2, rancho3, cabaña, cabaña2, cabaña3, cabaña4 } from "../Images";
import { FaDollarSign, FaWifi, FaBed, FaTv, FaFire } from 'react-icons/fa';

const SingleService2 = ({ alojamientoAlimentacion }) => {

  const { t } = useTranslation();
  return (

    <section className="bg-transparent rounded-lg shadow-none" id="alojamientoAlimentacion">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Tenor Sans', color: '#1b370d' }}>
          Alojamiento y Alimentación
        </h2>
      </div>

      {/* Fila 1: Imagen a la izquierda, texto a la derecha */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        {/* Imagen */}
        <div className="flex-shrink-0 w-full lg:w-1/2"> {/* Imagen más pequeña */}
          <img src={rancho1} alt="Grupos de paso" className="w-full h-auto rounded-lg object-cover border border-gray-200" />
        </div>
        {/* Texto */}
        <div className="flex-1 lg:w-2/3">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Tenor Sans', color: '#1b370d' }}>
            Grupos de paso (no hospedándose)
          </h3>
          <p className="text-gray-600 mb-4">
            Contamos con 2 ranchos para ofrecer alimentación a 90 personas simultáneamente.
          </p>
          <ul className="mt-4 space-y-2 text-left">
            <li className="flex items-center text-teal-500">
              ✔️ Precio rack $38.00 por persona con desayuno incluido. Incluye impuestos.
            </li>
            <li className="flex items-center text-teal-500">
              ✔️ Almuerzo o cena típico $15.00 por persona, incluye impuestos
            </li>
            <li className="flex items-center text-teal-500">
              ✔️ Refrigerio $6.00 por persona, incluye impuestos
            </li>
          </ul>
          {/* Dos imágenes debajo del texto */}
          <div className="mt-4 flex gap-4">
            <img src={rancho2} alt="Imagen 1" className="w-1/2 h-auto rounded-lg object-cover border border-gray-200" />
            <img src={rancho} alt="Imagen 2" className="w-1/2 h-auto rounded-lg object-cover border border-gray-200" />
          </div>
        </div>
      </div>

      {/* Fila 2: Imagen a la derecha, texto a la izquierda */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        {/* Texto */}
        <div className="flex-1 lg:w-2/3">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Tenor Sans', color: '#1b370d' }}>
            Grupos que se Hospedan
          </h3>
          <p className="text-gray-600 mb-4">
            Contamos con capacidad de hospedaje para 34 personas distribuidas en 7 casas de familias de la comunidad, quienes a su vez ofrecen alimentación completa a sus huéspedes.
          </p>
          {/* Dos imágenes debajo del texto */}
          <div className="flex gap-4">
            <img src={cabaña} alt="Imagen 1" className="w-1/3 h-auto rounded-lg object-cover border border-gray-200" />
            <img src={cabaña3} alt="Imagen 2" className="w-1/3 h-auto rounded-lg object-cover border border-gray-200" />
            <img src={cabaña4} alt="Imagen 2" className="w-1/4 h-auto rounded-lg object-cover border border-gray-200" />
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-shrink-0 w-full lg:w-1/3"> {/* Imagen más pequeña */}
          <img src={cabaña2} alt="Grupos de paso" className="w-full h-auto rounded-lg object-cover border border-gray-200" />
        </div>
      </div>

    </section>

  );
};

export default SingleService2;