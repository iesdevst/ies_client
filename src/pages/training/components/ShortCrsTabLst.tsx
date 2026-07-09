import CoffeeOutlined from '@ant-design/icons/CoffeeOutlined';
import FireOutlined from '@ant-design/icons/FireOutlined';
import PieChartOutlined from '@ant-design/icons/PieChartOutlined';
import RobotOutlined from '@ant-design/icons/RobotOutlined';

import type { TabsProps } from 'antd/es/tabs';
import Tabs from 'antd/es/tabs';
import Tooltip from 'antd/es/tooltip';
import { lazy, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import styles from '../iesTraining.module.scss';
import { Title } from '@/components';
import { ShortCrsTab, TrainDetailTab } from '@/constants';
import { useDevice } from '@/hooks';
import { ShortCrsTypeEnum } from '@/utils';

const ShortCrsDetail = lazy(
  () => import('@/pages/training/components/ShortCrsDetail'),
);

interface IShortCrsTabLst {
  dark: boolean;
}

const ShortCrsTabLst: React.FC<IShortCrsTabLst> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('shortCrsTabLst');
  const { isMobile: mb, isTablet: tl } = useDevice();
  const [shortCrsSearchPrs, setshortCrsSearchPrs] = useSearchParams();

  const shortCrsActKey = shortCrsSearchPrs.get('tab') || ShortCrsTab.Mixology;

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: ShortCrsTab.Mixology,
        label:
          mb || tl ? (
            <Tooltip title={t('mixology')}>
              <CoffeeOutlined
                className={`${shortCrsActKey === ShortCrsTab.Mixology ? 'text-[#4A6FA5]!' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${shortCrsActKey === ShortCrsTab.Mixology ? 'text-[#4A6FA5]!' : '!text-white'} !m-0`}
            >
              {t('mixology')}
            </Title>
          ),
        children: (
          <ShortCrsDetail dark={dark} scType={ShortCrsTypeEnum.Mixology} />
        ),
      },
      {
        key: ShortCrsTab.Cooking,
        label:
          mb || tl ? (
            <Tooltip title={t('proCook')}>
              <FireOutlined
                className={`${shortCrsActKey === ShortCrsTab.Cooking ? 'text-[#4A6FA5]!' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${shortCrsActKey === ShortCrsTab.Cooking ? 'text-[#4A6FA5]!' : '!text-white'} !m-0`}
            >
              {t('proCook')}
            </Title>
          ),
        children: (
          <ShortCrsDetail dark={dark} scType={ShortCrsTypeEnum.Cooking} />
        ),
      },
      {
        key: ShortCrsTab.Baking,
        label:
          mb || tl ? (
            <Tooltip title={t('baking')}>
              <PieChartOutlined
                className={`${shortCrsActKey === ShortCrsTab.Baking ? 'text-[#4A6FA5]!' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${shortCrsActKey === ShortCrsTab.Baking ? 'text-[#4A6FA5]!' : '!text-white'} !m-0`}
            >
              {t('baking')}
            </Title>
          ),
        children: (
          <ShortCrsDetail dark={dark} scType={ShortCrsTypeEnum.Baking} />
        ),
      },
      {
        key: ShortCrsTab.UsingAi,
        label:
          mb || tl ? (
            <Tooltip title={t('aiApp')}>
              <RobotOutlined
                className={`${shortCrsActKey === ShortCrsTab.UsingAi ? 'text-[#4A6FA5]!' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${shortCrsActKey === ShortCrsTab.UsingAi ? 'text-[#4A6FA5]!' : '!text-white'} !m-0`}
            >
              {t('aiApp')}
            </Title>
          ),
        children: (
          <ShortCrsDetail dark={dark} scType={ShortCrsTypeEnum.UsingAi} />
        ),
      },
    ],
    [shortCrsActKey, mb, tl, t, dark],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      setshortCrsSearchPrs(
        (prev) => {
          const params = new URLSearchParams(prev);

          params.set('tab', key);

          params.set('subTab', TrainDetailTab.Overview);

          return params;
        },
        { replace: true },
      );
    },
    [setshortCrsSearchPrs],
  );

  return (
    <section className='pt-15'>
      <div className='pt-10'>
        <div className='text-center mb-6'>
          <Title level={!mb ? 1 : 3} className='text-[#2B6CB0]!'>
            {t('shortT')}
          </Title>
        </div>

        <Tabs
          activeKey={shortCrsActKey}
          items={tabs}
          onChange={hdlChangeTab}
          centered
          className={`${styles.iesShortCrsTabs} w-full!`}
        />
      </div>
    </section>
  );
};

export default ShortCrsTabLst;
