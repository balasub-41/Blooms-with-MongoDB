import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';

const Register = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    studentType: '', // Assuming default empty string, update if a default option is selected
    schoolName: '',
    classStandard: '',
    rollNo: '',
    section: '',
    group: '',
    dob: '',
    mobileNumber: '',
    altMobileNumber: '',
    email: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    name: '',
    fatherName: '',
    studentType: '',
    schoolName: '',
    classStandard: '',
    rollNo: '',
    section: '',
    group: '',
    dob: '',
    mobileNumber: '',
    altMobileNumber: '',
    email: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear error when user starts typing
    setErrors({ ...errors, [id]: '' });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors = { ...errors };
    let isValid = true;

    // Validation checks for required fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.fatherName.trim()) {
      newErrors.fatherName = 'Father Name is required';
      isValid = false;
    }
    // Assuming '--Select--' is the default value for studentType
    if (!formData.studentType || formData.studentType === '--Select--') {
       newErrors.studentType = 'Please select Student / Professional';
       isValid = false;
    }
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School Name is required';
      isValid = false;
    }
    if (!formData.classStandard.trim()) {
      newErrors.classStandard = 'Class / Standard is required';
      isValid = false;
    }
    if (!formData.rollNo.trim()) {
      newErrors.rollNo = 'Roll No / Reg No is required';
      isValid = false;
    }
    if (!formData.section.trim()) {
      newErrors.section = 'Section is required';
      isValid = false;
    }
    if (!formData.group.trim()) {
      newErrors.group = 'Group is required';
      isValid = false;
    }
    if (!formData.dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
      isValid = false;
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) { // Basic 10-digit phone number check
       newErrors.mobileNumber = 'Invalid mobile number format (10 digits required)';
       isValid = false;
    }
     // Alternative Mobile Number is optional, no validation needed unless specified
    if (!formData.email.trim()) {
      newErrors.email = 'Email ID is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) { // Basic email format check
       newErrors.email = 'Invalid email format';
       isValid = false;
    }


    setErrors(newErrors);

    if (isValid) {
      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Registration successful:', result);
          alert('Registration successful!'); // You might want to replace this with a better UI notification
          
          // Reset form
          setFormData({
            name: '',
            fatherName: '',
            studentType: '',
            schoolName: '',
            classStandard: '',
            rollNo: '',
            section: '',
            group: '',
            dob: '',
            mobileNumber: '',
            altMobileNumber: '',
            email: '',
          });
        } else {
          throw new Error('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again.'); // You might want to replace this with a better UI notification
      }
    } else {
      console.log('Registration validation failed');
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

      {/* Right Section with Registration Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Register</h2>
            <p className="text-gray-600">Submit the details to create a New Account</p>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Added onSubmit handler */}
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? 'border-red-500' : ''}`} // Add red border on error
                id="name"
                type="text"
                placeholder="Enter your Name"
                value={formData.name} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>} {/* Display error message */}
            </div>

            {/* Father Name */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fatherName">
                Father Name
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.fatherName ? 'border-red-500' : ''}`} // Add red border on error
                id="fatherName"
                type="text"
                placeholder="Enter your Father Name"
                value={formData.fatherName} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
              {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>} {/* Display error message */}
            </div>

            {/* Student / Professional */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="studentType">
                Student / Professional
              </label>
              <select
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.studentType ? 'border-red-500' : ''}`} // Add red border on error
                id="studentType"
                value={formData.studentType} // Bind value to state
                onChange={handleInputChange} // Add change handler
              >
                <option value="">--Select--</option> {/* Added value="" for validation */}
                {/* Add other options here */}
                 <option value="student">Student</option>
                 <option value="professional">Professional</option>
              </select>
               {errors.studentType && <p className="text-red-500 text-xs mt-1">{errors.studentType}</p>} {/* Display error message */}
            </div>

            {/* School Name */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="schoolName">
                School Name
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.schoolName ? 'border-red-500' : ''}`} // Add red border on error
                id="schoolName"
                type="text"
                placeholder="Enter School Name"
                value={formData.schoolName} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {errors.schoolName && <p className="text-red-500 text-xs mt-1">{errors.schoolName}</p>} {/* Display error message */}
            </div>

            {/* Class / Standard */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="classStandard">
                Class / Standard
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.classStandard ? 'border-red-500' : ''}`} // Add red border on error
                id="classStandard"
                type="text"
                placeholder="Select class / Standard"
                value={formData.classStandard} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {errors.classStandard && <p className="text-red-500 text-xs mt-1">{errors.classStandard}</p>} {/* Display error message */}
            </div>

            {/* Roll No / Reg No */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="rollNo">
                Roll No / Reg No
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.rollNo ? 'border-red-500' : ''}`} // Add red border on error
                id="rollNo"
                type="text"
                placeholder="Enter Roll No / Reg No" // Updated placeholder
                value={formData.rollNo} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {errors.rollNo && <p className="text-red-500 text-xs mt-1">{errors.rollNo}</p>} {/* Display error message */}
            </div>

            {/* Section */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="section">
                Section
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.section ? 'border-red-500' : ''}`} // Add red border on error
                id="section"
                type="text"
                placeholder="Enter Section"
                value={formData.section} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {errors.section && <p className="text-red-500 text-xs mt-1">{errors.section}</p>} {/* Display error message */}
            </div>

            {/* Group */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="group">
                Group
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.group ? 'border-red-500' : ''}`} // Add red border on error
                id="group"
                type="text"
                placeholder="Enter group"
                value={formData.group} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {errors.group && <p className="text-red-500 text-xs mt-1">{errors.group}</p>} {/* Display error message */}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.dob ? 'border-red-500' : ''}`} // Add red border on error
                id="dob"
                type="date" // Changed type to date
                placeholder="DD / MM / YYYY"
                value={formData.dob} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>} {/* Display error message */}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.mobileNumber ? 'border-red-500' : ''}`} // Add red border on error
                id="mobileNumber"
                type="tel"
                placeholder="Enter your Mobile Number"
                value={formData.mobileNumber} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>} {/* Display error message */}
            </div>

            {/* Alternative Mobile Number */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="altMobileNumber">
                Alternative Mobile Number
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.altMobileNumber ? 'border-red-500' : ''}`} // Add red border on error
                id="altMobileNumber"
                type="tel"
                placeholder="Enter your Alternative Mobile Number"
                value={formData.altMobileNumber} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {/* No error message for optional field unless specific format is required */}
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email ID
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : ''}`} // Add red border on error
                id="email"
                type="email"
                placeholder="Enter your Email ID"
                value={formData.email} // Bind value to state
                onChange={handleInputChange} // Add change handler
              />
               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>} {/* Display error message */}
            </div>

            {/* Register Button */}
            <div className="md:col-span-2 mt-6">
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6 text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;