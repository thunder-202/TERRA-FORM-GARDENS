import React from 'react';
import { Compass, Layers, Sparkles, Wind } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-[#FAF8F5] text-[#1C1E1B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header / Kicker */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#4A563D] mb-4">
          <span>Design Philosophy</span>
          <span aria-hidden="true">·</span>
          <span>Architectural Ethos</span>
        </div>

        {/* Primary Required Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#1C1E1B] max-w-4xl mb-16 text-balance">
          Nature, Shaped With Intention.
        </h2>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Manifesto & Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <p className="font-serif text-2xl sm:text-3xl font-light text-[#2B3322] leading-snug">
              “A true architectural garden is never an afterthought. It is the living threshold that grounds human habitations to their earth.”
            </p>

            <div className="space-y-6 text-[#1C1E1B]/80 text-base sm:text-lg font-light leading-relaxed">
              <p>
                At TERRA FORM GARDENS, we reject the notion of landscaping as decorative surface dressing. We practice landscape architecture as an enduring dialogue between architectural mass and ecological vitality. Our work responds to Melbourne’s distinct light, volatile microclimates, and rich topographical memory.
              </p>
              <p>
                Through radical material honesty—dry-stacked Victorian bluestone, honed sandstone, charred Australian hardwood, and patinated bronze—we compose outdoor spaces that age with dignity. As rain, sun, and ocean salt weather the surfaces, our gardens become richer, more grounded, and increasingly atmospheric.
              </p>
            </div>

            {/* Four Core Pillars: Architecture, Natural Materials, Plant Selection, Environmental Context */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#D8D1C3]">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#2B3322]">
                  <Layers size={18} className="text-[#4A563D]" />
                  <h3 className="font-serif text-lg font-medium">Architecture & Mass</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#1C1E1B]/70 leading-relaxed">
                  Extending interior sightlines into the sky. We align paving modules, structural portals, and water axes with the interior volume to dissolve thresholds.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-[#2B3322]">
                  <Compass size={18} className="text-[#4A563D]" />
                  <h3 className="font-serif text-lg font-medium">Natural Materials</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#1C1E1B]/70 leading-relaxed">
                  Honest, locally sourced stone and unsealed timber. Castlemaine slate, Donnybrook sandstone, and Harcourt granite that celebrate the geology of southeastern Australia.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-[#2B3322]">
                  <Sparkles size={18} className="text-[#4A563D]" />
                  <h3 className="font-serif text-lg font-medium">Plant Selection</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#1C1E1B]/70 leading-relaxed">
                  Sculptural botanical restraint. Specimen cloud trees paired with resilient native tussocks, architectural banksias, and bold seasonal foliage suited to local soils.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-[#2B3322]">
                  <Wind size={18} className="text-[#4A563D]" />
                  <h3 className="font-serif text-lg font-medium">Environmental Context</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#1C1E1B]/70 leading-relaxed">
                  Deep microclimatic sensitivity. Capturing morning sun while diffusing harsh westerly winds and filtering stormwater into bio-retention swales.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Photography & Tactical Detail (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group overflow-hidden bg-[#ECE8E1]">
              <img
                src="/src/assets/images/philosophy_stone_foliage_1793642938458.jpg"
                alt="Tactile architectural landscape detail featuring textured board-formed concrete, sandstone masonry, and endemic Australian banksia in morning light"
                className="w-full aspect-[4/5] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-[#FAF8F5]">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#D8D1C3] mb-1">
                  Tactile Materiality
                </div>
                <div className="font-serif text-lg font-light">
                  Limestone, Off-Form Concrete & Endemic Flora
                </div>
              </div>
            </div>

            {/* Unboxed architectural callout box */}
            <div className="p-6 bg-[#EBE6DC]/50 border border-[#D8D1C3]/60 flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#4A563D] font-medium">
                Melbourne Microclimatic Approach
              </span>
              <p className="text-xs sm:text-sm text-[#1C1E1B]/80 leading-relaxed">
                Victoria’s variable four-season climate demands gardens that excel in both the fierce dry heat of February and the cold, damp shadows of July. Our botanical architecture thrives across every transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
