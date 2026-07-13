import React from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const accentColors = ['bg-brand-cyan', 'bg-brand-coral'];

/**
 * Each logo sits in a fixed 16:9 rectangle (width from grid column, height from aspect-ratio).
 * Images use object-contain so the full logo always fits inside without cropping.
 * Featured partners span 2×2 cells.
 */
const PartnerLogoGrid = ({ partners }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {partners.map((partner, i) => {
      const featured = Boolean(partner.featured);

      return (
        <ScrollReveal
          key={partner.name}
          delay={(i % 5) * 60}
          className={`h-full ${featured ? 'col-span-2 row-span-2' : ''}`}
        >
          <div className="group flex flex-col h-full w-full">
            <div className={`h-1 flex-shrink-0 ${accentColors[i % 2]} rounded-t-sm`} />
            <div
              className={`neon-card relative w-full overflow-hidden border border-white/10 border-t-0 rounded-b-sm ${
                featured
                  ? 'bg-brand-dark flex-1 min-h-0'
                  : 'bg-white aspect-video'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                {partner.textOnly ? (
                  <span className="text-brand-coral font-black text-sm uppercase tracking-wide text-center">
                    {partner.name}
                  </span>
                ) : (
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      );
    })}
  </div>
);

export default PartnerLogoGrid;
