import React from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import PartnerLogoGrid from '../ui/PartnerLogoGrid';
import { commercialPartners } from '../../data/partners';

const BrandsThatTrustTheLensSection = ({ t }) => (
  <section className="py-24 bg-brand-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal className="mb-12">
        <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {t.commercialPartners.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-2">
          {t.commercialPartners.title}
        </h2>
        <p className="text-brand-coral text-sm font-bold uppercase tracking-widest mb-6">
          {t.commercialPartners.subtitle}
        </p>
        <div className="w-16 h-0.5 bg-brand-cyan mb-6" />
        <p className="text-white/60 text-base max-w-3xl leading-relaxed">
          {t.commercialPartners.description}
        </p>
      </ScrollReveal>

      <PartnerLogoGrid partners={commercialPartners} />
    </div>
  </section>
);

export default BrandsThatTrustTheLensSection;
