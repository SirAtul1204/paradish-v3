import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        background: "#E7E8D8",
        foreground: "#000",
        primary: "#B5CFB7",
        primaryLight: "#CADABF",
        secondary: "#BC9F8B",
        secondaryForeground: "#fff",
      },
      dark: {
        background: "#212121",
        foreground: "#fff",
        primary: "#a35c7a",
        primaryLight: "#C890A7",
        secondary: "#FBF5E5",
        secondaryForeground: "#000",
      },
    }),
  ],
} satisfies Config;
