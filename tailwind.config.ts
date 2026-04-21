import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#dce6fe',
          200: '#bccffe',
          300: '#90affd',
          400: '#6088fa',
          500: '#3d64f6',
          600: '#2645eb',
          700: '#1e33d8',
          800: '#1e2caf',
          900: '#1e2b8a',
          950: '#161c55',
        },
        neutral: {
          50:  '#f8f9fb',
          100: '#f1f2f6',
          200: '#e4e6ed',
          300: '#cdd0da',
          400: '#a8adb9',
          500: '#888c9b',
          600: '#686d7e',
          700: '#535767',
          800: '#454857',
          900: '#3b3d4a',
          950: '#24252f',
        },
        success: {
          100: '#d1fae5',
          500: '#10b981',
          700: '#047857',
        },
        warning: {
          100: '#fef3c7',
          500: '#f59e0b',
          700: '#b45309',
        },
        danger: {
          100: '#fee2e2',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
