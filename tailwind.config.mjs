/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4C7C94',
          dark: '#3A6275',
          light: '#EDF4F7',
          soft: '#6A95AA',
        },
        ink: '#303B40',
        mist: '#F6F8F9',
      },
      fontFamily: {
        display: ['"Nunito"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(76, 124, 148, 0.08)',
        card: '0 10px 40px rgba(48, 59, 64, 0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top right, rgba(76,124,148,0.14), transparent 45%), radial-gradient(circle at bottom left, rgba(237,244,247,0.9), transparent 40%)',
      },
    },
  },
  plugins: [],
};
