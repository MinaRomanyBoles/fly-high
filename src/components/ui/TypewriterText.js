import React, { useEffect, useRef, useState } from 'react';

const TypewriterText = ({ text, className = '', startDelay = 80, speed = 30 }) => {
  const [displayed, setDisplayed] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    setDisplayed('');
    let idx = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        idx += 1;
        setDisplayed(text.slice(0, idx));
        if (idx >= text.length) clearInterval(intervalId);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [hasStarted, text, speed, startDelay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
};

export default TypewriterText;
