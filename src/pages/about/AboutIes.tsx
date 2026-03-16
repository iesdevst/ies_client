import { Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './iesAbout.module.scss';
import VAM from '@/assets/imgs/vision_mission_crs.png';
import { Title } from '@/components';
import { AboutTab } from '@/constants';

const AbOverview = lazy(() => import('@/pages/about/components/AbOverview'));
const AbVision = lazy(() => import('@/pages/about/components/AbVision'));
const AbCoreValue = lazy(() => import('@/pages/about/components/AbCoreValue'));

const AboutIes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeKey, setActiveKey] = useState<AboutTab>();

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: AboutTab.Aboverview,
        label: (
          <Title
            level={4}
            className={`${activeKey === AboutTab.Aboverview ? '!text-white' : '!text-black'} !m-0`}
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
            className={`${activeKey === AboutTab.Vision ? '!text-white' : '!text-black'} !m-0`}
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
            className={`${activeKey === AboutTab.Corevalues ? '!text-white' : '!text-black'} !m-0`}
          >
            Core Values
          </Title>
        ),
        children: <AbCoreValue />,
      },
    ],
    [activeKey],
  );

  const handleChangeTab = useCallback(
    (key: string) => {
      searchParams.set('tab', key);
      setSearchParams(searchParams, { replace: true });
      setActiveKey(key as AboutTab);
    },
    [searchParams, setSearchParams],
  );

  useEffect(() => {
    const tab = searchParams.get('tab');

    if (tab) {
      setActiveKey(tab as AboutTab);
    } else {
      searchParams.set('tab', AboutTab.Aboverview);
      setSearchParams(searchParams, { replace: true });
      setActiveKey(AboutTab.Aboverview);
    }
  }, [searchParams, setSearchParams]);
  return (
    <section className='!bg-white'>
      <div className='!w-full !h-full'>
        <img
          src={VAM}
          className='!w-full'
          style={{
            objectFit: 'fill',
            height: '80vh',
          }}
        />
      </div>
      <Tabs
        activeKey={activeKey}
        items={tabs}
        onChange={handleChangeTab}
        type='card'
        className={`${styles.customTabs} !mt-3`}
      />
    </section>
  );
};

export default AboutIes;
