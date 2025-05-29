import React from 'react';
import BloomsNavbar from "@/components/BloomsNavbar";
import BloomsFooter from "@/components/BloomsFooter";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <BloomsNavbar />

      {/* Hero Section with Breadcrumb and Title */}
      <section className="bg-gradient-to-b from-[#E0E7FF] to-[#F8F9FF] py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">Our Products</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C2449] mb-6">Our Products</h1>
            </div>
            {/* Placeholder for the header image - replace with actual image if available */}
            <div className="flex-1 flex justify-center">
               <img
                src="/blooms-academy/product_header_pic.PNG" // Replace with the actual path to your header image
                alt="Our Products Header"
                className="rounded-lg border-4 border-white shadow-xl max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section (Career Paperback) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-[#F8F9FF] rounded-xl shadow-card p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
            {/* Product Image */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
              <img
                src="/blooms-academy/career_paperback.PNG" // Replace with the actual path to your product image
                alt="Your Passion Your Career Paperback"
                className="rounded-lg shadow-md max-w-xs md:max-w-full h-auto object-cover border border-gray-300" // Added border classes
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C2449]">
                Your Passion Your<br />Career Paperback
              </h2>
              <p className="text-gray-600 text-base">
                It's a Comprehensive Book on Career, various career opportunities
                in India, UG and PG disciplines, and its curriculum details for various
                universities. The book provides details about Top Colleges in India
                for Each discipline for various undergraduate courses including IIT
                and Business management courses.
              </p>
              <p className="text-gray-600 text-base">
                It has an exclusive chapter providing details of all entrance
                examinations, dates of "call for applications, qualifications, and
                preparation methods. It also provides details about all competitive
                exams in India like UPSC, SSC, Railways, Banking, and defence
                services.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <div>
                  <div className="font-bold text-lg text-[#2C2449]">Foreword by</div>
                  <div className="text-gray-700 font-semibold">Dr. R Ananda Kumar I.A.S</div>
                  <div className="text-gray-600 text-sm">Managing Director,</div>
                  <div className="text-gray-600 text-sm">Tamilnadu Handloom Weaver's Cooperative</div>
                  <div className="text-gray-600 text-sm">Society Ltd (Co-optex)</div>
                </div>
                <div>
                  <div className="font-bold text-lg text-[#2C2449]">&nbsp;</div> {/* Placeholder to align */}
                  <div className="text-gray-700 font-semibold">Dr. A K Viswanathan I.P.S</div>
                  <div className="text-gray-600 text-sm">Director General of Police,</div>
                  <div className="text-gray-600 text-sm">Chennai</div>
                </div>
              </div>
              <a
                href="#" // Replace with actual buy link
                className="group inline-flex items-center px-6 py-3 bg-[#8453f5] text-white rounded-lg font-semibold shadow hover:bg-[#6e37e6] transition w-fit mt-4 gap-2"
              >
                Buy Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 16 16"><path d="M4 8h8M11 5l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Download Section */}
      <section className="py-12 bg-[#faf7ff]">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C2449] mb-2">
            Download our mobile app,<br />start learning today
          </h2>
          <p className="text-gray-600 text-base mb-6">
            Includes all courses and Features
          </p>
          <a
            href="#" // Replace with actual download link
            className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#87a4fa] to-[#a484e6] text-white rounded-lg font-semibold shadow hover:from-[#7a93e0] hover:to-[#885ad5] transition w-fit mx-auto gap-2"
          >
            Download Now
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 16 16"><path d="M4 8h8M11 5l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      <BloomsFooter />
    </main>
  );
};

export default Products;