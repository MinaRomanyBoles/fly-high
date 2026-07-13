import React, { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const DRONE_TECH_LOGO = '/images/White.png';

const DroneTechLogo = ({ badge, url }) => {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: Math.max(-1, Math.min(1, py)) * -10,
      y: Math.max(-1, Math.min(1, px)) * 14,
    });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="drone-logo-link group block w-full max-w-[540px] mx-auto outline-none"
      aria-label="Drone Tech"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      onFocus={() => setHovered(true)}
      onBlur={handleLeave}
    >
      <div
        ref={stageRef}
        className="drone-logo-stage relative aspect-[4/3] w-full flex flex-col items-center justify-center"
      >
        <div
          className="drone-logo-float relative z-10 will-change-transform"
          style={{
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.06 : 1})`,
            transition: hovered
              ? 'transform 0.12s ease-out'
              : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <img
            src={DRONE_TECH_LOGO}
            alt="Drone Tech"
            className="w-full max-w-[450px] sm:max-w-[510px] h-auto object-contain drop-shadow-[0_0_28px_rgba(0,200,255,0.35)] group-hover:drop-shadow-[0_0_40px_rgba(0,200,255,0.55)] transition-[filter] duration-300"
            loading="lazy"
            draggable={false}
          />
        </div>

        <p className="relative z-10 mt-6 text-white/45 text-xs font-bold uppercase tracking-[0.25em] group-hover:text-brand-cyan transition-colors duration-300">
          {badge}
        </p>
      </div>
    </a>
  );
};

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
            <DroneTechLogo badge={d.badge} url={d.url} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DroneTechPartnerSection;
