import React from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const accentColors = ['bg-brand-cyan', 'bg-brand-coral'];

const PartnerLogoGrid = ({ partners }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {partners.map((partner, i) => (
      <ScrollReveal key={partner.name} delay={(i % 5) * 60}>
        <div className="group">
          <div className={`h-1 ${accentColors[i % 2]} rounded-t-sm`} />
          <div className="neon-card bg-white h-24 sm:h-28 flex items-center justify-center p-4 border border-white/10 border-t-0 rounded-b-sm">
            {partner.textOnly ? (
              <span className="text-brand-coral font-black text-sm uppercase tracking-wide text-center">
                {partner.name}
              </span>
            ) : (
              <img
                src={partner.src}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </ScrollReveal>
    ))}
  </div>
);

export default PartnerLogoGrid;
