/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    minHeight: {
      'hero': 'calc(100vh - 4.5rem)',
    },
    extend: {
      textColor: {
        "secondary-color": "#E62E59",
      },
      animation: {
        "slide-fast": "slide 0.2s ease-out forwards",
        "shadow-slow": "shadow 5s forwards",
      },
      keyframes: {
        slide: {
          to: { transform: "translate(0, 0)", opacity: 1 },
        },
        shadow: {
          from: { filter: "drop-shadow(0px 1rem 0rem rgba(200, 200, 200, 0))" },
          to: { filter: "drop-shadow(0px 1rem 5rem rgba(200, 200, 200, 0.22))" },
        },
      },
    },
  },
  plugins: [],
};
