import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (projectType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#D8D1C3]/60 py-4 shadow-xs text-[#1C1E1B]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col whitespace-nowrap shrink-0"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-medium uppercase transition-colors">
              TERRA FORM
            </span>
            <span
              className={`text-[9px] tracking-[0.3em] uppercase transition-colors ${
                isScrolled ? 'text-[#4A563D]' : 'text-[#D8D1C3]'
              }`}
            >
              Gardens · Melbourne
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.15em] uppercase font-medium">
            <button
              onClick={() => scrollTo('philosophy')}
              className={`transition-colors hover:text-[#4A563D] whitespace-nowrap shrink-0 cursor-pointer ${
                isScrolled ? 'text-[#1C1E1B]/80' : 'text-white/85 hover:text-white'
              }`}
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo('services')}
              className={`transition-colors hover:text-[#4A563D] whitespace-nowrap shrink-0 cursor-pointer ${
                isScrolled ? 'text-[#1C1E1B]/80' : 'text-white/85 hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className={`transition-colors hover:text-[#4A563D] whitespace-nowrap shrink-0 cursor-pointer ${
                isScrolled ? 'text-[#1C1E1B]/80' : 'text-white/85 hover:text-white'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollTo('process')}
              className={`transition-colors hover:text-[#4A563D] whitespace-nowrap shrink-0 cursor-pointer ${
                isScrolled ? 'text-[#1C1E1B]/80' : 'text-white/85 hover:text-white'
              }`}
            >
              Process
            </button>
            <button
              onClick={() => scrollTo('studio')}
              className={`transition-colors hover:text-[#4A563D] whitespace-nowrap shrink-0 cursor-pointer ${
                isScrolled ? 'text-[#1C1E1B]/80' : 'text-white/85 hover:text-white'
              }`}
            >
              Studio
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenInquiry()}
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'bg-[#2B3322] text-[#FAF8F5] hover:bg-[#363E2D]'
                  : 'bg-[#FAF8F5] text-[#1C1E1B] hover:bg-[#ECE8E1]'
              }`}
            >
              Request Consultation
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors cursor-pointer ${
                isScrolled ? 'text-[#1C1E1B]' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#1C1E1B]/90 backdrop-blur-md text-[#FAF8F5] md:hidden flex flex-col justify-between p-8 pt-28">
          <div className="flex flex-col gap-6 text-lg tracking-[0.2em] font-serif uppercase">
            <button
              onClick={() => scrollTo('philosophy')}
              className="text-left text-white/80 hover:text-white py-2 border-b border-white/10"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-left text-white/80 hover:text-white py-2 border-b border-white/10"
            >
              Specialist Services
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="text-left text-white/80 hover:text-white py-2 border-b border-white/10"
            >
              Signature Projects
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="text-left text-white/80 hover:text-white py-2 border-b border-white/10"
            >
              Design Process
            </button>
            <button
              onClick={() => scrollTo('studio')}
              className="text-left text-white/80 hover:text-white py-2 border-b border-white/10"
            >
              The Studio
            </button>
          </div>

          <div className="pt-8 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 bg-[#FAF8F5] text-[#1C1E1B] text-xs uppercase tracking-[0.15em] font-medium text-center"
            >
              Request Consultation
            </button>
            <div className="text-[11px] tracking-wider text-white/60 text-center uppercase">
              Melbourne, Victoria · +61 3 9654 8210
            </div>
          </div>
        </div>
      )}
    </>
  );
};
