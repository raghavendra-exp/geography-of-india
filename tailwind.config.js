/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sepia: {
          50: '#fcfbf7',
          100: '#f7f3e8',
          200: '#efe9d8',
          300: '#ded4bc',
          400: '#c5b696',
          500: '#aa9772',
          600: '#8e7956',
          700: '#6f5d42',
          800: '#4d402f',
          900: '#2b231a',
          950: '#18130e'
        },
        parchment: {
          DEFAULT: '#efe9d8',
          deep: '#e3dac0',
          panel: '#f7f3e6',
        },
        ink: {
          DEFAULT: '#1b2a33',
          soft: '#4d5d63',
        },
        saffron: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          DEFAULT: '#bd7317',
          soft: '#e8b463',
          dark: '#f59e0b'
        },
        river: {
          DEFAULT: '#1c6e7a',
          soft: '#bfe0e2',
          dark: '#38bdf8',
        },
        forest: {
          DEFAULT: '#35633c',
          soft: '#cfe0cf',
          dark: '#4ade80',
        },
        vermillion: {
          DEFAULT: '#a93b24',
          soft: '#eecdc3',
          dark: '#f87171',
        },
        atlasline: {
          DEFAULT: '#b9ae8c',
          strong: '#8f8462',
          night: '#263445',
        },
        night: {
          bg: '#0c1017',
          panel: '#121824',
          border: '#222f42',
          text: '#e6edf3',
          muted: '#8b9bb0',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        hindi: ['Rozha One', 'serif', 'sans-serif']
      }
    },
  },
  plugins: [],
}
