import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px', // iPhone X, 12 mini
        sm1: '390px', // iPhone 12, 13, 14
        sm2: '430px', // iPhone 14 Pro Max
        sm3: '480px', // Galaxy S20, старые телефоны Android
        sm4: '1920px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
