import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type YFHintItemsOpts = {
  id: string;
  title: string;
  des: string;
  isReaded: boolean;
};
type NotifyBaseOpts = {
  title: string;
  des: string | undefined;
  useT?: boolean;
};
type NotifyStoreInit = {
  basicSuccessQue: Array<NotifyBaseOpts>;
  basicErrorQue: Array<NotifyBaseOpts>;
  hintQue: Array<YFHintItemsOpts>;
};

type NotifyStoreOptions = NotifyStoreInit & {
  setBSQ: (basicSuccessQue: Array<NotifyBaseOpts>) => void;
  pushBSQ: (basicSuccessQue: Array<NotifyBaseOpts>) => void;
  shiftBSQ: (count?: number) => void;
  setBEQ: (basicErrorQue: Array<NotifyBaseOpts>) => void;
  pushBEQ: (basicSuccessQue: Array<NotifyBaseOpts>) => void;
  shiftBEQ: (count?: number) => void;
  setHQ: (hintQue: NotifyStoreInit['hintQue']) => void;
  pushHQ: (hintQue: NotifyStoreInit['hintQue']) => void;
  shiftHQ: (count?: number) => void;
  readHQ: (id: string) => void;
};

const init: NotifyStoreInit = {
  basicSuccessQue: [],
  basicErrorQue: [],
  hintQue: [],
};
const useNotifyStore = create(
  persist<NotifyStoreOptions>(
    (set) => ({
      ...init,
      setBSQ: (basicSuccessQue) => {
        set({ basicSuccessQue });
      },
      pushBSQ: (newQue) => {
        set((states) => {
          const basicSuccessQue = [...states.basicSuccessQue, ...newQue];
          return { ...states, basicSuccessQue };
        });
      },
      shiftBSQ: (count) => {
        const useCount = count || 1;
        set((states) => {
          const JsonQue = states.basicSuccessQue.map((screenData) =>
            JSON.stringify(screenData),
          );
          const setQue = Array.from(new Set(JsonQue));
          const getBSQ = (): Array<NotifyBaseOpts> => {
            try {
              const parseQue = setQue.map(
                (screenData) => JSON.parse(screenData) as NotifyBaseOpts,
              );
              return parseQue;
            } catch {
              return [];
            }
          };
          const newBSQ = getBSQ();
          const basicSuccessQue = newBSQ.slice(useCount);
          return { ...states, basicSuccessQue };
        });
      },
      setBEQ: (basicErrorQue) => {
        set({ basicErrorQue });
      },
      pushBEQ: (newQue) => {
        set((states) => {
          const basicErrorQue = [...states.basicErrorQue, ...newQue];
          return { ...states, basicErrorQue };
        });
      },
      shiftBEQ: (count) => {
        set((states) => {
          const useCount = count || 1;
          const JsonQue = states.basicErrorQue.map((screenData) =>
            JSON.stringify(screenData),
          );
          const setQue = Array.from(new Set(JsonQue));
          const getBEC = (): Array<NotifyBaseOpts> => {
            try {
              const parseQue = setQue.map(
                (screenData) => JSON.parse(screenData) as NotifyBaseOpts,
              );
              return parseQue;
            } catch {
              return [];
            }
          };
          const newQue = getBEC();
          const basicErrorQue = newQue.slice(useCount);
          return { ...states, basicErrorQue };
        });
      },
      setHQ: (hintQue) => {
        set({ hintQue });
      },
      pushHQ: (newQue) => {
        set((states) => {
          const hintQue = [...newQue, ...states.hintQue];
          const uniqueHintQue = Array.from(
            new Map(hintQue.map((item) => [item.id, item])).values(),
          );
          return { ...states, hintQue: uniqueHintQue };
        });
      },
      shiftHQ: (count = 1) => {
        set((states) => {
          const hintQue = states.hintQue.slice(count);
          return { ...states, hintQue };
        });
      },
      readHQ: (id) => {
        set((states) => {
          const pureStates = { ...states };
          const item = pureStates.hintQue.find((findH) => findH.id === id);
          if (!item) return pureStates;
          item.isReaded = true;
          return { ...pureStates, hintQue: [...pureStates.hintQue] };
        });
      },
    }),
    {
      name: 'notify-store',
      partialize: (state) => ({
        basicSuccessQue: state.basicSuccessQue,
        basicErrorQue: state.basicErrorQue,
        hintQue: state.hintQue,
        setBSQ: () => {},
        pushBSQ: () => {},
        shiftBSQ: () => {},
        setBEQ: () => {},
        pushBEQ: () => {},
        shiftBEQ: () => {},
        setHQ: () => {},
        pushHQ: () => {},
        shiftHQ: () => {},
        readHQ: () => {},
      }),
    },
  ),
);

export { useNotifyStore };
export type { NotifyStoreOptions, YFHintItemsOpts };
