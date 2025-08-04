import AccommodationInfo from "./AccommodationInfo";
import { useTranslation } from "react-i18next";
import SectionHeader from './SectionHeader';

const Services2 = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-custom-green bg-opacity-40 p-8 " id="services">
      <SectionHeader
        className="flex lg:mx-40 flex-col item-center"
        title={t("what_we_do_title")}
        description={t("what_we_do_description")}
        fontFamily="Tenor Sans"
      />
      
      <AccommodationInfo />
      
    </section>
  );
};

export default Services2;
