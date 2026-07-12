import React from 'react';
import AnimatedCounter from '../../ui/AnimatedCounter';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const SolutionSection = ({ t }) => (
  <section className="py-24 bg-brand-navy">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <ScrollReveal>
        <div className="section-accent-line mx-auto mb-6" />
        <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {t.solution.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-2">
          {t.solution.title}
        </h2>
        <p className="text-brand-coral text-2xl md:text-3xl font-black uppercase mb-8">
          {t.solution.titleAccent}
        </p>
        <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
          {t.solution.description}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {t.solution.stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 150}>
            <div className="p-8 border border-white/10 rounded-lg bg-brand-dark/50 neon-card">
              <p className="text-5xl md:text-6xl font-black text-white mb-2">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-brand-coral text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
