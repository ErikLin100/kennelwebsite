/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'outline-black': '#000',
      },

      textShadow: {
        'outline-black': '0 0 2px rgba(0, 0, 0, 1)',
      },

      colors: {
        primary: '#C0392B',        /* Red, representing the Shiba Inu's coat color */
        secondary: '#F9E79F',      /* Sesame, complementing the primary color */
        tertiary: '#E59866',       /* A warm tone to add variety to the palette */
        accent: '#2C3E50',         /* Black and tan, for contrast and depth */
        complementary: '#6D5A4D',
        background: '#E6F7FF',
         /* Complementary color to the primary, adding balance */
      },
      
    },
  },
  plugins: [],
};