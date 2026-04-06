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
import { useUserStore } from '@/store';

const Partnership: React.FC = () => {
  const location = useLocation();
  const { isDark } = useUserStore();
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
      <PartnershipIntro openRegisInSec={hdlSecOpenRegis} dark={isDark} />
      <PartnershipInfo openRegisInSec={hdlSecOpenRegis} dark={isDark} />
      <WhyChooseHou />
      <PolicyNote />
      <SkipExam />
      <StuVoidHou />
      <PartnershipProg dark={isDark} />
      <PartnershipRegis openRegisInSec={hdlSecOpenRegis} />
      <PsRegisModal
        openPsM={openRegis}
        closePsm={() => setOpenRegis(false)}
        dark={isDark}
      />
    </PageContainer>
  );
};

export default Partnership;
