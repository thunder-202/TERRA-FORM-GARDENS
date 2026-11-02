import React, { useState } from 'react';
import { TESTIMONIALS, Testimonial } from '../data/testimonialsData';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prevIdx) => (prevIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setActiveIndex((prevIdx) => (prevIdx + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 lg:py-32 bg-[#EBE6DC]/40 text-[#1C1E1B] border-t border-[#D8D1C3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#4A563D] mb-4">
              <span>Client Perspectives</span>
              <span aria-hidden="true">·</span>
              <span>Commissions 2024–2025</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#1C1E1B] text-balance">
              Testimonials
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-3 border border-[#D8D1C3] bg-white hover:bg-[#2B3322] hover:text-white transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="font-mono text-xs tabular-nums px-3 text-[#1C1E1B]/70">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </div>
            <button
              onClick={next}
              className="p-3 border border-[#D8D1C3] bg-white hover:bg-[#2B3322] hover:text-white transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-white border border-[#D8D1C3] p-8 sm:p-12 lg:p-16 shadow-xs relative">
          <Quote size={40} className="text-[#D8D1C3] absolute top-8 right-8 sm:top-12 sm:right-12" />

          <div className="max-w-4xl">
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1C1E1B] font-light leading-relaxed mb-10">
              “{current.quote}”
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#D8D1C3]">
              <div>
                <div className="text-base font-medium text-[#1C1E1B]">
                  {current.client}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#4A563D] mt-0.5">
                  {current.role} · {current.location}
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-xs text-[#1C1E1B]/60 uppercase tracking-wider">
                  Commission
                </div>
                <div className="text-sm font-medium text-[#2B3322] font-serif">
                  {current.projectName} ({current.year})
                </div>
                <div className="text-[11px] text-[#4A563D]">
                  {current.architecturalFeature}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Cards Below for Direct Browsing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {TESTIMONIALS.map((t: Testimonial, idx: number) => (
            <div
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 border transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'bg-white border-[#2B3322] shadow-xs'
                  : 'bg-white/60 border-[#D8D1C3] hover:bg-white'
              }`}
            >
              <div className="text-xs text-[#4A563D] uppercase tracking-wider mb-2 font-mono">
                {t.location}
              </div>
              <div className="font-serif text-lg font-medium text-[#1C1E1B] mb-2">
                {t.projectName}
              </div>
              <p className="text-xs text-[#1C1E1B]/70 line-clamp-2 leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
