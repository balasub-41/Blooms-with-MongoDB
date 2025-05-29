import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';

const Login = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    emailOrMobile: '',
    password: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear error when user starts typing
    setErrors({ ...errors, [id]: '' });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors = { ...errors };
    let isValid = true;

    // Validation checks
    if (!formData.emailOrMobile.trim()) {
      newErrors.emailOrMobile = 'Mobile No / Email ID is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Process form data (e.g., send to backend)
      console.log('Login data submitted:', formData);
      // Add your login logic here (e.g., API call)
      alert('Login attempt with provided credentials.'); // Placeholder action
      // Optionally reset form or redirect on success
    } else {
      console.log('Login validation failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section with Image and Text */}
      <div className="relative md:w-1/2 bg-gradient-to-br from-[#6A5ACD] to-[#483D8B] flex items-center justify-center p-8">
        <div className="absolute inset-0 overflow-hidden">
           {/* Add background pattern if available */}
        </div>
        <div className="relative z-10 text-white max-w-md text-left">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">
              Discover A New World Of Learning. Clever Ideas For A <span className="text-[#FFA500]">Brighter</span> Future
            </h1>
            {/* Add dots if needed */}
          </div>
          <img
            src="/blooms-academy/student-hero.PNG" // Replace with the actual image path if different
            alt="Student pointing"
            className="mt-8 w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
            <p className="text-gray-600">Enter your credentials to login</p>
          </div>
          <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="emailOrMobile"> {/* Updated htmlFor */}
                Mobile No / Email ID
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.emailOrMobile ? 'border-red-500' : ''}`} // Add red border on error
                id="emailOrMobile" // Updated id
                type="text"
                placeholder="Enter email Id or Mobile Number"
                value={formData.emailOrMobile} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
              {errors.emailOrMobile && <p className="text-red-500 text-xs mt-1">{errors.emailOrMobile}</p>} {/* Display error message */}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.password ? 'border-red-500' : ''}`} // Add red border on error
                id="password"
                type="password"
                placeholder="Enter Password"
                value={formData.password} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>} {/* Display error message */}
              <div className="text-right">
                <a
                  className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
                  href="#" // Replace with actual forgot password route
                >
                  Forgot Password
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6 text-gray-600 text-sm">
            Do not have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;