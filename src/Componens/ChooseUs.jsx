import { chooseUs } from "../assets/Data";
import { useTranslation } from 'react-i18next';

const ChooseUs = () => {

  const { t } = useTranslation();

    return (
        <section id="chooseUs" className="flex flex-col lg:mx-40 items-center mx-[20px] my-12 ">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 title" style={{ fontFamily: 'Tenor Sans' }}>{t("titleChooseUs")}</h3>
          <p className="text-2xl font-bold" style={{ fontFamily: 'Tenor Sans' }}>
            {t("titleDescription")}
          </p>
         <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-[10px] text-center ">
              { chooseUs.map((data, index) => 
                  <div key={data.id} 
                    className="shadow-lg rounded-3xl p-6 flex flex-col items-center transition-opacity transition-transform duration-100 hover:translate-y-1 mt-6">
                    <div className="font-semibold p-2 text-white rounded-full text-4xl bg-dark-green text-white">
                      {data.icon}
                    </div>
                    <h2 className="my-1">{t(data.title)}</h2>
                    <p className="items-center justify-center">{t(data.details)}</p>
                  </div>
                )
              }
         </div>
      </section>
    );
  };
  
  export default ChooseUs;