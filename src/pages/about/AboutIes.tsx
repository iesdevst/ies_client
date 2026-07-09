import RightOutlined from '@ant-design/icons/RightOutlined';
import Breadcrumb from 'antd/es/breadcrumb';
import { lazy, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import ContactKey from '../home/components/ContactKey';
import styles from './iesAbout.module.scss';
import VAMMB from '@/assets/imgs/v_ad_m_mb_banner.webp';
import VAM from '@/assets/imgs/vision_and_mission_bn_page.webp';
import { Text } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const AbOverview = lazy(() => import('@/pages/about/components/AbOverview'));
const AbVision = lazy(() => import('@/pages/about/components/AbVision'));
const AbCoreValue = lazy(() => import('@/pages/about/components/AbCoreValue'));

const AboutIes: React.FC = () => {
  const { isDark } = useUserStore();
  const { t } = useTranslation('aboutIes');
  const location = useLocation();
  const mb = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');
    const timer = setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <section className='pt-5'>
      <Breadcrumb
        className={`!bg-[#eaeaea] !rounded-t-3xl ${mb ? '!w-2/3 !py-1.5' : tablet ? 'w-1/3 !py-1.5' : '!w-1/5 !ml-15 !py-3'} ${styles.breadCrumbCusAb}`}
        separator={
          <RightOutlined
            className={`!text-black ${mb ? 'px-3' : tablet ? 'px-5' : 'px-8'}`}
          />
        }
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.DASHBOARD}
                style={{
                  color: 'black',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                {t('dashB')}
              </PrefetchLink>
            ),
          },
          {
            title: (
              <Text color='#0EA5C8' className='!text-[16px] !font-semibold'>
                {t('abIes')}
              </Text>
            ),
          },
        ]}
      />

      <div
        className={`${mb ? 'mb-2' : tablet ? 'mb-5' : 'mb-10'} !w-full !h-full pb-150`}
        style={{
          backgroundImage: mb ? `url(${VAMMB})` : `url(${VAM})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <AbOverview dark={isDark} />
      <AbVision dark={isDark} />
      <AbCoreValue dark={isDark} />

      <ContactKey />
    </section>
  );
};

export default AboutIes;
