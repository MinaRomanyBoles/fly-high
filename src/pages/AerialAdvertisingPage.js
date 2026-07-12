import React from 'react';
import { Plane, Gift, Music, MapPin } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { imagePrompts } from '../data/imagePrompts';
import { ScrollReveal } from '../hooks/useScrollReveal';
import CtaSection from '../components/sections/home/CtaSection';

const serviceIcons = [Plane, Gift, Music, MapPin];
const servicePrompts = ['aerialBannerDragging', 'aerialGiftDropping', 'aerialEventFlyover', 'aerialVipSightseeing'];

const ServiceList = ({ items }) => (
  <ul className="mt-auto space-y-2 pt-4 border-t border-white/5">
    {items.map((item) => (
      <li key={item} className="text-xs sm:text-sm text-white/55 flex items-start gap-2">
        <span className="text-brand-coral mt-0.5 flex-shrink-0">▸</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const AerialServiceCard = ({ service, icon: Icon, promptKey, featured = false, index }) => {
  const listItems = service.idealFor || service.useCases || service.tourOptions;

  if (featured) {
    return (
      <div className="neon-card overflow-hidden rounded-xl border border-white/10 bg-brand-navy lg:flex lg:min-h-[440px]">
        <div className="relative lg:w-[48%] aspect-[16/10] lg:aspect-auto bg-brand-dark flex-shrink-0">
          <ImagePlaceholder
            promptKey={promptKey}
            imagePrompts={imagePrompts}
            className="absolute inset-0 w-full h-full"
            objectFit="contain"
            objectPosition="center"
          />
          <div className="absolute top-4 start-4 bg-brand-coral text-white text-xs font-black px-3 py-1 rounded">
            01
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1 border-t lg:border-t-0 lg:border-s border-white/5">
          <Icon className="w-8 h-8 text-brand-coral mb-4" />
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-3">{service.title}</h3>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
          {service.specs && (
            <div className="flex flex-wrap gap-2 mb-4">
              {service.specs.map((spec) => (
                <span key={spec} className="text-xs bg-white/10 px-3 py-1.5 rounded-full text-brand-cyan">
                  {spec}
                </span>
              ))}
            </div>
          )}
          {listItems && <ServiceList items={listItems} />}
        </div>
      </div>
    );
  }

  return (
    <div className="neon-card flex flex-col h-full overflow-hidden rounded-xl border border-white/5 bg-brand-navy">
      <div className="relative w-full aspect-[16/10] bg-brand-dark flex-shrink-0">
        <ImagePlaceholder
          promptKey={promptKey}
          imagePrompts={imagePrompts}
          className="absolute inset-0 w-full h-full"
          objectFit="contain"
          objectPosition="center"
        />
        <div className="absolute top-3 start-3 bg-brand-dark/80 border border-white/10 text-brand-cyan text-xs font-black px-2.5 py-1 rounded">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1 border-t border-white/5">
        <Icon className="w-6 h-6 text-brand-coral mb-3" />
        <h3 className="text-lg sm:text-xl font-black uppercase text-white mb-2">{service.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-3">{service.description}</p>

        {service.highlight && (
          <div className="bg-brand-dark border border-brand-cyan/30 px-3 py-2 text-[10px] sm:text-xs font-bold uppercase text-brand-cyan w-fit mb-3 rounded">
            {service.highlight}
          </div>
        )}

        {listItems && <ServiceList items={listItems} />}
      </div>
    </div>
  );
};

const AerialAdvertisingPage = ({ t }) => {
  const a = t.aerial;
  const [featured, ...restServices] = a.services;

  return (
    <>
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder promptKey="heroAerial" imagePrompts={imagePrompts} className="w-full h-full" priority />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 sm:pt-32 pb-12 sm:pb-16 w-full">
          <div className="max-w-4xl">
            <p className="flex items-center gap-2 text-brand-cyan text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6">
              <Plane className="w-4 h-4 flex-shrink-0" />
              {a.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-tight mb-4 sm:mb-6">
              {a.title}{' '}
              <span className="text-brand-coral">{a.titleAccent}</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">{a.description}</p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            {a.stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-lg border p-4 sm:p-5 ${
                  stat.highlight
                    ? 'border-brand-coral/40 bg-brand-coral/10'
                    : 'border-white/10 bg-brand-navy/60 backdrop-blur-sm'
                }`}
              >
                <p className="text-[10px] sm:text-xs text-white/45 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className={`text-xl sm:text-2xl font-black ${stat.highlight ? 'text-brand-coral' : 'text-white'}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-brand-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="section-accent-line mx-auto mb-4" />
            <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2">{a.servicesTitle}</p>
            <p className="text-white/70 text-base sm:text-lg">{a.servicesSubtitle}</p>
          </ScrollReveal>

          <ScrollReveal className="mb-8 sm:mb-10">
            <AerialServiceCard
              service={featured}
              icon={serviceIcons[0]}
              promptKey={servicePrompts[0]}
              featured
              index={0}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {restServices.map((service, i) => {
              const idx = i + 1;
              const Icon = serviceIcons[idx];
              return (
                <ScrollReveal key={service.title} delay={i * 80}>
                  <AerialServiceCard
                    service={service}
                    icon={Icon}
                    promptKey={servicePrompts[idx]}
                    index={idx}
                  />
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

export default AerialAdvertisingPage;
