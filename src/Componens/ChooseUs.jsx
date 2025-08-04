import { chooseUs } from "../assets/Data";
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import ChooseCards from "./ChooseCards";

const ChooseUs = () => {

  const { t } = useTranslation();

    return (
        <section id="chooseUs" className="flex flex-col lg:mx-40 items-center my-12 ">
          <SectionHeader
            className="flex flex-col lg:mx-40 items-center"
            title={t("titleChooseUs")}
            description={t("titleDescription")}
            fontFamily="Tenor Sans"
          />
          <ChooseCards data={chooseUs} t={t} />
      </section>
    );
  };
  
  export default ChooseUs;