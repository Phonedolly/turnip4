import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "sd-gothicNeo1": ["Sandoll GothicNeo1Uni TTF", "sans-serif"],
        "sd-minburi": ["SD Minburi", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "monospace"],
        "monaspace-neon": ["var(--font-monaspace-neon)", "monospace"],
        "monaspace-argon": ["var(--font-monaspace-argon)", "monospace"],
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        "santa-fe": {
          "50": "#fbf7f5",
          "100": "#f7ede9",
          "200": "#f1ded7",
          "300": "#e6c7bb",
          "400": "#d6a593",
          "500": "#bf7c63",
          "600": "#ae6c54",
          "700": "#915944",
          "800": "#794c3b",
          "900": "#664336",
          "950": "#362119",
        },
        primary: "#bf7c63",
        secondary: "#ae6c54",
        accent: "#915944",
        background: "#f1ded7",
        foreground: "#171717",
      },
    },
  },
  plugins: [],
} satisfies Config;
