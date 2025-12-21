import React from 'react';
import Icon1 from "../../assets/Icon1.svg";
import Icon2 from "../../assets/Icon2.svg";
import Icon3 from "../../assets/Icon3.svg";
import Icon4 from "../../assets/Icon4.svg";
import Icon5 from "../../assets/Icon5.svg";
import Icon6 from "../../assets/Icon6.svg";
import Icon7 from "../../assets/Icon7.svg";
import Icon8 from "../../assets/Icon8.svg";
import Icon9 from "../../assets/Icon9.svg";

const services = [
  { title: 'Web Development', description: 'Build fast, scalable, and SEO-friendly websites.', icon: Icon1 },
  { title: 'Mobile App Development', description: 'Native & cross-platform apps tailored to user needs.', icon: Icon2 },
  { title: 'UI/UX Design', description: 'Delight users with intuitive and beautiful interfaces.', icon: Icon3 },
  { title: 'Cloud Solutions', description: 'Secure and flexible cloud infrastructure for your growth.', icon: Icon4 },
  { title: 'Software Development', description: 'Custom solutions built around your business logic.', icon: Icon5 },
  { title: 'IT Infrastructure', description: 'Scale your backend with reliable tech foundations.', icon: Icon6 },
  { title: 'Cybersecurity Services', description: 'Stay protected with enterprise-grade security.', icon: Icon7 },
  { title: 'QA Solutions', description: 'Ensure performance with rigorous testing frameworks.', icon: Icon8 },
  { title: 'IT Consulting & Support', description: 'Make smarter tech decisions with expert guidance.', icon: Icon9 },
];

export default function Smart() {
  return (
    <section className="bg-black text-white py-[80px] px-6 md:px-[140px]">
      <div className="max-w-[1160px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-[64px] flex flex-col gap-4">
          <h2 className="text-[32px] md:text-[56px] font-bold leading-[1.1] tracking-[-2%]">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-400 font-medium">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* Services Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#0A0D12] border border-[#181D27] rounded-[16px] p-[32px] min-h-[280px] flex flex-col justify-start hover:border-[#FF5722] transition-all cursor-pointer group"
            >
              <div className="flex flex-col gap-6">
                {/* Icon Container - Diatur ke 80px x 80px */}
                <div className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-full h-full object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-[22px] font-bold text-[#FDFDFD]">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}