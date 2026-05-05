import { lazy, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { PageContainer } from '@/components';
import { useUserStore } from '@/store';

const PartnershipInfo = lazy(
  () => import('@/pages/partnership/components/PartnershipInfo'),
);
const PartnershipIntro = lazy(
  () => import('@/pages/partnership/components/PartnershipIntro'),
);
const PartnershipProg = lazy(
  () => import('@/pages/partnership/components/PartnershipProg'),
);
const PartnershipRegis = lazy(
  () => import('@/pages/partnership/components/PartnershipRegis'),
);
const PolicyNote = lazy(
  () => import('@/pages/partnership/components/PolicyNote'),
);
const SkipExam = lazy(() => import('@/pages/partnership/components/SkipExam'));
const StuVoidHou = lazy(
  () => import('@/pages/partnership/components/StuVoidHou'),
);
const WhyChooseHou = lazy(
  () => import('@/pages/partnership/components/WhyChooseHou'),
);
const PsRegisModal = lazy(
  () => import('@/pages/partnership/components/PsRegisModal'),
);

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
