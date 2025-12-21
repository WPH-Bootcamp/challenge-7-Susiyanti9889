import Companylogo1 from "../../assets/Companylogo1.svg";
import Companylogo2 from "../../assets/Companylogo2.svg";
import Companylogo3 from "../../assets/Companylogo3.svg";
import Companylogo4 from "../../assets/Companylogo4.svg";
import Companylogo5 from "../../assets/Companylogo5.svg";
import Companylogo6 from "../../assets/Companylogo6.svg";
import Companylogo7 from "../../assets/Companylogo7.svg";
import Companylogo8 from "../../assets/Companylogo8.svg";
import Companylogo9 from "../../assets/Companylogo9.svg";

export default function Companylogo() {
  const logos = [
    Companylogo1,
    Companylogo2,
    Companylogo3,
    Companylogo4,
    Companylogo5,
    Companylogo6,
    Companylogo7,
    Companylogo8,
    Companylogo9,
  ];

  return (
    <section className="bg-black">
      <div className="max-w-[1440px] mx-auto h-[236px] flex flex-col justify-center items-center gap-10">
        
        {/* Title */}
        <p className="text-sm font-semibold tracking-wide text-gray-400 text-center">
          Trusted by Global Innovators & Leading Brands
        </p>

        {/* Logos */}
        <div className="flex items-center justify-center gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="h-8 opacity-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
