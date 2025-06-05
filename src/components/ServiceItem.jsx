const ServiceItem = ({ title }) => {
  return (
    <button className="bg-purple-300 hover:bg-purple-500 transition-colors duration-300 text-white py-2 px-5 rounded-full text-sm md:text-base whitespace-nowrap">
      {title}
    </button>
  );
};

export default ServiceItem;