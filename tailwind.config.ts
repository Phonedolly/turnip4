import type { Config } from "tailwindcss";

export default {
  darkMode: "selector", // temporarily disable dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "sd-minburi": ["SD Minburi", "sans-serif"],
        "sandol-gothicneo-uni": ["Sandol GothicNeoUni TTF", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        geist: ["var(--font-geist)", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "monospace"],
        "font-primary": [
          "var(--font-geist)",
          "Sandol GothicNeoUni TTF",
          "sans-serif",
        ],
      },
      /* from https://colorhunt.co/palette/2135553e5879d8c4b6f5efe7 */
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bone: {
          50: "#FBFAF8",
          100: "#F8F4F2",
          200: "#EFE7E1",
          300: "#E8DCD4",
          400: "#DFCFC3",
          500: "#D8C4B6",
          600: "#BC9981",
          700: "#9C7253",
          800: "#674B37",
          900: "#35271C",
          950: "#1B130E",
        },
        primary: "#213555",
        secondary: "#3E5879",
        /*
         #213555
        secondary: "#3E5879",
        accent: "#D8C4B6",
        background: "#F5EFE7",
        */
      },
    },
  },
} satisfies Config;
