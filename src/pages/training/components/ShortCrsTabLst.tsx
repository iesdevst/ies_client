import { Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from '../iesTraining.module.scss';
import { Title } from '@/components';
import { AdmissionVocaTab, ShortCrsTab } from '@/constants';
import { ShortCrsTypeEnum } from '@/utils';

const ShortCrsDetail = lazy(
  () => import('@/pages/training/components/ShortCrsDetail'),
);

const ShortCrsTabLst: React.FC = () => {
  const [shortCrsSearchPrs, setshortCrsSearchPrs] = useSearchParams();
  const [shortCrsActKey, setShortCrsActKey] = useState<ShortCrsTab>();

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: ShortCrsTab.Mixology,
        label: 'Beverage Preparation',
        children: <ShortCrsDetail scType={ShortCrsTypeEnum.Mixology} />,
      },
      {
        key: ShortCrsTab.Cooking,
        label: 'Professional Cooking',
        children: <ShortCrsDetail scType={ShortCrsTypeEnum.Cooking} />,
      },
      {
        key: ShortCrsTab.Baking,
        label: 'Baking',
        children: <ShortCrsDetail scType={ShortCrsTypeEnum.Baking} />,
      },
      {
        key: ShortCrsTab.UsingAi,
        label: 'AI Applications',
        children: <ShortCrsDetail scType={ShortCrsTypeEnum.UsingAi} />,
      },
    ],
    [shortCrsActKey],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      shortCrsSearchPrs.set('tab', key);
      setshortCrsSearchPrs(shortCrsSearchPrs, { replace: true });
      setShortCrsActKey(key as AdmissionVocaTab);
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
    <section>
      <div className='!bg-[#FFFCF2] pt-10'>
        <div className='text-center mb-6'>
          <Title className='!text-[#6472cf]'>
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
