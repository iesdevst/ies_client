import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useStatsData = (): { data: Array<Static> } => {
  const { t } = useTranslation('statIes');
  const data = useMemo<Array<Static>>(
    () => [
      {
        id: '1',
        num: '3500+',
        des: t('desNum1'),
        label: t('lb1'),
      },
      {
        id: '2',
        num: '9+',
        des: t('desNum2'),
        label: t('lb2'),
      },
      {
        id: '3',
        num: '22+',
        des: t('desNum3'),
        label: t('lb3'),
      },
    ],
    [t],
  );
  return { data };
};

export type Static = {
  id: string;
  num: string;
  des: string;
  label: string;
};
