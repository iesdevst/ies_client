import Utf8 from 'crypto-js/enc-utf8';
import RC4 from 'crypto-js/rc4';
import logger from './logger'; // Import the logger

const ENCRYPTION_KEY = '_encryption_key_';

const encryptData = <Data = unknown>(data: unknown): Data => {
  if (!data) return data as Data;

  try {
    if (Array.isArray(data)) {
      return data.map((item) => encryptData(item)) as Data;
    }

    if (typeof data === 'object') {
      return Object.entries(data).reduce((pre, [key, value]) => {
        return { ...pre, [key]: encryptData(value) };
      }, {} as Data);
    }

    if (typeof data === 'string') {
      const encrypted = RC4.encrypt(data, ENCRYPTION_KEY).toString();
      logger.debug({ Title: 'Data encrypted', data, encrypted });
      return encrypted as Data;
    }

    return data as Data;
  } catch (error) {
    logger.error({ Title: 'Encryption failed', data, error });
    throw new Error('Encryption failed');
  }
};

const decryptData = <Data = unknown>(encryptedData: unknown): Data => {
  if (!encryptedData) return encryptedData as Data;

  try {
    if (Array.isArray(encryptedData)) {
      return encryptedData.map((item) => decryptData(item)) as Data;
    }

    if (typeof encryptedData === 'object') {
      return Object.entries(encryptedData).reduce((pre, [key, value]) => {
        return { ...pre, [key]: decryptData(value) };
      }, {} as Data);
    }

    if (typeof encryptedData === 'string') {
      const bytes = RC4.decrypt(encryptedData, ENCRYPTION_KEY);
      const decrypted = bytes.toString(Utf8);
      logger.debug({ Title: 'Data decrypted', encryptedData, decrypted });
      return decrypted as Data;
    }

    return encryptedData as Data;
  } catch (error) {
    logger.warn({ Title: 'Decryption failed', encryptedData, error });
    return encryptedData as Data; // Return original data if decryption fails
  }
};

export { encryptData, decryptData };
