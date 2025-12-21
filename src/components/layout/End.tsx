import React from 'react';

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Years of Experience', value: '5+' },
  { label: 'Industry Awards Won', value: '10+' },
  { label: 'Client Satisfaction Rate', value: '100%' },
];

export default function End() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-0">
      <div className="max-w-[1160px] mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-bold leading-tight tracking-[-2%] mb-4">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-400 max-w-[800px] mx-auto">
            From strategy to execution, we deliver solutions that grow your business.
          </p>
        </div>

        {/* Stats Cards Container */}
        <div className="flex flex-wrap justify-center gap-5 w-full">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center border border-white/20 rounded-full w-[275px] h-[275px] p-4 text-center"
            >
              <span className="text-[48px] font-bold text-[#FF5722]">
                {stat.value}
              </span>
              <span className="text-base font-medium text-gray-300 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}