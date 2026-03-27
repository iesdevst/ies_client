import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PartnershipInfo from './components/PartnershipInfo';
import PartnershipIntro from './components/PartnershipIntro';
import PartnershipProg from './components/PartnershipProg';
import PartnershipRegis from './components/PartnershipRegis';
import PolicyNote from './components/PolicyNote';
import PsRegisModal from './components/PsRegisModal';
import SkipExam from './components/SkipExam';
import StuVoidHou from './components/StuVoidHou';
import WhyChooseHou from './components/WhyChooseHou';
import { PageContainer } from '@/components';

const Partnership: React.FC = () => {
  const location = useLocation();
  const [openRegis, setOpenRegis] = useState(false);
  const hdlSecOpenRegis = () => {
    setOpenRegis(true);
  };

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <PageContainer>
      <PartnershipIntro openRegisInSec={hdlSecOpenRegis} />
      <PartnershipInfo openRegisInSec={hdlSecOpenRegis} />
      <WhyChooseHou />
      <PolicyNote />
      <SkipExam />
      <StuVoidHou />
      <PartnershipProg />
      <PartnershipRegis openRegisInSec={hdlSecOpenRegis} />
      <PsRegisModal openPsM={openRegis} closePsm={() => setOpenRegis(false)} />
    </PageContainer>
  );
};

export default Partnership;
