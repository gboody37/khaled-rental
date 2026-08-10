import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "on-primary-container": "#8192a7",
        "surface-variant": "#d3e4fe",
        "secondary": "#006c49",
        "tertiary-container": "#272a2c",
        "tertiary-fixed": "#e0e3e5",
        "surface-container-highest": "#d3e4fe",
        "on-error": "#ffffff",
        "surface-container-high": "#dce9ff",
        "surface": "#f8f9ff",
        "inverse-surface": "#213145",
        "surface-tint": "#4f6073",
        "primary": "#041627",
        "secondary-container": "#6cf8bb",
        "on-secondary-fixed-variant": "#005236",
        "inverse-primary": "#b7c8de",
        "on-secondary": "#ffffff",
        "primary-fixed": "#d2e4fb",
        "primary-container": "#1a2b3c",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "on-tertiary-fixed": "#191c1e",
        "secondary-fixed-dim": "#4edea3",
        "on-error-container": "#93000a",
        "error": "#ba1a1a",
        "surface-container-low": "#eff4ff",
        "surface-bright": "#f8f9ff",
        "on-secondary-fixed": "#002113",
        "on-surface": "#0b1c30",
        "background": "#f8f9ff",
        "on-surface-variant": "#44474c",
        "surface-dim": "#cbdbf5",
        "secondary-fixed": "#6ffbbe",
        "tertiary-fixed-dim": "#c4c7c9",
        "on-secondary-container": "#00714d",
        "inverse-on-surface": "#eaf1ff",
        "on-background": "#0b1c30",
        "outline": "#74777d",
        "tertiary": "#121617",
        "primary-fixed-dim": "#b7c8de",
        "surface-container": "#e5eeff",
        "on-tertiary-fixed-variant": "#444749",
        "on-primary-fixed": "#0b1d2d",
        "outline-variant": "#c4c6cd",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "on-primary-fixed-variant": "#38485a",
        "on-tertiary-container": "#8e9193"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "base": "4px",
        "margin-edge": "32px",
        "lg": "24px",
        "md": "16px",
        "gutter": "24px",
        "sm": "8px",
        "xs": "4px",
        "xl": "32px"
      },
      fontFamily: {
        "headline-md": ["Inter"],
        "headline-lg": ["Inter"],
        "body-md": ["Inter"],
        "title-lg": ["Inter"],
        "label-md": ["Inter"],
        "display-lg": ["Inter"],
        "code-md": ["Inter"],
        "body-lg": ["Inter"],
        "headline-lg-mobile": ["Inter"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "title-lg": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "code-md": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "600" }]
      }
    },
  },
  plugins: [],
};

export default config;
