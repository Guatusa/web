const ChooseCards = ({ data, t }) => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-[10px] text-center mt-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="shadow-lg rounded-3xl p-6 flex flex-col items-center transition-opacity transition-transform duration-100 hover:translate-y-1 mt-6"
        >
          <div className="font-semibold p-2 text-white rounded-full text-4xl bg-dark-green">
            {item.icon}
          </div>
          <h2 className="my-1">{t(item.title)}</h2>
          <p>{t(item.details)}</p>
        </div>
      ))}
    </div>
  );
};

export default ChooseCards;
