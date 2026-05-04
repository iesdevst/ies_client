import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CNTT from '@/assets/imgs/cntt.jpg';
import DNC from '@/assets/imgs/dcn.jpg';
import KTDN from '@/assets/imgs/ktdn.png';
import MKT from '@/assets/imgs/mkt.png';
import QLDN from '@/assets/imgs/qldn.jpg';
import QLKS from '@/assets/imgs/qlks.png';
import THUD from '@/assets/imgs/thud.png';
import TKVP from '@/assets/imgs/tkvp.png';
import VMT from '@/assets/imgs/vmt.png';

export const useTrainImgDt = (): { data: Array<TrainImg> } => {
  const { t } = useTranslation('trainingSl');
  const data = useMemo<Array<TrainImg>>(
    () => [
      {
        id: '1',
        title: t('offA'),
        icon: TKVP,
      },
      {
        id: '2',
        title: t('hotel'),
        icon: QLKS,
      },
      {
        id: '3',
        title: t('appInfo'),
        icon: THUD,
      },
      {
        id: '4',
        title: t('busiA'),
        icon: KTDN,
      },
      {
        id: '5',
        title: t('mkt'),
        icon: MKT,
      },
      {
        id: '6',
        title: t('cad'),
        icon: VMT,
      },
      {
        id: '7',
        title: t('busiM'),
        icon: QLDN,
      },
      {
        id: '8',
        title: t('it'),
        icon: CNTT,
      },
      {
        id: '9',
        title: t('electric'),
        icon: DNC,
      },
    ],
    [t],
  );
  return { data };
};

export type TrainImg = {
  id: string;
  title: string;
  icon: string;
};

export const useStaticDt = (): { data: Array<Static> } => {
  const { t } = useTranslation('trainingSl');
  const data = useMemo<Array<Static>>(
    () => [
      {
        id: '1',
        num: '1500+',
        des: t('desNum1'),
      },
      {
        id: '2',
        num: '9',
        des: t('desNum2'),
      },
      {
        id: '3',
        num: '250+',
        des: t('desNum3'),
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
};
