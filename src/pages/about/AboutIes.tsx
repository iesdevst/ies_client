import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './iesAbout.module.scss';
import VAM from '@/assets/imgs/vision_mission_crs.png';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { AboutTab, ROUTES } from '@/constants';

const AbOverview = lazy(() => import('@/pages/about/components/AbOverview'));
const AbVision = lazy(() => import('@/pages/about/components/AbVision'));
const AbCoreValue = lazy(() => import('@/pages/about/components/AbCoreValue'));

const AboutIes: React.FC = () => {
  const [abtSearchParams, setAbtSearchParams] = useSearchParams();
  const [abtActiveKey, setAbtActiveKey] = useState<AboutTab>();

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: AboutTab.Aboverview,
        label: (
          <Title
            level={4}
            className={`${abtActiveKey === AboutTab.Aboverview ? '!text-white' : '!text-black'} !m-0`}
          >
            Overview
          </Title>
        ),
        children: <AbOverview />,
      },
      {
        key: AboutTab.Vision,
        label: (
          <Title
            level={4}
            className={`${abtActiveKey === AboutTab.Vision ? '!text-white' : '!text-black'} !m-0`}
          >
            Vision
          </Title>
        ),
        children: <AbVision />,
      },
      {
        key: AboutTab.Corevalues,
        label: (
          <Title
            level={4}
            className={`${abtActiveKey === AboutTab.Corevalues ? '!text-white' : '!text-black'} !m-0`}
          >
            Core Values
          </Title>
        ),
        children: <AbCoreValue />,
      },
    ],
    [abtActiveKey],
  );

  const handleChangeTab = useCallback(
    (key: string) => {
      abtSearchParams.set('tab', key);
      setAbtSearchParams(abtSearchParams, { replace: true });
      setAbtActiveKey(key as AboutTab);
    },
    [abtSearchParams, setAbtSearchParams],
  );

  useEffect(() => {
    const tab = abtSearchParams.get('tab');

    if (tab) {
      setAbtActiveKey(tab as AboutTab);
    } else {
      abtSearchParams.set('tab', AboutTab.Aboverview);
      setAbtSearchParams(abtSearchParams, { replace: true });
      setAbtActiveKey(AboutTab.Aboverview);
    }
  }, [abtSearchParams, setAbtSearchParams]);
  return (
    <section className='!bg-white'>
      <div
        className='!w-full !h-full pb-150 pt-10'
        style={{
          backgroundImage: `url(${VAM})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Breadcrumb
          className={`!bg-[#eaeaea] !w-1/7 !ml-25 !py-3 !rounded-full ${styles.breadCrumbCusAb}`}
          separator={<RightOutlined className='!text-black' />}
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
                  Dasboard
                </PrefetchLink>
              ),
            },
            {
              title: (
                <Text color='#199b9f' className='!text-[16px] !font-semibold'>
                  About IES
                </Text>
              ),
            },
          ]}
        />
      </div>
      <Tabs
        activeKey={abtActiveKey}
        items={tabs}
        onChange={handleChangeTab}
        type='card'
        className={`${styles.customTabs} !mt-3`}
      />
    </section>
  );
};

export default AboutIes;
