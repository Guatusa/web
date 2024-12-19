import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="h-[900px] py-10 bg-custom-green bg-opacity-20" id="contact">
      <div  className="lg:bg-banner bg-cover bg-fixed lg:h-[700px] h-[650px] lg:px-16 py-10">
        <div className="lg:mx-40 lg:my-40 flex flex-col items-center justify-center bg-white rounded-[50px] py-8 px-6 shadow-lg">
          {/* Título */}
          <h2 className="text-4xl font-bold text-black mb-6">{t('Contact Me')}</h2>
          {/* Formulario */}
          <form className="flex flex-col gap-4 lg:w-full lg:px-40 px-4" action="">
            {/* Fila 1: Nombre y Email */}
            <div className="lg:flex gap-4">
              <input
                placeholder={t('Enter Your Name')}
                type="text"
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-black text-lg focus:ring-2 focus:ring-custom-green focus:outline-none"
              />
              <input
                placeholder={t('Enter Your Email')}
                type="email"
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-black text-lg focus:ring-2 focus:ring-custom-green focus:outline-none"
              />
            </div>
            {/* Fila 2: Teléfono y Dirección */}
            <div className="lg:flex gap-4">
              <input
                placeholder={t('Enter Your Number')}
                type="phone"
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-black text-lg focus:ring-2 focus:ring-custom-green focus:outline-none"
              />
              <input
                placeholder={t('Enter Your Address')}
                type="address"
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-black text-lg focus:ring-2 focus:ring-custom-green focus:outline-none"
              />
            </div>
            {/* Mensaje */}
            <textarea
              placeholder={t('Write your message')}
              className="w-full my-2 p-4 border-2 border-gray-300 rounded-lg text-black text-lg focus:ring-2 focus:ring-custom-green focus:outline-none"
              cols="30"
              rows="5"
            ></textarea>
            {/* Botón de Enviar */}
            <div className="flex justify-center">
              <button className="bg-black text-white text-lg font-semibold rounded-lg py-3 px-10 hover:bg-opacity-90 transition-all duration-300 lg:w-1/3">
                {t('Submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
