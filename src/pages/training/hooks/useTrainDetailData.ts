import { useTranslation } from 'react-i18next';
import ACCTD from '@/assets/imgs/accounting_detail.webp';
import APPIFD from '@/assets/imgs/applied_info_detail.webp';
import ADSD from '@/assets/imgs/art_ds_detail.webp';
import BUSID from '@/assets/imgs/busi_admin_detail.webp';
import HOSD from '@/assets/imgs/hospi_manage_detail.webp';
import INDUSD from '@/assets/imgs/industrial_detail.webp';
import ITD from '@/assets/imgs/it_detail.webp';
import MTKD from '@/assets/imgs/mtk_details.webp';
import OFAD from '@/assets/imgs/office_admin_detail.webp';
import { ProgTypeEnum } from '@/utils';

export const useTrainDetailData = (): { data: Array<DetailTrain> } => {
  const { t } = useTranslation('useTrainDetailData');
  const data: Array<DetailTrain> = [
    {
      program: t('itCat'),
      progTitle: t('appInfoProg'),
      industryType: ProgTypeEnum.AppInfo,
      imgDetail: APPIFD,
      overview: {
        intro: t('appInfoIntro'),
        objective: t('appInfoObj'),
        decs: t('appInfoDesc'),
        decsTagName: t('appInfoDecsTagName'),
        career: t('appInfoCareer'),
        tagName: t('appInfoTagName'),
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
      program: t('itCat'),
      progTitle: t('itProg'),
      industryType: ProgTypeEnum.IT,
      imgDetail: ITD,
      overview: {
        intro: t('itIntro'),
        objective: t('itObj'),
        decs: t('itDesc'),
        decsTagName: t('itDecsTagName'),
        career: t('itCareer'),
        tagName: t('itTagName'),
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
      program: t('itCat'),
      progTitle: t('indusProg'),
      industryType: ProgTypeEnum.Indus,
      imgDetail: INDUSD,
      overview: {
        intro: t('indusIntro'),
        objective: t('indusObj'),
        decs: t('indusDesc'),
        decsTagName: t('indusDecsTagName'),
        career: t('indusCareer'),
        tagName: t('indusTagName'),
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
      program: t('officeCat'),
      progTitle: t('officeProg'),
      industryType: ProgTypeEnum.Office,
      imgDetail: OFAD,
      overview: {
        intro: t('officeIntro'),
        objective: t('officeObj'),
        decs: t('officeDesc'),
        decsTagName: t('officeDecsTagName'),
        career: t('officeCareer'),
        tagName: t('officeTagName'),
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
      program: t('officeCat'),
      progTitle: t('hospiProg'),
      industryType: ProgTypeEnum.Hospi,
      imgDetail: HOSD,
      overview: {
        intro: t('hospiIntro'),
        objective: t('hospiObj'),
        decs: t('hospiDesc'),
        decsTagName: t('hospiDecsTagName'),
        career: t('hospiCareer'),
        tagName: t('hospiTagName'),
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
      program: t('bsCat'),
      progTitle: t('mktProg'),
      industryType: ProgTypeEnum.Mkt,
      imgDetail: MTKD,
      overview: {
        intro: t('mktIntro'),
        objective: t('mktObj'),
        decs: t('mktDesc'),
        decsTagName: t('mktDecsTagName'),
        career: t('mktCareer'),
        tagName: t('mktTagName'),
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
      program: t('bsCat'),
      progTitle: t('busiProg'),
      industryType: ProgTypeEnum.Business,
      imgDetail: BUSID,
      overview: {
        intro: t('busiIntro'),
        objective: t('busiObj'),
        decs: t('busiDesc'),
        decsTagName: t('busiDecsTagName'),
        career: t('busiCareer'),
        tagName: t('busiTagName'),
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
      program: t('designProg'),
      progTitle: t('designCat'),
      industryType: ProgTypeEnum.CompuDs,
      imgDetail: ADSD,
      overview: {
        intro: t('designIntro'),
        objective: t('designObj'),
        decs: t('designDesc'),
        decsTagName: t('designDecsTagName'),
        career: t('designCareer'),
        tagName: t('designTagName'),
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
      program: t('bsCat'),
      progTitle: t('accProg'),
      industryType: ProgTypeEnum.Accounting,
      imgDetail: ACCTD,
      overview: {
        intro: t('accIntro'),
        objective: t('accObj'),
        decs: t('accDesc'),
        decsTagName: t('accDecsTagName'),
        career: t('accCareer'),
        tagName: t('accTagName'),
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

export type OvwDetail = {
  intro: string;
  objective: string;
  decs: string;
  decsTagName: string;
  career: string;
  tagName: string;
};
export type AdmissInfo = {
  require: string;
  method: string;
};

export type TuiApply = {
  requirement: string;
  document: string;
  work: string;
};

export type DetailTrain = {
  program: string;
  progTitle: string;
  imgDetail: string;
  industryType: ProgTypeEnum;
  overview: OvwDetail;
  info: AdmissInfo;
  apply: TuiApply;
};
