import PartnershipInfo from './components/PartnershipInfo';
import PartnershipIntro from './components/PartnershipIntro';
import PartnershipProg from './components/PartnershipProg';
import PartnershipRegis from './components/PartnershipRegis';
import PolicyNote from './components/PolicyNote';
import SkipExam from './components/SkipExam';
import StuVoidHou from './components/StuVoidHou';
import WhyChooseHou from './components/WhyChooseHou';
import { PageContainer } from '@/components';

const Partnership: React.FC = () => {
  return (
    <PageContainer>
      <PartnershipIntro />
      <PartnershipInfo />
      <WhyChooseHou />
      <PolicyNote />
      <SkipExam />
      <StuVoidHou />
      <PartnershipProg />
      <PartnershipRegis />
    </PageContainer>
  );
};

export default Partnership;
