import type { ThemeResponseProps } from "../src/types/dinamic-colors";

export const CLIENT_1_COLORS: ThemeResponseProps[] = [
  {
    clientId: "client-1",
    themeType: "light",
  },
  {
    clientId: "client-2",
    themeType: "dark",
  },
  {
    clientId: "client-3",
    themeType: "custom",
    customColors: {
      name: "Tema Personalizado Cliente 3",
      primary: "oklch(0.65 0.18 290)", // Roxo
      primaryLight: "oklch(0.85 0.12 290)",
      primaryDark: "oklch(0.45 0.22 290)",
      secondary: "oklch(0.70 0.15 45)", // Laranja
      secondaryLight: "oklch(0.90 0.08 45)",
      secondaryDark: "oklch(0.50 0.18 45)",
      background: "oklch(0.98 0.01 290)",
      foreground: "oklch(0.15 0.02 290)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.15 0.02 290)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.15 0.02 290)",
      muted: "oklch(0.95 0.02 290)",
      mutedForeground: "oklch(0.55 0.03 290)",
      accent: "oklch(0.95 0.02 290)",
      accentForeground: "oklch(0.20 0.02 290)",
      destructive: "oklch(0.62 0.20 25)",
      border: "oklch(0.90 0.02 290)",
      input: "oklch(0.90 0.02 290)",
      ring: "oklch(0.65 0.18 290)",
      grayScale: {
        50: "oklch(0.98 0.01 290)",
        100: "oklch(0.95 0.02 290)",
        200: "oklch(0.90 0.02 290)",
        300: "oklch(0.83 0.03 290)",
        400: "oklch(0.68 0.05 290)",
        500: "oklch(0.55 0.08 290)",
        600: "oklch(0.45 0.10 290)",
        700: "oklch(0.35 0.08 290)",
        800: "oklch(0.25 0.05 290)",
        900: "oklch(0.18 0.03 290)",
        950: "oklch(0.12 0.02 290)",
      },
    },
  },
];
