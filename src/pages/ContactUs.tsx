import React, { useState } from 'react'; // Import useState
import BloomsNavbar from "@/components/BloomsNavbar";
import BloomsFooter from "@/components/BloomsFooter";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    schoolName: '',
    message: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    schoolName: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    // Basic validation checks (required fields)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) { // Basic email format check
       newErrors.email = 'Invalid email format';
       isValid = false;
    }
     if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) { // Basic 10-digit phone number check
       newErrors.phone = 'Invalid phone number format (10 digits required)';
       isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
     if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School Name is required';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }


    setErrors(newErrors);

    if (isValid) {
      // Process form data (e.g., send to backend)
      console.log('Form data submitted:', formData);
      // Add your form submission logic here (e.g., API call)
      alert('Form submitted successfully!'); // Placeholder success message
      // Optionally reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        schoolName: '',
        message: '',
      });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <main className="w-full overflow-x-hidden">
      <BloomsNavbar />

      {/* Hero Section with Breadcrumb and Image */}
      <section className="bg-gradient-to-b from-[#E0E7FF] to-[#F8F9FF] py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">Contact Us</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C2449] mb-6">Contact Us</h1>
              {/* Optional: Add a short description for the contact page if needed */}
            </div>
            <div className="flex-1 flex justify-center">
              {/* Placeholder for the header image */}
              <img
                src="/blooms-academy/product_header_pic.PNG" // Replace with the actual path to your header image
                alt="Contact Us Header"
                className="rounded-lg border-4 border-white shadow-xl max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info Card */}
            <div className="lg:w-1/3 bg-gradient-to-br from-[#FFD1DC] to-[#E0BBE4] rounded-xl shadow-lg p-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E0BBE4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a4 4 0 115.656-5.656l1.414 1.414a.5.5 0 00.707 0l1.414-1.414a4 4 0 015.656 5.656z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600 text-sm">No.212, 2nd street, Imayam Colony, Anna Nagar West Extension, Chennai 600 101</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD1DC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v13a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600 text-sm">Coordinator@bloomscareer.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E0BBE4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm12 0a2 2 0 012-2h3a2 2 0 012 2v6a2 2 0 01-2 2h-3a2 2 0 01-2-2V5zm-6 6v6a2 2 0 002 2h3a2 2 0 002-2v-6a2 2 0 00-2-2h-3a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Call</h3>
                  <p className="text-gray-600 text-sm">7358484874</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#2C2449] mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Added onSubmit handler */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Willson Albert"
                    className={`rounded-md ${errors.name ? 'border-red-500' : ''}`} // Add red border on error
                    value={formData.name} // Bind value to state
                    onChange={handleInputChange} // Add change handler
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>} {/* Display error message */}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="alber@gmail.com"
                    className={`rounded-md ${errors.email ? 'border-red-500' : ''}`} // Add red border on error
                    value={formData.email} // Bind value to state
                    onChange={handleInputChange} // Add change handler
                  />
                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>} {/* Display error message */}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="8667313484"
                    className={`rounded-md ${errors.phone ? 'border-red-500' : ''}`} // Add red border on error
                    value={formData.phone} // Bind value to state
                    onChange={handleInputChange} // Add change handler
                  />
                   {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>} {/* Display error message */}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    placeholder="Maths"
                    className={`rounded-md ${errors.subject ? 'border-red-500' : ''}`} // Add red border on error
                    value={formData.subject} // Bind value to state
                    onChange={handleInputChange} // Add change handler
                  />
                   {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>} {/* Display error message */}
                </div>
                 <div className="md:col-span-2">
                  <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                  <Input
                    type="text"
                    id="schoolName"
                    placeholder="Petit Seminare Higher Secondary School"
                    className={`rounded-md ${errors.schoolName ? 'border-red-500' : ''}`} // Add red border on error
                    value={formData.schoolName} // Bind value to state
                    onChange={handleInputChange} // Add change handler
                  />
                   {errors.schoolName && <p className="text-red-500 text-xs mt-1">{errors.schoolName}</p>} {/* Display error message */}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Type Something....."
                    className={`rounded-md ${errors.message ? 'border-red-500' : ''}`} // Add red border on error
                    value={formData.message} // Bind value to state
                    onChange={handleInputChange} // Add change handler
                  />
                   {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>} {/* Display error message */}
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full">
        {/* Placeholder for the Google Map iframe */}
        {/* You would replace this with an actual Google Maps embed iframe */}
        <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-gray-600">
          {/* Replace with your actual Google Maps embed code */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4286000000003!2d80.24199999999999!3d13.0756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664111111111%3A0x1111111111111111!2sImayam%20Colony%2C%20Anna%20Nagar%20West%20Extension%2C%20Chennai%2C%20Tamil%20Nadu%20600101!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin" // Replace with the correct embed URL for the address
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Imayam Colony"
          ></iframe>
        </div>
      </section>

      <BloomsFooter />
    </main>
  );
};

export default ContactUs;