
import { User } from "lucide-react";

const stats = [
  { label: "Students", value: "26K+" },
  { label: "Courses", value: "1300+" },
  { label: "Mentors", value: "30+" },
];

export default function BloomsHero() {
  return (
    <section className="relative bg-gradient-to-tr from-[#f4f7ff] to-[#f8f3fb] pt-8 pb-16 md:py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 min-h-[480px]">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] mb-4 leading-tight">
            Good <span className="text-[#3d64e6]">Coaching</span> is <br />
            Good Teaching &amp; <br /> Nothing Else.
          </h1>
          <p className="text-neutral-gray text-base md:text-lg mb-7 max-w-[480px] md:max-w-none md:ml-0 mx-auto">
            Our mission is oriented towards improving the overall performance in academics, knowledge and skill set of students and the standard of schools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#courses" className="bg-[#4e3aea] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#7157d5] transition w-full sm:w-auto flex items-center gap-2">
              View Courses <svg className="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 16 16"><path d="M4 8h8M11 5l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#video" className="flex items-center gap-2 font-semibold text-[#4e3aea] px-6 py-3 rounded-xl bg-white shadow-md border transition w-full sm:w-auto hover:bg-[#f4f7ff]">
              <span className="inline-block bg-[#efedfa] p-2 rounded-full"><svg fill="#4e3aea" viewBox="0 0 16 16" width="18" height="18"><circle cx="8" cy="8" r="8" fill="#efedfa"/><polygon fill="#4e3aea" points="6.5,5.5 11,8 6.5,10.5"/></svg></span>
              Watch Video
            </a>
          </div>
          {/* Stats Bubbles */}
          <div className="flex gap-4 md:gap-6 mt-8 md:mt-12 justify-center md:justify-start">
            {/* 80+ Courses */}
            <div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-lg border border-[#eaeaea]">
              <span className="font-semibold text-lg text-[#3d64e6]">80+</span>
              <span className="text-sm text-[#444]">Courses Available</span>
            </div>
            {/* 10k+ Students */}
            <div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-lg border border-[#eaeaea]">
              <span className="font-semibold text-lg text-[#3d64e6]">10k+</span>
              <span className="text-sm text-[#444]">Online Students</span>
              {/* students avatars mock */}
              <div className="flex -space-x-2 items-center ml-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="student1" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="student2" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="student3" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/56.jpg" alt="student4" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Right: Hero Image with floating badges */}
        <div className="relative flex-1 flex items-center justify-center w-full">
          {/* Hero Image */}
          <img
            src="/blooms-academy/8b7d9c3c-a813-4d7b-b49a-eb0767a6bbe1.png"
            alt="Student celebrating"
            className="rounded-2xl w-[310px] md:w-[410px] shadow-lg border-4 border-white object-cover object-center"
            style={{maxHeight: 420}}
          />
          {/* Floating Cap Icon */}
          <span className="absolute bottom-8 right-4 bg-[#f9ec6f] p-2 rounded-full shadow-lg">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#fde047" d="M16 6l14 6.44-14 6.56-14-6.56z"/><path fill="#fcc419" d="M16 25.5V12.5"/><ellipse cx="16" cy="26.5" rx="5" ry="2.5" fill="#fde047"/></svg>
          </span>
        </div>
      </div>
      {/* Floating Card */}
      <div className="absolute top-8 right-8 hidden lg:block animate-fade-in">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-card flex items-center gap-3">
          <User className="text-primary" />
          <span className="font-semibold text-primary leading-tight">Join 26K+ achievers!</span>
        </div>
      </div>
    </section>
  );
}
