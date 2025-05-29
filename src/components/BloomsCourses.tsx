
export default function BloomsCourses() {
  const courses = [
    {
      title: "JEE Coaching",
      desc: "Comprehensive coaching for IIT-JEE aspirants with experienced faculty and latest curriculum.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=400&q=80",
      cta: "Explore JEE",
    },
    {
      title: "NEET Preparation",
      desc: "Dedicated NEET batch with focused learning, practice tests, and doubt clearing sessions.",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&q=80",
      cta: "Explore NEET",
    },
    {
      title: "Foundation Builder",
      desc: "9th/10th & Olympiad program for strong basics and competitive edge.",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=facearea&w=400&q=80",
      cta: "View Foundation",
    },
  ];

  return (
    <section id="courses" className="py-12 bg-white px-2">
      <div className="container mx-auto">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center">
          Courses We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <div key={i} className="bg-light-purple rounded-xl shadow-card p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <img src={c.img} alt={c.title} className="w-32 h-32 object-cover rounded-xl mb-5 border-4 border-soft-purple" />
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-neutral-gray text-base mb-4">{c.desc}</p>
              <a href="#apply" className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-secondary transition">{c.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
