import { useTranslation } from 'react-i18next';
import ALT from '@/assets/imgs/ai_app_learn_transform.webp';
import BLT from '@/assets/imgs/baking_learn_transform.webp';
import CLT from '@/assets/imgs/cooking_learn_transform.webp';
import MLT from '@/assets/imgs/mixology_learn_transform.webp';

export const useLearnTfData = (): { data: Array<LearnTf> } => {
  const { t } = useTranslation('useLearnTfData');
  const data: Array<LearnTf> = [
    {
      id: '1',
      type: 'image',
      img: MLT,
    },
    {
      id: '2',
      type: 'text',
      tit: t('ltTitle1'),
      desc: t('ltDesc1'),
      author: t('ltAuthor1'),
    },
    {
      id: '3',
      type: 'image',
      img: BLT,
    },
    {
      id: '4',
      type: 'text',
      tit: t('ltTitle2'),
      desc: t('ltDesc2'),
      author: t('ltAuthor2'),
    },
    {
      id: '5',
      type: 'text',
      tit: t('ltTitle3'),
      desc: t('ltDesc3'),
      author: t('ltAuthor3'),
    },
    {
      id: '6',
      type: 'image',
      img: CLT,
    },
    {
      id: '7',
      type: 'text',
      tit: t('ltTitle4'),
      desc: t('ltDesc4'),
      author: t('ltAuthor4'),
    },
    {
      id: '8',
      type: 'image',
      img: ALT,
    },
  ];
  return { data };
};

export type LearnTf = {
  id: string;
  type: string;
  tit?: string;
  desc?: string;
  img?: string;
  author?: string;
};
