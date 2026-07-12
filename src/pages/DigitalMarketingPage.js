import React from 'react';
import { BarChart3 } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { imagePrompts } from '../data/imagePrompts';
import { ScrollReveal } from '../hooks/useScrollReveal';
import CtaSection from '../components/sections/home/CtaSection';

const DigitalMarketingPage = ({ t }) => {
  const d = t.digital;

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder promptKey="heroDigital" imagePrompts={imagePrompts} className="w-full h-full" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <p className="flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <BarChart3 className="w-4 h-4" />
            {d.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
            {d.title} <span className="text-brand-coral">{d.titleAccent}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">{d.description}</p>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-3xl font-black uppercase text-white mb-4">{d.strategyTitle}</h2>
            <p className="text-white/60 max-w-3xl leading-relaxed">{d.strategyDescription}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-brand-navy border border-white/5 p-8 rounded-lg h-full">
                <h3 className="text-brand-coral text-sm font-black uppercase tracking-widest mb-6">
                  DIGITAL
                </h3>
                <ul className="space-y-3">
                  {d.digital.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <span className="text-brand-cyan">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-brand-navy border border-white/5 p-8 rounded-lg h-full">
                <h3 className="text-brand-coral text-sm font-black uppercase tracking-widest mb-6">
                  STRATEGY & CREATIVE
                </h3>
                <ul className="space-y-3">
                  {d.strategy.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <span className="text-brand-cyan">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaSection t={t} />
    </>
  );
};

export default DigitalMarketingPage;
