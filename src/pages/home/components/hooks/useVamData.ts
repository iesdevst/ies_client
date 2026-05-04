import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import DHHCMTS from '@/assets/imgs/dhhcmts_avt.avif';
import TSLM from '@/assets/imgs/tslm_avt.avif';
import TSTC from '@/assets/imgs/tstc_avt.avif';
import { ROUTES } from '@/constants';

export const useTopicData = (): { data: Array<Topic> } => {
  const { t } = useTranslation('vaM');
  const data = useMemo<Array<Topic>>(
    () => [
      {
        id: '1',
        tit: t('sectionTitle'),
        des: t('topic1Desc'),
        bgColor: 'bg-[#1f2251]',
      },
      {
        id: '2',
        tit: t('topic2Title'),
        des: t('topic2Desc'),
        bgColor: 'bg-[#d72134]',
      },
    ],
    [t],
  );
  return { data };
};

export type Topic = {
  id: string;
  tit: string;
  des: string;
  bgColor: string;
};

export const useMethodPrData = (): { data: Array<MethodPr> } => {
  const { t } = useTranslation('vaM');
  const data = useMemo<Array<MethodPr>>(
    () => [
      {
        id: '1',
        thodAv: TSLM,
        meTit: t('method1'),
        methodGo: ROUTES.ADMISSIONS_SC_MIX_OVW,
      },
      {
        id: '2',
        thodAv: TSTC,
        meTit: t('method2'),
        methodGo: ROUTES.ADMISSIONSVOCA_ALL,
      },
      {
        id: '3',
        thodAv: DHHCMTS,
        meTit: t('method3'),
        methodGo: ROUTES.PARTNERSHIP,
      },
    ],
    [t],
  );
  return { data };
};

export type MethodPr = {
  id: string;
  thodAv: string;
  meTit: string;
  methodGo: string;
};
