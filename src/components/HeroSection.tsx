import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onStartConversation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onStartConversation,
}) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#141614] text-[#FAF8F5]">
      {/* Full-Screen Photographic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_architectural_garden_1793642936950.jpg"
          alt="Extraordinary architectural garden of a luxury modern residence in Melbourne with monolithic stone, reflecting pool, and sculptural specimen planting"
          className="w-full h-full object-cover object-center scale-[1.02] transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for Legibility & Contrast (WCAG AA Compliant) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top spacer for navigation bar */}
      <div className="relative z-10 pt-32 sm:pt-40" />

      {/* Center/Bottom Overlay Content directly over background image */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16 pt-12">
        <div className="max-w-4xl">
          {/* Studio Brand Descriptor / Location */}
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D8D1C3] mb-6">
            <span>TERRA FORM GARDENS</span>
            <span aria-hidden="true">·</span>
            <span>Melbourne, Australia</span>
            <span aria-hidden="true">·</span>
            <span>Landscape Architecture</span>
          </div>

          {/* Primary Required Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.05] tracking-tight text-white mb-6 text-balance">
            Landscapes Designed to Belong.
          </h1>

          {/* Required Supporting Text */}
          <p className="text-base sm:text-xl lg:text-2xl text-[#ECE8E1] font-light leading-relaxed max-w-2xl mb-10 text-balance">
            We create thoughtful outdoor environments where architecture, nature, and everyday living come together.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FAF8F5] text-[#1C1E1B] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 hover:bg-[#D8D1C3] cursor-pointer whitespace-nowrap shrink-0 group"
            >
              <span>Explore Our Projects</span>
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onStartConversation}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#FAF8F5]/60 text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium backdrop-blur-xs transition-all duration-200 hover:bg-[#FAF8F5]/10 hover:border-[#FAF8F5] cursor-pointer whitespace-nowrap shrink-0 group"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata Ribbon (Unboxed clean editorial text) */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#D8D1C3] font-light">
          <div className="flex items-center gap-3">
            <span>Studio Monograph 2024–2026</span>
            <span aria-hidden="true">·</span>
            <span>Selected Works: Toorak, Flinders, South Yarra, Red Hill</span>
          </div>
          <div className="flex items-center gap-3 font-mono tabular-nums text-[11px] text-white/70">
            <span>37.8136° S, 144.9631° E</span>
            <span aria-hidden="true">·</span>
            <span>Melbourne Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
};
