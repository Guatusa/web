import { BsBicycle } from "react-icons/bs";
import { FaTree, FaHiking, FaAward, FaLeaf, FaMountain } from "react-icons/fa";
import { img4, img5, img6, rancho, rancho1, rancho2, cabaña, cabaña2, cabaña3, cabaña4, header4, header3, header8 } from "../Images";
import { alimentacion, hospedaje, tourNoturno, tourDia, actividad, actividad2, clase, masaje2 } from "../Images";

export const navData = [
    [1, 'Home', '/'],
    [2, 'Services', 'services'],
    [3, 'Hosting', 'hosting'],
    [4, 'About', 'about'], 
    [5, 'Chose Us', 'chooseUs'],
    [6, 'Our Team', 'ourTeam'],
    [7, 'Gallery', '/gallery'],
    [8, 'Contact Me', 'contact'],
    
];

export const slides = [
    { 
        //image: header8, 
        image:"https://images.unsplash.com/photo-1638176818276-a4e90c753da6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "slides.findRefugeTitle", 
        description: "slides.findRefugeDescription" 
    },
    { 
        //image: header4,
        image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        title: "slides.ruralTourismTitle", 
        description: "slides.ruralTourismDescription" 
    },
    { 
       // image: header3, 
       image: "https://images.unsplash.com/photo-1471443290059-92acdee54040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "slides.exploreWildlifeTitle", 
        description: "slides.exploreWildlifeDescription" 
    },
    { 
        //image: header8, 
        image:"https://images.unsplash.com/photo-1543051932-6ef9fecfbc80?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "slides.findRefugeTitle", 
        description: "slides.findRefugeDescription" 
    }

];

export const abouts  = [
    "about_us_bullet_1",
    "about_us_bullet_2",
    "about_us_bullet_3",
    "about_us_bullet_4",
  ];

