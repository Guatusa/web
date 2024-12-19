import { useTranslation } from "react-i18next";

const FirstIndividualService = ({ alojamientoAlimentacion }) => {
  const primerGrupo = alojamientoAlimentacion[0];
  const segundoGrupo = alojamientoAlimentacion[1];
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

      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12" key={primerGrupo.id}>
        {/* Imagen */}
        <div className="flex-shrink-0 w-full lg:w-1/2"> {/* Imagen más pequeña */}
          <img src={primerGrupo.img} alt={primerGrupo.title} className="w-full h-auto rounded-lg object-cover border border-gray-200" />
        </div>
        {/* Texto */}
        <div className="flex-1 lg:w-2/3">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Tenor Sans', color: '#1b370d' }}>
            {primerGrupo.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {primerGrupo.details}
          </p>
          <ul className="mt-4 space-y-2 text-left">
            {primerGrupo.serviceDetails.map((service, index) => (
              <li className="flex items-center text-teal-500" key={index}>
                ✔️ {service.description}
              </li>
            ))}

          </ul>
          {/* Dos imágenes debajo del texto */}
          <div className="mt-4 flex gap-4">
            {primerGrupo.imgs.map((imgData, index) => (
              <img key={index} src={imgData.img} alt={`Imagen ${index + 1}`} className="w-1/2 h-auto rounded-lg object-cover border border-gray-200" />
            ))}
          </div>
        </div>
      </div>

      {/* Fila 2: Imagen a la derecha, texto a la izquierda */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        {/* Texto */}
        <div className="flex-1 lg:w-2/3">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Tenor Sans', color: '#1b370d' }}>
            {segundoGrupo.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {segundoGrupo.details}
          </p>

          <ul className="mt-4 space-y-2 text-left">
            {segundoGrupo.serviceDetails.map((service, index) => (
              <li className="flex items-center text-teal-500" key={index}>
                ✔️ {service.description}
              </li>
            ))}

          </ul>

          {/* Dos imágenes debajo del texto */}
          <div className="flex gap-4 mt-4">
            {segundoGrupo.imgs.map((imgData, index) => (
              <img key={index} src={imgData.img} alt={`Imagen ${index}`} className={` ${index == 2 ? "w-1/4" : "w-1/3"} h-auto rounded-lg object-cover border border-gray-200`} />
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-shrink-0 w-full lg:w-1/3"> {/* Imagen más pequeña */}
          <img src={segundoGrupo.img} alt={segundoGrupo.title} className="w-full h-auto rounded-lg object-cover border border-gray-200" />
        </div>
      </div>

    </section>

  );
};

export default FirstIndividualService;