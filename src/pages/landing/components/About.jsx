import React, { useEffect, useState, useRef } from 'react';
import K from '../../../constant';
import aboutImage from "../../../assets/images/a70bddb9-77ce-43f8-bb0d-e9d9ef770312.jpg"
import aboutImage1 from "../../../assets/images/DJV MAR 1021-08.jpg"


const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const features = K.FEATURES;


    return (
        <section
            id="About"
            ref={sectionRef}
            className="py-7 sm:py-12 md:py-16 lg:py-20 cursor-default min-h-screen relative overflow-hidden"
        >
            {/* Enhanced background design with better responsiveness */}
            <div className="absolute inset-0 z-0">
                {/* Main diagonal gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F2CEC2]/20 to-transparent"></div>

                {/* Floating shapes with responsive sizing */}
                <div className="absolute -top-[10%] -left-[10%] w-[80%] sm:w-[60%] lg:w-[50%] aspect-square bg-[#F2CEC2]/30 rounded-[30%] blur-3xl transform rotate-12"></div>
                <div className="absolute top-[20%] right-[5%] w-[40%] sm:w-[30%] aspect-square bg-[#FCC988]/20 rounded-full blur-2xl z-12"></div>
                <div className="absolute bottom-[10%] left-[15%] w-[35%] sm:w-[25%] aspect-square bg-[#E69695]/25 rounded-full blur-2xl z-12"></div>
                <div className="absolute top-[40%] right-[20%] w-[25%] aspect-square bg-[#C3C198]/20 rounded-[40%] blur-xl transform -rotate-15 z-12"></div>
                <div className="absolute bottom-[30%] right-[10%] w-[45%] sm:w-[35%] aspect-square bg-[#FDB082]/15 rounded-[60%] blur-2xl transform rotate-45 z-12"></div>
            </div>


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    <div
                        className={`relative max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                            }`}
                    >
                        {/* Main square image */}
                        <div className="relative aspect-square w-full max-w-lg mx-auto">
                            <img
                                src={aboutImage}
                                alt="Mother and child"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-tr from-[#F2CEC2]/30 to-transparent"></div>

                            {/* Overlay image at bottom right */}
                            <div
                                className={`absolute -bottom-8 sm:-bottom-12 -right-4 sm:-right-12 w-1/3 aspect-square rounded-lgshadow-lg overflow-hidden border-4 border-white transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                            >
                                <img
                                    src={aboutImage1}
                                    alt="Healthcare professional"
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-br from-[#E69695]/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            }`}
                    >
                        <span className="border-2 border-[#E69695] px-4 sm:px-6 py-3 rounded-full text-primary-500 font-medium mb-2 inline-block">ABOUT US</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-[#E15B42] mb-4">
                            Transforming Maternal Healthcare
                        </h2>
                        <div className="w-20 h-1 bg-[#FCC988] mb-6"></div>


                        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                            Our mission is to make expert maternal healthcare guidance accessible to every mother,
                            everywhere. We believe that with the right information and support, mothers can make
                            confident decisions about their health and the health of their babies.
                        </p>

                        <p className="text-gray-700 mb-8 leading-relaxed text-sm sm:text-base">
                            Through our AI-powered platform, we provide personalized recommendations, timely reminders,
                            and evidence-based information to support mothers through pregnancy, childbirth, and beyond.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start space-x-3 p-3 sm:p-4 rounded-lg transition-all duration-700 delay-${300 + (index * 150)} transform hover:bg-white/60 hover:shadow-md ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                        }`}
                                >
                                    <div className="mt-1 flex-shrink-0 p-2 rounded-full bg-[#FDB082]/50">{feature.icon}</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">{feature.title}</h4>
                                        <p className="text-xs text-gray-600 sm:text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-10">
                            <button className="bg-[#E69695] hover:bg-[#FDB082] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;