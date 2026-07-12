import React from 'react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { imagePrompts } from '../data/imagePrompts';
import { ScrollReveal } from '../hooks/useScrollReveal';
import CtaSection from '../components/sections/home/CtaSection';

const campaignPrompts = ['campaignEid', 'campaignStadium', 'campaignNorthCoast', 'campaignSightseeing'];

const OurStoryPage = ({ t }) => {
  const s = t.story;

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder promptKey="heroStory" imagePrompts={imagePrompts} className="w-full h-full" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-6">{s.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
            {s.title} <span className="text-brand-coral">{s.titleAccent}</span>
          </h1>
          <p className="text-brand-coral text-xl italic mb-6">&ldquo;{s.quote}&rdquo;</p>
          <div className="space-y-4 max-w-2xl">
            {s.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="text-white/70 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <ScrollReveal>
              <div className="bg-brand-navy border border-white/5 p-8 rounded-lg h-full">
                <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2">{s.vision.title}</p>
                <h3 className="text-xl font-black uppercase text-white mb-4">{s.vision.heading}</h3>
                <p className="text-white/60 leading-relaxed">{s.vision.description}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bg-brand-navy border border-white/5 p-8 rounded-lg h-full">
                <p className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-2">{s.mission.title}</p>
                <h3 className="text-xl font-black uppercase text-white mb-4">{s.mission.heading}</h3>
                <p className="text-white/60 leading-relaxed">{s.mission.description}</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <ImagePlaceholder
                promptKey="ceoPortrait"
                imagePrompts={imagePrompts}
                className="w-full h-96 rounded-lg"
                imgClassName="rounded-lg"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-4">{s.ceo.eyebrow}</p>
              <h3 className="text-3xl font-black text-white mb-4">{s.ceo.name}</h3>
              <p className="text-white/60 leading-relaxed">{s.ceo.description}</p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mb-12">
            <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2">{s.partner.eyebrow}</p>
            <h3 className="text-3xl font-black uppercase text-white mb-4">{s.partner.title}</h3>
            <p className="text-white/60 max-w-2xl mb-4">{s.partner.description}</p>
            <p className="text-brand-coral italic">&ldquo;{s.partner.quote}&rdquo;</p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <ScrollReveal>
              <ImagePlaceholder
                promptKey="partnerSpark"
                imagePrompts={imagePrompts}
                className="w-full h-64 rounded-lg"
                imgClassName="rounded-lg"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <ul className="space-y-3">
                {s.partner.credentials.map((c) => (
                  <li key={c} className="flex gap-3 text-white/70 text-sm">
                    <span className="text-brand-coral">▸</span> {c}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mb-12">
            <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2">{s.campaigns.eyebrow}</p>
            <h3 className="text-3xl font-black uppercase text-white mb-2">
              {s.campaigns.title} <span className="text-brand-coral">{s.campaigns.titleAccent}</span>
            </h3>
            <p className="text-white/50">{s.campaigns.subtitle}</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {s.campaigns.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="relative overflow-hidden rounded-lg h-48 group">
                  <ImagePlaceholder
                    promptKey={campaignPrompts[i]}
                    imagePrompts={imagePrompts}
                    className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                    imgClassName="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 card-overlay" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-white font-bold text-sm uppercase">{item.title}</p>
                    <p className="text-brand-cyan text-xs">{item.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection t={t} />
    </>
  );
};

export default OurStoryPage;
