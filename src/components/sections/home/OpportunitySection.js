import React from 'react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const OpportunitySection = ({ t }) => (
  <section className="py-24 bg-brand-navy border-y border-white/5">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal className="text-center mb-16">
        <div className="section-accent-line mx-auto mb-6" />
        <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {t.opportunity.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-2">
          {t.opportunity.title}
        </h2>
        <p className="text-brand-coral text-2xl md:text-3xl font-black uppercase">
          {t.opportunity.titleAccent}
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {t.opportunity.items.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 120}>
            <div className="h-full bg-brand-dark border border-white/5 p-8 rounded-lg neon-card">
              <h3 className="text-sm font-black uppercase tracking-wide text-brand-coral mb-4">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OpportunitySection;
