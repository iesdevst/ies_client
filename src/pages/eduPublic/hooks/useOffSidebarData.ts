import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/constants';

export const usePubSidebarData = (): { data: Array<OffSidebar> } => {
  const { t } = useTranslation('useOffSidebarData');
  const data = useMemo<Array<OffSidebar>>(
    () => [
      {
        tit: t('tit1'),
        section: [
          {
            key: ROUTES.TRAININGPL,
            label: t('trainPl'),
          },
          {
            key: ROUTES.DEGRESS,
            label: t('degress'),
          },
          {
            key: ROUTES.LEGALDOC,
            label: t('legal'),
          },
          {
            key: ROUTES.QUALITY,
            label: t('quality'),
          },
          {
            key: ROUTES.VOCATIONAL,
            label: t('vocadoc'),
          },
        ],
      },
    ],
    [t],
  );
  return { data };
};
export const useDocsSidebarData = (): { data: Array<OffSidebar> } => {
  const { t } = useTranslation('useOffSidebarData');
  const data = useMemo<Array<OffSidebar>>(
    () => [
      {
        tit: t('tit2'),
        section: [
          {
            key: ROUTES.TRAINDOCS,
            label: t('regulations'),
          },
          {
            key: ROUTES.TRAINFORM,
            label: t('trainForm'),
          },
        ],
      },
    ],
    [t],
  );
  return { data };
};
export const useStuSidebarData = (): { data: Array<OffSidebar> } => {
  const { t } = useTranslation('useOffSidebarData');
  const data = useMemo<Array<OffSidebar>>(
    () => [
      {
        tit: t('stu'),
        section: [
          {
            key: ROUTES.REGUSTU,
            label: t('stuRegu'),
          },
          {
            key: ROUTES.ACTSTU,
            label: t('stuAct'),
          },
          {
            key: ROUTES.HANDBOOK,
            label: t('handbook'),
          },
          {
            key: ROUTES.STUFORM,
            label: t('stuForm'),
          },
          {
            key: ROUTES.STUINFO,
            label: t('stuInfo'),
          },
        ],
      },
    ],
    [t],
  );
  return { data };
};

export type OffSidebar = {
  tit: string;
  section: Array<SideSection>;
};

export type SideSection = {
  key: string;
  label: string;
};
