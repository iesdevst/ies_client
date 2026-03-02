import { create } from 'zustand';
import { IesClientLangEnum } from '@/utils';

type UserStoreInit = {
  locale: IesClientLangEnum;
  isDark: boolean;
};

interface IUserStore extends UserStoreInit {
  setLocale: (locale: UserStoreInit['locale']) => void;
  setIsDark: (isDark: boolean) => void;
  reset: () => void;
}

const init: UserStoreInit = {
  locale: IesClientLangEnum.En_US,
  isDark: false,
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

  // reset setter
  const reset = () => {
    set((origin) => ({ ...init, locale: origin.locale }));
  };
  return {
    ...init,
    locale,
    setLocale,
    setIsDark: (isDark: boolean) => set(() => ({ isDark })),
    reset,
  };
});

export { useUserStore };
export type { IUserStore, UserStoreInit };
