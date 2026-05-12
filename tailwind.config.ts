import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#05060b",
        ink: "#0b1020",
        panel: "rgba(15, 23, 42, 0.58)",
        pearl: "#f8fbff",
        mist: "#a9b4c7",
        violet: "#8b5cf6",
        cyan: "#22d3ee",
        ember: "#f59e0b",
        mint: "#34d399"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 34px rgba(34, 211, 238, 0.18)",
        violet: "0 0 44px rgba(139, 92, 246, 0.22)"
      },
      backgroundImage: {
        "aurora-mesh":
          "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.22), transparent 28%), radial-gradient(circle at 78% 12%, rgba(34, 211, 238, 0.16), transparent 24%), radial-gradient(circle at 52% 78%, rgba(245, 158, 11, 0.11), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
