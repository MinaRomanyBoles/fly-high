import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Gift, Music, MapPin } from 'lucide-react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const icons = [Plane, Gift, Music, MapPin];

const AerialPreviewSection = ({ t }) => {
  const a = t.aerial;

  return (
    <section className="py-24 bg-brand-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">{a.eyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
              {a.title} <span className="text-brand-coral">{a.titleAccent}</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-6">
            {a.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs text-white/40 uppercase">{stat.label}</p>
                <p className={`text-xl font-black ${stat.highlight ? 'text-brand-coral' : 'text-white'}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {a.services.map((service, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="neon-card bg-brand-dark border border-white/5 p-6 rounded-lg h-full">
                  <Icon className="w-6 h-6 text-brand-coral mb-3" />
                  <h3 className="text-lg font-black uppercase text-white mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="text-center">
          <Link
            to="/aerial-advertising"
            className="inline-flex bg-brand-coral text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-[#e63e40] transition"
          >
            {t.hero.ctaPrimary}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AerialPreviewSection;
