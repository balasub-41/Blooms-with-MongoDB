import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
// Remove this import line
// import BloomsExtraShowcaseSection from "./BloomsExtraShowcaseSection";

// Programme card data
const programmes = [
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80", // car
    title: "Photoshop and corelDRAW Training",
    sessionInfo: "(1 Days - 4 Hours Session)",
    sessionInfoColor: "#FF5A5A",
    description: "Embroidery and Aari Work is an Embroidery design work in which beads, threads and metals stitched through a sharp edged needle put in selected garments like blouse and sarees creatively to give finest designs and imprints.",
  },
  {
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80", // embroidery
    title: "Embroidery and Aari Work",
    sessionInfo: "(20 Days or 50 Hours)",
    sessionInfoColor: "#ff8d2c",
    description: "Embroidery and Aari Work is an Embroidery design work in which beads, threads and metals stitched through a sharp edged needle put in selected garments like blouse and sarees creatively to give finest designs and imprints.",
  },
  {
    img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400&q=80", // hairdressing
    title: "Hair Dressing and Beautician",
    sessionInfo: "(1 Days - 4 Hours Session)",
    sessionInfoColor: "#FF5A5A",
    description: "Embroidery and Aari Work is an Embroidery design work in which beads, threads and metals stitched through a sharp edged needle put in selected garments like blouse and sarees creatively to give finest designs and imprints.",
  }
];

// Mentors data
const mentors = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "R.L Arun Prasad IRS",
    color: "bg-[#c7d0f8]",
  },
  {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "",
    color: "bg-[#fae3f4]",
  },
  {
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "",
    color: "bg-[#dee9ee]",
  }
];

export default function BloomsProgrammesMentorsSection() {
  return (
    <section className="w-full bg-[#f5f7fb] py-12 px-2">
      {/* Programmes Section with Carousel */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-xl font-semibold text-[#232138] mb-1">Our Programmes</h3>
        <h4 className="text-2xl md:text-3xl font-bold text-[#222046] mb-7">
          Choose the best which suits you?
        </h4>
        <div className="relative">
          <Carousel opts={{align: "center", loop: true}}>
            <CarouselContent>
              {programmes.map((prog, i) => (
                <CarouselItem 
                  key={i} 
                  className="lg:basis-1/3 md:basis-1/2 basis-full pb-6"
                >
                  <Card className="h-full rounded-2xl border border-[#edf0fc] shadow-none bg-white p-0 flex flex-col min-h-[430px]">
                    <img src={prog.img} alt={prog.title} className="w-full h-[180px] object-cover rounded-t-2xl"/>
                    <CardContent className="flex-1 flex flex-col p-6 gap-2">
                      <CardTitle className="text-lg font-bold text-[#282145] mb-0">{prog.title}</CardTitle>
                      <span 
                        className="block font-semibold text-xs mt-1 mb-2" 
                        style={{color: prog.sessionInfoColor}}
                      >
                        {prog.sessionInfo}
                      </span>
                      <CardDescription className="text-[#656565] text-base mb-4 flex-1">
                        {prog.description}
                      </CardDescription>
                      <a href="#" className="w-fit mt-auto bg-[#f5f4ff] text-[#865df4] font-semibold px-5 py-2.5 rounded-full flex items-center gap-1 text-sm hover:bg-[#ece7fe] transition shadow-sm">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Mentors & Counsellors Section */}
      <section className="max-w-6xl mx-auto bg-white rounded-2xl px-2 md:px-10 py-12 shadow-card">
        <span className="inline-block bg-[#fae7f6] text-[#b885bb] font-semibold text-xs px-4 py-2 rounded-full w-fit mb-2 tracking-wide">
          OUR INSTRUCTOR
        </span>
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
          <div className="flex-1">
            <h4 className="text-2xl md:text-3xl font-bold text-[#222046]">
              Mentors and Councellors
            </h4>
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-6 justify-end">
            {mentors.map((mentor,i) => (
              <div
                className={`rounded-2xl flex flex-col items-center justify-end 
                  pt-3 pb-2 px-4 relative shadow-md`} 
                style={{ backgroundColor: "#f8f9fe", minWidth: 160, minHeight: 240 }}
                key={i}
              >
                <img
                  src={mentor.img}
                  alt={mentor.name || "Mentor"}
                  className="w-36 h-48 rounded-xl object-cover border-4 border-white mb-2"
                  style={{background: "#eae8fb"}}
                />
                {mentor.name && (
                  <span className="absolute bottom-3 left-3 right-3 bg-[#6f56e7] text-white text-sm font-semibold rounded-lg px-2 py-1 text-center shadow">
                    {mentor.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSERT NEW EXTRA SHOWCASE SECTION HERE */}
      {/* Remove this line */}
      {/* <BloomsExtraShowcaseSection /> */}
    </section>
  );
}
