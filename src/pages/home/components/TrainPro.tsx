import { useMediaQuery } from 'react-responsive';
import CTLK from '@/assets/imgs/ctlk.avif';
import CTTC from '@/assets/imgs/cttc.avif';
import CTTT from '@/assets/imgs/cttt.avif';
import { IesClSection } from '@/components';
import { useUserStore } from '@/store';

const TrainPro: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const noFeatCdt = [
    {
      imgC: CTTC,
      tit: 'Intermediate Program',
      butCard: 'Explore the Intermediate Program',
      des: 'A practice-oriented program focused on hands-on learning and real-world practice. It helps students build strong vocational skills and gain the confidence needed to enter today’s workforce.',
    },
    {
      imgC: CTTT,
      tit: 'Post-Graduation Program',
      butCard: 'Explore the Post-Graduation Program',
      des: 'A collaborative program connecting the school with industry partners to support graduate employment. It helps students access career opportunities while providing businesses with qualified talent.',
    },
    {
      imgC: CTLK,
      tit: 'Training Partnership Program',
      butCard: 'Explore the Training Partnership Program',
      des: 'A program developed with reputable universities such as Hanoi Open University and Ho Chi Minh City University of Technology and Education. Students receive a bachelor’s degree from partner universities.',
    },
  ];

  return (
    <IesClSection
      id='trainNoFeat'
      layout='newsFeature'
      title='Training Programs'
      feature={false}
      featCard={noFeatCdt}
      className={`mt-20 ${!mb ? 'px-10' : 'px-3'}`}
      mb={mb}
      height={!mb ? '' : '36vh'}
      dark={isDark}
    />
  );
};

export default TrainPro;
