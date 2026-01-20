import { createMMKV } from "react-native-mmkv";
import type { StorageAdapter } from "./adapter";

// Storage keys
export const STORAGE_KEYS = {
  THEME: "theme",
  ONBORADING: "onboarding",
  AUTHENTICATED: "authenticated",
};

// Create MMKV instance
const mmkv = createMMKV();

export const MMKVStorage: StorageAdapter = {
  getItem<T>(key: string): T | null {
    const value = mmkv.getString(key);
    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  },
  setItem<T>(key: string, value: T) {
    mmkv.set(key, JSON.stringify(value));
  },
  removeItem(key: string) {
    mmkv.remove(key);
  },
  clear() {
    mmkv.clearAll();
  },
  getAllKeys() {
    return mmkv.getAllKeys();
  },
};
