import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const DRONE_TECH_LOGO = '/images/White.png';

const DroneTechPartnerSection = ({ t }) => {
  const d = t.story.droneTech;

  return (
    <section className="py-24 bg-brand-navy border-y border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">{d.eyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-4">
              {d.title}{' '}
              <span className="text-brand-coral">{d.titleAccent}</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">{d.subtitle}</p>
            <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-6">{d.description}</p>
            <p className="text-brand-coral italic text-sm sm:text-base mb-8 border-s-2 border-brand-coral/50 ps-4">
              &ldquo;{d.quote}&rdquo;
            </p>

            <ul className="space-y-3 mb-10">
              {d.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                  <span className="text-brand-cyan mt-0.5 flex-shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-coral text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-[#e63e40] transition"
            >
              {d.cta}
              <ExternalLink className="w-4 h-4" />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="flex flex-col items-center justify-center py-8 sm:py-12">
              <img
                src={DRONE_TECH_LOGO}
                alt="Drone Tech"
                className="w-full max-w-[320px] sm:max-w-[380px] h-auto object-contain"
                loading="lazy"
              />
              <p className="mt-6 text-white/40 text-xs font-bold uppercase tracking-[0.25em]">
                {d.badge}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DroneTechPartnerSection;
