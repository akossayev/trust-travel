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
        xs: '375px',
        xs1: '390px',
        xs2: '430px',
        xs3: '480px',
        lx: '1366px',
        lx2: '1440px',
        lx3: '1920px',
      },
      colors: {
        light: 'var(--light)',
        dark: 'var(--dark)',
        lightblue: 'var(--lightblue)',
        darklight: 'var(--darklight)',
      },
    },
  },
  plugins: [],

} satisfies Config;