export const FAQ = [
    {
        id: 1,
        title: 'What is this',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        title: 'What is this',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 3,
        title: 'What is this',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 4,
        title: 'What is this',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
];

export const testimonials = [
    {
        id: 1,
        img: img4,
        title: 'What is this',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        img: img4,
        title: 'What is this',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 3,
        img: img4,
        title: 'What is this',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 4,
        img: img5,
        title: 'What is this',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 5,
        img: img6,
        title: 'What is this',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
];

export const chooseUs = [
    {
        id: 1,
        icon: <FaTree />,
        title: "chooseUs.pureNatureTitle",
        details: "chooseUs.pureNatureDetails"
    },
    {
        id: 2,
        icon: <FaHiking />,
        title: "chooseUs.hikingAdventureTitle",
        details: "chooseUs.hikingAdventureDetails"
    },
    {
        id: 3,
        icon: <FaAward />,
        title: "chooseUs.experienceTitle",
        details: "chooseUs.experienceDetails"
    },
    {
        id: 4,
        icon: <FaLeaf />,
        title: "chooseUs.ecotourismTitle",
        details: "chooseUs.ecotourismDetails"
    },
    {
        id: 5,
        icon: <FaTree />,
        title: "chooseUs.natureConnectionTitle",
        details: "chooseUs.natureConnectionDetails"
    }
];


export const services2 = [
    { /*va hacer solo un apartado parecido al haecerca de nostros*/
        alojamientoAlimentacion: [
            {
                id: 1,
                title: "Grupos de paso (no hospedándose)",
                img: rancho1,
                imgs: [
                    {"img": rancho2 },
                    {
                        "img": rancho
                    }
                ],
                serviceDetails: [
                    { description: "Precio rack $38.00 por persona con desayuno incluido. Incluye impuestos." },
                    { description: "Almuerzo o cena típico $15.00 por persona, incluye impuestos" },
                    { description: "Refrigerio $6.00 por persona, incluye impuestos" }
                  ],
                details: "Contamos con 2 ranchos para ofrecer alimentación a 90 personas simultáneamente."
            },
            {
                id: 2,
                title: "Grupos que se Hospedan",
                img: cabaña2,
                imgs: [
                    {img: cabaña},
                    {img: cabaña3},
                    {img: cabaña4}
                ],
                serviceDetails: [
                    { description: "Precio del hospedaje $400 por persona, incluye impuestos" },
                    { description: "Ofrecemos alimentación completa a sus huéspedes" },
                    { description: "Disfruta de una habitación acogedora en nuestras cabañas rústicas, rodeada de naturaleza." },
                    { description: "Contamos con camas cómodas, baños privados y vistas espectaculares, es el refugio perfecto para relajarse y desconectar." }
                  ],
                details: "Contamos con capacidad de hospedaje para 34 personas distribuidas en 7 casas de familias de la comunidad."
            }
        ],
        "toursExcursiones": [
            {
                "id": 4,
                "img": img6,
                "title": "Caminta a la Reserva & Catarata La Leona",
                "details": "Este recorrido consta de 2 kilómetros de senderos naturales demarcados y de mediana dificultad, permitiendo que el visitante llegue hasta el pie de la Catarata La Leona. Nado en aguas cristalinas. Durante toda la caminata, un guía local (NO BILINGÜE) ofrece información sobre la flora y fauna existente."
            },
            {
                "id": 7,
                "img": img6,
                "title": "Caminata Nocturna",
                "details": "Inicia a las 8pm con un recorrido tranquilo y lento por la entrada a la reserva y la orilla del primer riachuelo, dado que durante la noche muchos anfibios, insectos y algunos mamíferos se alimentan ahí. Este es un tour de observación minuciosa, por lo que los grupos que llevamos deben ser de máximo 10 personas por guía. De esta manera se tiene mejor oportunidad de apreciar la vida nocturna de un bosque tropical húmedo."
            },
            {
                "id": 3,
                "img": img6,
                "title": "Tour del Agricultor",
                "details": "Recorrido en las plantaciones y jardines, guía local (NO BILINGÜE) y degustación de los productos orgánicos de la finca y refrigerio."
            },
            {
                "id": 6,
                "img": img6,
                "title": "Tour de Lechería & Quesos",
                "details": "El guía, un lechero de tradición inicia el recorrido ofreciendo una reseña histórica del área, la producción de leche y sus derivados, el cruce de razas de vacas para obtener la mejor calidad y cantidad de leche posible y una visita al corral para mostrar cómo y con qué productos se alimenta el ganado. Seguidamente, el visitante mismo podrá encargarse de traer los animales del repasto y con ayuda del guía proceder a prepararlos para el ordeño manual y luego tendrá la oportunidad de alimentar los terneros. Finalizando el tour donde el turista podrá participar en el proceso sobre la manipulación de la leche y la forma de producir quesos (palmito, tierno, semiduro, etc.) y otros productos lácteos como natilla y yogurth."
            }
        ],
        "talleresActividadesArtesaniaManualidades": [
            {
                "id": 5,
                "img": img6,
                "title": "Taller de Naturaleza Seca",
                "details": "Esta actividad es para todas las edades, aplica de manera artística la práctica sostenible de la reutilización, con una de nuestras amas de casa que aplica su creatividad elaborando artesanía a partir de desechos de la naturaleza como hojas y pétalos secos, ramas, lana de los árboles, cáscaras de huevo, semillas, aserrín, etc. Con el objetivo de aprender hacer tarjetas y cuadros."
            },
            {
                "id": 8,
                "img": img6,
                "title": "Taller de Artesanía/ Reciclaje y Clases de Jabón Artesanal",
                "details": "Una forma interesante y práctica de convertir desechos comunes como papel, latas y botellas plásticas en artesanía o utensilios aprovechables por medio de doña Elena quien será su profesora. También aprenderán hacer jabón artesanal y hacer sus figuras y poner el olor de acuerdo al gusto del cliente."
            },
            {
                "id": 9,
                "img": img6,
                "title": "Tour de Papel de Banano",
                "details": "Esta actividad es algo muy diferente y divertido ya que tienen que cortar el vástago del banano, licuarlo y luego colarlo, moldear el papel y luego hacer sus propias tarjetas de papel de banano y con una decoración muy diferente para decorarlas."
            },
            {
                "id": 12,
                "img": img6,
                "title": "Programa Siembra de Árboles",
                "details": "Esta actividad inicia con una breve charla sobre la importancia del bosque para el Planeta, se ingresa a la Reserva Juanilama para llegar al área donde se plantarán los árboles donados. Aquí el turista tiene la posibilidad de realizar el proceso con sus propias manos y colocar una placa al pie del árbol con su nombre, fecha y país de procedencia. ¡Un año después de su visita, podrá recibir una foto correo electrónico de cómo su pedacito de Costa Rica va creciendo!"
            }
        ],
        "ClasesOtros": [
            {
                "id": 10,
                "img": img6,
                "title": "Clases de Cocina",
                "details": "Reúnase con amas de casa de la comunidad, las verdaderas maestras de la cocina tradicional tica. Ubicados alrededor de un fogón (cocina de leña) utilizado para todo tipo cocciones, los participantes se disponen a preparar ellos mismos los platillos más típicos de nuestras abuelas como picadillos, prestiños, tortillas, barbudos y enyucados."
            },
            {
                "id": 11,
                "img": img6,
                "title": "Clases de Baile",
                "details": "Tendrán la oportunidad de aprender a bailar música popular como es salsa, cumbia con Eli la experta en el baile."
            },
            {
                "id": 13,
                "img": img6,
                "title": "Masajes",
                "details": "Mensajes"
            }
        ]
    }

];

export const newService = [
    {
        "categories": [
            {
                "name": "Watches",
                "images": [
                    {
                        "src": img4,
                        "alt": "Watch image 1",
                        "title": "Golden & Sliver Metal Belt Watch",
                        "description": "Disponemos de 2 ranchos para ofrecer alimentación a 90 personas simultáneamente. Almuerzo o cena típico por $15.00 por persona y refrigerio por $6.00 por persona. Incluye impuestos."
                    },
                    {
                        "src": img5,
                        "alt": "Watch image 2",
                        "title":"Hospedaje en Juanilama",
                        "description": "Actualmente, contamos con capacidad para 34 personas distribuidas en 7 casas de familias locales. Ofrecen alimentación completa a sus huéspedes con desayuno incluido por $38.00 por persona. Incluye impuestos."
                    }
                ]
            },
            {
                "name": "Accessories",
                "images": [
                    {
                        "src": "https://pagedone.io/asset/uploads/1712568744.png",
                        "alt": "Accessory image 1",
                        "title": "Sliver Metal Belt Watch",
                        "description": "A chic and understated accessory for any occasion."
                    }
                ]
            }
        ]
    }
]

export const services3 = [

            {
                "id": 1,
                "img": img4,
                "title": "Servicios para Grupos de Paso",
                "details": "Disponemos de 2 ranchos para ofrecer alimentación a 90 personas simultáneamente. Almuerzo o cena típico por $15.00 por persona y refrigerio por $6.00 por persona. Incluye impuestos."
            },
            {
                "id": 2,
                "img": img5,
                "title": "Hospedaje en Juanilama",
                "details": "Actualmente, contamos con capacidad para 34 personas distribuidas en 7 casas de familias locales. Ofrecen alimentación completa a sus huéspedes con desayuno incluido por $38.00 por persona. Incluye impuestos."
            },
 
            {
                "id": 4,
                "img": img6,
                "title": "Caminta a la Reserva & Catarata La Leona",
                "details": "Este recorrido consta de 2 kilómetros de senderos naturales demarcados y de mediana dificultad, permitiendo que el visitante llegue hasta el pie de la Catarata La Leona. Nado en aguas cristalinas. Durante toda la caminata, un guía local (NO BILINGÜE) ofrece información sobre la flora y fauna existente."
            },
            {
                "id": 7,
                "img": img6,
                "title": "Caminata Nocturna",
                "details": "Inicia a las 8pm con un recorrido tranquilo y lento por la entrada a la reserva y la orilla del primer riachuelo, dado que durante la noche muchos anfibios, insectos y algunos mamíferos se alimentan ahí. Este es un tour de observación minuciosa, por lo que los grupos que llevamos deben ser de máximo 10 personas por guía. De esta manera se tiene mejor oportunidad de apreciar la vida nocturna de un bosque tropical húmedo."
            },
            {
                "id": 3,
                "img": img6,
                "title": "Tour del Agricultor",
                "details": "Recorrido en las plantaciones y jardines, guía local (NO BILINGÜE) y degustación de los productos orgánicos de la finca y refrigerio."
            },
            {
                "id": 6,
                "img": img6,
                "title": "Tour de Lechería & Quesos",
                "details": "El guía, un lechero de tradición inicia el recorrido ofreciendo una reseña histórica del área, la producción de leche y sus derivados, el cruce de razas de vacas para obtener la mejor calidad y cantidad de leche posible y una visita al corral para mostrar cómo y con qué productos se alimenta el ganado. Seguidamente, el visitante mismo podrá encargarse de traer los animales del repasto y con ayuda del guía proceder a prepararlos para el ordeño manual y luego tendrá la oportunidad de alimentar los terneros. Finalizando el tour donde el turista podrá participar en el proceso sobre la manipulación de la leche y la forma de producir quesos (palmito, tierno, semiduro, etc.) y otros productos lácteos como natilla y yogurth."
            },
            {
                "id": 5,
                "img": img6,
                "title": "Taller de Naturaleza Seca",
                "details": "Esta actividad es para todas las edades, aplica de manera artística la práctica sostenible de la reutilización, con una de nuestras amas de casa que aplica su creatividad elaborando artesanía a partir de desechos de la naturaleza como hojas y pétalos secos, ramas, lana de los árboles, cáscaras de huevo, semillas, aserrín, etc. Con el objetivo de aprender hacer tarjetas y cuadros."
            },
            {
                "id": 8,
                "img": "img6",
                "title": "Taller de Artesanía/ Reciclaje y Clases de Jabón Artesanal",
                "details": "Una forma interesante y práctica de convertir desechos comunes como papel, latas y botellas plásticas en artesanía o utensilios aprovechables por medio de doña Elena quien será su profesora. También aprenderán hacer jabón artesanal y hacer sus figuras y poner el olor de acuerdo al gusto del cliente."
            },
            {
                "id": 9,
                "img": img6,
                "title": "Tour de Papel de Banano",
                "details": "Esta actividad es algo muy diferente y divertido ya que tienen que cortar el vástago del banano, licuarlo y luego colarlo, moldear el papel y luego hacer sus propias tarjetas de papel de banano y con una decoración muy diferente para decorarlas."
            },
            {
                "id": 12,
                "img": img6,
                "title": "Programa Siembra de Árboles",
                "details": "Esta actividad inicia con una breve charla sobre la importancia del bosque para el Planeta, se ingresa a la Reserva Juanilama para llegar al área donde se plantarán los árboles donados. Aquí el turista tiene la posibilidad de realizar el proceso con sus propias manos y colocar una placa al pie del árbol con su nombre, fecha y país de procedencia. ¡Un año después de su visita, podrá recibir una foto correo electrónico de cómo su pedacito de Costa Rica va creciendo!"
            },
            {
                "id": 10,
                "img": img6,
                "title": "Clases de Cocina",
                "details": "Reúnase con amas de casa de la comunidad, las verdaderas maestras de la cocina tradicional tica. Ubicados alrededor de un fogón (cocina de leña) utilizado para todo tipo cocciones, los participantes se disponen a preparar ellos mismos los platillos más típicos de nuestras abuelas como picadillos, prestiños, tortillas, barbudos y enyucados."
            },
            {
                "id": 11,
                "img": img6,
                "title": "Clases de Baile",
                "details": "Tendrán la oportunidad de aprender a bailar música popular como es salsa, cumbia con Eli la experta en el baile."
            },
            {
                "id": 13,
                "img": img6,
                "title": "Masajes",
                "details": "Mensajes"
            }

];

export const services = [
    { 
        id: 1, 
        //src: tourNoturno,
        src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
        title: 'services.tours' 
    },
    { 
        id: 2, 
        src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        //src: actividad2, 
        title: 'services.workshopsActivities' 
    },
    { 
        id: 3,
       // src: actividad,
       src: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        title: 'services.specialPrograms' 
    },
    { 
        id: 4,
       // src: masaje2, 
       src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: 'services.massages' 
    }
  ];

  export const cabins = [
    {
      image: "https://images.unsplash.com/photo-1627547999744-b84d3ea26ad8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "cabins.titleOne",
      description: "cabins.descriptionOne",
      link: "/cabanas/bosque-encantado",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1686090450467-3212162803e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "cabins.titleTwo",
      description: "cabins.descriptionTwo",
      link: "/cabanas/vista-al-lago",
    },
    {
      image: "https://images.unsplash.com/photo-1600786288830-9f5d4bf1d516?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "cabins.titleThree",
      description: "cabins.descriptionThree",
      link: "/cabanas/la-montana",
    },
    {
      image: "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "cabins.titleFour",
      description: "cabins.descriptionFour",
      link: "/cabanas/playa-dorada",
    },
  ];

  export const teamMembers = [
    {
      name: "Eliza Soto",
      role: "Guía Local y Propietaria",
      description: "Apasionada por compartir las tradiciones y cultura local.",
      image: "https://images.unsplash.com/photo-1633659524452-01d5c2f834db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Yamileth Soto",
      role: "Coordinadora de Actividades",
      description: "Experta en turismo rural y coordinadora de actividades en la finca.",
      image: "https://images.unsplash.com/photo-1609942826048-e0db3c3a7d2b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ana López",
      role: "Chef y Propietaria",
      description: "Encargada de ofrecer experiencias gastronómicas auténticas.",
      image: "https://images.unsplash.com/photo-1613431656502-16d49c2594c8?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];