import DHHCMTS from '@/assets/imgs/dhhcmts_avt.avif';
import DHMTS from '@/assets/imgs/dhmts_avt.avif';
import VAM from '@/assets/imgs/ies_vam.png';
import TPI from '@/assets/imgs/topic_img.png';
import TSLM from '@/assets/imgs/tslm_avt.avif';
import TSTC from '@/assets/imgs/tstc_avt.avif';
import { IesClSection } from '@/components';

const VaM: React.FC = () => {
  const topicDt = [
    {
      tit: 'Vision & Mission',
      des: `Our vision is to provide society with skilled professionals who combine strong 
      knowledge with practical abilities. We prepare students through solid education and
    real-world experience to contribute positively to society.`,
      bgColor: 'bg-[#1f2251]',
    },
    {
      tit: 'Educational philosophy',
      des: `Our educational philosophy is built on passion, responsibility, creativity, perseverance,
    and unity. IESCOLLEGE is committed to quality education while encouraging innovation and collaboration to contribute value to society.`,
      bgColor: 'bg-[#d72134]',
    },
  ];

  const methodPr = [
    { thodAv: TSLM, meTit: 'Grade 10 Admissions' },
    { thodAv: TSTC, meTit: 'Intermediate College Admissions' },
    { thodAv: DHMTS, meTit: 'Hanoi Open University Admissions' },
    {
      thodAv: DHHCMTS,
      meTit: 'Ho Chi Minh City University of Technology Admissions',
    },
  ];
  return (
    <IesClSection
      id='vAm'
      layout='topic'
      topImaTit={TPI}
      topTitBut='Discover Now'
      topicCt={topicDt}
      botTit='Admissions Methods'
      lstBut='Explore More'
      botBut='Know more about us'
      methodLst={methodPr}
      topicI={VAM}
      className='px-20 mt-20 !bg-[#f2f5ff] py-15'
    />
  );
};

export default VaM;
