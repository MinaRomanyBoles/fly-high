import React from 'react';
import { Shield, Eye, Award, Layers } from 'lucide-react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const icons = [Shield, Eye, Award, Layers];

const WhyUsSection = ({ t }) => (
  <section className="py-24 bg-brand-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal className="text-center mb-16">
        <div className="section-accent-line mx-auto mb-6" />
        <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {t.whyUs.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
          {t.whyUs.title}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.whyUs.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="h-full bg-brand-navy border border-white/5 p-8 rounded-lg neon-card group">
                <Icon className="w-10 h-10 text-brand-coral mb-6 group-hover:text-brand-cyan transition-colors" />
                <h3 className="text-sm font-black uppercase tracking-wide text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
