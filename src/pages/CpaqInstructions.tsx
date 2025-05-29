import React, { useState } from 'react';
import BloomsNavbar from "@/components/BloomsNavbar";
import BloomsFooter from "@/components/BloomsFooter";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import PaymentPopup from "@/components/PaymentPopup"; // Import the new component

const CpaqInstructions = () => {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false); // Add state for popup visibility

  const togglePaymentPopup = () => { // Function to toggle popup visibility
    setShowPaymentPopup(!showPaymentPopup);
  };

  return (
    <main className="w-full overflow-x-hidden">
      <BloomsNavbar />

      {/* Hero Section with Breadcrumb and Image */}
      {/* Background gradient based on the provided image */}
      <section className="bg-gradient-to-b from-[#E0E7FF] to-[#F8F9FF] py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">CPAQ Instructions</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C2449] mb-6">CPAQ Instructions</h1>
            </div>
            <div className="flex-1 flex justify-center">
              {/* Placeholder for the header image */}
              {/* Using a placeholder image path, replace with the actual image if available */}
              <img
                src="/blooms-academy/cpaq_header_pic.PNG" // Replace with the actual path to your header image
                alt="CPAQ Instructions Header"
                className="rounded-lg border-4 border-white shadow-xl max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-6">
              Dear Parents and Students, Welcome to Blooms Academy's Career Assessment Questionnaire and Personality Assessment Questionnaire Tests,
            </p>
            <p className="mb-4 font-semibold">So what this Questionnaire does.</p>
            <ul className="list-none space-y-4">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span>
                  Career Assessment Questionnaire (CAQ) not only identify your love and interest but also assess your real aptitude to help you to find out a career best suitable for you after schooling.
                </span>
              </li>
              <li className="flex items-start gap-2">
                 <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span>
                  By choosing right statements from the given choices in these Career Assessment Questionnaire (CAQ), you will able to better understand and start up your new career suitable to you.
                </span>
              </li>
              <li className="flex items-start gap-2">
                 <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span>
                  The Personality Assessment Questionnaire (PAQ) is a unique way to measure your personality traits and behaviour influences.
                </span>
              </li>
              <li className="flex items-start gap-2">
                 <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span>
                  By choosing right statements from our simple Personality Assessment Questionnaire (PAQ), you can find your right personality type and its corresponding characteristics, strength, weakness and suggestions to improve yourself.
                </span>
              </li>
            </ul>

            {/* Attend CPAQ Test Button */}
            <div className="mt-8">
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2"
                onClick={togglePaymentPopup} // Add onClick handler
              >
                Attend CPAQ Test
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 16 16"><path d="M4 8h8M11 5l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BloomsFooter />

      {/* Render the PaymentPopup component conditionally */}
      {showPaymentPopup && <PaymentPopup onClose={togglePaymentPopup} />}
    </main>
  );
};

export default CpaqInstructions;