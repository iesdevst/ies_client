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
  locale: IesClientLangEnum.En_US,
  isDark: localStorage.getItem('isDark') === 'true' ? true : false,
};
const useUserStore = create<IUserStore>((set) => {
  // locale
  const locale =
    typeof window !== 'undefined'
      ? ((localStorage.getItem('locale') as IesClientLangEnum) ?? init.locale)
      : init.locale;

  //setter
  // locale setter
  const setLocale = (locale: IesClientLangEnum) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
    set(() => ({ locale }));
  };

  // themes
  const setIsDark = (isDark: boolean) => {
    set(() => ({ isDark }));
    localStorage.setItem('isDark', String(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  };

  return {
    ...init,
    locale,
    setLocale,
    setIsDark,
  };
});

export { useUserStore };
export type { IUserStore, UserStoreInit };
