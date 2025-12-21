import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      {/* Form Container: 720px sesuai spesifikasi Figma */}
      <div className="w-full max-w-[720px] flex flex-col gap-12 py-20">
        
        {/* Header Section */}
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-5xl font-bold tracking-tight">
            Ready to Start? Let’s Talk.
          </h1>
          <p className="text-neutral-400 text-lg">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* Form Fields */}
        <form className="flex flex-col gap-8">
          
          {/* Input Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-neutral-200">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full bg-transparent border border-neutral-800 rounded-lg p-4 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-600"
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-neutral-200">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full bg-transparent border border-neutral-800 rounded-lg p-4 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-600"
            />
          </div>

          {/* Textarea Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-neutral-200">Message</label>
            <textarea 
              rows="4"
              placeholder="Enter your message"
              className="w-full bg-transparent border border-neutral-800 rounded-lg p-4 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-600 resize-none"
            ></textarea>
          </div>

          {/* Services Checkbox Section */}
          <div className="flex flex-col gap-4">
            <label className="text-sm font-bold text-neutral-200">Services</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Web Development", "Cloud Solutions", 
                "Mobile App Development", "Software Development", 
                "UI/UX Design", "Other"
              ].map((service) => (
                <label key={service} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer appearance-none w-5 h-5 border border-neutral-700 rounded bg-transparent checked:bg-orange-500 checked:border-orange-500 transition-all" />
                    {/* Checkmark Icon */}
                    <svg className="absolute w-3 h-3 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-300 text-sm group-hover:text-white transition-colors">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-[#FF623E] hover:bg-[#e55635] text-white font-semibold py-4 rounded-full transition-all mt-4"
          >
            Send
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;