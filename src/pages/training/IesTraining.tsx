import { Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './iesTraining.module.scss';
import { Title } from '@/components';
import { AcademicsTab } from '@/constants';

const ProgLstCard = lazy(
  () => import('@/pages/training/components/ProgLstCard'),
);

const IesTraining: React.FC = () => {
  const [trainSearchPrs, setTrainSearchPrs] = useSearchParams();
  const [trainActKey, setTrainActKey] = useState<AcademicsTab>();

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: AcademicsTab.AllCour,
        label: 'All Programs',
        children: <ProgLstCard />,
      },
      {
        key: AcademicsTab.Design,
        label: 'Design & Creativity',
        children: <ProgLstCard slugName='design' />,
      },
      {
        key: AcademicsTab.Business,
        label: 'Business & Management',
        children: <ProgLstCard slugName='busiMana' />,
      },
      {
        key: AcademicsTab.Hospitality,
        label: 'Hospitality & Services',
        children: <ProgLstCard slugName='hospitality' />,
      },
      {
        key: AcademicsTab.ItOffice,
        label: 'IT & Office',
        children: <ProgLstCard slugName='it-office' />,
      },
    ],
    [trainActKey],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      trainSearchPrs.set('tab', key);
      setTrainSearchPrs(trainSearchPrs, { replace: true });
      setTrainActKey(key as AcademicsTab);
    },
    [trainSearchPrs, setTrainSearchPrs],
  );

  useEffect(() => {
    const tab = trainSearchPrs.get('tab');
    if (tab) {
      setTrainActKey(tab as AcademicsTab);
    } else {
      trainSearchPrs.set('tab', AcademicsTab.AllCour);
      setTrainSearchPrs(trainSearchPrs, { replace: true });
      setTrainActKey(AcademicsTab.AllCour);
    }
  }, [trainSearchPrs, setTrainSearchPrs]);

  return (
    <section className='!bg-white'>
      <div className='!bg-[#FFFCF2] pt-10'>
        <div className='text-center mb-6'>
          <Title className='!text-[#2974D7]'>Explore Courses</Title>
        </div>

        <Tabs
          activeKey={trainActKey}
          items={tabs}
          onChange={hdlChangeTab}
          centered
          className={`${styles.iesTrainTabs}`}
        />
      </div>
    </section>
  );
};

export default IesTraining;
