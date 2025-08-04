import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import HederSection from "./HeaderSection";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsX } from "react-icons/bs";

Modal.setAppElement("#root");

const Gallery = () => {
  const images = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

  return (
    <div className="min-h-screen bg-gray-100">

      <HederSection imageUrl="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      title="GALLERIA"/>

      <main className="mx-auto px-4 py-8 lg:px-24 lg:pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="w-full"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <img
                alt={`gallery-${index}`}
                className="block w-full h-full aspect-video rounded-lg object-cover object-center cursor-pointer transition-transform duration-300 hover:scale-105"
                src={src}
                onClick={() => openModal(index)}
              />
            </motion.div>
          ))}
        </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "none",
            border: "none",
            padding: 0,
          },
        }}
      >
        <div className="relative">
          <button onClick={closeModal} className="bg-transparent text-white text-4xl absolute top-2 right-2 hover:text-custom-green hover:bg-transparent rounded-full p-2">
            <BsX />
          </button>
          <button onClick={prevImage} className="bg-transparent text-white text-3xl absolute left-0 top-1/2 transform -translate-y-1/2 hover:text-custom-green hover:bg-transparent rounded-full p-2">
            <BsFillArrowLeftCircleFill />
          </button>
          <img src={images[currentImage]} alt={`Modal Gallery ${currentImage + 1}`} className="rounded-lg max-w-full max-h-screen"/>
          <button onClick={nextImage} className="bg-transparent text-white text-3xl absolute right-0 top-1/2 transform -translate-y-1/2 hover:text-custom-green hover:bg-transparent rounded-full p-2">
           <BsFillArrowRightCircleFill />
          </button>
        </div>
      </Modal>
    </main>

    </div>
  );
};

export default Gallery;
