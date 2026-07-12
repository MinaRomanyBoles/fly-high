import React from 'react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import PartnerLogoGrid from '../../ui/PartnerLogoGrid';
import { flyPartners } from '../../../data/partners';

const BrandsThatFlyWithUsSection = ({ t }) => (
  <section className="py-24 bg-brand-navy border-y border-white/5">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal className="mb-12">
        <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {t.flyPartners.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
          {t.flyPartners.title}
        </h2>
        <p className="text-white/60 text-base max-w-2xl leading-relaxed">
          {t.flyPartners.description}
        </p>
      </ScrollReveal>

      <PartnerLogoGrid partners={flyPartners} />
    </div>
  </section>
);

export default BrandsThatFlyWithUsSection;
