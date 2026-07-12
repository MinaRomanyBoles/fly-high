import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, BarChart3, Clapperboard, Code2 } from 'lucide-react';
import ImagePlaceholder from '../../ui/ImagePlaceholder';
import { imagePrompts } from '../../../data/imagePrompts';
import { serviceImageKeys } from '../../../data/content';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const icons = [Plane, BarChart3, Clapperboard, Code2];
const promptKeys = ['serviceAerial', 'serviceDigital', 'serviceProduction', 'serviceWeb'];

const ServicesGridSection = ({ t }) => (
  <section className="py-24 bg-brand-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal className="text-center mb-16">
        <div className="section-accent-line mx-auto mb-6" />
        <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {t.services.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-2">
          {t.services.title}
        </h2>
        <p className="text-brand-coral text-2xl md:text-3xl font-black uppercase mb-6">
          {t.services.titleAccent}
        </p>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.services.items.map((service, i) => {
          const Icon = icons[i];
          const promptKey = serviceImageKeys[service.title] || promptKeys[i];
          return (
            <ScrollReveal key={service.path} delay={i * 100}>
              <Link
                to={service.path}
                className="group relative block h-72 md:h-80 overflow-hidden rounded-lg neon-card border border-white/5"
              >
                <ImagePlaceholder
                  promptKey={promptKey}
                  imagePrompts={imagePrompts}
                  className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 card-overlay" />
                <div className="absolute bottom-0 left-0 p-8 flex items-end gap-3">
                  <Icon className="w-6 h-6 text-brand-coral flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-black uppercase text-white group-hover:text-brand-coral transition-colors">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesGridSection;
