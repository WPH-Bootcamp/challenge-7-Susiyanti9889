import React from "react";
import logo from "../../assets/logo.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Tiktok from "../../assets/Tiktok.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0B0B0F] flex flex-col items-center">
      {/* Main Container: Fixed 1440px with 140px side padding */}
      <div className="w-full max-w-[1440px] px-[140px] py-[40px] flex flex-col gap-2 border-t border-white/10">
        
        {/* Top Section: Heading and Logo */}
        <div className="flex justify-between items-center w-full py-[24px]">
          <h2 className="text-[#FDFDFD] text-[32px] font-bold leading-[44px] tracking-[-2%] uppercase max-w-[281px]">
            Let’s Discuss Your Ideas
          </h2>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-[36px] w-auto" />
            <span className="text-white text-[24px] font-semibold">Your Logo</span>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/10 my-4" />

        {/* Bottom Section: Links and Socials */}
        <div className="flex justify-between items-center w-full h-[40px]">
          {/* Navigation Links */}
          <nav className="flex gap-[24px]">
            {["About", "Service", "Projects", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#98A2B3] text-[16px] font-medium hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-[16px] items-center">
            <a href="#" className="hover:opacity-80"><img src={Facebook} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-80"><img src={Instagram} alt="Instagram" className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-80"><img src={Linkedin} alt="Linkedin" className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-80"><img src={Tiktok} alt="Tiktok" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;