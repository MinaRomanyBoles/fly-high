import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MediaCarousel = ({ items, alt = 'Media' }) => {
  const [index, setIndex] = useState(0);

  if (!items?.length) return null;

  const current = items[index];
  const hasMultiple = items.length > 1;

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
      {current.type === 'video' ? (
        <video
          key={current.src}
          src={current.src}
          controls
          className="w-full h-full object-contain"
          playsInline
        />
      ) : (
        <img
          key={current.src}
          src={current.src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      )}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-brand-coral/80 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-brand-coral/80 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-brand-coral' : 'w-1.5 bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaCarousel;
