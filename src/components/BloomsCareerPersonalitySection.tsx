import React from 'react';
import BloomsProgrammesMentorsSection from './BloomsProgrammesMentorsSection';
import { Link } from 'react-router-dom'; // Import Link

export default function BloomsCareerPersonalitySection() {
  return (
    <section className="w-full bg-[#faf7ff] py-12 px-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          <span className="inline-block bg-[#ebe8fa] text-[#5042c6] font-semibold text-xs px-4 py-2 rounded-full w-fit mb-2 tracking-wide">
            CAQ & PAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c2449] mb-2 leading-snug">
            To identify your Future Career<br />and Personality.
          </h2>
          <p className="text-[#555] text-base max-w-[480px]">
            The Institute primarily conducts career guidance and personality development programmes for school and college students across the Nation. It has a team of professionals involved in campus &amp; online career counselling, civil service foundation and personality development programmes.
          </p>
          <a
            href="#take-test"
            className="group inline-flex items-center px-5 py-3 bg-[#8453f5] text-white rounded-lg font-semibold shadow hover:bg-[#6e37e6] transition w-fit mt-2 gap-2"
          >
            Take Test
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 16 16"><path d="M4 8h8M11 5l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>

          </a>
        </div>
        {/* Right Section Images */}
        <div className="flex-1 flex md:justify-end">
          <div className="relative flex h-[270px] w-[370px]">
            {/* Replace entire image stack with single uploaded image */}
            <img
              src="/blooms-academy/f678579f-9237-4a97-a312-76e6034a4b2b.png"
              alt="Career and Personality Design"
              className="rounded-full object-cover object-center shadow-lg border-4 border-white w-full h-full"
              style={{ background: "linear-gradient(135deg,#f5e5ff 40%,#e589f3 100%)" }}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-8" />

      {/* Lower "About us/unit" section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-card px-4 sm:px-10 py-10 flex flex-col md:flex-row gap-10 md:gap-12">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-4">
          <span className="inline-block bg-[#eafff2] text-sky-700 font-semibold text-xs px-4 py-1.5 rounded-full w-fit mb-2 tracking-wide">
            ABOUT US
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#18152e] leading-tight">
            Blooms Academy is a<br />
            unit of <span className="text-[#4093e9] font-bold">Tuluk Career<br className="hidden md:block" /> Consultancy <span className="text-[#a484e6] font-bold">Private Limited</span>.</span>
          </h3>
        </div>

        {/* Middle Description */}
        <div className="flex-1 text-[#3b3b44] text-base font-normal flex flex-col gap-4">
          <p>
            Blooms Academy of Skill Improvement and Career Consultancy is an EduTech company was established in the year 2016 in Chennai. The Institute primarily conducts career guidance and personality development programmes for school and college students across the Nation. It has a team of professionals involved in campus &amp; online career counselling, civil service foundation and personality development programmes.
          </p>
          <p>
            The institution has so far conducted career guidance to 26000 students in the grade of 10th, 11th &amp; 12th across Tamil Nadu and Karnataka. The institution is also specialized in conducting employment oriented skill development programmes and so far trained around 1300 candidates in various skill sets.
          </p>
        </div>
        {/* Right: Two CTA cards */}
        <div className="flex flex-col gap-4 justify-center">
          <div className="border-2 border-[#a484e6] rounded-xl bg-white py-6 px-5 w-[280px] flex flex-col items-start gap-3">
            <span className="inline-block bg-[#f7f3ff] p-2 rounded-full mb-1">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#ebe8fa"/><path d="M12 22v-7h8v7M14 13a2 2 0 1 1 4 0" stroke="#8453f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>

            </span>
            <div className="font-bold text-lg text-[#333]">Login for our CPAQ Test</div>
            <div className="text-sm text-slate-600 mb-3">Select a suitable answer statements in 45 minutes.</div>
            <Link // Changed from <a> to Link
              to="/login" // Changed from href="#login" to to="/login"
              className="flex items-center gap-2 text-white bg-[#a484e6] hover:bg-[#885ad5] transition px-4 py-2 rounded-lg font-semibold text-sm mt-2"
            >
              Login
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 16 16"><path d="M4 8h8M11 5l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link> {/* Changed from </a> to </Link> */}
          </div>
          <div className="rounded-xl bg-gradient-to-tr from-[#87a4fa] via-[#7a6ae6] to-[#c1a2ec] py-6 px-5 w-[280px] flex flex-col items-start gap-3 shadow-card">
            <span className="inline-block bg-white/70 p-2 rounded-full mb-1">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#eceeff"/><path d="M19.4 14.8l-4-4-4 4M25 26V9A1 1 0 0 0 24 8h-8a1 1 0 0 0-1 1v17" stroke="#7157d5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div className="font-bold text-lg text-white">Register Online</div>
            <div className="text-sm text-white mb-3 opacity-90">Register with basic details and write online CPAQ test with minimum fee.</div>

            <Link // Changed from <a> to Link
              to="/register" // Changed from href="#register" to to="/register"
              className="flex items-center gap-2 text-[#6e37e6] bg-white hover:bg-violet-50 transition px-4 py-2 rounded-lg font-semibold text-sm mt-2"
            >
              Registration
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 16 16"><path d="M4 8h8M11 5l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link> {/* Changed from </a> to </Link> */}
          </div>
        </div>
      </div>

      {/* NEW: Programmes and Mentors section from reference design */}
      <div className="h-5" />
      {/* Insert the Programmes, Mentors & ExtraShowcase section */}
      <BloomsProgrammesMentorsSection />
    </section>
  );
}
