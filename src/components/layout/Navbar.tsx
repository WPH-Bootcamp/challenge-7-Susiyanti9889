import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      {/* Container utama: mx-auto berfungsi untuk mengetengahkan konten saat layar lebar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <div className="text-lg font-bold font-quicksand tracking-tight">Your Logo</div>
        </div>

        {/* Navigation - Desktop (Tengah) */}
        {/* Menggunakan gap yang responsif: gap-4 di tablet, gap-8 di layar besar */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm font-medium">
          <button className="hover:text-orange-500 transition-colors">About</button>
          <button className="hover:text-orange-500 transition-colors">Service</button>
          <button className="hover:text-orange-500 transition-colors">Projects</button>
          <button className="hover:text-orange-500 transition-colors">Testimonials</button>
          <button className="hover:text-orange-500 transition-colors">FAQ</button>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          {/* Button "Let's Talk" kecil di mobile, normal di desktop */}
          <button className="bg-[#FF6B35] hover:bg-orange-600 text-white px-5 py-2 lg:px-7 lg:py-2.5 rounded-full transition-all text-sm font-semibold shadow-md active:scale-95">
            Let's Talk
          </button>
          
          {/* Hamburger Menu (Opsional: Muncul hanya di Mobile untuk navigasi) */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}