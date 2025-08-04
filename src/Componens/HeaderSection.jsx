import React from "react";

const HederSection = ({ imageUrl, title }) => {
  return (
 <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[500px] overflow-hidden">
  {/* Imagen de fondo */}
  <div className="absolute inset-0">
    <img
      className="h-full w-full object-cover object-center max-w-none"
      src={imageUrl}
      alt={title}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40" />
  </div>

  <div className="relative z-10 flex items-center justify-center h-[400px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
    <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide drop-shadow-xl px-4">
      {title}
    </h1>
  </div>
</section>
  );
};

export default HederSection;