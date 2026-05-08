import { useTranslation } from 'react-i18next';
import ASC from '@/assets/imgs/ai_app_sc.webp';
import BSC from '@/assets/imgs/baking_sc.webp';
import CSC from '@/assets/imgs/cooking_pro_sc.webp';
import MSC from '@/assets/imgs/mixology_sc.webp';
import { ShortCrsTypeEnum } from '@/utils';

export const useShortCrsData = (): { data: Array<DetailShortCrs> } => {
  const { t } = useTranslation('useShortCrsData');
  const data: Array<DetailShortCrs> = [
    {
      shortCrsTit: t('mixologyTit'),
      shortCrsType: ShortCrsTypeEnum.Mixology,
      imgDetail: MSC,
      overview: {
        intro: t('mixologyIntro'),
        objective: t('mixologyObj'),
        decs: t('mixologyDesc'),
        career: t('mixologyCareer'),
      },
      info: {
        require: t('req'),
        method: t('method'),
      },
      apply: {
        requirement: t('apply'),
        document: t('doc'),
        work: t('work'),
      },
    },

    {
      shortCrsTit: t('cookingTit'),
      shortCrsType: ShortCrsTypeEnum.Cooking,
      imgDetail: CSC,
      overview: {
        intro: t('cookingIntro'),
        objective: t('cookingObj'),
        decs: t('cookingDesc'),
        career: t('cookingCareer'),
      },

      info: {
        require: t('req'),
        method: t('method'),
      },
      apply: {
        requirement: t('apply'),
        document: t('doc'),
        work: t('work'),
      },
    },

    {
      shortCrsTit: t('bakingTit'),
      shortCrsType: ShortCrsTypeEnum.Baking,
      imgDetail: BSC,
      overview: {
        intro: t('bakingIntro'),
        objective: t('bakingObj'),
        decs: t('bakingDesc'),
        career: t('bakingCareer'),
      },

      info: {
        require: t('req'),
        method: t('method'),
      },
      apply: {
        requirement: t('apply'),
        document: t('doc'),
        work: t('work'),
      },
    },

    {
      shortCrsTit: t('aiTit'),
      shortCrsType: ShortCrsTypeEnum.UsingAi,
      imgDetail: ASC,
      overview: {
        intro: t('aiIntro'),
        objective: t('aiObj'),
        decs: t('aiDesc'),
        career: t('aiCareer'),
      },

      info: {
        require: t('req'),
        method: t('method'),
      },
      apply: {
        requirement: t('apply'),
        document: t('doc'),
        work: t('work'),
      },
    },
  ];
  return { data };
};

export type OvwScDetail = {
  intro: string;
  objective: string;
  decs: string;
  career: string;
};
export type AdmissScInfo = {
  require: string;
  method: string;
};

export type ScTuiApply = {
  requirement: string;
  document: string;
  work: string;
};

export type DetailShortCrs = {
  shortCrsTit: string;
  imgDetail: string;
  shortCrsType: ShortCrsTypeEnum;
  overview: OvwScDetail;
  info: AdmissScInfo;
  apply: ScTuiApply;
};
