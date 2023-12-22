import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'rotate(0deg)'
        },
        '33%': {
            transform: 'rotate(3deg)'
        },
        '66%': {
          transform: 'rotate(-3deg)'
        },
        '100%': {
          transform: 'rotate(0deg)'

        }
        }
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out "
      },
      colors: {
        'zuccini': {
          '50': '#f2fbf4',
          '100': '#e2f6e8',
          '200': '#c6ecd0',
          '300': '#99dcac',
          '400': '#65c380',
          '500': '#3fa85e',
          '600': '#2f8a4a',
          '700': '#286d3d',
          '800': '#245733',
          '900': '#1f472c',
          '950': '#0c2715',
      },
      
      
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
