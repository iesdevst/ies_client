import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import APC from '@/assets/imgs/ap_career.webp';
import CT from '@/assets/imgs/career_topic.webp';
import DSC from '@/assets/imgs/ds_career.webp';
import ITC from '@/assets/imgs/it_career.webp';
import MKTC from '@/assets/imgs/mkt_career.webp';
import { ROUTES } from '@/constants';
import { ProgTypeEnum } from '@/utils';

export const useCrUpData = (): { data: Array<CardUp> } => {
  const { t } = useTranslation('careerGuid');
  const data = useMemo<Array<CardUp>>(
    () => [
      {
        id: '1',
        cTit: t('cTit1'),
        cImg: CT,
        decs: t('cdecs1'),
        topic: true,
        goTo: ROUTES.ADMISSIONSVOCA_ALL,
      },
      {
        id: '2',
        cTit: t('cTit2'),
        cImg: ITC,
        decs: t('cdecs2'),
        topic: false,
        goTo: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.IT}`,
      },
    ],
    [t],
  );
  return { data };
};

export type CardUp = {
  id: string;
  cTit: string;
  cImg: string;
  decs: string;
  topic: boolean;
  goTo: string;
};

export const useCrDownData = (): { data: Array<CardDown> } => {
  const { t } = useTranslation('careerGuid');
  const data = useMemo<Array<CardDown>>(
    () => [
      {
        id: '1',
        img: APC,
        des: t('decsd1'),
        tit: t('dtit1'),
        goTo: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.AppInfo}`,
      },
      {
        id: '2',
        img: DSC,
        tit: t('dtit2'),
        des: t('decsd2'),
        goTo: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.CompuDs}`,
      },
      {
        id: '3',
        img: MKTC,
        des: t('decsd3'),
        tit: t('dtit3'),
        goTo: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Mkt}`,
      },
    ],
    [t],
  );
  return { data };
};

export type CardDown = {
  id: string;
  img: string;
  des: string;
  tit: string;
  goTo: string;
};
