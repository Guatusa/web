import CabanaCard from "./CabanaCard";
import { cabins } from "../assets/Data";
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

const TourismSection = () => {

  const { t } = useTranslation();

  return (
    <section className="bg-white p-8" id="hosting">
      <SectionHeader
        className="flex flex-col lg:mx-40 mx-4 items-center"
        title={t("titleTourismSection")}
        description={t("descriptionTourismSection")}
        fontFamily="Tenor Sans"
      />
      <div className="flex flex-col lg:mx-40 mx-4 items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cabins.map((cabin, index) => (
          <CabanaCard
            key={index}
            image={cabin.image}
            title={t(cabin.title)}
            description={t(cabin.description)}
            link={cabin.link}
          />
        ))}
      </div>
    </section>
  );
};

export default TourismSection;
