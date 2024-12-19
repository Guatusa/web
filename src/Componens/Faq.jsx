import { FAQ } from "../assets/Data";
import { img1 } from "../Images";
import Questions from "./Questions";
import { useTranslation } from 'react-i18next';

const Faq = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center py-20 lg:mx-40 m-[20px]">
         <h2 className="text-4xl mb-20 title">{t('Frequently Asked Question (FAQ)')}</h2>
         <div className="flex lg:flex-row flex-col gap-20 justify-center items-center">
              <div className="flex-1">
                <img className="rounded-3x1" src={img1} alt="" />
              </div>
              <div className="flex-1">
                  {
                    FAQ.map((data) => <Questions key={data.id} data={data} />)
                  } 
              </div>
         </div>
      </div>
    );
  };
  
  export default Faq;