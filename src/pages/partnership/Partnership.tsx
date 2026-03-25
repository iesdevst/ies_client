import PartnershipInfo from './components/PartnershipInfo';
import PartnershipIntro from './components/PartnershipIntro';
import WhyChooseHou from './components/WhyChooseHou';
import { PageContainer } from '@/components';

const Partnership: React.FC = () => {
  return (
    <PageContainer>
      <PartnershipIntro />
      <PartnershipInfo />
      <WhyChooseHou />
    </PageContainer>
  );
};

export default Partnership;
