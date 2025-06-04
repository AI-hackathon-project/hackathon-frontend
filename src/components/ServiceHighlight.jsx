const ServiceHighlight = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-0 bg-white rounded-3xl shadow-sm flex flex-col md:flex-row overflow-hidden h-[400px]">
      <div className="md:basis-[45%] h-full">
        <img 
          src="src/assets/images/mum3.jpg" 
          alt="Mother holding baby" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:basis-[55%] p-6 flex flex-col justify-center">
        <h2 className="italic text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Empowering New Moms: Overcoming Postpartum
        </h2>
        <p className="text-gray-600 mb-6">
          Explore effective techniques and self-care practices to help
          new mothers regain their strength, manage mood changes,
          and build confidence in caring for their little ones.
        </p>
        <button className="bg-purple-300 hover:bg-purple-500 transition-colors duration-300 text-white font-medium py-3 px-6 rounded-full w-fit">
          Join the Journey
        </button>
      </div>
    </div>
  );
};

export default ServiceHighlight
