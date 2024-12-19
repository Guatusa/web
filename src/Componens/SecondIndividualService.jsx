import { FaArrowRight } from 'react-icons/fa';
import { services } from "../assets/Data";

const SecondIndividualService = () => {
  return (
    <section className="relative mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((tour) => (
          <div
            key={tour.id}
            className="relative flex flex-col text-gray-800 w-full max-w-sm overflow-hidden group"
          >
            {/* Contenedor con overflow-hidden para evitar que la imagen se salga */}
            <div className="relative overflow-hidden rounded-lg h-96">
              {/* Imagen con efecto de zoom y sin que se salga del contenedor */}
              <img
                src={tour.src}
                alt="card-image"
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 filter brightness-95 contrast-110 hover:brightness-100 hover:contrast-120"
              />
            </div>

            {/* Enlace con el nombre y la flecha */}
            <div className="p-4 pt-3">
              <a
                href="#"
                className="w-full py-2 px-4 text-gray-800 group-hover:text-dark-green rounded-lg flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <span className="text-2xl text-dark-green">
                  {tour.title}
                </span>
                <FaArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-2 " />
                {/* Icono de la flecha con movimiento */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondIndividualService;
