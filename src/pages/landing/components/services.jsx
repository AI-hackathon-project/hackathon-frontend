import React from 'react';

const ServiceItem = ({ title }) => {
  return (
    <button className="bg-purple-300 hover:bg-purple-500 transition-colors duration-300 text-white py-2 px-5 rounded-full text-sm md:text-base whitespace-nowrap">
      {title}
    </button>
  );
};

const ServiceItem2 = () => {
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



const Services = () => {
  const services = [
    "Postpartum recovery",
    "Mental Health",
    "Parenting Support",
    "Self-Care",
    "Community and Support Groups",
    "Newborn Care",
    "Nutrition and Wellness",
    "Breastfeeding Support",
    "Relationships",
    "Work and Finances"
  ];

  return (
    <div className="min-h-screen bg-[#fff0d4] py-10 px-4">
      <h1 className="italic text-3xl md:text-4xl text-center font-semibold text-gray-800 mb-8">
        Postpartum Care and Recovery
      </h1>
      <ServiceItem2 />
      <div className="w-full max-w-4xl mx-auto mt-10">
        <h3 className="italic text-4xl text-center font-medium text-gray-800 mb-6">
          Services We Provide
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {services.map((service, index) => (
            <ServiceItem key={index} title={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;