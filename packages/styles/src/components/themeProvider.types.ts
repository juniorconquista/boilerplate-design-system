import { HTMLAttributes } from "react";

export type Theme = "dark" | "base";

export interface ThemeProviderProperties {
  theme?: Theme;
}

export type ThemeProviderProps = ThemeProviderProperties &
  HTMLAttributes<HTMLElement>;
