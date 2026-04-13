import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import CNTT from '@/assets/imgs/cntt.jpg';
import DNC from '@/assets/imgs/dcn.jpg';
import KTDN from '@/assets/imgs/ktdn.png';
import MKT from '@/assets/imgs/mkt.png';
import QLDN from '@/assets/imgs/qldn.jpg';
import QLKS from '@/assets/imgs/qlks.png';
import THUD from '@/assets/imgs/thud.png';
import TKVP from '@/assets/imgs/tkvp.png';
import VMT from '@/assets/imgs/vmt.png';
import { IesClSection } from '@/components';
import { ROUTES } from '@/constants';

const TrainingSl: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('trainingSl');
  const data = [
    {
      title: t('offA'),
      icon: TKVP,
    },
    {
      title: t('hotel'),
      icon: QLKS,
    },
    {
      title: t('appInfo'),
      icon: THUD,
    },
    {
      title: t('busiA'),
      icon: KTDN,
    },
    {
      title: t('mkt'),
      icon: MKT,
    },
    {
      title: t('cad'),
      icon: VMT,
    },
    {
      title: t('busiM'),
      icon: QLDN,
    },
    {
      title: t('it'),
      icon: CNTT,
    },
    {
      title: t('electric'),
      icon: DNC,
    },
  ];
  const staticDt = [
    {
      num: '1500+',
      des: t('desNum1'),
    },
    {
      num: '14',
      des: t('desNum2'),
    },
    {
      num: '250+',
      des: t('desNum3'),
    },
  ];

  return (
    <IesClSection
      id='trainSl'
      layout='traningSl'
      trainDes={t('years30')}
      trainTit={t('iesAt')}
      trainImgSl={data}
      statisTit={t('explore')}
      statistics={staticDt}
      className='!h-full !mt-5 !bg-[#3e72b2] pt-18'
      mb={mb}
      navigateGo={ROUTES.ADMISSIONSVOCA_ALL}
    />
  );
};

export default TrainingSl;
