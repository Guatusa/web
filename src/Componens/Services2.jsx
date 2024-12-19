import { services2 } from "../assets/Data";
import AccommodationInfo from "./AccommodationInfo";
import { useTranslation } from "react-i18next";

const Services2 = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-custom-green bg-opacity-40" id="services">
      <div className="flex lg:mx-40 flex-col item-center  p-8 lg:p-8" >
        <h2 className="text-3xl lg:text-4xl title mb-8">{t("what_we_do_title")}</h2>
        <p className="text-2xl font-bold" style={{ fontFamily: 'Tenor Sans' }}>
          {t("what_we_do_description")}
        </p>
        <div>
          <AccommodationInfo />
        </div>
      </div>
    </section>
  );
};

export default Services2;
