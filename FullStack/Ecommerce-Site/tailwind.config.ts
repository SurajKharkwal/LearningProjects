import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)'},
          '50%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(53vw)'}
        },
        slider: {
          '0%': { width: '0'},
          '50%': { width: '0'},
          '100%': { width: '100%'}
        },
        pinBall: {
          '0%': { scale: '0', borderRadius: '9999px', backgroundColor: 'gray' },
          '25%': { scale: '0.2', borderRadius: '9999px', backgroundColor: 'gray' },
          '50%': { scale: '0.1', borderRadius: '9999px', backgroundColor: 'gray' },
          '75%': { scale: '0',  borderRadius: '9999px', backgroundColor: 'gray'},
          '100%': { scale: '1', borderRadius: '0', backgroundColor: 'transparent' }
        },
        hide: {
          '0%': { opacity: '0'},
          '25%': { opacity: '0'},
          '50%': { opacity: '0'},
          '75%': { opacity: '0'},
          '100%': { display: '1'}
        },
        remove: {
          '0%': { },
          '100%': { scale: '0' ,display: 'none' }
        },
        Menu: {
          '0%': { scale: '0' },
          '100%': { scale: '1' }
        }
      },
    },
  },
  plugins: [],
}
export default config
