import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useOrder } from '../../context/OrderContext';

export const Lightbox: React.FC = () => {
  const { lightboxImage, closeLightbox } = useOrder();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImage, closeLightbox]);

  if (!lightboxImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <button
        onClick={closeLightbox}
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
          <img
            src={lightboxImage.image}
            alt={lightboxImage.title}
            className="w-full max-h-[70vh] object-contain rounded-2xl"
          />
        </div>
        <div className="mt-4 text-center text-white space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-800/80 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            {lightboxImage.category}
          </div>
          <h3 className="text-xl font-serif font-bold">{lightboxImage.title}</h3>
          {lightboxImage.description && (
            <p className="text-sm text-stone-300 max-w-lg mx-auto">
              {lightboxImage.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
