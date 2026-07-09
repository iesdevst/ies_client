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
      engTitle: 'BEVERAGE PREPARATION',
      shortCrsType: ShortCrsTypeEnum.Mixology,
      imgDetail: MSC,
      overview: {
        intro: t('mixologyIntro'),
        objective: t('mixologyObj'),
        decs: t('mixologyDesc'),
        decsTagName: t('mixologyDecsTagName'),
        career: t('mixologyCareer'),
        tagName: t('mixologyTagName'),
      },
      info: {
        require: t('req'),
        timets: t('timets'),
        method: t('method'),
        docmethod: t('docmethod'),
      },
      apply: {
        document: t('doc'),
        work: t('work'),
      },
    },

    {
      shortCrsTit: t('cookingTit'),
      engTitle: 'PROFESSIONAL COOKING',
      shortCrsType: ShortCrsTypeEnum.Cooking,
      imgDetail: CSC,
      overview: {
        intro: t('cookingIntro'),
        objective: t('cookingObj'),
        decs: t('cookingDesc'),
        decsTagName: t('cookingDecsTagName'),
        career: t('cookingCareer'),
        tagName: t('cookingTagName'),
      },
      info: {
        require: t('req'),
        timets: t('timets'),
        method: t('method'),
        docmethod: t('docmethod'),
      },
      apply: {
        document: t('doc'),
        work: t('work'),
      },
    },

    {
      shortCrsTit: t('bakingTit'),
      engTitle: 'BAKING',
      shortCrsType: ShortCrsTypeEnum.Baking,
      imgDetail: BSC,
      overview: {
        intro: t('bakingIntro'),
        objective: t('bakingObj'),
        decs: t('bakingDesc'),
        decsTagName: t('bakingDecsTagName'),
        career: t('bakingCareer'),
        tagName: t('bakingTagName'),
      },
      info: {
        require: t('req'),
        timets: t('timets'),
        method: t('method'),
        docmethod: t('docmethod'),
      },
      apply: {
        document: t('doc'),
        work: t('work'),
      },
    },

    {
      shortCrsTit: t('aiTit'),
      engTitle: 'AI APPLICATIONS',
      shortCrsType: ShortCrsTypeEnum.UsingAi,
      imgDetail: ASC,
      overview: {
        intro: t('aiIntro'),
        objective: t('aiObj'),
        decs: t('aiDesc'),
        decsTagName: t('aiDecsTagName'),
        career: t('aiCareer'),
        tagName: t('aiTagName'),
      },
      info: {
        require: t('req'),
        timets: t('timets'),
        method: t('method'),
        docmethod: t('docmethod'),
      },
      apply: {
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
  decsTagName: string;
  career: string;
  tagName: string;
};
export type AdmissScInfo = {
  require: string;
  timets: string;
  method: string;
  docmethod: string;
};

export type ScTuiApply = {
  document: string;
  work: string;
};

export type DetailShortCrs = {
  shortCrsTit: string;
  engTitle: string;
  imgDetail: string;
  shortCrsType: ShortCrsTypeEnum;
  overview: OvwScDetail;
  info: AdmissScInfo;
  apply: ScTuiApply;
};
