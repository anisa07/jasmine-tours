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
        // ===== BRAND COLOR SCALE (Internal - prefer using 'primary' instead) =====
        coral: {
          50: "rgb(var(--color-coral-50) / <alpha-value>)",
          100: "rgb(var(--color-coral-100) / <alpha-value>)",
          200: "rgb(var(--color-coral-200) / <alpha-value>)",
          300: "rgb(var(--color-coral-300) / <alpha-value>)",
          400: "rgb(var(--color-coral-400) / <alpha-value>)",
          500: "rgb(var(--color-coral-500) / <alpha-value>)", // Base brand color
          600: "rgb(var(--color-coral-600) / <alpha-value>)",
          700: "rgb(var(--color-coral-700) / <alpha-value>)",
          800: "rgb(var(--color-coral-800) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-coral-500) / <alpha-value>)", // Alias to 500
        },
        // ===== NEUTRAL GRAYSCALE =====
        neutral: {
          50: "rgb(var(--color-neutral-50) / <alpha-value>)",
          100: "rgb(var(--color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-neutral-500) / <alpha-value>)",
          800: "rgb(var(--color-neutral-800) / <alpha-value>)",
        },
        // ===== PRIMARY (semantic color scale) =====
        primary: {
          50: "rgb(var(--color-primary-50) / <alpha-value>)",
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          hover: "rgb(var(--color-primary-hover) / <alpha-value>)",
          pressed: "rgb(var(--color-primary-pressed) / <alpha-value>)",
          foreground: "rgb(var(--color-primary-foreground) / <alpha-value>)",
        },
        // ===== SECONDARY (light neutral with primary accent) =====
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // ===== ACCENT (light primary tint) =====
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // ===== BASE COLORS =====
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ===== SURFACE VARIATIONS =====
        surface: {
          1: "rgb(var(--color-surface-1) / <alpha-value>)",
          2: "rgb(var(--color-surface-2) / <alpha-value>)",
          3: "rgb(var(--color-surface-3) / <alpha-value>)",
        },
        // ===== SEMANTIC COLORS (primary-based) =====
        success: {
          DEFAULT: "rgb(var(--color-success) / <alpha-value>)",
          foreground: "rgb(var(--color-success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "rgb(var(--color-warning) / <alpha-value>)",
          foreground: "rgb(var(--color-warning-foreground) / <alpha-value>)",
        },
        error: {
          DEFAULT: "rgb(var(--color-error) / <alpha-value>)",
          foreground: "rgb(var(--color-error-foreground) / <alpha-value>)",
        },
        info: {
          DEFAULT: "rgb(var(--color-info) / <alpha-value>)",
          foreground: "rgb(var(--color-info-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // ===== INTERACTIVE STATES =====
        hover: "rgb(var(--color-hover) / <alpha-value>)",
        pressed: "rgb(var(--color-pressed) / <alpha-value>)",
        disabled: {
          DEFAULT: "rgb(var(--color-disabled) / <alpha-value>)",
          foreground: "rgb(var(--color-disabled-foreground) / <alpha-value>)",
        },
        // ===== UI ELEMENTS =====
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        link: "hsl(var(--link))",
        "link-hover": "hsl(var(--link-hover))",
        "badge-bg": "hsl(var(--badge-bg))",
        "badge-text": "hsl(var(--badge-text))",
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
