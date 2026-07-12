import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { ScrollReveal } from '../hooks/useScrollReveal';
import NewsPostDialog from '../components/ui/NewsPostDialog';
import { newsPosts } from '../data/news';
import { filterPosts, formatPostDate } from '../utils/newsHelpers';

const NewsPage = ({ t, language }) => {
  const np = t.newsPage;
  const [query, setQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filtered = useMemo(
    () => filterPosts(newsPosts, query, language),
    [query, language]
  );

  return (
    <>
      <section className="pt-32 pb-24 bg-brand-dark min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="mb-10 text-center">
            <p className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4">{np.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">{np.title}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">{np.subtitle}</p>

            <div className="relative max-w-xl w-full mx-auto">
              <Search className="absolute top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 start-4 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={np.searchPlaceholder}
                className="w-full bg-brand-navy border border-white/10 rounded-lg py-4 ps-12 pe-4 text-white placeholder:text-white/40 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan/50 transition text-center sm:text-start"
              />
            </div>
          </ScrollReveal>

          {filtered.length === 0 ? (
            <p className="text-white/50 text-center py-20">{np.noResults}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <ScrollReveal key={post.id} delay={(i % 3) * 80}>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    className="neon-card group w-full text-start overflow-hidden rounded-lg border border-white/5 bg-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.cover}
                        alt={post.title[language]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-lg font-black text-white leading-snug line-clamp-2 mb-2 group-hover:text-brand-coral transition-colors">
                          {post.title[language]}
                        </h2>
                        <time className="text-brand-cyan text-xs font-semibold uppercase tracking-wider">
                          {formatPostDate(post.date, language)}
                        </time>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <NewsPostDialog
        post={selectedPost}
        language={language}
        onClose={() => setSelectedPost(null)}
      />
    </>
  );
};

export default NewsPage;
