import { useTranslation } from 'react-i18next';
import ACCOUNTING from '@/assets/imgs/accouting_cardi.png';
import APIINFO from '@/assets/imgs/apiinfo_cardi.png';
import BUSIAD from '@/assets/imgs/busiad_cardi.png';
import DESIGN from '@/assets/imgs/design_cardi.png';
import HOSIM from '@/assets/imgs/hosim_cardi.png';
import HTM from '@/assets/imgs/htm_cardi.png';
import INDUS from '@/assets/imgs/induss_cardi.png';
import IT from '@/assets/imgs/it_cardi.png';
import MKT from '@/assets/imgs/mtk_cardi.png';
import { ProgramSlugEnum, ProgTypeEnum } from '@/utils';

export const useTrainingData = (): { data: Array<Program> } => {
  const { t } = useTranslation('useTrainingData');
  const data: Array<Program> = [
    {
      slug: ProgramSlugEnum.IT,
      title: t('itCat'),
      trainings: [
        {
          train: t('appInfoProg'),
          desc: t('appInfoDesc'),
          trainPic: APIINFO,
          progType: ProgTypeEnum.AppInfo,
        },
        {
          train: t('itProg'),
          desc: t('itDesc'),
          trainPic: IT,
          progType: ProgTypeEnum.IT,
        },
        {
          train: t('indusProg'),
          desc: t('indusDesc'),
          trainPic: INDUS,
          progType: ProgTypeEnum.Indus,
        },
      ],
    },
    {
      slug: ProgramSlugEnum.Business,
      title: t('busiCat'),
      trainings: [
        {
          train: t('busiProg'),
          desc: t('busiDesc'),
          trainPic: HOSIM,
          progType: ProgTypeEnum.Business,
        },
        {
          train: t('mktProg'),
          desc: t('mktDesc'),
          trainPic: MKT,
          progType: ProgTypeEnum.Mkt,
        },
        {
          train: t('accProg'),
          desc: t('accDesc'),
          trainPic: ACCOUNTING,
          progType: ProgTypeEnum.Accounting,
        },
      ],
    },
    {
      slug: ProgramSlugEnum.Hospitality,
      title: t('hosCat'),
      trainings: [
        {
          train: t('hospiProg'),
          desc: t('hospiDesc'),
          trainPic: HTM,
          progType: ProgTypeEnum.Hospi,
        },
        {
          train: t('officeProg'),
          desc: t('officeDesc'),
          trainPic: BUSIAD,
          progType: ProgTypeEnum.Office,
        },
      ],
    },
    {
      slug: ProgramSlugEnum.Design,
      title: t('designCat'),
      trainings: [
        {
          train: t('designProg'),
          desc: t('designDesc'),
          trainPic: DESIGN,
          progType: ProgTypeEnum.CompuDs,
        },
      ],
    },
  ];

  return { data };
};

export type Training = {
  train: string;
  desc: string;
  trainPic: string;
  progType: ProgTypeEnum;
};

export type Program = {
  slug: ProgramSlugEnum;
  title: string;
  trainings: Array<Training>;
};
