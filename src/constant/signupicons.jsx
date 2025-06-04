import { Facebook, Mail } from 'lucide-react';

const SignupIcons = () => (
  <div className="mt-6 flex justify-center space-x-4">
    <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-300">
      <Facebook className="w-5 h-5 text-blue-600" />
    </button>
    <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-300">
      <Mail className="w-5 h-5 text-red-500" />
    </button>
  </div>
);

export default SignupIcons;