
export default function BloomsAboutUSP() {
  return (
    <section className="py-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-2">
        {/* Left */}
        <div className="flex-1">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-dark-purple">
            Blooms Academy is a unit of Tulsk Career Consultancy Private Limited.
          </h2>
          <p className="text-neutral-gray mb-5">
            We guide students to reach their academic and career goals with the right mix of mentorship, learning, and networking.  
            Our future-ready programs are designed for real-world success in academics and beyond.
          </p>
          <a href="#apply" className="inline-block mt-2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition font-semibold">Start Your Journey</a>
        </div>
        {/* Right: USP Card */}
        <div className="flex-1">
          <div className="bg-gradient-to-br from-soft-purple via-primary/70 to-primary/90 rounded-2xl p-8 shadow-card text-white flex flex-col h-full justify-center items-center">
            <span className="font-bold text-lg mb-2">Get Your Free Counseling</span>
            <p className="mb-6 text-white/95 text-center">
              Book a 1:1 session with our experienced counselors and take your first step towards success!
            </p>
            <a href="#counseling" className="bg-white text-primary px-6 py-2 rounded-lg font-semibold shadow hover:bg-secondary hover:text-white transition">Book Session</a>
          </div>
        </div>
      </div>
    </section>
  );
}
