import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'aerial', path: '/aerial-advertising' },
  { key: 'digital', path: '/digital-marketing' },
  { key: 'production', path: '/media-production' },
  { key: 'web', path: '/web-development' },
  { key: 'news', path: '/news' },
  { key: 'story', path: '/our-story' },
];

const Navbar = ({ t, language, toggleLanguage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname === path;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0 group">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-coral transition-colors">
              {t.brand}
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`text-[10px] 2xl:text-xs font-semibold uppercase tracking-wider transition-colors relative pb-1 whitespace-nowrap ${
                  isActive(path)
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-coral after:shadow-[0_0_8px_rgba(255,78,80,0.8)]'
                    : 'text-white/70 hover:text-brand-cyan'
                }`}
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center gap-1 neon-card"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <Link
              to="/contact"
              className="hidden sm:inline-flex bg-brand-coral text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded hover:bg-[#e63e40] transition-colors shadow-[0_0_16px_rgba(255,78,80,0.3)]"
            >
              {t.nav.contact}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="xl:hidden mt-4 pb-4 space-y-2 border-t border-white/10 pt-4 max-h-[70vh] overflow-y-auto">
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`block text-sm font-semibold uppercase tracking-wider py-2 ${
                  isActive(path) ? 'text-brand-coral' : 'text-white/80'
                }`}
              >
                {t.nav[key]}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-center bg-brand-coral text-white text-sm font-bold uppercase py-3 rounded mt-2"
            >
              {t.nav.contact}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
