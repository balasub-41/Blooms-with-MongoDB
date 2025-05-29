
export default function BloomsShortAbout() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&q=80",
      heading: "Transform Your Future Career",
      desc: "Success is a journey. Blooms Academy supports your professional ambitions with dedicated career training and tailored resources.",
    },
    {
      img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=320&q=80",
      heading: "India's Leading Coaching Institute",
      desc: "With multiple centers and a world-class faculty, receive modern and holistic education from leaders in the field.",
    },
    {
      img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=facearea&w=320&q=80",
      heading: "Mentorship & Guidance",
      desc: "Be mentored by top subject experts, get individual counseling, and grow your career with confidence.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-light-purple/10 to-white">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row gap-8">
          {cards.map((item, idx) => (
            <div key={idx} className="flex-1 bg-white rounded-xl shadow-card p-6 flex flex-col items-center text-center">
              <img src={item.img} alt={item.heading} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-soft-purple" />
              <h3 className="text-lg font-semibold mb-2">{item.heading}</h3>
              <p className="text-neutral-gray text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
