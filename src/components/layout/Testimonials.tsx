import React, { useState } from 'react';
import Ellipse1 from "../../assets/Ellipse1.svg"; // John Lee
import Ellipse2 from "../../assets/Ellipse2.svg"; // Sarah Tan
import Ellipse3 from "../../assets/Ellipse3.svg"; // Emily Chen
import Quote from "../../assets/Quote.svg";
import Rating from "../../assets/Rating.svg"; // Pastikan file ini adalah gambar 5 bintang penuh

const testimonials = [
  {
    name: "John Lee",
    role: "Creative Director at Innovate Corp",
    content: "Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.",
    avatar: Ellipse1
  },
  {
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    content: "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    avatar: Ellipse2
  },
  {
    name: "Emily Chen",
    role: "Marketing Head at Tech Solutions",
    content: "The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.",
    avatar: Ellipse3
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    /* Perbaikan: Menggunakan w-screen dan bg-black untuk tampilan full screen */
    <section className="bg-black text-white py-[80px] flex flex-col items-center gap-[80px] w-screen min-h-fit overflow-x-hidden">
      
      {/* Header Section */}
      <div className="text-center flex flex-col gap-4 px-4 max-w-[1440px]">
        <h2 className="text-[56px] font-bold leading-tight tracking-[-2%]">
          What Partners Say About Working With Us
        </h2>
        <p className="text-[32px] font-medium text-gray-400">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* Cards Container - Slider logic */}
      <div className="flex flex-row justify-center items-end gap-10 w-full px-10 transition-all duration-700 ease-in-out">
        {testimonials.map((item, index) => {
          const isActive = index === activeIndex;
          
          return (
            <div 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex flex-col items-center p-12 rounded-[24px] bg-[#0B0F14] border border-gray-800 w-[546px] cursor-pointer transition-all duration-500
                ${isActive ? 'scale-100 opacity-100 z-10 border-[#FF623E]' : 'scale-90 opacity-30 grayscale blur-[1px]'}`}
            >
              {/* Quote Icon */}
              <img 
                src={Quote} 
                alt="Quote" 
                className={`absolute -top-10 left-12 w-20 h-20 transition-all ${isActive ? 'opacity-100' : 'opacity-0'}`} 
              />
              
              {/* RATING: Menggunakan file Rating internal (Bintang 5) */}
              <div className="mb-8">
                <img 
                  src={Rating} 
                  alt="Rating Stars" 
                  className="w-[140px] h-auto object-contain" 
                />
              </div>

              {/* Testimonial Content */}
              <p className="text-[20px] font-semibold text-center leading-relaxed mb-10 h-[120px] flex items-center px-4">
                "{item.content}"
              </p>

              {/* Author Info */}
              <div className="text-center mb-12">
                <h4 className="text-[20px] font-bold mb-1">{item.name}</h4>
                <p className="text-[18px] font-semibold text-[#FF623E]">{item.role}</p>
              </div>

              {/* Profile Image (Avatar) */}
              <div className="absolute -bottom-10">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className={`w-24 h-24 rounded-full border-[4px] border-black object-cover transition-all ${isActive ? 'scale-110 border-[#FF623E]' : 'scale-100'}`} 
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-4 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-500 rounded-full h-3 ${
              index === activeIndex ? 'bg-[#FF623E] w-12' : 'bg-gray-700 w-3'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;