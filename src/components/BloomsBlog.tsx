
export default function BloomsBlog() {
  const blogs = [
    {
      title: "5 Tips for Successful JEE Preparation",
      desc: "How to plan, prepare, and ace your engineering entrance exams with confidence.",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&q=80",
      link: "#",
    },
    {
      title: "Choosing the Right Medical Track",
      desc: "Sessions and experiences from our NEET toppers and their journey.",
      img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=facearea&w=400&q=80",
      link: "#",
    },
    {
      title: "Why Great Mentors Matter",
      desc: "How finding the right guidance makes all the difference in your career.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=400&q=80",
      link: "#",
    },
  ];

  return (
    <section className="py-12 bg-light-purple/20 px-2">
      <div className="container mx-auto">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center">Latest From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <div key={i} className="bg-white rounded-xl shadow-card p-5 flex flex-col hover:shadow-lg transition">
              <img src={b.img} alt={b.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-neutral-gray text-base mb-3">{b.desc}</p>
              <a href={b.link} className="mt-auto text-primary font-semibold underline hover:text-secondary transition">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
