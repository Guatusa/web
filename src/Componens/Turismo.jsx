import about1 from '../assets/images/about1.png';

const TourismSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      {/* Texto Llamativo */}
      <div className="flex-1 p-4">
        <h1 className="text-5xl font-extrabold text-green-900 mb-4 leading-tight">
          Descubre la Belleza del Turismo Rural en Costa Rica
        </h1>
        <p className="text-lg text-gray-800 mb-6 max-w-lg">
          Vive una experiencia única en el corazón de la naturaleza costarricense. Explora paisajes exuberantes,
          disfruta de la tranquilidad del campo y conéctate con la rica cultura local. ¡Ven y descubre un
          paraíso escondido!
        </p>
      </div>

      {/* Imagen con Detalles Bonitos */}
      <div className="flex-1 p-4">
        <img
          src={about1}
          alt="Turismo Rural en Costa Rica"
          className="w-full h-auto rounded-lg shadow-lg animate-zoomOutBg"
        />
      </div>
    </section>
  );
};

export default TourismSection;