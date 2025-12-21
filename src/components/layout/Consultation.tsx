import React from "react";
// Import image sesuai permintaan
import ConsultationIcon from "../../assets/Consultation.svg";

const Consultation = () => {
  const faqData = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
      isOpen: true,
    },
    { id: 2, question: "How do I know if this is right for my business?", isOpen: false },
    { id: 3, question: "How much does a project cost?", isOpen: false },
    { id: 4, question: "How long does it take?", isOpen: false },
    { id: 5, question: "Can I start with a small project first?", isOpen: false },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Main Container: Max-width 1440px dengan padding samping 120px */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-[80px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12 mb-12">
          <h1 className="text-[56px] font-bold leading-[1.1] tracking-[-2%] max-w-[331px]">
            Need Help? Start Here.
          </h1>
          <p className="text-[#FDFDFD]/60 text-lg text-right max-w-[245px] mb-2">
            Everything you need to know — all in one place.
          </p>
        </div>

        {/* Content Section: Gap 48px */}
        <div className="flex flex-col lg:flex-row gap-[48px] items-start">
          
          {/* FAQ Column: Lebar Fixed 798px */}
          <div className="w-full lg:w-[798px] flex-shrink-0">
            {faqData.map((item) => (
              <div key={item.id} className="border-b border-white/20 last:border-0">
                <button className="w-full py-6 flex justify-between items-center text-left hover:text-orange-500 transition-colors">
                  <span className="text-[24px] font-bold tracking-tight">
                    {item.question}
                  </span>
                  <span className="text-3xl font-light">
                    {item.isOpen ? "−" : "+"}
                  </span>
                </button>
                
                {item.isOpen && (
                  <div className="pb-8 animate-fadeIn">
                    <p className="text-[18px] leading-relaxed text-white/60 max-w-[600px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Card Column: Lebar 329px */}
          <div className="w-full lg:w-[329px] bg-[#CC4F2E] rounded-[24px] p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-[32px] font-bold leading-tight mb-2">
                Let’s talk it through
              </h2>
              <p className="text-white/80 text-[16px] leading-snug">
                book a free consultation with our team.
              </p>
            </div>

            {/* Illustration */}
            <div className="w-full h-auto rounded-2xl overflow-hidden mb-8">
              <img 
                src={ConsultationIcon} 
                alt="Consultation Team" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA Button */}
            <button className="bg-white text-black font-bold py-4 px-6 rounded-full transition-transform active:scale-95 hover:bg-gray-100 shadow-lg text-[16px]">
              Free Consultation
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Consultation;