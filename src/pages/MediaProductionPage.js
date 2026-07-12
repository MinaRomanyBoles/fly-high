import React from 'react';
import { Clapperboard, Camera, Film, Video } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { imagePrompts } from '../data/imagePrompts';
import { ScrollReveal } from '../hooks/useScrollReveal';
import CtaSection from '../components/sections/home/CtaSection';
import BrandsThatTrustTheLensSection from '../components/sections/BrandsThatTrustTheLensSection';

const capabilityIcons = [Camera, Film, Video, Clapperboard];

const MediaProductionPage = ({ t }) => {
  const p = t.production;

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder promptKey="heroProduction" imagePrompts={imagePrompts} className="w-full h-full" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-6">{p.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
            {p.title} <span className="text-brand-coral">{p.titleAccent}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-4">{p.description}</p>
          <p className="text-white/50 text-sm max-w-2xl italic">{p.integration}</p>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {p.capabilities.map((cap, i) => {
              const Icon = capabilityIcons[i];
              return (
                <ScrollReveal key={cap.title} delay={i * 100}>
                  <div className="bg-brand-navy border border-white/5 p-8 rounded-lg h-full interactive-shadow">
                    <Icon className="w-8 h-8 text-brand-coral mb-4" />
                    <h3 className="text-lg font-black uppercase text-white mb-3">{cap.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{cap.description}</p>
                    <ul className="space-y-2">
                      {cap.features.map((f) => (
                        <li key={f} className="text-xs text-white/50 flex gap-2">
                          <span className="text-brand-cyan">▸</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white">{p.workflow.title}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.workflow.stages.map((stage, i) => (
              <ScrollReveal key={stage.number} delay={i * 100}>
                <div className="bg-brand-navy/50 border border-white/5 p-6 rounded-lg h-full">
                  <span className="text-3xl font-black text-brand-coral/30">{stage.number}</span>
                  <h4 className="text-sm font-black uppercase text-white mt-2 mb-4">{stage.title}</h4>
                  <ul className="space-y-2">
                    {stage.items.map((item) => (
                      <li key={item} className="text-xs text-white/50">{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BrandsThatTrustTheLensSection t={t} />

      <CtaSection t={t} />
    </>
  );
};

export default MediaProductionPage;
