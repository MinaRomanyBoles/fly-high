import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { content } from '../data/content';

const routeTitles = {
  '/': null,
  '/about': 'about',
  '/news': 'news',
  '/aerial-advertising': 'aerial',
  '/digital-marketing': 'digital',
  '/media-production': 'production',
  '/web-development': 'web',
  '/our-story': 'story',
  '/contact': 'contact',
};

export const usePageTitle = (language) => {
  const { pathname } = useLocation();
  const t = content[language];

  useEffect(() => {
    const key = routeTitles[pathname];
    if (pathname === '/') {
      document.title = `${t.brand} | ${t.tagline}`;
    } else if (key === 'about') {
      document.title = `${t.aboutPage.title} | ${t.brand}`;
    } else if (key === 'news') {
      document.title = `${t.newsPage.title} | ${t.brand}`;
    } else if (key === 'contact') {
      document.title = `${t.contact.title} | ${t.brand}`;
    } else if (key && t.nav[key]) {
      document.title = `${t.nav[key]} | ${t.brand}`;
    } else {
      document.title = t.brand;
    }
  }, [pathname, language, t]);
};

export default usePageTitle;
