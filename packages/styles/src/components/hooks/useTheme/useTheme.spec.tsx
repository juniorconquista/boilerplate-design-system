import React from "react";
import { renderHook } from "@testing-library/react";

import { useTheme } from "./useTheme";
import { ThemeProvider } from "../../ThemeProvider";
import { Theme } from "../../themeProvider.types";

const makeSut = (theme?: Theme) =>
  renderHook(() => useTheme(), {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });

describe("GIVEN useTheme", () => {
  describe("WHEN the hook runs", () => {
    it("THEN should correctly return currentTheme default", () => {
      const { result } = makeSut();
      expect(result.current.currentTheme).toEqual("base");
    });

    it("THEN should correctly return currentTheme dark", () => {
      const { result } = makeSut("dark");
      expect(result.current.currentTheme).toEqual("dark");
    });
  });
});
