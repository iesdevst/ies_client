import {
  AppstoreOutlined,
  HighlightOutlined,
  HomeOutlined,
  LaptopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Tabs, Tooltip, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from '../iesTraining.module.scss';
import { Title } from '@/components';
import { AdmissionVocaTab } from '@/constants';
import { ProgramSlugEnum } from '@/utils';

const ProgLstCard = lazy(
  () => import('@/pages/training/components/ProgLstCard'),
);

interface IVocaTrainLst {
  mb: boolean;
  tl: boolean;
}

const VocaTrainLst: React.FC<IVocaTrainLst> = (props) => {
  const { mb, tl } = props;
  const [trainSearchPrs, setTrainSearchPrs] = useSearchParams();
  const [trainActKey, setTrainActKey] = useState<AdmissionVocaTab>();

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: AdmissionVocaTab.AllCour,
        label: !mb ? (
          <Title
            level={4}
            className={`${trainActKey === AdmissionVocaTab.AllCour ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
          >
            All Programs
          </Title>
        ) : (
          <Tooltip title='All Programs'>
            <AppstoreOutlined
              className={`${trainActKey === AdmissionVocaTab.AllCour ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ProgLstCard slugName={ProgramSlugEnum.All} />,
      },
      {
        key: AdmissionVocaTab.Design,
        label: !mb ? (
          <Title
            level={4}
            className={`${trainActKey === AdmissionVocaTab.Design ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
          >
            Design & Creativity
          </Title>
        ) : (
          <Tooltip title='Design & Creativity'>
            <HighlightOutlined
              className={`${trainActKey === AdmissionVocaTab.Design ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ProgLstCard slugName={ProgramSlugEnum.Design} />,
      },
      {
        key: AdmissionVocaTab.Business,
        label: !mb ? (
          <Title
            level={4}
            className={`${trainActKey === AdmissionVocaTab.Business ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
          >
            Business & Management
          </Title>
        ) : (
          <Tooltip title='Business & Management'>
            <PieChartOutlined
              className={`${trainActKey === AdmissionVocaTab.Business ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ProgLstCard slugName={ProgramSlugEnum.Business} />,
      },
      {
        key: AdmissionVocaTab.Hospitality,
        label: !mb ? (
          <Title
            level={4}
            className={`${trainActKey === AdmissionVocaTab.Hospitality ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
          >
            Hospitality & Services
          </Title>
        ) : (
          <Tooltip title='Hospitality & Services'>
            <HomeOutlined
              className={`${trainActKey === AdmissionVocaTab.Hospitality ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ProgLstCard slugName={ProgramSlugEnum.Hospitality} />,
      },
      {
        key: AdmissionVocaTab.ItOffice,
        label: !mb ? (
          <Title
            level={4}
            className={`${trainActKey === AdmissionVocaTab.ItOffice ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
          >
            IT & Office
          </Title>
        ) : (
          <Tooltip title='IT & Office'>
            <LaptopOutlined
              className={`${trainActKey === AdmissionVocaTab.ItOffice ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
            />
          </Tooltip>
        ),
        children: <ProgLstCard slugName={ProgramSlugEnum.IT} />,
      },
    ],
    [trainActKey, mb],
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
          <Title level={mb || tl ? 3 : 1} className='!text-[#2974D7]'>
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
