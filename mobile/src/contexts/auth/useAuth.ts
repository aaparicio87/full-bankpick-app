import { STORAGE_KEYS } from "@storage";
import { useCallback, useState } from "react";
import { useMMKVBoolean } from "react-native-mmkv";

export interface Auth {
  isAuthenticated: boolean | undefined;
  isLoading: boolean;
  completeOnboarding: boolean | undefined;
  handleTogleCompleteOnboarding: () => void;
  handleTogleAuthenticated: () => void;
}

export const useAuth = (): Auth => {
  const [isAuthenticated, setIsAuthenticated] = useMMKVBoolean(
    STORAGE_KEYS.AUTHENTICATED,
  );
  const [completeOnboarding, setCompleteOnboarding] = useMMKVBoolean(
    STORAGE_KEYS.ONBORADING,
  );

  const handleTogleCompleteOnboarding = useCallback(() => {
    setCompleteOnboarding((prevState) => !prevState);
  }, []);

  const handleTogleAuthenticated = useCallback(() => {
    setIsAuthenticated((prevState) => !prevState);
  }, []);

  return {
    isAuthenticated: true,
    isLoading: false,
    completeOnboarding,
    handleTogleCompleteOnboarding,
    handleTogleAuthenticated,
  };
};
