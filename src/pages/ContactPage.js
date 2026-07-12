import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { ScrollReveal } from '../hooks/useScrollReveal';

const ContactPage = ({ t }) => {
  const c = t.contact;

  return (
    <section className="min-h-screen pt-32 pb-24 bg-brand-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-accent-line mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">{c.title}</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">{c.subtitle}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="space-y-6">
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-4 bg-brand-navy border border-white/5 p-6 rounded-lg hover:border-brand-coral/30 transition interactive-shadow"
              >
                <Mail className="w-8 h-8 text-brand-coral" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                  <p className="text-white font-semibold">{c.email}</p>
                </div>
              </a>
              <a
                href={`tel:${c.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 bg-brand-navy border border-white/5 p-6 rounded-lg hover:border-brand-coral/30 transition interactive-shadow"
              >
                <Phone className="w-8 h-8 text-brand-coral" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Phone</p>
                  <p className="text-white font-semibold">{c.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-brand-navy border border-white/5 p-6 rounded-lg">
                <MapPin className="w-8 h-8 text-brand-coral" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Location</p>
                  <p className="text-white font-semibold">Cairo, Egypt</p>
                  <p className="text-white/50 text-sm mt-1">{c.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-brand-navy border border-white/5 p-6 rounded-lg">
                <Instagram className="w-8 h-8 text-brand-coral" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Instagram</p>
                  <p className="text-white font-semibold">{c.instagram}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <form
              className="bg-brand-navy border border-white/5 p-5 sm:p-8 rounded-lg space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:border-brand-coral outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:border-brand-coral outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:border-brand-coral outline-none transition resize-none"
                  placeholder="Tell us about your campaign..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-coral text-white font-bold uppercase tracking-wider py-4 hover:bg-[#e63e40] transition"
              >
                {t.cta.button}
              </button>
            </form>
          </ScrollReveal>
        </div>

        <div id="safety" className="max-w-3xl mx-auto mt-20 pt-12 border-t border-white/10">
          <h2 className="text-lg font-bold uppercase text-white/60 mb-4">Flight Safety</h2>
          <p className="text-white/40 text-sm leading-relaxed">
            All aerial operations are conducted in full compliance with Egyptian Civil Aviation Authority regulations.
            Our fleet is maintained to international standards with certified pilots and crew.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
