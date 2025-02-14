// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "p-11",
    "mb-4",
    "mb-6",
    "px-2",
    "py-1",
    "px-4",
    "py-2", // Add all padding/margin classes you're using
    { pattern: /p-./ }, // Safelist all padding classes
    { pattern: /m-./ }, // Safelist all margin classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
