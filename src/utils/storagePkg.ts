import { decryptData, encryptData } from './encryption';
import logger from './logger';

const TTL_PREFIX = '_ttl_';
const storageKeys = {
  accessToken: 'accessToken',
};
type StorageKeys = keyof typeof storageKeys;

const storage = {
  // Generate a TTL key for expiration tracking
  ttlKey: (key: StorageKeys) => `${TTL_PREFIX}${key}`,

  // Set an item in localStorage with optional TTL (in minutes)
  setItem: (key: StorageKeys, value: unknown, ttlInMinutes?: number): void => {
    try {
      // Encrypt the value before storing
      const encryptedValue = encryptData(value);
      localStorage.setItem(key, encryptedValue as string);
      logger.info({ Title: 'Set item', key, encryptedValue });

      // If TTL is provided, calculate the expiration time and store it
      if (ttlInMinutes) {
        const ttlValue = Date.now() + ttlInMinutes * 60 * 1000; // Convert minutes to milliseconds
        localStorage.setItem(storage.ttlKey(key), ttlValue.toString());
        logger.info({ Title: 'Set TTL', key, ttlValue });
      }
    } catch (error) {
      logger.error({ Title: 'Set item failed', key, value, error });
    }
  },

  // Get an item from localStorage, checking for TTL expiration
  getItem: <T = unknown>(key: StorageKeys): T | null => {
    try {
      // Check if the item has a TTL and if it has expired
      const ttlValue = localStorage.getItem(storage.ttlKey(key));
      if (ttlValue && Date.now() > parseInt(ttlValue, 10)) {
        // If expired, remove the item and its TTL
        storage.removeItem(key);
        logger.warn({ Title: 'Item expired', key });
        return null;
      }

      // Retrieve and decrypt the value
      const encryptedValue = localStorage.getItem(key);
      if (!encryptedValue) {
        logger.info({ Title: 'Item not found', key });
        return null;
      }

      const decryptedValue = decryptData<T>(encryptedValue);
      logger.info({ Title: 'Get item', key, decryptedValue });
      return decryptedValue;
    } catch (error) {
      logger.error({ Title: 'Get item failed', key, error });
      return null;
    }
  },

  // Remove an item and its TTL from localStorage
  removeItem: (key: StorageKeys): void => {
    try {
      localStorage.removeItem(key);
      localStorage.removeItem(storage.ttlKey(key));
      logger.info({ Title: 'Remove item', key });
    } catch (error) {
      logger.error({ Title: 'Remove item failed', key, error });
    }
  },

  // Clear all items from localStorage
  clear: (): void => {
    try {
      localStorage.clear();
      logger.info({ Title: 'Clear all items' });
    } catch (error) {
      logger.error({ Title: 'Clear all items failed', error });
    }
  },

  // Get the number of keys in localStorage
  length: (): number => {
    try {
      const length = localStorage.length;
      logger.info({ Title: 'Get storage length', length });
      return length;
    } catch (error) {
      logger.error({ Title: 'Get storage length failed', error });
      return 0;
    }
  },

  // Get a key by its index in localStorage
  key: (index: number): string | null => {
    try {
      const key = localStorage.key(index);
      logger.info({ Title: 'Get key by index', index, key });
      return key;
    } catch (error) {
      logger.error({ Title: 'Get key by index failed', index, error });
      return null;
    }
  },

  // Get all keys in localStorage
  keys: (): string[] => {
    try {
      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && !key.startsWith(TTL_PREFIX)) {
          keys.push(key);
        }
      }
      logger.info({ Title: 'Get all keys', keys });
      return keys;
    } catch (error) {
      logger.error({ Title: 'Get all keys failed', error });
      return [];
    }
  },
};

export default storage;
