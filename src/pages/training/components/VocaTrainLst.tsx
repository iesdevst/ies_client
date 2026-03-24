import { Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from '../iesTraining.module.scss';
import { Title } from '@/components';
import { AdmissionVocaTab } from '@/constants';
import { ProgramSlugEnum } from '@/utils';

const ProgLstCard = lazy(
  () => import('@/pages/training/components/ProgLstCard'),
);

const VocaTrainLst: React.FC = () => {
  const [trainSearchPrs, setTrainSearchPrs] = useSearchParams();
  const [trainActKey, setTrainActKey] = useState<AdmissionVocaTab>();

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: AdmissionVocaTab.AllCour,
        label: 'All Programs',
        children: <ProgLstCard slugName={ProgramSlugEnum.All} />,
      },
      {
        key: AdmissionVocaTab.Design,
        label: 'Design & Creativity',
        children: <ProgLstCard slugName={ProgramSlugEnum.Design} />,
      },
      {
        key: AdmissionVocaTab.Business,
        label: 'Business & Management',
        children: <ProgLstCard slugName={ProgramSlugEnum.Business} />,
      },
      {
        key: AdmissionVocaTab.Hospitality,
        label: 'Hospitality & Services',
        children: <ProgLstCard slugName={ProgramSlugEnum.Hospitality} />,
      },
      {
        key: AdmissionVocaTab.ItOffice,
        label: 'IT & Office',
        children: <ProgLstCard slugName={ProgramSlugEnum.IT} />,
      },
    ],
    [],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      trainSearchPrs.set('tab', key);
      setTrainSearchPrs(trainSearchPrs, { replace: true });
      setTrainActKey(key as AdmissionVocaTab);
    },
    [trainSearchPrs, setTrainSearchPrs],
  );

  useEffect(() => {
    const tab = trainSearchPrs.get('tab');
    if (tab) {
      setTrainActKey(tab as AdmissionVocaTab);
    } else {
      trainSearchPrs.set('tab', AdmissionVocaTab.AllCour);
      setTrainSearchPrs(trainSearchPrs, { replace: true });
      setTrainActKey(AdmissionVocaTab.AllCour);
    }
  }, [trainSearchPrs, setTrainSearchPrs]);

  return (
    <section className='!bg-white !mt-20'>
      <div className='!bg-[#FFFCF2] pt-10'>
        <div className='text-center mb-6'>
          <Title className='!text-[#2974D7]'>
            Discover Intermediate Vocational Courses
          </Title>
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

export default VocaTrainLst;
