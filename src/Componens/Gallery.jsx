import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Gallery = () => {
  const images = [
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

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/" className="hover:text-gray-300">
              🌟 Mi Galería
            </a>
          </div>
          {/* Navigation */}
          <nav>
            <a
              href="/"
              className="text-gray-200 hover:text-white transition duration-200 px-4"
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition duration-200 px-4"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Gallery */}
      <main className="mx-auto px-2 py-4 lg:px-24 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={images[0]}
                onClick={() => openModal(0)}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={images[1]}
                onClick={() => openModal(1)}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={images[2]}
                onClick={() => openModal(2)}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={images[3]}
                onClick={() => openModal(3)}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={images[4]}
                onClick={() => openModal(4)}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={images[5]}
                onClick={() => openModal(5)}
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
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
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
              ◀
            </button>
            <img
              src={images[currentImage]}
              alt={`Modal Gallery ${currentImage + 1}`}
              className="rounded-lg max-w-full max-h-screen"
            />
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
              ▶
            </button>
          </div>
        </Modal>
      </main>
    </div>
  );
};

export default Gallery;
