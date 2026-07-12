import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import ImagePlaceholder from '../../ui/ImagePlaceholder';
import { imagePrompts } from '../../../data/imagePrompts';

const campaignPrompts = ['campaignEid', 'campaignStadium', 'campaignNorthCoast', 'campaignSightseeing'];

const CampaignsPreviewSection = ({ t }) => {
  const c = t.story.campaigns;

  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal className="mb-12">
          <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-2">
            {c.title} <span className="text-brand-coral">{c.titleAccent}</span>
          </h2>
          <p className="text-white/60 max-w-2xl">{c.subtitle}</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {c.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="neon-card relative overflow-hidden rounded-lg h-48 lg:h-56 group">
                <ImagePlaceholder
                  promptKey={campaignPrompts[i]}
                  imagePrompts={imagePrompts}
                  className="absolute inset-0 w-full h-full"
                  objectFit="cover"
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

        <ScrollReveal className="text-center">
          <Link
            to="/news"
            className="inline-flex border border-brand-coral text-brand-coral font-bold uppercase tracking-wider text-sm px-8 py-3 hover:bg-brand-coral hover:text-white transition"
          >
            {t.nav.news}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CampaignsPreviewSection;
