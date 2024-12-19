import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Questions = (data) => {

    const { t } = useTranslation();
    const {title, details} = data.data;
    const [hide, setHide] = useState(false);

    return (
        <div className="lg:w-[100%] w-[80vw]">
            <div className="m-[20px] flex justify-between mb-4 border-b border-b-yellow-600 cursor-pointer" onClick={()=> setHide(!hide)}>
                <h2 className="text-2xl text-yellow-600">{t(title)}</h2>
                <div className="flex flex-col gap-2 relative top-2 -z-10">
                    <div className={`line ${!hide && 'absolute top-0 rotate-90'}`}></div>
                    <div className={`line ${hide && 'absolute top-1 hidden'}`}></div>
                </div>
            </div> 

            {
                hide ? <p className="px-[20px] py-[10px] transition-all duration-700">{t(details)}</p> :
                <p className="px-[20px] py-0 transition-all duration-700"></p>
            }
      </div>
    );
  };
  
  export default Questions;