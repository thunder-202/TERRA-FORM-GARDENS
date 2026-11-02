import React, { useState, useEffect } from 'react';
import { Project, PROJECTS } from '../data/projectsData';
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin, Calendar, Compass, Ruler, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onInquireAboutProject: (projectTitle: string) => void;
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onInquireAboutProject,
  onOpenLightbox
}) => {
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);

  useEffect(() => {
    setSelectedGalleryIdx(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const currentImage = project.galleryImages[selectedGalleryIdx] || project.heroImage;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in">
      <div className="relative w-full max-w-6xl bg-[#FAF8F5] text-[#1C1E1B] shadow-2xl my-auto border border-[#D8D1C3] overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8D1C3] bg-[#FAF8F5]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#4A563D]">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="p-2 border border-[#D8D1C3] hover:bg-[#2B3322] hover:text-white transition-colors cursor-pointer"
              title={`Previous: ${prevProject.title}`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="p-2 border border-[#D8D1C3] hover:bg-[#2B3322] hover:text-white transition-colors cursor-pointer"
              title={`Next: ${nextProject.title}`}
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-2 ml-2 border border-[#D8D1C3] bg-[#2B3322] text-white hover:bg-[#1C1E1B] transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-12">
          {/* Main Title & Spatial Subtitle */}
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#4A563D] mb-2">
              <MapPin size={14} />
              <span>{project.location}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1C1E1B] mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-[#1C1E1B]/80 font-light leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Interactive Project Gallery Viewer */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] bg-[#ECE8E1] overflow-hidden group">
              <img
                src={currentImage}
                alt={`${project.title} gallery photograph ${selectedGalleryIdx + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Fullscreen zoom button */}
              <button
                onClick={() => onOpenLightbox(currentImage, `${project.title} — ${project.location}`)}
                className="absolute bottom-4 right-4 p-3 bg-[#FAF8F5]/90 hover:bg-[#2B3322] hover:text-white text-[#1C1E1B] transition-colors shadow-md cursor-pointer flex items-center gap-2 text-xs uppercase tracking-wider"
              >
                <Maximize2 size={16} />
                <span className="hidden sm:inline">Inspect Full Resolution</span>
              </button>
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {project.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGalleryIdx(idx)}
                  className={`relative w-28 h-18 shrink-0 overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedGalleryIdx === idx ? 'border-[#2B3322] opacity-100' : 'border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Key Specifications Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#EBE6DC]/60 border border-[#D8D1C3]">
            <div className="flex items-center gap-3">
              <Ruler size={18} className="text-[#4A563D] shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#1C1E1B]/60">Site Footprint</div>
                <div className="text-sm font-medium font-mono tabular-nums">{project.siteArea}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-[#4A563D] shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#1C1E1B]/60">Completion</div>
                <div className="text-sm font-medium">{project.year}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Compass size={18} className="text-[#4A563D] shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#1C1E1B]/60">Solar Aspect</div>
                <div className="text-sm font-medium">{project.aspect}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#4A563D] shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#1C1E1B]/60">Collaborator</div>
                <div className="text-sm font-medium truncate">{project.architectCollaborator}</div>
              </div>
            </div>
          </div>

          {/* Editorial Split: Design Concept & Site Characteristics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#4A563D]">
                <span>01</span>
                <span aria-hidden="true">·</span>
                <span>Design Concept</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1C1E1B]">
                Spatial Order & Architectural Intent
              </h3>
              <p className="text-sm sm:text-base text-[#1C1E1B]/80 leading-relaxed font-light">
                {project.designConcept}
              </p>
              <p className="text-sm sm:text-base text-[#1C1E1B]/80 leading-relaxed font-light pt-2">
                {project.architecturalDescription}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#4A563D]">
                <span>02</span>
                <span aria-hidden="true">·</span>
                <span>Site Characteristics & Context</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1C1E1B]">
                Environmental Parameters
              </h3>
              <p className="text-sm sm:text-base text-[#1C1E1B]/80 leading-relaxed font-light">
                {project.siteCharacteristics}
              </p>

              {/* Stats badges / unboxed metrics */}
              <div className="mt-6 pt-4 border-t border-[#D8D1C3] grid grid-cols-2 gap-4">
                {project.stats.map((st, i) => (
                  <div key={i}>
                    <div className="text-[11px] uppercase tracking-wider text-[#1C1E1B]/60">{st.label}</div>
                    <div className="text-sm font-medium text-[#2B3322]">{st.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Materials & Planting Palette Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-8 border-t border-[#D8D1C3]">
            {/* Materials Hardscape */}
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[#4A563D] font-medium">
                Hardscape & Material Palette
              </div>
              <ul className="space-y-2.5">
                {project.materials.map((mat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1C1E1B]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A563D] mt-2 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botanical Planting Schedule */}
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[#4A563D] font-medium">
                Botanical Planting Schedule
              </div>
              <div className="space-y-3">
                {project.plantingPalette.map((plant, i) => (
                  <div key={i} className="p-3 bg-white border border-[#D8D1C3]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div className="text-sm font-medium text-[#1C1E1B]">{plant.name}</div>
                      <div className="text-xs italic text-[#4A563D]">{plant.botanical}</div>
                    </div>
                    <div className="text-xs text-[#1C1E1B]/60 text-right sm:text-left">
                      {plant.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-8 border-t border-[#D8D1C3] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs text-[#1C1E1B]/70">
              Interested in an architectural landscape with similar site conditions?
            </div>
            <button
              onClick={() => {
                onClose();
                onInquireAboutProject(project.title);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2B3322] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#1C1E1B] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Inquire About Similar Scope</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
