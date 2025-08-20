import { useEffect, useState, useTransition } from "react";
import { COLORS } from "../constants/colors";
import type { ThemeResponseProps } from "../types/dinamic-colors";

export function useApplyTheme() {
  const [theme, setTheme] = useState<ThemeResponseProps | null>(null);
  const [isPending, startTransition] = useTransition();

  const applyCustomColors = (colors: any) => {
    const root = document.documentElement;

    // Cores primárias e secundárias
    root.style.setProperty("--color-primary", colors.primary);
    root.style.setProperty("--color-primary-light", colors.primaryLight);
    root.style.setProperty("--color-primary-dark", colors.primaryDark);
    root.style.setProperty("--color-secondary", colors.secondary);
    root.style.setProperty("--color-secondary-light", colors.secondaryLight);
    root.style.setProperty("--color-secondary-dark", colors.secondaryDark);

    // Cores base do sistema
    root.style.setProperty("--color-background", colors.background);
    root.style.setProperty("--color-foreground", colors.foreground);
    root.style.setProperty("--color-card", colors.card);
    root.style.setProperty("--color-card-foreground", colors.cardForeground);
    root.style.setProperty("--color-popover", colors.popover);
    root.style.setProperty(
      "--color-popover-foreground",
      colors.popoverForeground
    );

    // Cores utilitárias
    root.style.setProperty("--color-muted", colors.muted);
    root.style.setProperty("--color-muted-foreground", colors.mutedForeground);
    root.style.setProperty("--color-accent", colors.accent);
    root.style.setProperty(
      "--color-accent-foreground",
      colors.accentForeground
    );
    root.style.setProperty("--color-destructive", colors.destructive);
    root.style.setProperty("--color-border", colors.border);
    root.style.setProperty("--color-input", colors.input);
    root.style.setProperty("--color-ring", colors.ring);

    // Escala de cinza - verificar se existe
    if (colors.grayScale) {
      Object.entries(colors.grayScale).forEach(([shade, color]) => {
        root.style.setProperty(`--color-grayScale-${shade}`, color as string);
      });
    }
  };

  useEffect(() => {
    async function fetchTheme() {
      startTransition(async () => {
        try {
          const response = await new Promise<ThemeResponseProps>((resolve) => {
            setTimeout(() => {
              const responses = COLORS;
              const randomIndex = Math.floor(Math.random() * responses.length);
              resolve(responses[randomIndex]);
            }, 1000);
          });

          setTheme(response);
        } catch (error) {
          console.error("Erro ao carregar tema:", error);
          setTheme({ clientId: "fallback", themeType: "light" });
        }
      });
    }

    fetchTheme();
  }, []);

  useEffect(() => {
    if (!theme) return;

    const root = document.documentElement;

    root.classList.remove("light", "dark", "custom");

    console.log("Aplicando tema:", theme);
    console.log("Classes CSS do root:", root.classList.toString());

    if (theme.themeType === "custom" && theme.customColors) {
      root.classList.add("custom");
      console.log(
        "Aplicando tema custom com grayScale:",
        theme.customColors.grayScale
      );
      applyCustomColors(theme.customColors);
    } else {
      console.log(`Aplicando tema ${theme.themeType} via CSS`);
      if (theme.themeType === "light") {
        root.classList.add(theme.themeType);
      } else {
        root.classList.add(theme.themeType);
      }
    }

    console.log("Classes CSS após aplicação:", root.classList.toString());
  }, [theme]);

  return { theme, isPending };
}
