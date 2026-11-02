import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  imageUrl: string | null;
  caption?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  imageUrl,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (imageUrl) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageUrl, onClose]);

  if (!imageUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-60 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
    >
      {/* Top Bar with Caption & Close Button */}
      <div className="flex items-center justify-between text-white pb-4 border-b border-white/20">
        <div className="text-xs uppercase tracking-[0.2em] text-[#D8D1C3]">
          {caption || 'Architectural Photography'}
        </div>
        <button
          onClick={onClose}
          className="p-2 border border-white/30 hover:bg-white hover:text-black transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="flex-1 flex items-center justify-center p-2 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={caption || 'Architectural Landscape'}
          className="max-h-[82vh] max-w-full object-contain shadow-2xl border border-white/10"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Bottom Hint */}
      <div className="text-center text-[11px] text-white/50 uppercase tracking-widest pt-2">
        Press ESC or click anywhere outside to close
      </div>
    </div>
  );
};
