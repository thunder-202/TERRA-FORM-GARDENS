import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { StudioSection } from './components/StudioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { Project } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedProjectType, setPreselectedProjectType] = useState<string>('Residential Master Planning');
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string | null;
    caption?: string;
  }>({
    isOpen: false,
    imageUrl: null,
    caption: '',
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (projectType?: string) => {
    if (projectType) {
      setPreselectedProjectType(projectType);
    }
    scrollTo('inquiry');
  };

  const handleInquireAboutProject = (projectTitle: string) => {
    setPreselectedProjectType(`Scope inspired by ${projectTitle}`);
    scrollTo('inquiry');
  };

  const handleOpenLightbox = (imageUrl: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      imageUrl: null,
      caption: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1E1B] flex flex-col font-sans selection:bg-[#2B3322] selection:text-[#FAF8F5]">
      {/* Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreProjects={() => scrollTo('projects')}
          onStartConversation={() => handleOpenInquiry()}
        />

        {/* 2. Design Philosophy */}
        <PhilosophySection />

        {/* 3. Specialist Services */}
        <ServicesSection
          onSelectServiceForInquiry={(serviceName) => handleOpenInquiry(serviceName)}
        />

        {/* 4. Signature Projects Portfolio */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Our Process */}
        <ProcessSection />

        {/* 6. Studio Introduction */}
        <StudioSection />

        {/* 7. Testimonials */}
        <TestimonialsSection />

        {/* 8. Consultation Inquiry */}
        <InquirySection preselectedProjectType={preselectedProjectType} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
        onInquireAboutProject={handleInquireAboutProject}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Image Lightbox */}
      <LightboxModal
        imageUrl={lightboxState.isOpen ? lightboxState.imageUrl : null}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
