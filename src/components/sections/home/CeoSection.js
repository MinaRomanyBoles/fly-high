import React from 'react';
import ImagePlaceholder from '../../ui/ImagePlaceholder';
import { imagePrompts } from '../../../data/imagePrompts';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const CeoSection = ({ t }) => {
  const ceo = t.story.ceo;

  return (
    <section className="py-24 bg-brand-navy border-y border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-coral/30 to-brand-cyan/30 rounded-lg blur-lg opacity-60" />
              <ImagePlaceholder
                promptKey="ceoPortrait"
                imagePrompts={imagePrompts}
                className="relative w-full aspect-[4/5] max-h-[560px] rounded-lg"
                imgClassName="rounded-lg"
                objectFit="cover"
                objectPosition="center top"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">{ceo.eyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-2">{ceo.name}</h2>
            <p className="text-brand-coral text-sm font-bold uppercase tracking-widest mb-6">CEO</p>
            <p className="text-white/70 text-lg leading-relaxed">{ceo.description}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
