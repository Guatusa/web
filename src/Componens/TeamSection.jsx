const TeamSection = ({ teamMembers, className = "" }) => {
  return (
    <div className={`flex flex-wrap justify-center gap-20 mt-8 ${className}`}>
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Imagen redonda con borde y efecto hover */}
          <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-dark-green border-opacity-60">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src={member.image}
              alt={member.name}
            />
          </div>
          <h3 className="text-xl font-semibold text-dark-green mt-4">{member.name}</h3>
          <p className="mb-2">{member.role}</p>
          <p className="text-dark-green text-center max-w-xs">{member.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
