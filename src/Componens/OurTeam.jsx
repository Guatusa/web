import React from "react";
import { useTranslation } from "react-i18next";
import { teamMembers } from "../assets/Data";

const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-custom-green bg-opacity-40 py-14" id="ourTeam">
      <div className="flex flex-col lg:mx-40 mx-4 items-center">
        <h3 className="text-3xl lg:text-4xl font-bold mb-6 title">
          {t("our_team_title")}
        </h3>
        <p className="text-2xl font-bold mb-12" style={{ fontFamily: 'Tenor Sans' }}>
          {t("our_team_description")}
        </p>
        <div className="flex flex-wrap justify-center gap-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Contenedor con overflow-hidden */}
              <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-dark-green border-opacity-60">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-green mt-4">{member.name}</h3>
              <p className="mb-2">{member.role}</p>
              <p className="text-dark-green text-center max-w-xs">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
