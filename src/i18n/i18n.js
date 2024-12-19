// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
        "Services": "Services",
        "About": "About us",
        "Chose Us": "Choose Us",
        "Our Team":"Our Team",
        "Gallery": "Gallery",
        "Contact Me": "Contact Me",
        "Hosting": "Hosting",

        "slides.ruralTourismTitle": "Rural Tourism in Juanilama - Costa Rica",
        "slides.ruralTourismDescription": "Immerse yourself in the natural beauty of Costa Rica and experience unforgettable moments in a unique setting.",
        "slides.exploreWildlifeTitle": "Explore the Wildlife of Juanilama",
        "slides.exploreWildlifeDescription": "Explore lush landscapes, enjoy the tranquility of the countryside, and connect with the rich local culture.",
        "slides.findRefugeTitle": "Find Your Refuge",
        "slides.findRefugeDescription": "Find your ideal refuge in nature and experience the authentic Costa Rican spirit.",

        "chooseUs.pureNatureTitle": "Pure Nature",
        "chooseUs.pureNatureDetails": "Enjoy spectacular landscapes surrounded by nature, forests, and wildlife.",
        "chooseUs.hikingAdventureTitle": "Hiking and Adventure",
        "chooseUs.hikingAdventureDetails": "Explore hiking trails and experience exciting outdoor adventures.",
        "chooseUs.experienceTitle": "Over 8 Years of Experience",
        "chooseUs.experienceDetails": "We offer high-quality services and deep knowledge of rural tourism.",
        "chooseUs.ecotourismTitle": "Eco-Tourism",
        "chooseUs.ecotourismDetails": "We practice sustainable tourism that respects and protects the environment.",
        "chooseUs.natureConnectionTitle": "Connection with Nature",
        "chooseUs.natureConnectionDetails": "Reconnect with nature and disconnect from the stress of daily life.",

        "about_us_title": "About Us",
        "about_us_subtitle": "Discover the Magic of Juanilama: Nature, Culture, and Conservation in the Heart of San Carlos.",
        "about_us_experience": "8 years experience",
        "about_us_description": "Juanilama is a vibrant community located 7 kilometers north of Santa Rosa de Pocosol, with around 525 inhabitants. At its core is the Juanilama Ecological Reserve, a 19-hectare primary forest protecting an impressive waterfall and rich biodiversity, traversed by the Quebrada La Leona and the Pocosol River. This valuable ecosystem is carefully preserved in collaboration with MINAET and is part of Costa Rica's National System of Protected Areas.",
        "about_us_bullet_1": "A rural community with a rich tradition in livestock and agriculture of pineapple, plantains, and tubers.",
        "about_us_bullet_2": "Home to the Juanilama Ecological Reserve, a 19-hectare primary forest.",
        "about_us_bullet_3": "Protected by the inhabitants in collaboration with the National System of Protected Areas.",
        "about_us_bullet_4": "Discover the majestic La Leona waterfall and its unique biodiversity.",

        "what_we_do_title": "What We Do",
        "what_we_do_description": "In Juanilama, we offer you an authentic experience in the heart of Costa Rican nature. Enjoy activities that connect you with our culture, environment, and traditions.",
        
        "services.tours": "Tours",
        "services.workshopsActivities": "Workshops And Activities",
        "services.specialPrograms": "Special Programs",
        "services.massages": "Massages",

        "map_title": "How to get to Juanilama?",
        "map_description": "Find the location of Juanilama, Costa Rica, on the map below.",

        "titleChooseUs" : "Why Choose Us",
        "titleDescription" : "Unmatched Experience in Rural Tourism:",

        "titleTourismSection": "Accommodation in Cabins and Houses",
        "descriptionTourismSection": "Live the tranquility of the countryside in Juanilama, Costa Rica, with comfortable cabins surrounded by nature. Rest, disconnect and enjoy rural tourism in an authentic environment full of natural beauty.",
        "cabins.titleOne": "Enchanted Cabin",
        "cabins.titleTwo": "The Forest Cabin",
        "cabins.titleThree": "The Mountain Cabin",
        "cabins.titleFour": "Golden Cabin",
        "cabins.descriptionOne": "Enjoy the tranquility and nature in this beautiful cabin.",
        "cabins.descriptionTwo": "Relax with a spectacular view in our cabin.",
        "cabins.descriptionThree": "Escape to the mountains and enjoy a unique getaway.",
        "cabins.descriptionFour": "A unique experience.",

        "our_team_title": "Our Team",
        "our_team_description": "Meet the team behind our unique experiences.",


        "Lorem ipsum": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, perspiciatis magni, enim ipsa, necessitatibus quis odio amet error esse quibusdam saepe et iure sequi nisi. Doloremque dolore fugiat placeat officia.",
        "Button": "Learn More",
        "Enter Your Name": "Enter Your Name",
        "Enter Your Email": "Enter Your Email",
        "Enter Your Number": "Enter Your Number",
        "Enter Your Address": "Enter Your Address",
        "Submit": "Submit",
        "Frequently Asked Question (FAQ)": "Frequently Asked Question (FAQ)",
        "logo": "LOGO",
        "welcome": "Live the Magic of the Countryside",
        "description": "Escape the urban hustle and let yourself be enveloped by the peace and tranquility of the rural setting. Enjoy outdoor activities, get to know the local culture, and unwind in charming accommodations surrounded by idyllic landscapes.",
        "explore": "EXPLORE",
        "Our Services": "Our Services",
        "Buy Now": "Buy Now",
        "Testimonial": "Testimonials",
        "About us": "About us",
        "Testimonials": "Testimonials",
        "FAQ": "FAQ",
        "What is this": "What is this",
        "Why Choose Us": "Why Choose Us",
      }
  },
  es: {
    translation: {
        "Services": "Servicios",
        "About": "Sobre nosotros",
        "Chose Us": "Por qué elegirnos",
        "Our Team":"Nuestro equipo",
        "Gallery": "Galleria",
        "Contact Me": "Contáctame",
        "Hosting": "Alojamiento",

        "slides.ruralTourismTitle": "Turismo Rural en Juanilama - Costa Rica",
        "slides.ruralTourismDescription": "Sumérgete en la belleza natural de Costa Rica y vive momentos inolvidables en un entorno único.",
        "slides.exploreWildlifeTitle": "Explora la Fauna de Juanilama",
        "slides.exploreWildlifeDescription": "Explora paisajes exuberantes, disfruta de la tranquilidad del campo y conéctate con la rica cultura local.",
        "slides.findRefugeTitle": "Encuentra tu Refugio",
        "slides.findRefugeDescription": "Encuentra tu refugio ideal en la naturaleza y experimenta el auténtico espíritu costarricense.",

        "chooseUs.pureNatureTitle": "Naturaleza Pura",
        "chooseUs.pureNatureDetails": "Disfruta de paisajes espectaculares rodeados de naturaleza, bosques y vida silvestre.",
        "chooseUs.hikingAdventureTitle": "Senderismo y Aventura",
        "chooseUs.hikingAdventureDetails": "Explora rutas de senderismo y vive emocionantes aventuras al aire libre.",
        "chooseUs.experienceTitle": "Más de 8 años de experiencia",
        "chooseUs.experienceDetails": "Te ofrecemos servicios de alta calidad y conocimientos profundos del turismo rural.",
        "chooseUs.ecotourismTitle": "Eco-turismo",
        "chooseUs.ecotourismDetails": "Practicamos un turismo sostenible que respeta y protege el medio ambiente.",
        "chooseUs.natureConnectionTitle": "Conexión con la Naturaleza",
        "chooseUs.natureConnectionDetails": "Reconecta con la naturaleza y desconecta del estrés de la vida cotidiana.",

        "about_us_title": "Sobre Nosotros",
        "about_us_subtitle": "Descubre la Magia de Juanilama: Naturaleza, Cultura y Conservación en el Corazón de San Carlos.",
        "about_us_experience": "8 años de experiencia",
        "about_us_description": "Juanilama es una vibrante comunidad ubicada a 7 kilómetros al norte de Santa Rosa de Pocosol, con cerca de 525 habitantes. En su núcleo se encuentra la Reserva Ecológica Juanilama, un bosque primario de 19 hectáreas que protege una impresionante catarata y una rica biodiversidad, atravesada por la Quebrada La Leona y el Río Pocosol. Este valioso ecosistema es cuidadosamente preservado en colaboración con el MINAET y forma parte del Sistema Nacional de Áreas Protegidas de Costa Rica.",
        "about_us_bullet_1": "Comunidad rural con una rica tradición en ganadería y agricultura de piña, plátanos y tubérculos.",
        "about_us_bullet_2": "Hogar de la Reserva Ecológica Juanilama, un bosque primario de 19 hectáreas.",
        "about_us_bullet_3": "Protegida por los habitantes en colaboración con el Sistema Nacional de Áreas Protegidas.",
        "about_us_bullet_4": "Descubre la majestuosa catarata La Leona y su biodiversidad única.",
        
        "what_we_do_title": "Qué Hacemos",
        "what_we_do_description": "En Juanilama, te ofrecemos una experiencia auténtica en el corazón de la naturaleza costarricense. Disfruta de actividades que te conectan con nuestra cultura, medio ambiente y tradiciones.",

        "services.tours": "Recorridos",
        "services.workshopsActivities": "Talleres y Actividades",
        "services.specialPrograms": "Programas Especiales",
        "services.massages": "Masajes",

        "map_title": "¿Cómo llegar a Juanilama?",
        "map_description": "Encuentra la ubicación de Juanilama, Costa Rica, en el mapa a continuación.",

        "titleChooseUs" : "¿Por qué elegirnos?",
        "titleDescription" : "Experiencia Inigualable en Turismo Rural:",

        "titleTourismSection": "Hospedaje en Cabañas y Casas",
        "descriptionTourismSection": " Vive la tranquilidad del campo en Juanilama, Costa Rica, con cómodas cabañas rodeadas de naturaleza. Descansa, desconéctate y disfruta del turismo rural en un entorno auténtico y lleno de belleza natural.",
        "cabins.titleOne": "Cabaña Encantada",
        "cabins.titleTwo": "Cabaña El Bosque",
        "cabins.titleThree": "Cabaña La Montaña",
        "cabins.titleFour": "Cabaña Playa Dorada",
        "cabins.descriptionOne": "Disfruta de la tranquilidad y la naturaleza en esta hermosa cabaña.",
        "cabins.descriptionTwo": "Relájate con una vista espectacular en nuestra cabaña.",
        "cabins.descriptionThree": "Escápate a la montaña y disfruta de un descanso único.",
        "cabins.descriptionFour": "Una experiencia única.",

        "our_team_title": "Nuestro Equipo",
        "our_team_description": "Conoce al equipo detrás de nuestras experiencias únicas.",

        "Lorem ipsum": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, perspiciatis magni, enim ipsa, necessitatibus quis odio amet error esse quibusdam saepe et iure sequi nisi. Doloremque dolore fugiat placeat officia.",
        "Button": "Aprende más",
        "Contact Me": "Contáctame",
        "Enter Your Name": "Introduce tu nombre",
        "Enter Your Email": "Introduce tu correo electrónico",
        "Enter Your Number": "Introduce tu número",
        "Enter Your Address": "Introduce tu dirección",
        "Submit": "Enviar",
        "Frequently Asked Question (FAQ)": "Preguntas Frecuentes (FAQ)",
        "logo": "LOGO",
        "welcome": "Vive la Magia del Campo",
        "description": "Sumérgete en la serenidad de la naturaleza y explora destinos rurales únicos que ofrecen experiencias auténticas y relajantes. Desde acogedoras casas de campo hasta paisajes impresionantes, encuentra tu próximo refugio en el corazón de la naturaleza.",
        "explore": "EXPLORAR",
        "Our Services": "Nuestros Servicios",
        "Buy Now": "Comprar Ahora",
        "Testimonial": "Testimonios",
        "About us": "Sobre nosotros",
        "Testimonials": "Testimonios",
        "FAQ": "FAQ",
        "What is this": "¿Qué es esto?",
        "Why Choose Us": "Por Qué Elegirnos",
      }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
