/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  darkMode: ["class", "class"], // Enable dark mode via class strategy
  theme: {
    extend: {
      // Custom breakpoints - only truly unique ones
      screens: {
        xs: "475px", // Extra small devices (Tailwind doesn't have xs by default)
      },
      colors: {
        // ===== PRIMARY BRAND COLOR (Auto-generated from HSL scale) =====
        primary: {
          subtle: "hsl(var(--primary-subtle) / <alpha-value>)",
          light: "hsl(var(--primary-light) / <alpha-value>)",
          accent: "hsl(var(--primary-accent) / <alpha-value>)",
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          hover: "hsl(var(--primary-hover) / <alpha-value>)",
          pressed: "hsl(var(--primary-pressed) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        // ===== NEUTRAL GRAYSCALE =====
        surface: {
          subtle: "hsl(var(--surface-subtle) / <alpha-value>)",
          light: "hsl(var(--surface-light) / <alpha-value>)",
        },
        border: {
          light: "hsl(var(--border-light) / <alpha-value>)",
          DEFAULT: "hsl(var(--border) / <alpha-value>)",
        },
        text: {
          disabled: "hsl(var(--text-disabled) / <alpha-value>)",
          secondary: "hsl(var(--text-secondary) / <alpha-value>)",
          body: "hsl(var(--text-body) / <alpha-value>)",
        },
        // ===== SEMANTIC COLORS (Auto-derived from primary) =====
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
        },
        error: {
          DEFAULT: "hsl(var(--error) / <alpha-value>)",
          foreground: "hsl(var(--error-foreground) / <alpha-value>)",
        },
        info: {
          DEFAULT: "hsl(var(--info) / <alpha-value>)",
          foreground: "hsl(var(--info-foreground) / <alpha-value>)",
        },
        // ===== BASE COLORS =====
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        // ===== UI ELEMENTS =====
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        link: "hsl(var(--link) / <alpha-value>)",
        disabled: {
          DEFAULT: "hsl(var(--disabled) / <alpha-value>)",
          foreground: "hsl(var(--disabled-foreground) / <alpha-value>)",
        },
      },
      ringColor: {
        DEFAULT: "hsl(var(--ring) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
      },
      ringOffsetColor: {
        DEFAULT: "hsl(var(--background) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        // Custom spacing extensions
        18: "4.5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "slide-left": "slide-left 0.6s ease-out",
      },
      animationDelay: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        1: "100ms", // .animate-delay-1
        2: "200ms", // .animate-delay-2
        3: "300ms", // .animate-delay-3
        4: "400ms", // .animate-delay-4
        5: "500ms", // .animate-delay-5
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
