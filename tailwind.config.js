module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1d6b52", dark: "#0f3d2e", light: "#2f8f70", soft: "#e6f2ec" },
        gold: { DEFAULT: "#d9b45a", dark: "#b8923a", soft: "#f7efd9" },
        cream: "#f9f7f0",
      },
      fontFamily: {
        head: ["Outfit", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0) rotate(0deg)" }, "50%": { transform: "translateY(-24px) rotate(8deg)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
      },
    },
  },
  plugins: [],
};
