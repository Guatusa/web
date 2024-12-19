import Header3 from "./HEADER3";
import ChooseUs from "./ChooseUs";
import Services2 from "./Services2";
import TourismSection from "./TourismSection";
import OurTeam from "./OurTeam"
import About from "./About";
import Contact from "./Contact";

import Services from "./Services";

const Home = () => {

    return (
        <div>
         <Header3/>
         <Services2/>
         <TourismSection />
         <About/> 
         <ChooseUs/> 
         <OurTeam /> 
         <Contact/>
      </div>
    );
  };
  
  export default Home;