import ContactKey from '../home/components/ContactKey';
import LearningTranform from './components/LearningTranform';
import ShortCrsIntro from './components/ShortCrsIntro';
import ShortCrsTabLst from './components/ShortCrsTabLst';

const ShortCourse = () => {
  return (
    <section className='bg-white pt-6'>
      <ShortCrsIntro />
      <LearningTranform />
      <ShortCrsTabLst />
      <ContactKey />
    </section>
  );
};

export default ShortCourse;
