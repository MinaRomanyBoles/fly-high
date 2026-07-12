import React from 'react';
import { Code2, Globe, Smartphone, ShoppingCart, Palette, Wrench } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { imagePrompts } from '../data/imagePrompts';
import { ScrollReveal } from '../hooks/useScrollReveal';
import CtaSection from '../components/sections/home/CtaSection';

const deliverableIcons = [Globe, ShoppingCart, Smartphone, Wrench, Palette];

const WebDevelopmentPage = ({ t }) => {
  const w = t.web;

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder promptKey="heroWeb" imagePrompts={imagePrompts} className="w-full h-full" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <p className="flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Code2 className="w-4 h-4" />
            {w.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
            {w.title} <span className="text-brand-coral">{w.titleAccent}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">{w.description}</p>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-2xl font-black uppercase text-white mb-2">DELIVERABLES</h2>
            <div className="section-accent-line" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {w.deliverables.map((item, i) => {
              const Icon = deliverableIcons[i] || Code2;
              return (
                <ScrollReveal key={item} delay={i * 80}>
                  <div className="flex items-start gap-4 bg-brand-navy border border-white/5 p-6 rounded-lg interactive-shadow">
                    <Icon className="w-8 h-8 text-brand-coral flex-shrink-0" />
                    <p className="text-white/80 font-medium">{item}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection t={t} />
    </>
  );
};

export default WebDevelopmentPage;
