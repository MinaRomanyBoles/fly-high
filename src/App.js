import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import AerialAdvertisingPage from './pages/AerialAdvertisingPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import MediaProductionPage from './pages/MediaProductionPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';
import { content } from './data/content';
import { useLanguage } from './hooks/useLanguage';
import { usePageTitle } from './hooks/usePageTitle';
import FloatingContactFab from './components/layout/FloatingContactFab';
import ScrollToTop from './components/layout/ScrollToTop';

const AppContent = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];
  usePageTitle(language);

  return (
    <div className={`min-h-screen overflow-x-hidden bg-brand-dark text-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <ScrollToTop />
      <Navbar t={t} language={language} toggleLanguage={toggleLanguage} />
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage t={t} language={language} />} />
          <Route path="/about" element={<AboutPage t={t} />} />
          <Route path="/news" element={<NewsPage t={t} language={language} />} />
          <Route path="/aerial-advertising" element={<AerialAdvertisingPage t={t} />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage t={t} />} />
          <Route path="/media-production" element={<MediaProductionPage t={t} />} />
          <Route path="/web-development" element={<WebDevelopmentPage t={t} />} />
          <Route path="/our-story" element={<OurStoryPage t={t} />} />
          <Route path="/contact" element={<ContactPage t={t} />} />
        </Routes>
      </main>
      <Footer t={t} />
      <FloatingContactFab contact={t.contact} isRtl={language === 'ar'} />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
