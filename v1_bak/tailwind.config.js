/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(var(--primary), 0.2)", // Primary color with low opacity for borders
        input: "rgba(var(--foreground), 0.1)",  // Adding input utility
        ring: "rgba(var(--primary), 0.5)",      // Adding ring utility
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--background))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--foreground))",
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        },
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        surface: "rgba(var(--surface), 0.8)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
