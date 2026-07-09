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
      engTitle: 'APPLIED INFORMATICS',
      industryType: ProgTypeEnum.AppInfo,
      industryCode: '6480101',
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
      program: t('itCat'),
      progTitle: t('itProg'),
      engTitle: 'INFORMATION TECHNOLOGY',
      industryType: ProgTypeEnum.IT,
      industryCode: '6480201',
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
      program: t('itCat'),
      progTitle: t('indusProg'),
      engTitle: 'INDUSTRIAL & ELECTRICAL',
      industryType: ProgTypeEnum.Indus,
      industryCode: '6520201',
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
      program: t('officeCat'),
      progTitle: t('officeProg'),
      engTitle: 'OFFICE ADMINISTRATION',
      industryType: ProgTypeEnum.Office,
      industryCode: '6340402',
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
      program: t('officeCat'),
      progTitle: t('hospiProg'),
      engTitle: 'HOSPITALITY MANAGEMENT',
      industryType: ProgTypeEnum.Hospi,
      industryCode: '6810201',
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
      program: t('bsCat'),
      progTitle: t('mktProg'),
      engTitle: 'MARKETING',
      industryType: ProgTypeEnum.Mkt,
      industryCode: '6340204',
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
      program: t('bsCat'),
      progTitle: t('busiProg'),
      engTitle: 'BUSINESS ADMINISTRATION',
      industryType: ProgTypeEnum.Business,
      industryCode: '6340101',
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
      program: t('designProg'),
      progTitle: t('designCat'),
      engTitle: 'COMPUTER GRAPHIC DESIGN',
      industryType: ProgTypeEnum.CompuDs,
      industryCode: '6210403',
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
      program: t('bsCat'),
      progTitle: t('accProg'),
      engTitle: 'ACCOUNTING',
      industryType: ProgTypeEnum.Accounting,
      industryCode: '6340301',
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
  timets: string;
  method: string;
  docmethod: string;
};

export type TuiApply = {
  document: string;
  work: string;
};

export type DetailTrain = {
  program: string;
  progTitle: string;
  engTitle: string;
  imgDetail: string;
  industryType: ProgTypeEnum;
  industryCode: string;
  overview: OvwDetail;
  info: AdmissInfo;
  apply: TuiApply;
};
