import React from "react";
import CabanaCard from "./CabanaCard";
import { cabins } from "../assets/Data";
import { useTranslation } from 'react-i18next';

const TourismSection = () => {

  const { t } = useTranslation();

  return (
    <section className="bg-white py-8" id="hosting">
      <div className="flex flex-col lg:mx-40 mx-4 items-center">
        <h3 className="text-3xl lg:text-4xl font-bold mb-6 title" style={{ fontFamily: 'Tenor Sans' }}>
          {t("titleTourismSection")}
        </h3>
        <p className="text-2xl font-bold mb-4" style={{ fontFamily: 'Tenor Sans' }}>
          {t("descriptionTourismSection")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default TourismSection;
