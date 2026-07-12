import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const CtaSection = ({ t }) => (
  <section className="py-32 bg-brand-navy relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#ff4e50_0%,transparent_60%)]" />
    <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
      <ScrollReveal>
        <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {t.cta.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase text-white mb-4 break-words">
          {t.cta.title}
        </h2>
        <p className="text-white/50 text-lg mb-10 italic">{t.cta.subtitle}</p>
        <Link
          to="/contact"
          className="inline-flex bg-brand-coral text-white font-bold uppercase tracking-wider text-sm px-10 py-4 hover:bg-[#e63e40] transition-all hover:scale-[1.02]"
        >
          {t.cta.button}
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

export default CtaSection;
