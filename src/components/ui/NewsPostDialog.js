import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import MediaCarousel from './MediaCarousel';
import { formatPostDate, getPostMedia } from '../../utils/newsHelpers';

const NewsPostDialog = ({ post, language, onClose }) => {
  useEffect(() => {
    if (!post) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [post, onClose]);

  if (!post) return null;

  const media = getPostMedia(post);

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-dialog-title"
    >
      <div
        className="news-dialog-panel relative w-full max-w-3xl max-h-[85dvh] sm:max-h-[90vh] overflow-y-auto rounded-xl border border-white/10 bg-brand-navy shadow-[0_0_60px_rgba(0,200,255,0.15)] mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-brand-coral transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 sm:p-6 lg:p-8">
          <MediaCarousel items={media} alt={post.title[language]} />

          <time className="block text-brand-cyan text-xs font-semibold uppercase tracking-widest mt-6 mb-3">
            {formatPostDate(post.date, language)}
          </time>
          <h2 id="news-dialog-title" className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 break-words">
            {post.title[language]}
          </h2>
          <p className="text-white/70 leading-relaxed whitespace-pre-line">
            {post.description[language]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPostDialog;
