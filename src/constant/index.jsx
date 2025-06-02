import { CheckCircle, Award, Heart, Users } from 'lucide-react';


const K = {
  NAVLINKS: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about-us",
    },
    {
      name: "Collection",
      path: "/collection",
    },
    {
      name: "Contact",
      path: "/contact-us",
    },
  ],

  FEATURES: [
  {
    icon: <CheckCircle className="w-6 h-6 text-[#cf221f]" />,
    title: "24/7 Support",
    description: "Round-the-clock access to AI-powered maternal health guidance and support."
  },
  {
    icon: <Award className="w-6 h-6 text-[#cf221f]" />,
    title: "Expert Insights",
    description: "Medically validated advice based on the latest maternal health research."
  },
  {
    icon: <Heart className="w-6 h-6 text-[#cf221f]" />,
    title: "Personalized Care",
    description: "Tailored recommendations based on your unique pregnancy journey."
  },
  {
    icon: <Users className="w-6 h-6 text-[#cf221f]" />,
    title: "Community",
    description: "Connect with other mothers and share experiences in a supportive environment."
  }
],
};


export default K;
