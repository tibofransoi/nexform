/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  safelist: ['offer-01', 'offer-02', 'offer-03', 'offer-04'],
  theme: {
    extend: {
      colors: {
        ink: '#101820',
        canvas: '#FFFFFF',
        mist: '#EEF3F4',
        action: '#1849FF',
        marker: '#FFD43B',
        fault: '#C93B34',
      },
      fontFamily: {
        display: ['Syne', 'Arial Black', 'sans-serif'],
        body: ['IBM Plex Sans', 'Arial', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(3.25rem, 8vw, 8.25rem)', { lineHeight: '0.88', letterSpacing: '-0.055em' }],
        section: ['clamp(2.5rem, 5vw, 5.5rem)', { lineHeight: '0.94', letterSpacing: '-0.045em' }],
        heading: ['clamp(1.5rem, 2.5vw, 2.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        lead: ['1.25rem', { lineHeight: '1.5' }],
        body: ['1rem', { lineHeight: '1.6' }],
        utility: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.13em' }],
      },
      spacing: {
        s1: '0.25rem',
        s2: '0.5rem',
        s3: '0.75rem',
        s4: '1rem',
        s5: '1.5rem',
        s6: '2rem',
        s7: '3rem',
        s8: '4.5rem',
        s9: '7rem',
        s10: '10rem',
      },
      borderRadius: {
        control: '0.75rem',
        panel: '1.125rem',
        pill: '999px',
      },
      boxShadow: {
        panel: '0 1.5rem 4rem rgb(16 24 32 / 0.12)',
        glow: '0 0 2rem rgb(24 73 255 / 0.2)',
      },
      maxWidth: {
        canvas: '100rem',
        copy: '44rem',
      },
    },
  },
  plugins: [],
};
