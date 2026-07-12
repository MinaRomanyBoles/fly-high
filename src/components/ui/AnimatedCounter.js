import React, { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
          if (!match) {
            setDisplay(value);
            return;
          }
          const num = parseFloat(match[1]);
          const suffix = match[2] || '';
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = num * eased;
            const formatted =
              num >= 100
                ? Math.floor(current).toLocaleString()
                : current % 1 === 0
                  ? Math.floor(current)
                  : current.toFixed(0);
            setDisplay(`${formatted}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
};

export default AnimatedCounter;
