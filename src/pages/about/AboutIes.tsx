import EyeOutlined from '@ant-design/icons/EyeOutlined';
import HeartOutlined from '@ant-design/icons/HeartOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { Breadcrumb, Tabs, Tooltip, type TabsProps } from 'antd';
import { lazy, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import ContactKey from '../home/components/ContactKey';
import styles from './iesAbout.module.scss';
import VAMMB from '@/assets/imgs/v_ad_m_mb_banner.webp';
import VAM from '@/assets/imgs/vision_and_mission_bn_page.webp';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { AboutTab, ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const AbOverview = lazy(() => import('@/pages/about/components/AbOverview'));
const AbVision = lazy(() => import('@/pages/about/components/AbVision'));
const AbCoreValue = lazy(() => import('@/pages/about/components/AbCoreValue'));

const AboutIes: React.FC = () => {
  const [abtSearchParams, setAbtSearchParams] = useSearchParams();
  const abtActiveKey = abtSearchParams.get('tab') || AboutTab.Aboverview;
  const { isDark } = useUserStore();
  const { t } = useTranslation('aboutIes');
  const mb = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: AboutTab.Aboverview,
        label: !mb ? (
          <Title
            level={4}
            className={`${abtActiveKey === AboutTab.Aboverview ? '!text-white' : '!text-black'} !m-0`}
          >
            {t('ovw')}
          </Title>
        ) : (
          <Tooltip title={t('ovw')}>
            <ProfileOutlined
              className={`${abtActiveKey === AboutTab.Aboverview ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <AbOverview dark={isDark} />,
      },
      {
        key: AboutTab.Vision,
        label: !mb ? (
          <Title
            level={4}
            className={`${abtActiveKey === AboutTab.Vision ? '!text-white' : '!text-black'} !m-0`}
          >
            {t('vs')}
          </Title>
        ) : (
          <Tooltip title={t('vs')}>
            <EyeOutlined
              className={`${abtActiveKey === AboutTab.Vision ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <AbVision dark={isDark} />,
      },
      {
        key: AboutTab.Corevalues,
        label: !mb ? (
          <Title
            level={4}
            className={`${abtActiveKey === AboutTab.Corevalues ? '!text-white' : '!text-black'} !m-0`}
          >
            {t('vl')}
          </Title>
        ) : (
          <Tooltip title={t('vl')}>
            <HeartOutlined
              className={`${abtActiveKey === AboutTab.Corevalues ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <AbCoreValue />,
      },
    ],
    [abtActiveKey, mb, isDark, t],
  );

  const handleChangeTab = useCallback(
    (key: string) => {
      setAbtSearchParams({ tab: key }, { replace: true });
    },
    [setAbtSearchParams],
  );

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
              <Text color='#199b9f' className='!text-[16px] !font-semibold'>
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
      <Tabs
        activeKey={abtActiveKey}
        items={tabs}
        onChange={handleChangeTab}
        type='card'
        className={`${styles.customTabs} ${mb || tablet ? '' : '!mt-3'}`}
        centered={mb}
      />

      <ContactKey />
    </section>
  );
};

export default AboutIes;
