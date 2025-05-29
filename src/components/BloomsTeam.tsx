
export default function BloomsTeam() {
  const team = [
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Dr. Rajesh Kumar",
      role: "Founder & Physics Mentor"
    },
    {
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Ms. Priya Sharma",
      role: "Academic Counselor"
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Mr. Aman Singh",
      role: "Mathematics Mentor"
    },
  ];

  return (
    <section className="py-12 bg-light-purple/10 px-2">
      <div className="container mx-auto">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center">Meet Our Team & Faculty</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {team.map((member, i) => (
            <div key={i} className="flex-1 bg-white rounded-xl shadow-card p-6 flex flex-col items-center text-center max-w-xs mx-auto">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover border-4 border-soft-purple mb-4" />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <div className="text-neutral-gray">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
