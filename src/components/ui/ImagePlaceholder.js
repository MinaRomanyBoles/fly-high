import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';

export const getImageSrc = (promptKey, imagePrompts) => {
  const data = imagePrompts[promptKey];
  return data ? `/images/${data.id}.jpg` : null;
};

const ImagePlaceholder = ({
  promptKey,
  imagePrompts,
  className = '',
  imgClassName = '',
  showPromptOnHover = false,
  alt,
  loading = 'lazy',
  priority = false,
  objectFit = 'cover',
  objectPosition = 'center',
}) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const data = imagePrompts[promptKey];

  const fitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover';
  const positionClass =
    objectPosition === 'center top'
      ? 'object-center object-top'
      : objectPosition === 'top'
        ? 'object-top'
        : 'object-center';

  if (!data) {
    return (
      <div className={`bg-brand-navy flex items-center justify-center ${className}`}>
        <ImageIcon className="w-8 h-8 text-brand-cyan/40" />
      </div>
    );
  }

  const src = `/images/${data.id}.jpg`;
  const imageAlt = alt || data.label;

  if (!failed) {
    return (
      <div className={`relative overflow-hidden bg-brand-navy ${className}`}>
        {!loaded && (
          <div className="absolute inset-0 bg-brand-navy animate-pulse" aria-hidden="true" />
        )}
        <img
          src={src}
          alt={imageAlt}
          className={`w-full h-full ${fitClass} ${positionClass} transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          loading={priority ? 'eager' : loading}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-brand-navy group ${className}`}
      role="img"
      aria-label={imageAlt}
      data-image-id={data.id}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#1a3550] to-brand-dark opacity-90" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <ImageIcon className="w-10 h-10 text-brand-cyan/50 mb-3" />
        <span className="text-xs font-semibold uppercase tracking-widest text-white/40">{data.label}</span>
      </div>
      {showPromptOnHover && (
        <div className="absolute inset-0 z-20 bg-black/90 p-4 overflow-y-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs text-white/80 leading-relaxed">{data.prompt}</p>
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder;
