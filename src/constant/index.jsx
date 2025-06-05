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


  Phq9Questions: [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    "Trouble concentrating on things, such as reading the newspaper or watching television?",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
    "Thoughts that you would be better off dead or of hurting yourself in some way?",
  ],

  OPTIONS: [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 },
  ],
};


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

Testimonial: [
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    quote:
      'Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.',
    author: 'Richard Anderson',
  },
  {
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    quote:
      'Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.',
    author: 'Chris Peters',
  },
],
};



export default K;
