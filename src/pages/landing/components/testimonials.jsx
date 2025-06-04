import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import K from '../../../constant';
import testiImage from "../../../assets/images/4252294.jpg";

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % K.Testimonial.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % K.Testimonial.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + K.Testimonial.length) % K.Testimonial.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="bg-fixed w-full min-h-screen bg-cover bg-center py-20 text-center relative bg-no-repeat" style={{ backgroundImage: `url(${testiImage})` }} id='Testimonial'>
            {/* Gradient Overlay Layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#E15B42]/30 to-transparent opacity-80 backdrop-blur-xs shadow-md" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#E15B42]/50 to-pink-600/30 mix-blend-overlay" />

            <div className="absolute inset-0 bg-black/20 z-0 "></div>

            <div className="max-w-4xl mx-auto px-4 relative">
                <div className="mb-36">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-[#E15B42] tracking-tight mb-4">
                        Shared Journeys
                    </h1>
                    <p className="text-xl sm:text-2xl text-[#ffff] mx-auto font-medium">
                        Every mother’s journey is unique—but you’re never alone. These are the voices of women who have walked through pregnancy and postpartum with strength, vulnerability, and hope.          </p>
                </div>
                <div className="relative">
                    <div
                        className="transition-opacity duration-500 ease-in-out"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <div className="flex flex-col items-center">
                            <img
                                src={K.Testimonial[currentIndex].image}
                                alt={`Testimonial from ${K.Testimonial[currentIndex].author}`}
                                className="w-24 h-24 rounded-full mb-6 object-cover shadow-lg"
                            />
                            <blockquote className="text-white italic leading-relaxed text-lg lgm:text-base mx-auto">
                                <p className="mb-4">&ldquo;{K.Testimonial[currentIndex].quote}&rdquo;</p>
                                <cite className="text-lg font-medium text-[#ffff] block">
                                    &mdash; {K.Testimonial[currentIndex].author}
                                </cite>
                            </blockquote>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {K.Testimonial.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-gray-600' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;






// import React from 'react';

// const blogs = [
//   {
//     image: '/images/person_1.jpg',
//     quote:
//       'Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.',
//     author: 'Richard Anderson',
//   },
//   {
//     image: '/images/person_2.jpg',
//     quote:
//       'Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.',
//     author: 'Chris Peters',
//   },
// ];

// const Blog = () => {
//   return (
//     <section className="bg-gray-100 py-20 text-center relative">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className="space-y-16">
//           {blogs.map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <img
//                 src={item.image}
//                 alt={`Testimonial from ${item.author}`}
//                 className="w-24 h-24 rounded-full mb-6 object-cover"
//               />
//               <blockquote className="text-gray-700 italic text-lg">
//                 <p className="mb-4">&ldquo;{item.quote}&rdquo;</p>
//                 <cite className="text-sm font-medium text-gray-500">
//                   &mdash; {item.author}
//                 </cite>
//               </blockquote>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
