import BloomsNavbar from "@/components/BloomsNavbar";
import BloomsFooter from "@/components/BloomsFooter";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <BloomsNavbar />
      
      {/* Hero Section with Breadcrumb */}
      <section className="bg-[#F8F9FF] py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">About Us</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C2449] mb-6">About Us</h1>
            </div>
            <div className="flex-1">
              <div className="relative p-4 bg-white rounded-lg shadow-lg">
                <div className="absolute inset-0 border-2 border-[#2C2449] rounded-lg transform -rotate-2"></div>
                <div className="absolute inset-0 border-2 border-[#FFA500] rounded-lg transform rotate-2"></div>
                <img
                  src="/blooms-academy/student-hero.PNG"
                  alt="Student with Books"
                  className="w-full h-auto relative z-10 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Student Image */}
            <div className="flex-1">
              <div className="relative p-4 bg-white rounded-lg shadow-lg">
                <div className="absolute inset-0 border-2 border-[#2C2449] rounded-lg transform -rotate-2"></div>
                <div className="absolute inset-0 border-2 border-[#FFA500] rounded-lg transform rotate-2"></div>
                <img
                  src="/blooms-academy/student1.PNG"
                  alt="Student with Books"
                  className="w-full h-auto relative z-10 rounded-lg"
                />
              </div>
            </div>

            {/* About Academy Content */}
            <div className="flex-1">
              <div className="bg-[#F8F9FF] p-6 rounded-lg">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Who we are
                </span>
                <h2 className="text-2xl font-bold text-[#2C2449] mb-4">About Our Academy</h2>
                <p className="text-gray-600 text-justify">
                  Blooms Academy of Skill Improvement and Career Consultancy was established
                  in the year 2016 in Chennai. The Institute primarily conducts career guidance and
                  personality development programmes for school and college students across the
                  Nation. It has a team of professionals involved in campus & online career
                  counselling, civil service foundation and personality development programmes.
                </p>
              </div>
            </div>
          </div>

          {/* Our Objective Content */}
          <div className="text-center max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-[#4B6BFB]">Objective</span>
            </h2>
            <p className="text-gray-600 text-justify mb-12">
              Our training programmes and psychometric assessments are designed to impart specified skill set to the candidates based on their specific
              requirements and to drive them to a solution oriented, highly motivating mission in life for achieving suitable and successful career. Our mission
              is oriented towards improving the overall performance in academics, knowledge and skill set of students and the standard of schools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Learn From Anywhere */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <img src="/blooms-academy/8771b624-ea84-43c7-b9a4-54bbe1316a6f.png" alt="Learn From Anywhere" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Learn From Anywhere</h3>
                <p className="text-gray-600 text-center">
                  The Institute primarily conducts career guidance and personality development programmes for school and college students across the Nation.
                </p>
              </div>

              {/* Expert Instructor */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <img src="/blooms-academy/8b7d9c3c-a813-4d7b-b49a-eb0767a6bbe1.png" alt="Expert Instructor" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Expert Instructor</h3>
                <p className="text-gray-600 text-center">
                  The Institute primarily conducts career guidance and personality development programmes for school and college students across the Nation.
                </p>
              </div>

              {/* Live Support */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <img src="/blooms-academy/c0a6eb07-68aa-4126-9e23-bf0340530e47.png" alt="Live Support" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Live Support</h3>
                <p className="text-gray-600 text-center">
                  The Institute primarily conducts career guidance and personality development programmes for school and college students across the Nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BloomsFooter />
    </main>
  );
};

export default AboutUs;