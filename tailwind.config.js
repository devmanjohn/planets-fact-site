/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // defaults
        'dark-blue': '#070724',
        'dark-gray': '#38384F',
        'light-gray': '#838391',

        // planet colors
        mercury: '#419EBB',
        venus: '#EDA249',
        earth: '#6f2ed6',
        mars: '#419EBB',
        jupiter: '#D83A34',
        saturn: '#CD5120',
        uranus: '#1ec2a4',
        neptune: '#2d68f0',
      },

      fontFamily: {
        spartan: ['League Spartan', sans - serif],
        antonio: ['League Spartan', sans - serif],
      },
    },
  },
  plugins: [],
};
