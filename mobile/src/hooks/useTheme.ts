import { useMemo } from "react";
import { Uniwind, useUniwind } from "uniwind";
import { storage, STORAGE_KEYS } from "@storage";

export const useTheme = () => {
  const { theme } = useUniwind();

  const themeUpdated: "light" | "dark" = useMemo(
    () => (theme === "dark" ? "light" : "dark"),
    [theme],
  );

  const changeTheme = (newTheme: "light" | "dark") => {
    storage.setItem(STORAGE_KEYS.THEME, newTheme);
    Uniwind.setTheme(newTheme);
  };

  return {
    theme,
    changeTheme,
    themeUpdated,
  };
};
