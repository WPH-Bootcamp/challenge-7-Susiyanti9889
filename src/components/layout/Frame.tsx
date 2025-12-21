import Imagehero from "../../assets/Imagehero.svg";

export default function Frame() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Your Tech Partner for{" "}
            <span className="text-orange-500">Smarter Growth</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <button className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition">
            Let’s Talk
          </button>

          <p className="pt-10 text-sm text-gray-400">
            Trusted by Global Innovators & Leading Brands
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={Imagehero}
            alt="Hero Illustration"
            className="w-[520px] max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
