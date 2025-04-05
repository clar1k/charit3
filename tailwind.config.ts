import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Pixelify Sans", "serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "dpad-gradient":
          "linear-gradient(180deg, #1D1B1C 0%, #191718 81.19%, #252120 96.35%)",
      },
      boxShadow: {
        dpad: "inset 0px 0px 0.25px 1.25px #262524, inset 3px 5px 2px -4.75px #FFFFFF, inset 1.25px 1.5px 0px rgba(0, 0, 0, 0.75), inset 0px 4.75px 0.25px -2.5px #FBFBFB, inset 1px 1px 3px 3px #1A1818, inset 0px -3px 1px rgba(0, 0, 0, 0.5), inset 2.5px -2px 3px rgba(124, 108, 94, 0.75), inset 0px -3px 3px 1px rgba(255, 245, 221, 0.1)",
        "dpad-hover":
          "inset 0px 0px 0.25px 1.25px #262524, inset 3px 5px 2px -4.75px #FFFFFF, inset 1.25px 1.5px 0px rgba(0, 0, 0, 0.75), inset 0px 4.75px 0.25px -2.5px #FBFBFB, inset 1px 1px 3px 3px #1A1818, inset 0px -3px 1px rgba(0, 0, 0, 0.5), inset 2.5px -2px 3px rgba(124, 108, 94, 0.75), inset 0px -3px 3px 1px rgba(255, 245, 221, 0.4), 0px 0px 10px 1px rgba(255, 255, 255, 0.4)",
        "dpad-pressed":
          "inset 0px 0px 0.25px 1.25px #262524, inset 1px 1px 3px 3px #1A1818, inset 0px -1px 1px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "fade-out": "1s fadeOut 3s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
