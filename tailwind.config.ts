/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mithai: {
          maroon:  '#6B1F1F',
          maroonL: '#8B2F2F',
          maroonD: '#4A1515',
          maroonP: '#F9F0F0',
          gold:    '#E3B448',
          goldP:   '#FDF8EC',
          cream:   '#F7F3EE',
          off:     '#FAFAF8',
          brown:   '#6B1F1F',
          brownL:  '#8B2F2F',
          // palette from inspiration image
          rust:    '#8B3A2A',
          caramel: '#C4622D',
          sand:    '#E8C99A',
          parchment: '#F5E8D0',
          charcoal:'#2A1810',
          warmGray:'#5C3D2E',
          taupe:   '#9B7B6A',
        },
      },
      fontFamily: {
        medino:     ['Medino', 'serif'],
        runiga:     ['Runiga', 'serif'],
        playfair:   ['Playfair Display', 'serif'],
        cormorant:  ['Cormorant Garamond', 'serif'],
        baskerville:['Libre Baskerville', 'serif'],
        dm:         ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float':     'float 4.5s ease-in-out infinite',
        'marquee':   'marquee 24s linear infinite',
        'fadeUp':    'fadeUp 0.65s ease forwards',
        'pulse-glow':'pulseGlow 2s ease-in-out infinite',
        'blob':      'blob 9s ease-in-out infinite alternate',
        'shimmer':   'shimmer 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(-1.5deg)' },
          '50%':     { transform: 'translateY(-16px) rotate(1.5deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 3px rgba(227,180,72,0.28)' },
          '50%':     { boxShadow: '0 0 0 5px rgba(227,180,72,0.14)' },
        },
        blob: {
          '0%':   { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(18px,14px) scale(1.07)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'mithai':  '0 4px 24px rgba(107,31,31,0.08)',
        'mithaiH': '0 8px 32px rgba(107,31,31,0.15)',
        'gold':    '0 4px 18px rgba(227,180,72,0.35)',
        'maroon':  '0 6px 24px rgba(107,31,31,0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FBF5EC 0%, #F5E8D0 30%, #EDD9BC 65%, #E8CFA8 100%)',
        'plate-gradient':'linear-gradient(155deg,#6B1F1F 0%,#8B2F2F 30%,#6B1F1F 65%,#4A1515 100%)',
        'shimmer-gradient':'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}