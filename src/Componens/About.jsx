import { aboutUs3, aboutUs4 } from "../Images";
import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';
import { abouts } from "../assets/Data";

const About = () => {

  const { t } = useTranslation();

  return (
    <section className="mx-auto my-12 p-8 lg:p-16 rounded-lg w-full bg-custom-green bg-opacity-40" id="about">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative flex-1 flex lg:justify-start">
          {/* Texto rotado a la izquierda, alineado con la imagen grande */}
          <div className="absolute left-1 sm:left-2 lg:left-10 top-1/3 sm:top-24 lg:top-32 -rotate-90 text-dark-green font-semibold text-sm sm:text-lg lg:text-2xl">
            {t('about_us_experience')}
          </div>

          {/* Contenedor de imágenes */}
          <div className="relative flex w-full lg:w-3/4 items-center justify-start ml-4 sm:ml-8 lg:ml-16">
            {/* Imagen principal */}
            <img
              src={aboutUs3} // Reemplaza con la URL de tu imagen principal
              alt="Main Experience"
              className="w-full lg:w-3/4 rounded-lg object-cover ml-auto"
              style={{ boxSizing: 'border-box' }}
            />

            {/* Imagen secundaria (circular) */}
            <div className="absolute -bottom-10 left-1/4 transform -translate-x-1/4 w-44 h-44 sm:w-32 sm:h-32 lg:w-80 lg:h-80 flex items-center justify-center">
              <img
                src={aboutUs4} // Reemplaza con la URL de tu imagen secundaria
                alt="Sub Experience"
                className="w-full h-full rounded-full border-8 border-white shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contenido de texto */}
        <div className="flex-1 lg:ml-8 mt-16 lg:mt-0 text-center lg:text-left">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 title" style={{ fontFamily: 'Tenor Sans' }}>{t('about_us_title')}</h3>
          <p className="text-2xl font-bold mb-4" style={{ fontFamily: 'Tenor Sans' }}>
            {t('about_us_subtitle')}
          </p>
          <p className="text-black mt-4">
            {t('about_us_description')}
          </p>

          <ul className="mt-4 space-y-2 text-left">
            {abouts.map((key, index) => (
              <li key={index} className="flex items-center font-bold text-dark-green">
                <FaCheck className="mr-2" /> {t(key)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  );
};

export default About;