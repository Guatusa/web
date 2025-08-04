const SectionHeader = ({ className = "", title, description, fontFamily }) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-3xl lg:text-4xl title mb-8">
        {title}
      </h2>
      <p className="text-2xl font-bold" style={{ fontFamily }}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
