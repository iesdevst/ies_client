import { create } from 'zustand';
import { IesClientLangEnum } from '@/utils';

type UserStoreInit = {
  locale: IesClientLangEnum;
  isDark: boolean;
};

interface IUserStore extends UserStoreInit {
  setLocale: (locale: UserStoreInit['locale']) => void;
  setIsDark: (isDark: boolean) => void;
}

const init: UserStoreInit = {
  locale: (localStorage.getItem('locale') as IesClientLangEnum) || 'vi-VN',
  isDark: localStorage.getItem('isDark') === 'true' ? true : false,
};
const useUserStore = create<IUserStore>((set) => {
  //setter
  // locale setter
  const setLocale = (locale: IesClientLangEnum) => {
    set(() => ({ locale }));
    localStorage.setItem('locale', locale);
  };

  // themes
  const setIsDark = (isDark: boolean) => {
    set(() => ({ isDark }));
    localStorage.setItem('isDark', String(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  };

  return {
    ...init,
    setLocale,
    setIsDark,
  };
});

export { useUserStore };
export type { IUserStore, UserStoreInit };
