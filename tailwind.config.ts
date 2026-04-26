import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        "ink-soft": "#334155",
        mist: "#f6f9fc",
        line: "#d9e2ec",
        cyanbrand: "#00a6fb",
        mintbrand: "#20c997",
        amberbrand: "#ffb020",
        coralbrand: "#ff6b6b"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(15, 23, 42, 0.14)",
        soft: "0 12px 40px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
