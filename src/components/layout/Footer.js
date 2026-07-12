import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, Facebook } from 'lucide-react';

const Footer = ({ t }) => (
  <footer className="bg-brand-navy border-t border-white/5">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link to="/" className="text-2xl font-bold text-white block mb-4 hover:text-brand-coral transition">
            {t.brand}
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">{t.footer.description}</p>
          <div className="flex flex-col gap-2 text-sm text-white/50">
            <a href={`mailto:${t.contact.email}`} className="flex items-center gap-2 hover:text-brand-cyan transition">
              <Mail className="w-4 h-4" />
              {t.contact.email}
            </a>
            <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-brand-cyan transition">
              <Phone className="w-4 h-4" />
              {t.contact.phone}
            </a>
            <a
              href="https://instagram.com/flyhighbrothers_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-brand-cyan transition"
            >
              <Instagram className="w-4 h-4" />
              {t.contact.instagram}
            </a>
            <a
              href="https://www.facebook.com/flyhighbrothersllc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-brand-cyan transition"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
            {t.footer.servicesTitle}
          </h4>
          <ul className="space-y-3">
            {t.footer.servicesLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/70 hover:text-brand-coral transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
            {t.footer.companyTitle}
          </h4>
          <ul className="space-y-3">
            {t.footer.companyLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/70 hover:text-brand-coral transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-xs text-white/40">{t.footer.copyright}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
