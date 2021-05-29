module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      min2xl: "1536px",
      // => @media (min-width: 1536px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      minXl: "1280px",
      // => @media (min-width: 1280px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      minLg: "1024px",
      // => @media (min-width: 1024px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      minMd: "768px",
      // => @media (min-width: 768px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      minSm: "640px",
      // => @media (min-width: 640px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
