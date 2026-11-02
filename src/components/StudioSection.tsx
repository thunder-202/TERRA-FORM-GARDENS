import React from 'react';
import { Award, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';

export const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="py-24 lg:py-32 bg-[#FAF8F5] text-[#1C1E1B] border-t border-[#D8D1C3]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photograph of Melbourne Studio (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] bg-[#ECE8E1] overflow-hidden shadow-lg border border-[#D8D1C3]">
              <img
                src="/src/assets/images/studio_architectural_team_1793642958825.jpg"
                alt="TERRA FORM GARDENS design studio on Flinders Lane Melbourne with architects reviewing blueprints and material samples"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-[#FAF8F5]">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#D8D1C3] mb-1">
                  Studio Atelier · Flinders Lane
                </div>
                <div className="font-serif text-lg font-light">
                  42 Flinders Lane, Melbourne VIC 3000
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-5 bg-[#2B3322] text-[#FAF8F5] shadow-xl max-w-[240px] border border-[#363E2D]">
              <div className="font-serif text-2xl font-light mb-1">AILA Certified</div>
              <div className="text-[11px] text-[#D8D1C3] uppercase tracking-wider">
                Australian Institute of Landscape Architects Member Studio
              </div>
            </div>
          </div>

          {/* Right Column: Studio Narrative & Creative Approach (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#4A563D] mb-4">
                <span>The Practice</span>
                <span aria-hidden="true">·</span>
                <span>Established Melbourne 2014</span>
              </div>

              {/* Required Exact Headline */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#1C1E1B] mb-6 text-balance">
                Designing Beyond the Garden.
              </h2>

              <p className="font-serif text-xl sm:text-2xl font-light text-[#2B3322] leading-snug mb-6">
                “We do not view a garden as merely greenery bounded by fences. We sculpt outdoor rooms that engage human senses, frame internal architecture, and age in grace.”
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#1C1E1B]/80 font-light leading-relaxed">
              <p>
                Founded in Melbourne’s historic Flinders Lane design quarter, TERRA FORM GARDENS operates as an intimate atelier of landscape architects, horticulturists, and spatial designers. We intentionally limit our annual commissions to sixteen residences to ensure uncompromising architectural rigor from initial concept through to final botanical curation.
              </p>
              <p>
                Our aesthetic vocabulary is shaped by the Australian light and tectonic honesty. We seek out authentic regional materials—Victorian basalt boulders, Castlemaine slate flagstones, and rough-sawn silver ash—pairing them with architectural specimen plantings that require minimal intervention once established.
              </p>
            </div>

            {/* Studio Leadership & Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#D8D1C3]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Compass size={16} className="text-[#4A563D]" />
                  <div className="text-xs uppercase tracking-wider font-medium text-[#1C1E1B]">Callum Vance</div>
                </div>
                <div className="text-[11px] text-[#4A563D] uppercase tracking-wider mb-2">Principal Landscape Architect, B.LA (Hons)</div>
                <p className="text-xs text-[#1C1E1B]/70 leading-relaxed font-light">
                  Over fifteen years specializing in complex topographical hillside terrains and high-density inner-suburban Melbourne atriums.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} className="text-[#4A563D]" />
                  <div className="text-xs uppercase tracking-wider font-medium text-[#1C1E1B]">Alistair Reid</div>
                </div>
                <div className="text-[11px] text-[#4A563D] uppercase tracking-wider mb-2">Design Director, M.Arch (Melb)</div>
                <p className="text-xs text-[#1C1E1B]/70 leading-relaxed font-light">
                  Bridging the boundary between modern architecture, brutalist masonry detailing, and kinetic botanical choreography.
                </p>
              </div>
            </div>

            {/* Values summary */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-[#1C1E1B]/70 border-t border-[#D8D1C3]/60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#4A563D]" />
                <span>Enduring Structural Integrity</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake size={16} className="text-[#4A563D]" />
                <span>Single-Point Atelier Stewardship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
