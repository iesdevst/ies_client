import CoffeeOutlined from '@ant-design/icons/CoffeeOutlined';
import FireOutlined from '@ant-design/icons/FireOutlined';
import PieChartOutlined from '@ant-design/icons/PieChartOutlined';
import RobotOutlined from '@ant-design/icons/RobotOutlined';

import Tabs from 'antd/es/tabs';
import type { TabsProps } from 'antd/es/tabs';
import Tooltip from 'antd/es/tooltip';
import { lazy, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import styles from '../iesTraining.module.scss';
import { Title } from '@/components';
import { ShortCrsTab, TrainDetailTab } from '@/constants';
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
  const mb = useMediaQuery({ maxWidth: 767 });
  const [shortCrsSearchPrs, setshortCrsSearchPrs] = useSearchParams();

  const shortCrsActKey = shortCrsSearchPrs.get('tab') || ShortCrsTab.Mixology;

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: ShortCrsTab.Mixology,
        label: !mb ? (
          <Title
            level={4}
            className={`${shortCrsActKey === ShortCrsTab.Mixology ? '!text-[#8990bc]' : '!text-white'} !m-0`}
          >
            {t('mixology')}
          </Title>
        ) : (
          <Tooltip title={t('mixology')}>
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
            {t('proCook')}
          </Title>
        ) : (
          <Tooltip title={t('proCook')}>
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
            {t('baking')}
          </Title>
        ) : (
          <Tooltip title={t('baking')}>
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
            {t('aiApp')}
          </Title>
        ) : (
          <Tooltip title={t('aiApp')}>
            <RobotOutlined
              className={`${shortCrsActKey === ShortCrsTab.UsingAi ? '!text-[#8990bc]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ShortCrsDetail scType={ShortCrsTypeEnum.UsingAi} />,
      },
    ],
    [shortCrsActKey, mb, t],
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
      <div className={`${dark ? 'bg-gray-700' : '!bg-[#FFFCF2]'} pt-10`}>
        <div className='text-center mb-6'>
          <Title level={!mb ? 1 : 3} className='!text-[#6472cf]'>
            {t('shortT')}
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
