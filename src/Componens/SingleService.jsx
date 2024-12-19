import { useTranslation } from "react-i18next";

const SingleService = (data) => {

    const { t } = useTranslation();
    const {title, img, details} = data.data;
    return (
        <div className="hover:shadow-lg transition-all duration-700 lg:p-5 p-[20px] w-[100%] rounded-3xl">
          <div className="overflow-hidden rounded-3xl">
            <img className="md:h-full lg:h-80 hover:scale-125 hover:opacity-75 transition-all duration-700" src={img} alt="" />
          </div> 
         <h2 className="text-xl font-semibold my-4">{t(title)}</h2>
         <p>{t(details)}</p>
         <button className="px-[20px] py-[2px]">{t('Buy Now')}</button>
      </div>
    );
  };
  
  export default SingleService;