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

const TrainingSl: React.FC = () => {
  const data = [
    {
      title: 'Office Admin',
      icon: TKVP,
    },
    {
      title: 'Hotel Management',
      icon: QLKS,
    },
    {
      title: 'Applied Informatics',
      icon: THUD,
    },
    {
      title: 'Business Accounting',
      icon: KTDN,
    },
    {
      title: 'Marketing',
      icon: MKT,
    },
    {
      title: 'CAD Design',
      icon: VMT,
    },
    {
      title: 'Business Management',
      icon: QLDN,
    },
    {
      title: 'Information Technology',
      icon: CNTT,
    },
    {
      title: 'Electrical Tech',
      icon: DNC,
    },
  ];
  const staticDt = [
    {
      num: '156.000+',
      des: `students from our
         diversity majors system`,
    },
    {
      num: '60',
      des: `majors that help student 
        can freely to discover`,
    },
    {
      num: '2500+',
      des: `publications & many 
        research projects that we
         focus to create impacts
         on social.`,
    },
  ];

  return (
    <IesClSection
      id='trainSl'
      layout='traningSl'
      trainDes='30 years of our journey to inspire sum up in various milestones.'
      trainTit='IES at a glance'
      trainImgSl={data}
      statisTit='Explore our milestones'
      statistics={staticDt}
      className='!h-full !mt-5 bg-blue-400 pt-18'
    />
  );
};

export default TrainingSl;
