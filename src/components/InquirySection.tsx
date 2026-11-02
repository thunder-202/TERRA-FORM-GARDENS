import React, { useState } from 'react';
import { Send, CheckCircle, FileText, RefreshCw, AlertCircle } from 'lucide-react';

interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  projectLocation: string;
  projectType: string;
  estimatedBudget: string;
  projectDescription: string;
}

interface InquirySectionProps {
  preselectedProjectType?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  preselectedProjectType,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: '',
    projectType: preselectedProjectType || 'Residential Master Planning',
    estimatedBudget: '$250k – $500k AUD',
    projectDescription: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Keep projectType in sync if preselected from project or service modal
  React.useEffect(() => {
    if (preselectedProjectType) {
      setFormData((prev) => ({ ...prev, projectType: preselectedProjectType }));
    }
  }, [preselectedProjectType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectLocation.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Location).');
      return;
    }

    setIsSubmitting(true);
    // Simulate brief network latency for authentic feel
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectLocation: '',
      projectType: 'Residential Master Planning',
      estimatedBudget: '$250k – $500k AUD',
      projectDescription: '',
    });
  };

  return (
    <section id="inquiry" className="py-24 lg:py-32 bg-[#FAF8F5] text-[#1C1E1B] border-t border-[#D8D1C3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Inquiry Briefing & Studio Contact (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#4A563D] mb-4">
                <span>Engage The Atelier</span>
                <span aria-hidden="true">·</span>
                <span>Commissions 2025–2026</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#1C1E1B] mb-6 text-balance">
                Start a Conversation.
              </h2>
              <p className="text-sm sm:text-base text-[#1C1E1B]/80 font-light leading-relaxed">
                We accept a limited number of residential landscape architecture commissions each year to ensure uncompromising focus and site stewardship.
              </p>
            </div>

            {/* Atelier Contact Details */}
            <div className="p-6 bg-[#EBE6DC]/50 border border-[#D8D1C3] space-y-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[#4A563D] font-medium">
                Melbourne Design Office
              </div>
              <div className="text-sm text-[#1C1E1B] space-y-1">
                <div className="font-medium">TERRA FORM GARDENS</div>
                <div className="text-[#1C1E1B]/80">42 Flinders Lane, Melbourne VIC 3000</div>
                <div className="text-[#1C1E1B]/80">Tel: +61 3 9654 8210</div>
                <div className="text-[#1C1E1B]/80">Email: atelier@terraformgardens.com.au</div>
              </div>
              <div className="text-xs text-[#1C1E1B]/60 pt-2 border-t border-[#D8D1C3]/80">
                Operating Hours: Monday–Friday, 8:30 AM – 5:30 PM AEST
              </div>
            </div>

            {/* Demonstration Transparency Notice */}
            <div className="text-xs text-[#1C1E1B]/70 bg-[#FAF8F5] border border-dashed border-[#D8D1C3] p-4 leading-relaxed">
              <span className="font-medium text-[#2B3322]">Portfolio Demonstration Note:</span> This inquiry portal is a frontend demonstration created for web design review. Inquiries simulate authentic submission validation with demonstration feedback without transmitting live external data.
            </div>
          </div>

          {/* Right Column: Form or Demonstration Feedback (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#D8D1C3] p-8 sm:p-12 shadow-sm">
            {isSubmitted ? (
              /* Demonstration Feedback State */
              <div className="space-y-6 animate-fade-in">
                <div className="w-12 h-12 bg-[#2B3322] text-[#FAF8F5] flex items-center justify-center">
                  <CheckCircle size={24} />
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#4A563D] font-medium mb-1">
                    Demonstration Feedback
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1E1B] mb-3">
                    Consultation Request Simulated
                  </h3>
                  <p className="text-sm text-[#1C1E1B]/80 leading-relaxed font-light">
                    Thank you, <span className="font-medium text-[#1C1E1B]">{formData.fullName}</span>. In a live production environment, this consultation brief would be delivered directly to Principal Landscape Architect Callum Vance for preliminary site review within two business days.
                  </p>
                </div>

                {/* Formatted Summary of Submitted Demonstration Data */}
                <div className="p-6 bg-[#FAF8F5] border border-[#D8D1C3] space-y-3 text-xs">
                  <div className="text-[11px] uppercase tracking-wider text-[#4A563D] font-medium mb-2">
                    Submitted Inquiry Parameters
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#1C1E1B]">
                    <div>
                      <span className="text-[#1C1E1B]/60">Email:</span> {formData.email}
                    </div>
                    <div>
                      <span className="text-[#1C1E1B]/60">Phone:</span> {formData.phone || 'Not provided'}
                    </div>
                    <div>
                      <span className="text-[#1C1E1B]/60">Project Location:</span> {formData.projectLocation}
                    </div>
                    <div>
                      <span className="text-[#1C1E1B]/60">Scope Type:</span> {formData.projectType}
                    </div>
                    <div>
                      <span className="text-[#1C1E1B]/60">Estimated Budget:</span> {formData.estimatedBudget}
                    </div>
                  </div>
                  {formData.projectDescription && (
                    <div className="pt-2 border-t border-[#D8D1C3]/60 text-[#1C1E1B]/80">
                      <span className="text-[#1C1E1B]/60 block mb-0.5">Brief Description:</span>
                      {formData.projectDescription}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2B3322] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#1C1E1B] transition-colors cursor-pointer"
                  >
                    <RefreshCw size={14} />
                    <span>Submit Another Inquiry</span>
                  </button>
                  <button
                    onClick={() => {
                      alert('TERRA FORM GARDENS — Monograph Portfolio & Studio Practice Guide (Demonstration download simulated).');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#D8D1C3] text-[#1C1E1B] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#EBE6DC] transition-colors cursor-pointer"
                  >
                    <FileText size={14} />
                    <span>Download Monograph Brief (Demo)</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Frontend Inquiry Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#1C1E1B] mb-2 font-normal">
                    Consultation Inquiry Form
                  </h3>
                  <p className="text-xs text-[#1C1E1B]/70 font-light">
                    Provide preliminary details regarding your property, architecture, and timeline.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#1C1E1B]/70 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Julian Hawthorne"
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D8D1C3] text-sm text-[#1C1E1B] placeholder-[#1C1E1B]/40 focus:outline-none focus:border-[#2B3322]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#1C1E1B]/70 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="j.hawthorne@residence.com.au"
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D8D1C3] text-sm text-[#1C1E1B] placeholder-[#1C1E1B]/40 focus:outline-none focus:border-[#2B3322]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#1C1E1B]/70 font-medium">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+61 400 000 000"
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D8D1C3] text-sm text-[#1C1E1B] placeholder-[#1C1E1B]/40 focus:outline-none focus:border-[#2B3322]"
                    />
                  </div>

                  {/* Project Location */}
                  <div className="space-y-1.5">
                    <label htmlFor="projectLocation" className="block text-xs uppercase tracking-wider text-[#1C1E1B]/70 font-medium">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      required
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g. Toorak / Flinders / South Yarra"
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D8D1C3] text-sm text-[#1C1E1B] placeholder-[#1C1E1B]/40 focus:outline-none focus:border-[#2B3322]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="block text-xs uppercase tracking-wider text-[#1C1E1B]/70 font-medium">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D8D1C3] text-sm text-[#1C1E1B] focus:outline-none focus:border-[#2B3322]"
                    >
                      <option value="Residential Master Planning">Residential Master Planning</option>
                      <option value="Luxury Garden Design">Luxury Garden Design</option>
                      <option value="Courtyard Design">Courtyard Design</option>
                      <option value="Poolside Landscaping">Poolside Landscaping</option>
                      <option value="Coastal Architecture">Coastal Architecture</option>
                      <option value="Native Ecology & Revegetation">Native Ecology & Revegetation</option>
                      <option value="Landscape Consultation">Landscape Consultation</option>
                    </select>
                  </div>

                  {/* Estimated Project Budget */}
                  <div className="space-y-1.5">
                    <label htmlFor="estimatedBudget" className="block text-xs uppercase tracking-wider text-[#1C1E1B]/70 font-medium">
                      Estimated Project Budget
                    </label>
                    <select
                      id="estimatedBudget"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D8D1C3] text-sm text-[#1C1E1B] focus:outline-none focus:border-[#2B3322]"
                    >
                      <option value="$100k – $250k AUD">$100k – $250k AUD</option>
                      <option value="$250k – $500k AUD">$250k – $500k AUD</option>
                      <option value="$500k – $1,000,000 AUD">$500k – $1,000,000 AUD</option>
                      <option value="$1,000,000+ AUD">$1,000,000+ AUD (Estate Scale)</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label htmlFor="projectDescription" className="block text-xs uppercase tracking-wider text-[#1C1E1B]/70 font-medium">
                    Project Description & Architectural Scope
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Briefly describe your site, architectural collaborators, specific aspirations (e.g. pool pavilion, courtyard reflection pool, native plant palette), and desired completion timeline..."
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D8D1C3] text-sm text-[#1C1E1B] placeholder-[#1C1E1B]/40 focus:outline-none focus:border-[#2B3322]"
                  />
                </div>

                {/* Clear Consultation Request Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#2B3322] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#1C1E1B] transition-colors cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating Scope...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
