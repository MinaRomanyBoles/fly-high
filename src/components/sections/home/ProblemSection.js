import React from 'react';
import { EyeOff, LayoutGrid, VolumeX } from 'lucide-react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const icons = [EyeOff, LayoutGrid, VolumeX];

const ProblemSection = ({ t }) => (
  <section className="py-24 bg-brand-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal className="flex flex-col justify-center">
          <div className="section-accent-line mb-6" />
          <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {t.problem.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-2">
            {t.problem.title}
          </h2>
          <p className="text-brand-coral text-xl md:text-2xl font-bold uppercase mb-6">
            {t.problem.subtitle}
          </p>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            {t.problem.description}
          </p>
          <p className="text-white/40 text-sm italic">{t.problem.bridge}</p>
        </ScrollReveal>

        <div className="grid gap-4">
          {t.problem.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={card.title} delay={i * 120}>
                <div className="neon-card bg-brand-navy border border-white/5 p-8 rounded-lg hover:border-brand-coral/30 transition-colors">
                  <Icon className="w-8 h-8 text-brand-coral mb-4" />
                  <h3 className="text-lg font-bold uppercase text-white mb-3">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
