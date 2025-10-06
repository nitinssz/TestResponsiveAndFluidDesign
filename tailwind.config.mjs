/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin.js';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Override default spacing to use rem values that scale with fluid system
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',  // 2px at 16px base
        1: '0.25rem',     // 4px at 16px base
        1.5: '0.375rem',  // 6px at 16px base
        2: '0.5rem',      // 8px at 16px base
        2.5: '0.625rem',  // 10px at 16px base
        3: '0.75rem',     // 12px at 16px base
        3.5: '0.875rem',  // 14px at 16px base
        4: '1rem',        // 16px at 16px base
        5: '1.25rem',     // 20px at 16px base
        6: '1.5rem',      // 24px at 16px base
        7: '1.75rem',     // 28px at 16px base
        8: '2rem',        // 32px at 16px base
        9: '2.25rem',     // 36px at 16px base
        10: '2.5rem',     // 40px at 16px base
        11: '2.75rem',    // 44px at 16px base
        12: '3rem',       // 48px at 16px base
        14: '3.5rem',     // 56px at 16px base
        16: '4rem',       // 64px at 16px base
        20: '5rem',       // 80px at 16px base
        24: '6rem',       // 96px at 16px base
        28: '7rem',       // 112px at 16px base
        32: '8rem',       // 128px at 16px base
        36: '9rem',       // 144px at 16px base
        40: '10rem',      // 160px at 16px base
        44: '11rem',      // 176px at 16px base
        48: '12rem',      // 192px at 16px base
        52: '13rem',      // 208px at 16px base
        56: '14rem',      // 224px at 16px base
        60: '15rem',      // 240px at 16px base
        64: '16rem',      // 256px at 16px base
        72: '18rem',      // 288px at 16px base
        80: '20rem',      // 320px at 16px base
        96: '24rem',      // 384px at 16px base
      },
      // Override font sizes to use rem values
      fontSize: {
        xs: '0.75rem',      // 12px at 16px base
        sm: '0.875rem',     // 14px at 16px base
        base: '1rem',       // 16px at 16px base
        lg: '1.125rem',     // 18px at 16px base
        xl: '1.25rem',      // 20px at 16px base
        '2xl': '1.5rem',    // 24px at 16px base
        '3xl': '1.875rem',  // 30px at 16px base
        '4xl': '2.25rem',   // 36px at 16px base
        '5xl': '3rem',      // 48px at 16px base
        '6xl': '3.75rem',   // 60px at 16px base
        '7xl': '4.5rem',    // 72px at 16px base
        '8xl': '6rem',      // 96px at 16px base
        '9xl': '8rem',      // 128px at 16px base
      },
      // Border radius using rem
      borderRadius: {
        none: '0',
        sm: '0.125rem',   // 2px at 16px base
        DEFAULT: '0.25rem', // 4px at 16px base
        md: '0.375rem',   // 6px at 16px base
        lg: '0.5rem',     // 8px at 16px base
        xl: '0.75rem',    // 12px at 16px base
        '2xl': '1rem',    // 16px at 16px base
        '3xl': '1.5rem',  // 24px at 16px base
        full: '9999px',
      },
    },
  },
  plugins: [
    // Custom Fluid Utilities Plugin
    plugin(function({ addUtilities, addComponents }) {
      // Fluid Typography Utilities (explicit naming for clarity)
      const fluidTextUtilities = {
        '.fluid-text-xs': { fontSize: '0.75rem' },
        '.fluid-text-sm': { fontSize: '0.875rem' },
        '.fluid-text-base': { fontSize: '1rem' },
        '.fluid-text-lg': { fontSize: '1.125rem' },
        '.fluid-text-xl': { fontSize: '1.25rem' },
        '.fluid-text-2xl': { fontSize: '1.5rem' },
        '.fluid-text-3xl': { fontSize: '1.875rem' },
        '.fluid-text-4xl': { fontSize: '2.25rem' },
        '.fluid-text-5xl': { fontSize: '3rem' },
        '.fluid-text-6xl': { fontSize: '3.75rem' },
        '.fluid-text-7xl': { fontSize: '4.5rem' },
        '.fluid-text-8xl': { fontSize: '6rem' },
        '.fluid-text-9xl': { fontSize: '8rem' },
      };

      // Fluid Spacing Utilities (margin)
      const fluidSpacingUtilities = {
        '.fluid-spacing-xs': { margin: '0.25rem' },
        '.fluid-spacing-sm': { margin: '0.5rem' },
        '.fluid-spacing-md': { margin: '1rem' },
        '.fluid-spacing-lg': { margin: '1.5rem' },
        '.fluid-spacing-xl': { margin: '2rem' },
        '.fluid-spacing-2xl': { margin: '3rem' },
      };

      // Fluid Padding Utilities
      const fluidPaddingUtilities = {
        '.fluid-padding-xs': { padding: '0.25rem' },
        '.fluid-padding-sm': { padding: '0.5rem' },
        '.fluid-padding-md': { padding: '1rem' },
        '.fluid-padding-lg': { padding: '1.5rem' },
        '.fluid-padding-xl': { padding: '2rem' },
        '.fluid-padding-2xl': { padding: '3rem' },
      };

      // Fluid Gap Utilities
      const fluidGapUtilities = {
        '.fluid-gap-xs': { gap: '0.25rem' },
        '.fluid-gap-sm': { gap: '0.5rem' },
        '.fluid-gap-md': { gap: '1rem' },
        '.fluid-gap-lg': { gap: '1.5rem' },
        '.fluid-gap-xl': { gap: '2rem' },
        '.fluid-gap-2xl': { gap: '3rem' },
      };

      addUtilities({
        ...fluidTextUtilities,
        ...fluidSpacingUtilities,
        ...fluidPaddingUtilities,
        ...fluidGapUtilities,
      });

      // Fluid Container Component
      const fluidComponents = {
        '.fluid-container': {
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxSizing: 'border-box',
          
          '@media (min-width: 426px) and (max-width: 767px)': {
            maxWidth: '425px',
          },
          '@media (min-width: 1024px) and (max-width: 1279px)': {
            maxWidth: '1024px',
          },
          '@media (min-width: 1440px)': {
            maxWidth: '1440px',
          },
        },
        '.fluid-img': {
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
        },
      };

      addComponents(fluidComponents);
    }),
  ],
}

