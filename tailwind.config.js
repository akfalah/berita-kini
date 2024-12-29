/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        "nunito-sans": ["Nunito Sans"],
        poppins: ["Poppins"],
        sora: ["Sora Variable"],
      },
      fontSize: {
        "heading-1": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: "700",
          },
        ],
        "heading-2": [
          "48px",
          {
            lineHeight: "58px",
            fontWeight: "700",
          },
        ],
        "heading-3": [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "700",
          },
        ],
        "heading-4": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: "700",
          },
        ],
        "heading-5": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        "heading-6": [
          "24px",
          {
            lineHeight: "30px",
            fontWeight: "600",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],
        "body-lg-medium": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "500",
          },
        ],
        "body-lg-semibold": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "600",
          },
        ],
        "body-lg-bold": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "700",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-md-medium": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        "body-md-semibold": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "body-md-bold": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        "body-sm": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        "body-sm-medium": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "500",
          },
        ],
        "body-sm-semibold": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "600",
          },
        ],
        "body-sm-bold": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "700",
          },
        ],
        "body-xs": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "body-xs-medium": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "body-xs-semibold": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "600",
          },
        ],
        "body-xs-bold": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        primary: {
          900: "#1C4AA5",
          800: "#2469C4",
          700: "#2879D6",
          600: "#2D8BE9",
          500: "#0099FF",
          400: "#4AA7F9",
          300: "#5FB7FF",
          200: "#93CBFC",
          100: "#BBDFFF",
          50: "#E3F2FF",
        },
        success: {
          900: "#00672B",
          700: "#00994D",
          500: "#00BC65",
          300: "#15D293",
          100: "#B2ECD0",
          50: "#DFF8EC",
        },
        warning: {
          900: "#F47103",
          700: "#F59F0B",
          500: "#F5BF17",
          300: "#F7D352",
          100: "#FBEBB4",
          50: "#FDF8E1",
        },
        error: {
          900: "#B7000C",
          700: "#D31121",
          500: "#F32E26",
          300: "#E6696A",
          100: "#FFC9CE",
          50: "#FFEAED",
        },
        dark: {
          900: "#000211",
          800: "#111B26",
          700: "#1F2B39",
          600: "#2C3C4D",
          500: "#37485B",
          400: "#526071",
          300: "#6D7988",
          200: "#959EA9",
          100: "#BEC5CC",
          50: "#E5E7EB",
        },
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in",
        slide: "slide 0.5s ease-in",
      },
      keyframes: {
        fadeIn: {
          from: {opacity: 0},
          to: {opacity: 1},
        },
        slide: {
          from: {transform: "translateX(100%)"},
          to: {transform: "translateX(-5%)"},
        },
      }
    },
  },
  plugins: [],
};
