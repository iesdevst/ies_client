import { Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './iesTraining.module.scss';
import { Title } from '@/components';
import { AcademicsVocaTab } from '@/constants';
import { ProgramSlugEnum } from '@/utils';

const ProgLstCard = lazy(
  () => import('@/pages/training/components/ProgLstCard'),
);

const IesVocaTraining: React.FC = () => {
  const [trainSearchPrs, setTrainSearchPrs] = useSearchParams();
  const [trainActKey, setTrainActKey] = useState<AcademicsVocaTab>();

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: AcademicsVocaTab.AllCour,
        label: 'All Programs',
        children: <ProgLstCard slugName={ProgramSlugEnum.All} />,
      },
      {
        key: AcademicsVocaTab.Design,
        label: 'Design & Creativity',
        children: <ProgLstCard slugName={ProgramSlugEnum.Design} />,
      },
      {
        key: AcademicsVocaTab.Business,
        label: 'Business & Management',
        children: <ProgLstCard slugName={ProgramSlugEnum.Business} />,
      },
      {
        key: AcademicsVocaTab.Hospitality,
        label: 'Hospitality & Services',
        children: <ProgLstCard slugName={ProgramSlugEnum.Hospitality} />,
      },
      {
        key: AcademicsVocaTab.ItOffice,
        label: 'IT & Office',
        children: <ProgLstCard slugName={ProgramSlugEnum.IT} />,
      },
    ],
    [trainActKey],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      trainSearchPrs.set('tab', key);
      setTrainSearchPrs(trainSearchPrs, { replace: true });
      setTrainActKey(key as AcademicsVocaTab);
    },
    [trainSearchPrs, setTrainSearchPrs],
  );

  useEffect(() => {
    const tab = trainSearchPrs.get('tab');
    if (tab) {
      setTrainActKey(tab as AcademicsVocaTab);
    } else {
      trainSearchPrs.set('tab', AcademicsVocaTab.AllCour);
      setTrainSearchPrs(trainSearchPrs, { replace: true });
      setTrainActKey(AcademicsVocaTab.AllCour);
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

export default IesVocaTraining;
