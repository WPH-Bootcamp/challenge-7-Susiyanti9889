import React, { useState } from 'react';

// 1. Import asset gambar tunggal
import IndustryImg from "../../assets/Industry.svg";

const industriesData = [
  {
    id: 'fintech',
    name: 'Fintech',
    description: 'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description: 'Empowering online retail with high-performance platforms, seamless payment integrations, and optimized user experiences.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Digitalizing health services with secure patient data management, telemedicine solutions, and intuitive medical interfaces.',
  }
];

const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState('fintech');

  // Mencari data teks berdasarkan tab yang aktif
  const activeData = industriesData.find((i) => i.id === activeTab);

  return (
    <section className="bg-black text-white py-[80px] px-[20px] md:px-[140px] flex flex-col items-center min-h-screen">
      
      {/* Header Container */}
      <div className="w-full max-w-[1160px] mb-[64px] flex flex-col gap-[11px]">
        <h2 className="text-[40px] md:text-[56px] font-bold tracking-[-2%] leading-tight">
          Built for Your <span className="text-[#A5B4FC]">Industry</span>
        </h2>
        <p className="text-[#9CA3AF] text-[16px] md:text-[18px] font-medium leading-normal max-w-[600px]">
          We've helped companies across industries launch smarter, faster, and more securely.
        </p>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1160px] flex flex-col md:flex-row gap-[64px] items-start">
        
        {/* Sidebar / Industry List */}
        <div className="w-full md:w-[256px] flex flex-row md:flex-col gap-[12px] md:gap-[24px] overflow-x-auto md:overflow-visible no-scrollbar">
          {industriesData.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`text-left text-[18px] md:text-[20px] font-bold py-1 border-l-2 pl-4 whitespace-nowrap transition-all duration-300 ${
                activeTab === industry.id 
                ? "border-[#F97316] text-white" 
                : "border-transparent text-[#4B5563] hover:text-gray-300"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        {activeData && (
          <div className="flex-1 w-full max-w-[840px] flex flex-col gap-[20px]">
            {/* Deskripsi yang berubah sesuai tab */}
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-[#D1D5DB] min-h-[80px]">
              {activeData.description}
            </p>
            
            {/* Image Container menggunakan satu gambar yang sama */}
            <div className="w-full aspect-video md:h-[351px] rounded-[24px] overflow-hidden bg-[#111827] border border-white/5">
              <img 
                src={IndustryImg} 
                alt="Industry Illustration"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default IndustrySection;