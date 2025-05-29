
import { BookOpen, User, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: <User className="text-sky-blue w-7 h-7" />,
    value: "26K+",
    label: "Students Enrolled",
  },
  {
    icon: <BookOpen className="text-secondary w-7 h-7" />,
    value: "1300+",
    label: "Courses Offered",
  },
  {
    icon: <CheckCircle className="text-primary w-7 h-7" />,
    value: "30+",
    label: "Expert Mentors",
  },
];

export default function BloomsStatsCards() {
  return (
    <section className="bg-white py-12 px-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center gap-8">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center p-6 bg-light-purple rounded-xl shadow-card min-w-[160px]">
            <div>{item.icon}</div>
            <div className="text-3xl font-bold mt-2 text-primary">{item.value}</div>
            <div className="mt-1 text-neutral-gray text-base">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
