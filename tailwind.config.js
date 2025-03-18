/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forensic: {
          primary: '#0A0A0A',
          secondary: '#1A1A1A',
          accent: '#FF0033',
          cyan: '#00FFFF',
          gold: '#FFD700',
          muted: '#888888',
          'card-bg': 'rgba(26, 26, 26, 0.8)',
          'overlay': 'rgba(0, 255, 255, 0.1)'
        }
      },
      animation: {
        'scanner': 'scanner 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 15s linear infinite'
      },
      keyframes: {
        scanner: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0 },
          '50%': { transform: 'translateY(100%)', opacity: 0.5 }
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)',
            transform: 'scale(1.05)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)'
      },
      backgroundSize: {
        'grid': '20px 20px'
      }
    },
  },
  plugins: [],
};