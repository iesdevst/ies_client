import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import BRSTUN from '@/assets/imgs/cnhs_news.jpg';
import EVAI from '@/assets/imgs/events_ai.png';
import HDHN2204 from '@/assets/imgs/hdhn_n2204_event.jpg';
import KTDT from '@/assets/imgs/ktdt_nfc.jpg';
import KTO from '@/assets/imgs/kto_nfc.jpg';
import TKDH from '@/assets/imgs/tkdh_nfc.jpg';
import LTS from '@/assets/imgs/top_str_lts.jpg';

export const useTopSn = (): { data: Array<TopSn> } => {
  const { t } = useTranslation('newAndEvent');
  const data = useMemo<Array<TopSn>>(
    () => [
      {
        id: '1',
        sti: EVAI,
        tit: t('workshop'),
        specTit: t('workshopTit'),
      },
      {
        id: '2',
        sti: BRSTUN,
        tit: t('eduCoop1'),
        specTit: t('eduCoopTit'),
      },
      {
        id: '3',
        sti: LTS,
        tit: t('admissions'),
        specTit: t('admissTit'),
      },
      {
        id: '4',
        sti: HDHN2204,
        tit: t('eduCoop2'),
        specTit: t('eduCoopTit'),
      },
    ],
    [t],
  );
  return { data };
};

export type TopSn = {
  id: string;
  sti: string;
  tit: string;
  specTit: string;
};

export const useFeatCdt = (): { data: Array<FeatCdt> } => {
  const { t } = useTranslation('newAndEvent');
  const data = useMemo<Array<FeatCdt>>(
    () => [
      {
        id: '1',
        imgC: KTDT,
        tit: t('elecEng'),
        butCard: '20-03-2026',
        des: t('elecDesc'),
      },
      {
        id: '2',
        imgC: KTO,
        tit: t('autoEng'),
        butCard: '01-03-2026',
        des: t('autoDesc'),
      },
      {
        id: '3',
        imgC: TKDH,
        tit: t('graphicD'),
        butCard: '09-02-2026',
        des: t('graphicDesc'),
      },
    ],
    [t],
  );
  return { data };
};

export type FeatCdt = {
  id: string;
  imgC: string;
  tit: string;
  butCard: string;
  des: string;
};
