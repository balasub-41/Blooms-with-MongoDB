
import { CheckCircle, BookOpen, User, Calendar, MapPin } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-7 h-7 text-primary" />,
    title: "Expert Mentorship",
    desc: "Individual attention from certified subject experts.",
  },
  {
    icon: <User className="w-7 h-7 text-secondary" />,
    title: "Personalized Counseling",
    desc: "Progress tracking & individual counseling included.",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-sky-blue" />,
    title: "Course Variety",
    desc: "Wide selection of courses for all levels and interests.",
  },
  {
    icon: <MapPin className="w-7 h-7 text-primary" />,
    title: "Multiple Centers",
    desc: "Access learning at locations near you or online.",
  },
];

export default function BloomsFeatures() {
  return (
    <section className="bg-light-purple/30 py-12 px-2">
      <div className="container mx-auto">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-dark-purple mb-8 text-center">
          Why Choose Blooms Academy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-card text-center h-full hover:shadow-xl transition">
              <div className="mb-2">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-neutral-gray text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
