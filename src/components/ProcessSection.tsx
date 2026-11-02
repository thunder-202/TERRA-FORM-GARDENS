import React, { useState } from 'react';
import { PROCESS_STEPS, ProcessStep } from '../data/processData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<string | null>('01');

  const toggleStep = (stepNumber: string) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#FAF8F5] text-[#1C1E1B] border-t border-[#D8D1C3]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#4A563D] mb-4">
            <span>Methodology</span>
            <span aria-hidden="true">·</span>
            <span>From Concept To Handover</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#1C1E1B] mb-6 text-balance">
            Our Architectural Process
          </h2>
          <p className="text-sm sm:text-base text-[#1C1E1B]/75 font-light leading-relaxed">
            Every TERRA FORM garden is delivered through a five-stage architectural framework that eliminates guesswork, honors municipal regulations, and ensures craftsmanship.
          </p>
        </div>

        {/* Process Stepped Layout (Vertical on mobile, grid cards with connecting timeline on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-6 relative">
          {PROCESS_STEPS.map((step: ProcessStep) => {
            const isExpanded = expandedStep === step.number;
            return (
              <div
                key={step.number}
                className={`bg-white border transition-all duration-300 flex flex-col justify-between p-6 cursor-pointer ${
                  isExpanded
                    ? 'border-[#2B3322] shadow-md ring-1 ring-[#2B3322]/20'
                    : 'border-[#D8D1C3] hover:border-[#2B3322]/50'
                }`}
                onClick={() => toggleStep(step.number)}
              >
                <div>
                  {/* Step Number & Timeframe */}
                  <div className="flex items-baseline justify-between gap-2 pb-4 mb-4 border-b border-[#D8D1C3]/60">
                    <span className="font-serif text-3xl sm:text-4xl text-[#2B3322] font-light">
                      {step.number}
                    </span>
                    <span className="font-mono text-[11px] text-[#4A563D] tabular-nums font-medium">
                      {step.timeframe}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C1E1B] mb-2 font-medium">
                    {step.title}
                  </h3>

                  <div className="text-[11px] uppercase tracking-wider text-[#4A563D] mb-4 font-medium">
                    {step.phase}
                  </div>

                  <p className="text-xs text-[#1C1E1B]/75 font-light leading-relaxed mb-4">
                    {step.summary}
                  </p>
                </div>

                <div>
                  {/* Expand/Collapse Accordion toggle */}
                  <div className="pt-3 border-t border-[#D8D1C3]/60 flex items-center justify-between text-xs text-[#2B3322] font-medium">
                    <span>{isExpanded ? 'Hide Deliverables' : 'View Deliverables'}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>

                  {/* Expandable Deliverables */}
                  {isExpanded && (
                    <div className="pt-4 space-y-3 animate-fade-in">
                      <div className="text-[10px] uppercase tracking-wider text-[#1C1E1B]/60">
                        Outputs:
                      </div>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((del, i) => (
                          <li key={i} className="text-[11px] text-[#1C1E1B]/80 flex items-start gap-1.5 leading-snug">
                            <span className="text-[#4A563D] font-bold">·</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 text-[10px] text-[#4A563D] italic border-t border-dashed border-[#D8D1C3]/80">
                        Client role: {step.clientRole}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Consultation Guarantee Notice */}
        <div className="mt-14 p-6 bg-[#EBE6DC]/50 border border-[#D8D1C3] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs sm:text-sm text-[#1C1E1B]/80">
            <span className="font-medium text-[#2B3322]">Melbourne & Mornington Peninsula Studio Practice:</span> Every site is personally inspected by Principal Landscape Architect Callum Vance prior to master contract execution.
          </div>
          <div className="font-mono text-xs text-[#4A563D] tabular-nums whitespace-nowrap shrink-0">
            Avg. Timeline: 12–16 Weeks To Construction Set
          </div>
        </div>
      </div>
    </section>
  );
};
