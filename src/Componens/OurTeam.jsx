import { useTranslation } from "react-i18next";
import { teamMembers } from "../assets/Data";
import SectionHeader from './SectionHeader';
import TeamSection from "./TeamSection";

const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-custom-green bg-opacity-40 py-14" id="ourTeam">
      <SectionHeader
            className="flex flex-col lg:mx-40 mx-4 items-center"
            title={t("our_team_title")}
            description={t("our_team_description")}
            fontFamily="Tenor Sans"
          />
      <TeamSection teamMembers={teamMembers} />
    </section>
  );
};

export default OurTeam;
