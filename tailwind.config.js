/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            h2: {
              color: '#1a202c',
              fontWeight: '700',
            },
            h3: {
              color: '#2d3748',
              fontWeight: '600',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: '#cbd5e0',
              borderRadius: '50%',
              width: '0.375em',
              height: '0.375em',
              top: 'calc(0.875em - 0.1875em)',
              left: '0.25em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}