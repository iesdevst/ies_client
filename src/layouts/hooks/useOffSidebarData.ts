import { useMemo } from 'react';
import { ROUTES } from '@/constants';

export const useOffSidebarData = (): { data: Array<OffSidebar> } => {
  //   const { t } = useTranslation("useMegaNavData");
  const data = useMemo<Array<OffSidebar>>(
    () => [
      {
        tit: 'Educational Disclosure',
        section: [
          {
            key: ROUTES.TRAININGPL,
            label: 'Training Plan',
          },
          {
            key: ROUTES.DEGRESS,
            label: 'Degress',
          },
          {
            key: ROUTES.LEGALDOC,
            label: 'Legal Dossier',
          },
        ],
      },
      {
        tit: 'Information on training',
        section: [
          {
            key: '',
            label: 'Regulations',
          },
        ],
      },
    ],
    [],
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
