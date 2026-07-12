/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          coral: '#ff4e50',
          navy: '#162a40',
          cyan: '#00c8ff',
          white: '#ffffff',
          dark: '#0a0a0a',
          card: '#1a2f45',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.bg-brand-dark': {
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 20% -10%, rgba(0, 200, 255, 0.08) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 90% 100%, rgba(255, 78, 80, 0.06) 0%, transparent 50%), linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 100% 100%, 52px 52px, 52px 52px',
        },
        '.bg-brand-navy': {
          backgroundColor: '#162a40',
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(0, 200, 255, 0.07) 0%, transparent 35%), radial-gradient(circle at 90% 80%, rgba(255, 78, 80, 0.05) 0%, transparent 35%), repeating-linear-gradient(-35deg, transparent, transparent 32px, rgba(255, 255, 255, 0.012) 32px, rgba(255, 255, 255, 0.012) 33px)',
          backgroundSize: '100% 100%, 100% 100%, auto',
        },
      });
    },
  ],
};
