import React from 'react';
import AnimatedCounter from '../../ui/AnimatedCounter';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const ImpactSection = ({ t }) => (
  <section className="py-24 bg-brand-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal className="text-center mb-16">
        <div className="section-accent-line mx-auto mb-6" />
        <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {t.impact.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
          {t.impact.title}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {t.impact.stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 100}>
            <div className="text-center p-6 border border-white/5 rounded-lg bg-brand-navy/50 neon-card">
              <p className="text-4xl md:text-5xl font-black text-brand-coral mb-2">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-xs text-white/50 uppercase tracking-wide leading-snug">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
