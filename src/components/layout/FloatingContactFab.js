import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { MessageCircle, X, Mail, Phone, Facebook } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ORBIT_ITEMS = [
  { key: 'whatsapp', Icon: WhatsAppIcon, href: (phone) => `https://wa.me/${phone.replace(/\D/g, '')}`, label: 'WhatsApp', color: 'bg-green-500' },
  { key: 'facebook', Icon: Facebook, href: () => 'https://www.facebook.com/flyhighbrothersllc', label: 'Facebook', color: 'bg-blue-600' },
  { key: 'phone', Icon: Phone, href: (phone) => `tel:${phone.replace(/\s/g, '')}`, label: 'Phone', color: 'bg-brand-coral' },
  { key: 'email', Icon: Mail, href: (email) => `mailto:${email}`, label: 'Email', color: 'bg-brand-cyan text-brand-dark' },
];

const ARC_STEP_DEG = 24;

const getFabSizes = () => {
  const mobile = window.innerWidth < 640;
  return {
    fab: mobile ? 56 : 64,
    icon: mobile ? 44 : 48,
    radius: mobile ? 118 : 132,
  };
};

/** Evenly spaced quarter-arc toward viewport center from bottom corner. */
const getOrbitPosition = (index, isRtl, sizes) => {
  const { fab, icon, radius } = sizes;
  const fabHalf = fab / 2;
  const iconHalf = icon / 2;
  const startAngle = isRtl ? 20 : 102;
  const angleDeg = startAngle + ARC_STEP_DEG * index;
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  if (isRtl) {
    return {
      left: fabHalf + cos * radius - iconHalf,
      bottom: fabHalf + sin * radius - iconHalf,
      width: icon,
      height: icon,
    };
  }

  return {
    right: fabHalf - cos * radius - iconHalf,
    bottom: fabHalf + sin * radius - iconHalf,
    width: icon,
    height: icon,
  };
};

const FloatingContactFab = ({ contact, isRtl }) => {
  const [open, setOpen] = useState(false);
  const [sizes, setSizes] = useState(getFabSizes);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onResize = () => setSizes(getFabSizes());
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const orbitPositions = useMemo(
    () => ORBIT_ITEMS.map((_, i) => getOrbitPosition(i, isRtl, sizes)),
    [isRtl, sizes]
  );

  const containerSize = sizes.fab + sizes.radius + sizes.icon / 2 + 16;
  const anchorClass = isRtl ? 'left-4 sm:left-6' : 'right-4 sm:right-6';

  if (!mounted) return null;

  return createPortal(
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-[90] bg-transparent"
          onClick={() => setOpen(false)}
          aria-label="Close contact menu"
        />
      )}

      <div
        className={`fixed z-[95] ${anchorClass} ${open ? '' : 'pointer-events-none'}`}
        style={{
          bottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))',
          width: open ? containerSize : sizes.fab,
          height: open ? containerSize : sizes.fab,
        }}
      >
        {open &&
          ORBIT_ITEMS.map((item, i) => {
            const Icon = item.Icon;
            const href =
              item.key === 'whatsapp' || item.key === 'phone'
                ? item.href(contact.phone)
                : item.key === 'email'
                  ? item.href(contact.email)
                  : item.href();

            return (
              <a
                key={item.key}
                href={href}
                target={item.key === 'facebook' || item.key === 'whatsapp' ? '_blank' : undefined}
                rel={item.key === 'facebook' || item.key === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className={`fab-orbit-btn absolute flex items-center justify-center rounded-full text-white shadow-lg hover:scale-110 transition-transform ${item.color}`}
                style={{
                  ...orbitPositions[i],
                  animationDelay: `${i * 0.07}s`,
                }}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`fab-pulse absolute z-10 flex items-center justify-center rounded-full bg-brand-coral text-white shadow-[0_0_30px_rgba(255,78,80,0.5)] hover:bg-[#e63e40] transition-colors pointer-events-auto ${open ? 'scale-105' : ''}`}
          style={{
            width: sizes.fab,
            height: sizes.fab,
            bottom: 0,
            ...(isRtl ? { left: 0 } : { right: 0 }),
          }}
          aria-label={open ? 'Close contact options' : 'Contact us'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />}
        </button>
      </div>
    </>,
    document.body
  );
};

export default FloatingContactFab;
