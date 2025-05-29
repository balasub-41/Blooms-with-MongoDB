import React from 'react';
import BloomsNavbar from "@/components/BloomsNavbar";
import BloomsFooter from "@/components/BloomsFooter";
import { Link } from "react-router-dom";

const Gallery = () => {
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
            <span className="text-gray-800">Gallery</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C2449] mb-6">Gallery</h1>
              {/* Optional: Add a short description for the gallery if needed */}
              {/* <p className="text-gray-600 max-w-2xl">
                Explore moments from our career guidance programmes and events.
              </p> */}
            </div>
            <div className="flex-1 flex justify-center">
              {/* Placeholder for the header image */}
              <img
                src="/blooms-academy/gallery_header_pic.PNG" // Replace with the actual path to your header image
                alt="Gallery Header"
                className="rounded-lg border-4 border-white shadow-xl max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content Section */}
      <section className="py-12 bg-white relative"> {/* Added 'relative' for positioning buttons */}
        <div className="container mx-auto max-w-6xl px-4">
          {/* Image Grid - This is a placeholder structure. You'll need to replace this with your actual gallery images. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Gallery Item */}
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src="/blooms-academy/gallery-image-1.jpg" // Replace with actual image path
                alt="Gallery Image 1"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Optional: Add an overlay or caption on hover */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
                Caption
              </div> */}
            </div>
            {/* Add more gallery items here following the same structure */}
             <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src="/blooms-academy/gallery-image-2.jpg" // Replace with actual image path
                alt="Gallery Image 2"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
             <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src="/blooms-academy/gallery-image-3.jpg" // Replace with actual image path
                alt="Gallery Image 3"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
             <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src="/blooms-academy/gallery-image-4.jpg" // Replace with actual image path
                alt="Gallery Image 4"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
             <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src="/blooms-academy/gallery-image-5.jpg" // Replace with actual image path
                alt="Gallery Image 5"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
             <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src="/blooms-academy/gallery-image-6.jpg" // Replace with actual image path
                alt="Gallery Image 6"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Caption below the image grid */}
          <div className="mt-8 text-center text-lg font-semibold text-[#2C2449]">
            Career Guidance Programme at Daniel Thomas School Tisayanvilai
          </div>

          {/* Optional: Add pagination if you have many gallery images */}
          {/* <div className="mt-8 flex justify-center">
             ... Pagination component here ...
          </div> */}

        </div>

        {/* Left Slider Button */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md opacity-75 hover:opacity-100 transition-opacity ml-4 z-10">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        {/* Right Slider Button */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md opacity-75 hover:opacity-100 transition-opacity mr-4 z-10">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </section>

      <BloomsFooter />
    </main>
  );
};

export default Gallery;