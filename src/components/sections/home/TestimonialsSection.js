import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ScrollReveal } from '../../../hooks/useScrollReveal';

const TestimonialsSection = ({ t }) => {
  const [active, setActive] = useState(0);
  const items = t.testimonials.items;

  const prev = () => setActive((a) => (a === 0 ? items.length - 1 : a - 1));
  const next = () => setActive((a) => (a === items.length - 1 ? 0 : a + 1));

  return (
    <section className="py-24 bg-brand-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-accent-line mx-auto mb-6" />
          <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
            {t.testimonials.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto relative">
            <Quote className="w-12 h-12 text-brand-coral/30 absolute -top-4 -left-2" />
            <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed text-center px-8 mb-8 min-h-[120px]">
              &ldquo;{items[active].quote}&rdquo;
            </blockquote>
            <div className="text-center">
              <p className="text-brand-coral font-bold text-sm uppercase">{items[active].role}</p>
              <p className="text-white/50 text-sm">{items[active].company}</p>
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <button
                type="button"
                onClick={prev}
                className="p-3 rounded-full border border-white/20 hover:border-brand-coral hover:text-brand-coral transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition ${
                      i === active ? 'bg-brand-coral w-6' : 'bg-white/30'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="p-3 rounded-full border border-white/20 hover:border-brand-coral hover:text-brand-coral transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
