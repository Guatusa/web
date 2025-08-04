import Header from "./Header";
import ChooseUs from "./ChooseUs";
import Services2 from "./Services2";
import TourismSection from "./TourismSection";
import OurTeam from "./OurTeam"
import About from "./About";
import Contact from "./Contact";
import HouseSectionLeft from "./HouseSectionLeft";
import HouseSectionRight from "./HouseSectionRight";

const Home = () => {

    return (
        <div>
         <Header/>
         <Services2/>
             <HouseSectionLeft
      title="Casa Rural El Refugio"
      descriptionTitle="Descripción"
      descriptionText="Sumérgete en la tranquilidad de nuestra casa rural, rodeada de exuberante vegetación..."
      detailsTitle="Detalles del Servicio"
      detailsList={[
        "Precio: $350 por noche (incluye impuestos).",
        "Capacidad: Hasta 8 personas.",
        "Incluye: Desayuno artesanal, acceso a jardines y hamacas.",
        "Características: Habitaciones amplias, baños rústicos, terraza con vista al bosque.",
      ]}
      imageUrls={[
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ]}
    />             
    <HouseSectionRight
      title="Casa Rural El Refugio"
      descriptionTitle="Descripción"
      descriptionText="Sumérgete en la tranquilidad de nuestra casa rural, rodeada de exuberante vegetación..."
      detailsTitle="Detalles del Servicio"
      detailsList={[
        "Precio: $350 por noche (incluye impuestos).",
        "Capacidad: Hasta 8 personas.",
        "Incluye: Desayuno artesanal, acceso a jardines y hamacas.",
        "Características: Habitaciones amplias, baños rústicos, terraza con vista al bosque.",
      ]}
      imageUrls={[
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ]}
    />
         <TourismSection />
         <About/> 
         <ChooseUs/> 
         <OurTeam /> 
         <Contact/>
      </div>
    );
  };
  
  export default Home;