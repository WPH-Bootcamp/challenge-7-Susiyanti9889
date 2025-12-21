import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    description: 'Understand Your Needs & Goals',
    position: 'left',
  },
  {
    id: 2,
    title: 'Planning & Strategy',
    description: 'Build a Clear, Scalable Roadmap',
    position: 'right',
  },
  {
    id: 3,
    title: 'Design & Prototyping',
    description: 'Craft UX That Converts',
    position: 'left',
  },
  {
    id: 4,
    title: 'Development & Implementation',
    description: 'Deliver With Speed & Precision',
    position: 'right',
  },
  {
    id: 5,
    title: 'Testing & Optimization',
    description: 'Ensure Quality at Every Step',
    position: 'left',
  },
  {
    id: 6,
    title: 'Launch & Growth',
    description: 'Scale, Measure & Improve Continuously',
    position: 'right',
  },
];

export default function OurProcess() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-[1160px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400">Clear steps. Smart execution. Results you can count on.</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-800"></div>

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.id} className="relative flex items-center justify-between w-full min-h-[116px]">
                
                {/* Left Side Content */}
                <div className="w-[45%]">
                  {step.position === 'left' && (
                    <div className="bg-[#0A0C10] border border-gray-800 p-6 rounded-xl flex justify-between items-start group hover:border-gray-600 transition-all">
                      <div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{step.description}</p>
                      </div>
                      <span className="text-gray-400">▲</span>
                    </div>
                  )}
                </div>

                {/* Number Circle (Center) */}
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5722] text-white font-bold text-sm border-4 border-black">
                  {step.id}
                </div>

                {/* Right Side Content */}
                <div className="w-[45%]">
                  {step.position === 'right' && (
                    <div className="bg-[#0A0C10] border border-gray-800 p-6 rounded-xl flex justify-between items-start group hover:border-gray-600 transition-all">
                      <div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{step.description}</p>
                      </div>
                      <span className="text-gray-400">▲</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}