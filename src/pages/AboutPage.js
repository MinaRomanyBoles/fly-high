import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { imagePrompts } from '../data/imagePrompts';
import { ScrollReveal } from '../hooks/useScrollReveal';
import BrandsThatTrustTheLensSection from '../components/sections/BrandsThatTrustTheLensSection';
import CtaSection from '../components/sections/home/CtaSection';

const AboutPage = ({ t }) => {
  const s = t.story;
  const a = t.aboutPage;

  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder promptKey="heroStory" imagePrompts={imagePrompts} className="w-full h-full" priority />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">{a.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">{a.title}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{a.subtitle}</p>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="max-w-3xl mb-16">
            <p className="text-brand-coral text-xl italic mb-6">&ldquo;{a.quote}&rdquo;</p>
            <p className="text-white/70 text-lg leading-relaxed mb-4">{a.intro}</p>
            {s.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-white/60 leading-relaxed mb-4">{p}</p>
            ))}
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <ScrollReveal>
              <div className="neon-card h-full bg-brand-navy border border-white/5 p-8 rounded-lg">
                <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2">{s.vision.title}</p>
                <h3 className="text-xl font-black uppercase text-white mb-4">{s.vision.heading}</h3>
                <p className="text-white/60 leading-relaxed">{s.vision.description}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="neon-card h-full bg-brand-navy border border-white/5 p-8 rounded-lg">
                <p className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-2">{s.mission.title}</p>
                <h3 className="text-xl font-black uppercase text-white mb-4">{s.mission.heading}</h3>
                <p className="text-white/60 leading-relaxed">{s.mission.description}</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <ScrollReveal>
              <ImagePlaceholder
                promptKey="ceoPortrait"
                imagePrompts={imagePrompts}
                className="w-full aspect-[4/5] max-h-[560px] rounded-lg"
                imgClassName="rounded-lg"
                objectFit="cover"
                objectPosition="center top"
              />
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-4">{s.ceo.eyebrow}</p>
              <h3 className="text-3xl font-black text-white mb-4">{s.ceo.name}</h3>
              <div className="space-y-4">
                {s.ceo.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-white/60 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="text-center">
            <Link
              to="/our-story"
              className="inline-flex bg-brand-coral text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-[#e63e40] transition"
            >
              {t.nav.story}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <BrandsThatTrustTheLensSection t={t} />
      <CtaSection t={t} />
    </>
  );
};

export default AboutPage;
