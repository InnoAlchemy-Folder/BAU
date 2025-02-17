/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#2c3685",
        secondary: "#5272ff",
        tertiary: "#5a8dff",
      },
      backgroundImage: {
        "admin-auth": "url('/admin-login-bg.png')",
        "endDate": "url('/public/pattern.png')",
        "event-pattern": "url('/public/eventpattern.png')",
        "gradient-primary-secondary":
          "linear-gradient(to bottom, #2c3685, #5272ff)",
        "gradient-opacity":
          "linear-gradient(to top, rgba(234, 235, 243, 0.01), rgba(234, 235, 243, 1))", // Add your gradient here
      },
      screens: {
        "custom-lg": "1200px",
        "custom-xl": "1500px",
      },
      fontFamily: {
        nunito: ["'Nunito Sans'", "sans-serif"],
      },
      opacity: {
        90: "0.90",
        85: "0.85",
        20: "0.20",
        6: "0.0617"
      },

    },
  },
  plugins: [],
};
