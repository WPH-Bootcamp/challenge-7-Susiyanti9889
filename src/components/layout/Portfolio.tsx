import React from 'react';
import Frame1 from "../../assets/Frame1.svg";
import Frame2 from "../../assets/Frame2.svg";
import Frame3 from "../../assets/Frame3.svg";

const Portfolio = () => {
  const projects = [
    { id: 1, image: Frame1, category: "Landing Page", title: "Portofolio 1" },
    { id: 2, image: Frame2, category: "Landing Page", title: "Portofolio 2" },
    { id: 3, image: Frame3, category: "Landing Page", title: "Portofolio 3" },
  ];

  return (
    // Container utama dengan background hitam pekat dan padding yang presisi
    <section className="bg-[#000000] text-white py-20 px-4 md:px-[140px] flex justify-center w-full">
      <div className="w-full max-w-[1160px] flex flex-col items-center">
        
        {/* Header Section: Jarak antar teks disesuaikan */}
        <div className="flex flex-col items-center text-center mb-16 gap-[11px] w-full max-w-[1160px]">
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.2]">
            From Vision to Launch! Projects We’re Proud Of
          </h2>
          <p className="text-[#A4A7AE] text-lg leading-[1.6] max-w-[700px]">
            Take a closer look at our recent work powering startups, enterprises, and everything in between.
          </p>
        </div>

        {/* Portfolio Grid: Menggunakan flexbox agar alignment-nya rata tengah */}
        <div className="flex flex-wrap justify-center gap-5 w-full">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-4 w-full md:w-[373px] text-left">
              
              {/* Image Frame: Fixed size 373x373 dengan Radius 16px */}
              <div className="w-full h-[373px] rounded-2xl overflow-hidden bg-[#1A1A1A]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Text Content: Penyesuaian font-size dan warna */}
              <div className="flex flex-col gap-1 px-1">
                <span className="text-[#FF623E] text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-[20px] md:text-[24px] font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;