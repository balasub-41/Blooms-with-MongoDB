
export default function BloomsFooter() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Blooms Academy</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              The Institute primarily conducts career guidance and personality development
              programmes for school and college students across the Nation. It has a team of
              professionals involved in campus & online career
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">Download Available</h3>
              <div className="flex gap-4">
                <a href="#" className="inline-block hover:opacity-90 transition-opacity">
                  <img
                    src="/blooms-academy/google-play.png"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
                <a href="#" className="inline-block hover:opacity-90 transition-opacity">
                  <img
                    src="/blooms-academy/app-store.png"
                    alt="Download on App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Subscribe to News Letter</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="enter email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none"
                />
                <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
                  Subscribe
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact US</h3>
              <div className="space-y-2">
                <a href="mailto:Coordinator@bloomscareer.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Coordinator@bloomscareer.com
                </a>
                <a href="tel:7358484874" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  7358484874
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Social Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <nav>
              <ul className="flex flex-wrap gap-6 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Associated Schools List</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Experts says about Blooms</a></li>
              </ul>
            </nav>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
