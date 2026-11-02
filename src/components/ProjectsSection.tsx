import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'courtyard' | 'coastal' | 'residential' | 'native'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterTag === filter);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#FAF8F5] text-[#1C1E1B] border-t border-[#D8D1C3]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#D8D1C3]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#4A563D] mb-4">
              <span>Selected Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Monograph 2024–2026</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#1C1E1B] text-balance">
              Signature Projects
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#1C1E1B]/70 font-light leading-relaxed">
            Our architectural landscapes exist at the intersection of monolithic hardscape permanence and breathing botanical systems across Melbourne and regional Victoria.
          </p>
        </div>

        {/* Filter Controls (Interactive segmented tabs) */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'all'
                ? 'bg-[#2B3322] text-[#FAF8F5]'
                : 'bg-[#EBE6DC]/60 text-[#1C1E1B]/80 hover:bg-[#D8D1C3]'
            }`}
          >
            All Works ({PROJECTS.length})
          </button>
          <button
            onClick={() => setFilter('courtyard')}
            className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'courtyard'
                ? 'bg-[#2B3322] text-[#FAF8F5]'
                : 'bg-[#EBE6DC]/60 text-[#1C1E1B]/80 hover:bg-[#D8D1C3]'
            }`}
          >
            Courtyards
          </button>
          <button
            onClick={() => setFilter('coastal')}
            className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'coastal'
                ? 'bg-[#2B3322] text-[#FAF8F5]'
                : 'bg-[#EBE6DC]/60 text-[#1C1E1B]/80 hover:bg-[#D8D1C3]'
            }`}
          >
            Coastal
          </button>
          <button
            onClick={() => setFilter('residential')}
            className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'residential'
                ? 'bg-[#2B3322] text-[#FAF8F5]'
                : 'bg-[#EBE6DC]/60 text-[#1C1E1B]/80 hover:bg-[#D8D1C3]'
            }`}
          >
            Residential & Pools
          </button>
          <button
            onClick={() => setFilter('native')}
            className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'native'
                ? 'bg-[#2B3322] text-[#FAF8F5]'
                : 'bg-[#EBE6DC]/60 text-[#1C1E1B]/80 hover:bg-[#D8D1C3]'
            }`}
          >
            Native Ecology
          </button>
        </div>

        {/* Asymmetrical Editorial Portfolio Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => {
            // Asymmetrical grid cadence: alternate between large 7-col and 5-col spotlight cards
            const isLarge = index % 3 === 0;
            const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between bg-white border border-[#D8D1C3]/80 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-[#2B3322]/40`}
              >
                <div>
                  {/* Image Container with smooth zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE8E1] mb-6">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#2B3322]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-5 py-2.5 bg-[#FAF8F5] text-[#1C1E1B] text-xs uppercase tracking-[0.2em] font-medium shadow-md">
                        View Project Experience
                      </span>
                    </div>

                    <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#1C1E1B] font-medium">
                      {project.suburb}
                    </div>
                  </div>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#4A563D] mb-3">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                  </div>

                  {/* Project Title */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1E1B] group-hover:text-[#2B3322] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="p-2 border border-[#D8D1C3] text-[#1C1E1B] group-hover:bg-[#2B3322] group-hover:text-white group-hover:border-[#2B3322] transition-colors shrink-0">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Design Description */}
                  <p className="text-xs sm:text-sm text-[#1C1E1B]/75 leading-relaxed font-light mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Specifications Bar */}
                <div className="pt-4 border-t border-[#D8D1C3]/60 flex items-center justify-between text-[11px] text-[#1C1E1B]/60 uppercase tracking-wider">
                  <span>Collaborator: {project.architectCollaborator}</span>
                  <span className="font-mono tabular-nums font-medium">{project.siteArea}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
