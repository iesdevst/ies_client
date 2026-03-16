import { Col, Flex, Image, Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './iesAbout.module.scss';
import IESLG from '@/assets/imgs/ies_logo_text.png';
import { Text, Title } from '@/components';
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
    <section>
      <div>
        <Flex justify='space-between' align='center' className='!px-30'>
          <div>
            <Image src={IESLG} preview={false} className='!w-125 !h-125' />
          </div>

          <Col className='!text-center'>
            <Title className='!m-0 !mb-1.5 !text-black !font-bold'>
              ABOUT IES COLLEGE
            </Title>
            <Title className='!m-0 !mb-6 !text-black !font-bold'>
              Modern Workforce Training
            </Title>
            <Text color='black' className='!text-lg'>
              IES College provides a strong academic foundation linked to
              real-world practice.
            </Text>
            <br />
            <Text color='black' className='!text-lg'>
              Helping students build practical skills and be ready for the job
              market.
            </Text>
          </Col>
        </Flex>
      </div>
      <Tabs
        activeKey={activeKey}
        items={tabs}
        onChange={handleChangeTab}
        type='card'
        className={`${styles.customTabs} !mt-5`}
      />
    </section>
  );
};

export default AboutIes;
