import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors from Weenie in a Beanie book
        weenie: {
          red: '#C94B4B',      // Warm red from title/beanie
          teal: '#3B9B9B',     // Teal from scarf
          cream: '#FFF8F0',    // Warm off-white background
          navy: '#2A4365',     // Deep blue for accents
          yellow: '#E5B84C',   // Golden yellow accent
          orange: '#D97B4A',   // Warm orange from beanie
          green: '#4A9B7F',    // Pine tree green
          brown: '#5C4033',    // Weenie's fur brown
        },
        // Semantic colors
        background: '#FFF8F0',
        foreground: '#2D3748',
      },
      fontFamily: {
        display: ['Nunito', 'Georgia', 'serif'],
        body: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'soft': '1rem',
        'softer': '1.5rem',
        'softest': '2rem',
      },
      boxShadow: {
        'cozy': '0 4px 20px rgba(201, 75, 75, 0.1)',
        'cozy-lg': '0 8px 40px rgba(201, 75, 75, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'snowfall': 'snowfall 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        snowfall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}

export default config
