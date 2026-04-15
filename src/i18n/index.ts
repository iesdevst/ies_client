import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_US from './en_US';
import vi_VN from './vi_VN';
import { IesClientLangEnum } from '@/utils';

const resources = {
  'en-US': en_US,
  'vi-VN': vi_VN,
};

const storedLocale = localStorage.getItem('locale');

export const initI18n = i18n.use(initReactI18next).init({
  resources,
  lng: storedLocale ?? IesClientLangEnum.Vi_VN,
  fallbackLng: 'vi-VN',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});
