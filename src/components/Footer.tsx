import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141614] text-[#FAF8F5] pt-20 pb-12 border-t border-[#292C28]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Melbourne Studio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] font-medium uppercase block mb-1">
                TERRA FORM
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D8D1C3] block mb-4">
                Gardens · Melbourne, Australia
              </span>
              <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
                Landscape architecture and luxury garden design atelier crafting thoughtful outdoor environments where architecture, nature, and everyday living unite.
              </p>
            </div>

            <div className="text-xs text-white/60 space-y-1">
              <div>42 Flinders Lane, Melbourne VIC 3000</div>
              <div>Tel: +61 3 9654 8210</div>
              <div>atelier@terraformgardens.com.au</div>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-[#D8D1C3] mb-4 font-medium">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <button
                  onClick={() => scrollTo('philosophy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Specialist Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Signature Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('studio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('inquiry')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Specialist Services (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#D8D1C3] mb-4 font-medium">
              Specialist Services
            </div>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>Landscape Architecture</li>
              <li>Luxury Garden Design</li>
              <li>Residential Master Planning</li>
              <li>Courtyard Design</li>
              <li>Poolside Landscaping</li>
              <li>Outdoor Spatial Design</li>
              <li>Planting Design</li>
              <li>Landscape Consultation</li>
            </ul>
          </div>

          {/* Demonstration Notice & Back to Top (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#D8D1C3] mb-4 font-medium">
                Demonstration Portfolio
              </div>
              <p className="text-xs text-white/60 font-light leading-relaxed mb-4">
                This website is a bespoke portfolio demonstration for TERRA FORM GARDENS, showcasing high-end landscape architecture digital experiences.
              </p>
              <div className="flex items-center gap-3 text-xs text-white/50">
                <span className="hover:text-white transition-colors cursor-default">Instagram (Demo)</span>
                <span aria-hidden="true">·</span>
                <span className="hover:text-white transition-colors cursor-default">Pinterest (Demo)</span>
                <span aria-hidden="true">·</span>
                <span className="hover:text-white transition-colors cursor-default">The Local Project</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D8D1C3] hover:text-white transition-colors self-start cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Acknowledgement of Country & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-white/50 font-light">
          <p className="max-w-2xl leading-relaxed">
            TERRA FORM GARDENS acknowledges the Traditional Custodians of the land on which our studio operates and where our gardens take root, the Wurundjeri Woi-wurrung and Bunurong Boon Wurrung peoples of the Kulin Nation. We pay our deep respects to their Elders past and present.
          </p>
          <div className="whitespace-nowrap shrink-0">
            © {new Date().getFullYear()} TERRA FORM GARDENS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
