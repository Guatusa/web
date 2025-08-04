import { FaCheck } from 'react-icons/fa';
import ReusableCarousel from "./ReusableCarousel";

const HouseSectionRight = ({
  title,
  descriptionTitle,
  descriptionText,
  detailsTitle,
  detailsList,
  imageUrls,
}) => {

  const slides = imageUrls.map((url) => ({ image: url }));

  return (
    <div className="flex flex-col items-center px-4 py-10 md:px-10 lg:px-20">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6 title text-center">{title}</h1>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-screen-1xl px-2">
        {/* Información */}
        <div className="w-full md:w-1/2 p-4 md:p-5 bg-white rounded-xl shadow-md">
          {/* Descripción */}
          <h2
            className="text-2xl font-bold mb-4 border-b-4 border-custom-green pb-1 md:pb-2"
            style={{ fontFamily: 'Tenor Sans' }}
          >
            {descriptionTitle}
          </h2>
          <p className="text-black mt-4">{descriptionText}</p>

          {/* Detalles */}
          <h2
            className="text-2xl font-bold mt-6 mb-4 border-b-4 border-custom-green pb-1 md:pb-2"
            style={{ fontFamily: 'Tenor Sans' }}
          >
            {detailsTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-left">
            {detailsList.map((item, i) => (
              <li key={i} className="flex items-center font-bold text-dark-green">
                <FaCheck className="mr-2" />
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Carrusel */}    
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl">
          <ReusableCarousel 
            slides={slides} 
            interval={5000} 
            heightClass="w-full h-64 md:h-[450px] flex-shrink-0 relative" 
          />
        </div>
      </div>
    </div>
  );
};

export default HouseSectionRight;
