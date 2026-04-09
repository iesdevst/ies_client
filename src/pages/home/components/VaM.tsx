import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import DHHCMTS from '@/assets/imgs/dhhcmts_avt.avif';
import VAM from '@/assets/imgs/ies_vam.png';
import TPI from '@/assets/imgs/topic_img.png';
import TSLM from '@/assets/imgs/tslm_avt.avif';
import TSTC from '@/assets/imgs/tstc_avt.avif';
import { IesClSection } from '@/components';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const VaM: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('vaM');
  const topicDt = [
    {
      tit: t('sectionTitle'),
      des: t('topic1Desc'),
      bgColor: 'bg-[#1f2251]',
    },
    {
      tit: t('topic2Title'),
      des: t('topic2Desc'),
      bgColor: 'bg-[#d72134]',
    },
  ];

  const methodPr = [
    {
      thodAv: TSLM,
      meTit: t('method1'),
      methodGo: ROUTES.ADMISSIONS_SC_MIX_OVW,
    },
    {
      thodAv: TSTC,
      meTit: t('method2'),
      methodGo: ROUTES.ADMISSIONSVOCA_ALL,
    },
    {
      thodAv: DHHCMTS,
      meTit: t('method3'),
      methodGo: ROUTES.PARTNERSHIP,
    },
  ];
  return (
    <IesClSection
      id='vAm'
      layout='topic'
      mb={mb}
      dark={isDark}
      topImaTit={TPI}
      topTitBut={t('topImageBtn')}
      topicCt={topicDt}
      botTit={t('bottomTitle')}
      lstBut='Explore More'
      botBut={t('listBtn')}
      methodLst={methodPr}
      navigateGo={ROUTES.ACADEMICS}
      aboutTogo={ROUTES.ABOUT_OVERVIEW}
      topicI={VAM}
      className={`py-15 ${isDark ? '!bg-[#253933]' : '!bg-[#f2f5ff]'} ${!mb ? 'px-20 mt-20' : 'px-5 mt-10'}`}
    />
  );
};

export default VaM;
