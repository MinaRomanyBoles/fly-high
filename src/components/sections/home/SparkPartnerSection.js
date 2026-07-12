import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import ImagePlaceholder from '../../ui/ImagePlaceholder';
import { imagePrompts } from '../../../data/imagePrompts';

const SparkPartnerSection = ({ t }) => {
  const p = t.story.partner;

  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">{p.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">{p.title}</h2>
            <p className="text-white/60 mb-4">{p.description}</p>
            <p className="text-brand-coral italic mb-6">&ldquo;{p.quote}&rdquo;</p>
            <ul className="space-y-2 mb-8">
              {p.credentials.map((c) => (
                <li key={c} className="text-white/50 text-sm flex gap-2">
                  <span className="text-brand-cyan">▸</span> {c}
                </li>
              ))}
            </ul>
            <Link to="/about" className="text-brand-coral font-bold uppercase text-sm tracking-wider hover:text-white transition">
              {t.nav.about} →
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ImagePlaceholder
              promptKey="partnerSpark"
              imagePrompts={imagePrompts}
              className="w-full aspect-video rounded-lg neon-card"
              imgClassName="rounded-lg"
              objectFit="cover"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SparkPartnerSection;
