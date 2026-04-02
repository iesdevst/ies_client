import {
  CoffeeOutlined,
  FireOutlined,
  PieChartOutlined,
  RobotOutlined,
} from '@ant-design/icons';
import { Tabs, Tooltip, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import styles from '../iesTraining.module.scss';
import { Title } from '@/components';
import { ShortCrsTab } from '@/constants';
import { ShortCrsTypeEnum } from '@/utils';

const ShortCrsDetail = lazy(
  () => import('@/pages/training/components/ShortCrsDetail'),
);

const ShortCrsTabLst: React.FC = () => {
  const [shortCrsSearchPrs, setshortCrsSearchPrs] = useSearchParams();
  const [shortCrsActKey, setShortCrsActKey] = useState<ShortCrsTab>();
  const mb = useMediaQuery({ maxWidth: 767 });

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: ShortCrsTab.Mixology,
        label: !mb ? (
          <Title
            level={4}
            className={`${shortCrsActKey === ShortCrsTab.Mixology ? '!text-[#8990bc]' : '!text-white'} !m-0`}
          >
            Beverage Preparation
          </Title>
        ) : (
          <Tooltip title='Beverage Preparation'>
            <CoffeeOutlined
              className={`${shortCrsActKey === ShortCrsTab.Mixology ? '!text-[#8990bc]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ShortCrsDetail scType={ShortCrsTypeEnum.Mixology} />,
      },
      {
        key: ShortCrsTab.Cooking,
        label: !mb ? (
          <Title
            level={4}
            className={`${shortCrsActKey === ShortCrsTab.Cooking ? '!text-[#8990bc]' : '!text-white'} !m-0`}
          >
            Professional Cooking
          </Title>
        ) : (
          <Tooltip title='Professional Cooking'>
            <FireOutlined
              className={`${shortCrsActKey === ShortCrsTab.Cooking ? '!text-[#8990bc]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ShortCrsDetail scType={ShortCrsTypeEnum.Cooking} />,
      },
      {
        key: ShortCrsTab.Baking,
        label: !mb ? (
          <Title
            level={4}
            className={`${shortCrsActKey === ShortCrsTab.Baking ? '!text-[#8990bc]' : '!text-white'} !m-0`}
          >
            Baking
          </Title>
        ) : (
          <Tooltip title='Baking'>
            <PieChartOutlined
              className={`${shortCrsActKey === ShortCrsTab.Baking ? '!text-[#8990bc]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ShortCrsDetail scType={ShortCrsTypeEnum.Baking} />,
      },
      {
        key: ShortCrsTab.UsingAi,
        label: !mb ? (
          <Title
            level={4}
            className={`${shortCrsActKey === ShortCrsTab.UsingAi ? '!text-[#8990bc]' : '!text-white'} !m-0`}
          >
            AI Applications
          </Title>
        ) : (
          <Tooltip title='AI Applications'>
            <RobotOutlined
              className={`${shortCrsActKey === ShortCrsTab.UsingAi ? '!text-[#8990bc]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ShortCrsDetail scType={ShortCrsTypeEnum.UsingAi} />,
      },
    ],
    [shortCrsActKey, mb],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      shortCrsSearchPrs.set('tab', key);
      setshortCrsSearchPrs(shortCrsSearchPrs, { replace: true });
      setShortCrsActKey(key as ShortCrsTab);
    },
    [shortCrsSearchPrs, setshortCrsSearchPrs],
  );

  useEffect(() => {
    const tab = shortCrsSearchPrs.get('tab');
    if (tab) {
      setShortCrsActKey(tab as ShortCrsTab);
    } else {
      shortCrsSearchPrs.set('tab', ShortCrsTab.Mixology);
      setshortCrsSearchPrs(shortCrsSearchPrs, { replace: true });
      setShortCrsActKey(ShortCrsTab.Mixology);
    }
  }, [shortCrsSearchPrs, setshortCrsSearchPrs]);

  return (
    <section className='pt-15'>
      <div className='!bg-[#FFFCF2] pt-10'>
        <div className='text-center mb-6'>
          <Title level={!mb ? 1 : 3} className='!text-[#6472cf]'>
            Short-term Training Programs
          </Title>
        </div>

        <Tabs
          activeKey={shortCrsActKey}
          items={tabs}
          onChange={hdlChangeTab}
          centered
          className={`${styles.iesShortCrsTabs}`}
        />
      </div>
    </section>
  );
};

export default ShortCrsTabLst;
