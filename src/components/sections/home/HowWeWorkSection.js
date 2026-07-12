import React from 'react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const HowWeWorkSection = ({ t }) => (
  <section className="py-24 bg-brand-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal className="text-center mb-16">
        <div className="section-accent-line mx-auto mb-6" />
        <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {t.howWeWork.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
          {t.howWeWork.title}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.howWeWork.steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 120}>
            <div className="relative p-8 border border-white/5 rounded-lg bg-brand-navy/30 h-full neon-card">
              <span className="text-5xl font-black text-brand-coral/20 absolute top-4 right-4">
                {step.number}
              </span>
              <h3 className="text-lg font-black uppercase text-white mb-4 mt-8">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWorkSection;
