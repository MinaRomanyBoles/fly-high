import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, src, title = 'Showreel' }) => {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90dvh] neon-card border border-white/10 rounded-lg overflow-hidden bg-brand-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-brand-coral transition-colors"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>
        <video
          src={src}
          controls
          autoPlay
          className="w-full aspect-video bg-black"
          playsInline
        >
          <track kind="captions" />
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
