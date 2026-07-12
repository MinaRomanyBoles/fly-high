import React from 'react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const VisionMissionSection = ({ t }) => {
  const s = t.story;

  return (
    <section className="py-24 bg-brand-navy border-y border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="neon-card h-full bg-brand-dark border border-white/5 p-8 rounded-lg">
              <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2">{s.vision.title}</p>
              <h3 className="text-2xl font-black uppercase text-white mb-4">{s.vision.heading}</h3>
              <p className="text-white/60 leading-relaxed">{s.vision.description}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="neon-card h-full bg-brand-dark border border-white/5 p-8 rounded-lg">
              <p className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-2">{s.mission.title}</p>
              <h3 className="text-2xl font-black uppercase text-white mb-4">{s.mission.heading}</h3>
              <p className="text-white/60 leading-relaxed">{s.mission.description}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
