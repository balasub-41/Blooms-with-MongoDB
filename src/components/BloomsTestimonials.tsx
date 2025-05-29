
import { useState } from 'react';

export default function BloomsTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "There's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
      name: "Sapphire Daniel",
      role: "Correspondent",
      img: "/blooms-academy/8771b624-ea84-43c7-b9a4-54bbe1316a6f.png"
    },
    {
      quote: "The Questionnaires helped our students to assess their future Career Choice and identify their personality traits. Positive feedback from our Teachers and students.",
      name: "Sethuraman M",
      role: "Principal",
      img: "/blooms-academy/1e8fcd7e-546e-4ae6-9926-c9a91f1bedd2.png"
    },
    {
      quote: "We are grateful to state that 43 students of our school attempted the Career and Personality Assessment Questionnaire of Blooms Academy and found their right career.",
      name: "Mr. Ramachandran I.A.S",
      role: "Director",
      img: "/blooms-academy/8b7d9c3c-a813-4d7b-b49a-eb0767a6bbe1.png"
    },
    {
      quote: "CPA Test is a great find right career on Blooms Academy. A consistent performer on Career.",
      name: "Jane Doe",
      role: "Designer",
      img: "/blooms-academy/f678579f-9237-4a97-a312-76e6034a4b2b.png"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Calculate visible testimonials based on current index
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
    testimonials[(currentIndex + 3) % testimonials.length]
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Experts Say<br />
            About Blooms Academy
          </h2>
          <div className="flex gap-3">
            <button 
              onClick={handlePrevious}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={`${currentIndex}-${index}`}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <svg className="text-blue-600 w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.img} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}