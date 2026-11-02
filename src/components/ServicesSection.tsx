import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/servicesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES[0]);

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAF8F5] text-[#1C1E1B] border-t border-[#D8D1C3]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#4A563D] mb-4">
            <span>Specialist Disciplines</span>
            <span aria-hidden="true">·</span>
            <span>Melbourne Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#1C1E1B] mb-6 text-balance">
            Services & Architectural Scope
          </h2>
          <p className="text-sm sm:text-base text-[#1C1E1B]/75 font-light leading-relaxed">
            From initial site feasibility and master planning to millimeter-exact hardscape engineering and specimen horticultural curation.
          </p>
        </div>

        {/* Master Services Grid (Editorial list on left, interactive detail on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: 8 Services Interactive Selector (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-[#D8D1C3]">
            {SERVICES.map((service) => {
              const isActive = activeService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`group py-5 px-4 cursor-pointer transition-all duration-200 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 ${
                    isActive ? 'bg-[#EBE6DC]/80 pl-6 border-l-2 border-[#2B3322]' : 'hover:bg-[#FAF8F5]/80 hover:pl-5'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-[#4A563D] font-medium tracking-wider">
                      {service.number}.
                    </span>
                    <h3 className={`font-serif text-xl sm:text-2xl transition-colors ${
                      isActive ? 'text-[#2B3322] font-medium' : 'text-[#1C1E1B] group-hover:text-[#2B3322]'
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#1C1E1B]/70 sm:max-w-xs font-light sm:text-right">
                    {service.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Active Service Deep Architectural Scope (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#D8D1C3] p-8 lg:p-10 sticky top-28 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#D8D1C3]">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4A563D]">
                Discipline {activeService.number} / 08
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#1C1E1B]/60">
                Studio Specification
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1E1B] mt-6 mb-4">
              {activeService.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#1C1E1B]/80 leading-relaxed font-light mb-6">
              {activeService.fullDesc}
            </p>

            {/* Deliverables List */}
            <div className="space-y-4 mb-6">
              <div className="text-xs uppercase tracking-[0.18em] text-[#4A563D] font-medium">
                Document Deliverables
              </div>
              <ul className="space-y-2">
                {activeService.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#1C1E1B]/80 leading-normal">
                    <CheckCircle2 size={14} className="text-[#4A563D] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Areas unboxed tags */}
            <div className="pt-6 border-t border-[#D8D1C3] mb-8">
              <div className="text-[11px] uppercase tracking-wider text-[#1C1E1B]/60 mb-2">
                Core Competencies
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#4A563D] font-medium">
                {activeService.focusAreas.map((area, i) => (
                  <span key={i}>
                    {area}{i < activeService.focusAreas.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquire CTA */}
            <button
              onClick={() => onSelectServiceForInquiry(activeService.title)}
              className="w-full py-3.5 bg-[#2B3322] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#1C1E1B] transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Inquire For This Service</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
