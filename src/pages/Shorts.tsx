import React from 'react';
import BloomsNavbar from "@/components/BloomsNavbar";
import BloomsFooter from "@/components/BloomsFooter";
import { Link } from "react-router-dom";

interface ShortVideo {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
}

const shortVideos: ShortVideo[] = [
  {
    id: '1',
    title: 'Civil Services',
    thumbnail: '/blooms-academy/civil-services.jpg',
    link: '/shorts/civil-services'
  },
  {
    id: '2',
    title: 'Civil services exam',
    thumbnail: '/blooms-academy/civil-services-exam.jpg',
    link: '/shorts/civil-services-exam'
  },
  {
    id: '3',
    title: 'தொழில் விருப்பத் திட்டம்',
    thumbnail: '/blooms-academy/career-plan.jpg',
    link: '/shorts/career-plan'
  },
  {
    id: '4',
    title: 'Find Your Right Career From Blooms Academy And Tuluk Career Consultancy',
    thumbnail: '/blooms-academy/find-career.jpg',
    link: '/shorts/find-career'
  },
  {
    id: '5',
    title: 'School Students to become IAS - Mr. Venkatesh IRS',
    thumbnail: '/blooms-academy/ias-guidance.jpg',
    link: '/shorts/ias-guidance'
  },
  {
    id: '6',
    title: 'TNPSC - Group-II posts offered Mr. RL Arun Prasad IRS',
    thumbnail: '/blooms-academy/tnpsc-guidance.jpg',
    link: '/shorts/tnpsc-guidance'
  },
  {
    id: '7',
    title: 'NEET - Success by Self Preparation',
    thumbnail: '/blooms-academy/neet-prep.jpg',
    link: '/shorts/neet-prep'
  },
  {
    id: '8',
    title: 'How To Crack Neet Easily -Mr.P.Sidhavan IRS',
    thumbnail: '/blooms-academy/neet-tips.jpg',
    link: '/shorts/neet-tips'
  },
  {
    id: '9',
    title: 'TNPSC - Tamilnadu Public Service Commission',
    thumbnail: '/blooms-academy/tnpsc-commission.jpg',
    link: '/shorts/tnpsc-commission'
  },
  // Added videos 10, 11, and 12 based on the image
  {
    id: '10',
    title: 'How To Overcome Fear ? by Mr. Arun Prasad IRS',
    thumbnail: '/blooms-academy/placeholder-image-10.jpg', // Replace with actual image path
    link: '/shorts/video-10' // Replace with actual video route
  },
  {
    id: '11',
    title: 'IFS - Indian Forest Service',
    thumbnail: '/blooms-academy/placeholder-image-11.jpg', // Replace with actual image path
    link: '/shorts/video-11' // Replace with actual video route
  },
  {
    id: '12',
    title: 'UPSC - Union Public Service Commission',
    thumbnail: '/blooms-academy/placeholder-image-12.jpg', // Replace with actual image path
    link: '/shorts/video-12' // Replace with actual video route
  }
];

const Shorts = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <BloomsNavbar />

      {/* Hero Section with Breadcrumb and Image */}
      {/* Updated background to a gradient matching the image */}
      <section className="bg-gradient-to-b from-[#E0E7FF] to-[#F8F9FF] py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">Shorts</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C2449] mb-6">Shorts</h1>
              <p className="text-gray-600 max-w-2xl">
                Watch our short informative videos about various career opportunities, exam preparations,
                and guidance from industry experts.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/blooms-academy/shorts11_header_pic.PNG"
                alt="Shorts Header"
                className="rounded-lg border-4 border-white shadow-xl max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortVideos.map((video) => (
              <Link
                to={video.link}
                key={video.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Thumbnail */}
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
                      <svg
                        className="w-8 h-8 text-primary fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-[#2C2449] group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto max-w-6xl px-4 flex justify-center">
          <div className="flex items-center space-x-1">
            {/* First Button */}
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              &laquo; First
            </button>

            {/* Back Button */}
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              &lsaquo; Back
            </button>

            {/* Page Numbers */}
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              1
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-md">
              2
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              4
            </button>

            {/* Ellipsis */}
            <span className="px-3 py-2 text-sm font-medium text-gray-700">...</span>

            {/* Last Page Number */}
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              25
            </button>

            {/* Next Button */}
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Next &rsaquo;
            </button>

            {/* Last Button */}
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Last &raquo;
            </button>
          </div>
        </div>
      </section>

      <BloomsFooter />
    </main>
  );
};

export default Shorts;