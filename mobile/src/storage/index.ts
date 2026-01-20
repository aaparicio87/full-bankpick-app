import type { StorageAdapter } from "./adapter";
import { MMKVStorage, STORAGE_KEYS } from "./mmkv";

const storage: StorageAdapter = MMKVStorage;

export { STORAGE_KEYS, storage };
export type { StorageAdapter };
