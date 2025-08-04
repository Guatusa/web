import { slides } from "../assets/Data";
import ReusableCarousel from "./ReusableCarousel";

const Header = () => {
  return (
    <section className="relative overflow-hidden">
        <ReusableCarousel 
            slides={slides}
            showText={true}
            interval={5000} 
            heightClass="relative w-full h-[80vh] md:h-[93vh] sm:h-[50vh] mt-[70px] block object-cover overflow-hidden" 
          />
    </section>
  );
}

export default Header;
