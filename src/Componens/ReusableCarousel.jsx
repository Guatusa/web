import { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

/**
 * ReusableCarousel Component
 * @param {Array} slides - Array de objetos con { image, title?, description? }
 * @param {boolean} showText - Si se quiere mostrar el texto en el centro (default: false)
 * @param {number} interval - Intervalo del autoplay en ms (default: 3000)
 * @param {string} heightClass - Clase para div que contiene la imagen (default: h-[80vh] md:h-[93vh] sm:h-[50vh])
 */
export default function ReusableCarousel({ slides = [], showText = false, interval = 3000, heightClass = "h-[80vh] md:h-[93vh] sm:h-[50vh]"}) {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [current, interval]);

  return (
    <section className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full flex items-center justify-center">
            {/* Imagen */}
            <div className={`${heightClass}`}>
              <img
                srcSet={`${slide.image}?w=600 600w, ${slide.image}?w=1200 1200w, ${slide.image}?w=1800 1800w`}
                sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
                src={slide.image}
                alt={slide.title || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Texto superpuesto (opcional) */}
            {showText && (slide.title || slide.description) && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 text-white px-4">
                {slide.title && (
                  <h1 className="font-bold mb-4 leading-tight text-5xl sm:text-5xl md:text-5xl lg:text-6xl max-w-5xl">
                    {t(slide.title)}
                  </h1>
                )}
                {slide.description && (
                  <p className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl">
                    {t(slide.description)}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Flechas Desktop */}
      <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-between items-center px-4 transform -translate-y-1/2">
        <button onClick={previousSlide} className="bg-transparent text-white text-5xl hover:text-custom-green hover:bg-transparent p-4 rounded-full transition-colors">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="bg-transparent text-white text-5xl hover:text-custom-green hover:bg-transparent p-4 rounded-full transition-colors">
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* Flechas Mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 flex justify-between items-center px-4">
        <button onClick={previousSlide} className="bg-transparent text-white text-3xl hover:text-custom-green hover:bg-transparent p-3 rounded-full transition-colors">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="bg-transparent text-white text-3xl hover:text-custom-green hover:bg-transparent p-3 rounded-full transition-colors">
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* Círculos indicadores */}
      <div className="absolute bottom-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => ( 
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer ${i === current ? "bg-custom-green" : "bg-white"}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
