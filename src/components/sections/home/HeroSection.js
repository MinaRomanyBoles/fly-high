import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Plane } from 'lucide-react';
import ImagePlaceholder from '../../ui/ImagePlaceholder';
import VideoModal from '../../ui/VideoModal';
import { imagePrompts } from '../../../data/imagePrompts';

export const SHOWREEL_VIDEO = '/SHOWREEL.mp4';

const HeroSection = ({ t }) => {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder
            promptKey="heroHome"
            imagePrompts={imagePrompts}
            className="w-full h-full"
            priority
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,200,255,0.08)_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-brand-cyan text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 animate-fade-in">
              <Plane className="w-4 h-4 flex-shrink-0" />
              {t.hero.eyebrow}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] mb-4 sm:mb-6 break-words">
              <span className="text-white block">{t.hero.titleLine1}</span>
              <span className="text-brand-coral block drop-shadow-[0_0_30px_rgba(255,78,80,0.4)]">
                {t.hero.titleLine2}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-10">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/aerial-advertising"
                className="inline-flex items-center justify-center bg-brand-coral text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-[#e63e40] transition-all hover:scale-[1.02] shadow-[0_0_24px_rgba(255,78,80,0.35)]"
              >
                {t.hero.ctaPrimary}
              </Link>
              <button
                type="button"
                onClick={() => setShowreelOpen(true)}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white/10 transition-all neon-card"
              >
                <Play className="w-4 h-4 fill-white" />
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        src={SHOWREEL_VIDEO}
        title={t.hero.ctaSecondary}
      />
    </>
  );
};

export default HeroSection;
