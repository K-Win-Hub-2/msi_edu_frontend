const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontSize: {
      sm: "1rem",
      base: "1rem",
      xl: "1.5rem",
      lg: "36px",
      md: "24px",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      sm: "640px",
      ms: "641px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: {
        md: "3rem !important",
        lg: "6rem !important",
        xl: "8rem !important",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        "cus-primary": {
          light: "#f90",
          DEFAULT: "#01437d",
        },
        "cus-primary-pale": {
          DEFAULT: colors.sky[800],
        },
        "cus-secondary": {
          DEFAULT: "#dd2f33",
        },
        "cus-transparent": "rgba(128, 128, 128, 0.535)",
      },
      backgroundImage: {
        "hero-pattern": "url('@/assets/img/test/1.jpg')",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
