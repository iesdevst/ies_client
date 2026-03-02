import dayjs from 'dayjs';
import localforage from 'localforage';
import { decryptData, encryptData } from './encryption';
import logger from './logger'; // Import the logger

const TTL_PREFIX = '_ttl_';
const forageKeys = {
  loginRes: 'loginRes',
  locale: 'locale',
};
type ForageKeys = keyof typeof forageKeys;
type ForageCallback<Forage = unknown> = (
  err?: Error | null,
  value?: Forage | null,
) => void;

const forage = <Forage = unknown>() => {
  return {
    ttlKey: (key: ForageKeys) => `${TTL_PREFIX}${key}`,
    getTTL: (key: ForageKeys, callback?: ForageCallback<number>) => {
      return localforage.getItem<number>(
        forage().ttlKey(key),
        (err, ttlNum) => {
          if (callback) callback(err, ttlNum);
          if (err) logger.warn({ Title: 'Get TTL number error', key, err });
        },
      );
    },
    getItem: (key: ForageKeys, callback?: ForageCallback<Forage>) => {
      return new Promise<Forage>((resolve) => {
        localforage.getItem<Forage>(key, (err, foragedValue) => {
          if (err) logger.warn({ Title: 'Get item error', key, err });
          const decryptedValue = decryptData(
            foragedValue as unknown as string,
          ) as Forage;

          forage().getTTL(key, (ttlError, ttlNum) => {
            if (ttlError) {
              if (callback) callback(ttlError, null);
              return null;
            }
            if (ttlNum && dayjs().isAfter(dayjs(ttlNum))) {
              localforage.removeItem(key);
              if (callback) callback(ttlError, null);
              return null;
            }

            if (callback) callback(err, decryptedValue);
            resolve(decryptedValue);
            return decryptedValue;
          });
        });
      });
    },
    setItem: (
      key: ForageKeys,
      value: Forage,
      callback?: ForageCallback<Forage>,
      ttlInMinutes?: number,
    ) => {
      const encryptedValue = encryptData(value);
      return localforage.setItem(key, encryptedValue, (err, foragedValue) => {
        if (err) logger.warn({ Title: 'Set item error', key, err });

        if (ttlInMinutes) {
          const ttlValue = dayjs().add(ttlInMinutes, 'minute').valueOf();
          localforage.setItem(forage().ttlKey(key), ttlValue);
          logger.info({ Title: 'Set TTL', key, ttlValue });
        }

        const decryptedValue = decryptData<Forage | null>(foragedValue);
        if (callback) callback(err, decryptedValue);
        return foragedValue;
      });
    },
    removeItem: (key: ForageKeys, callback?: ForageCallback<Forage>) => {
      return forage<Forage>().getItem(key, (_, item) => {
        localforage.removeItem(key, (err) => {
          localforage.removeItem(forage().ttlKey(key));
          if (err) logger.warn({ Title: 'Remove item error', key, err });
          if (callback) callback(err, item);
        });
      });
    },
    clear: (callback?: (err: Error) => void) => {
      return localforage.clear((err) => {
        if (err) logger.error({ Title: 'Clear storage error', err });
        if (callback) callback(err);
      });
    },
    length: (callback?: (err: Error, numOfKeys: number) => void) => {
      return localforage.length((err, numOfKeys) => {
        if (err) logger.warn({ Title: 'Get storage length error', err });
        if (callback) callback(err, numOfKeys);
      });
    },
    key: (
      keyIndex: number,
      callback: (err: Error, key: ForageKeys) => void,
    ) => {
      return localforage.key(keyIndex, (err, key) => {
        if (err) logger.warn({ Title: 'Get key error', keyIndex, err });
        if (callback) callback(err, key as ForageKeys);
      });
    },
    keys: (callback?: (err: Error, keys: Array<ForageKeys>) => void) => {
      return localforage.keys((err, keys) => {
        if (err) logger.warn({ Title: 'Get keys error', err });
        if (callback) callback(err, keys as Array<ForageKeys>);
      });
    },
    iterate: (
      iteratorCallback?: (
        value: Forage | null,
        key: ForageKeys,
        iterationNum: number,
      ) => void,
      callback?: (err: Error, result: void) => void,
    ) => {
      return localforage.iterate(
        (value, key, iterationNum) => {
          if (iteratorCallback)
            iteratorCallback(
              value as Forage | null,
              key as ForageKeys,
              iterationNum,
            );
        },
        (err, result) => {
          if (err) logger.warn({ Title: 'Iterate error', err });
          if (callback) callback(err, result);
        },
      );
    },
  };
};

export { forageKeys, forage };
