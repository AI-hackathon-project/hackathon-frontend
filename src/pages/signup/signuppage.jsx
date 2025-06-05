import React, { useState } from 'react';
import SignupInput from '../../components/signupinput';
import SignupIcons from '../../constant/signupicons';


const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-6 sm:py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 bg-orange-50 flex flex-col items-center justify-center relative">
          <div className="absolute top-6 left-6">
          </div>
          <img 
            src="src/assets/images/signup0.png"
            alt="Decorative illustration"
            className="w-full max-w-sm"
          />
        </div>

        <div className="md:w-1/2 p-6 sm:p-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">SignUp</h2>
            <p className="font-semibold text-gray-600 mb-6">Welcome, Mama💜You're not alone. Sign up and let’s walk this journey together.</p>
            

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SignupInput label="First Name" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                <SignupInput label="Last Name" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                </div>
              
              <SignupInput label="Email" id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
              <SignupInput label="Username" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SignupInput label="Password" id="password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                <SignupInput label="Confirm Password" id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
              </div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-lg transition-colors duration-300">REGISTER</button>
            </form>

            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>
              <SignupIcons />
              <p className="mt-6 text-gray-600">
                Already have an Account?{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">LOGIN</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
