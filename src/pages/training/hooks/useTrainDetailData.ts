import { useTranslation } from 'react-i18next';
import ACCTD from '@/assets/imgs/accounting_detail.png';
import APPIFD from '@/assets/imgs/applied_info_detail.png';
import ADSD from '@/assets/imgs/art_ds_detail.png';
import BUSID from '@/assets/imgs/busi_admin_detail.png';
import HOSD from '@/assets/imgs/hospi_manage_detail.png';
import INDUSD from '@/assets/imgs/idustrial_detail.png';
import ITD from '@/assets/imgs/it_detail.png';
import MTKD from '@/assets/imgs/mtk_details.png';
import OFAD from '@/assets/imgs/office_admin_detail.png';
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
        career: t('appInfoCareer'),
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
        career: t('itCareer'),
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
        career: t('indusCareer'),
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
        career: t('officeCareer'),
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
        career: t('hospiCareer'),
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
        career: t('mktCareer'),
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
        career: t('busiCareer'),
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
        career: t('designCareer'),
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
        career: t('accCareer'),
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
  career: string;
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
