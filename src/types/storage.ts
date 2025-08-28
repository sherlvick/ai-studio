import type { GenerationResult } from './generation';

/**
 * History item stored in localStorage
 */
export interface HistoryItem extends GenerationResult {
  timestamp: number;
}

/**
 * Storage configuration
 */
export interface StorageConfig {
  maxHistory: number;
  storageKey: string;
}
