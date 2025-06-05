import React from 'react';
import ServiceHighlight from '../../../components/ServiceHighlight';
import ServiceItem from '../../../components/ServiceItem';
import services from '../../../constant/service';


const Services = () => {
  return (
    <div className="min-h-screen bg-[#fff0d4] py-10 px-4">
      <h1 className="italic text-3xl md:text-4xl text-center font-semibold text-gray-800 mb-8">
        Postpartum Care and Recovery
      </h1>
      
      <ServiceHighlight />

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