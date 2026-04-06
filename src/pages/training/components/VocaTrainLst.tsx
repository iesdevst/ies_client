import {
  AppstoreOutlined,
  HighlightOutlined,
  HomeOutlined,
  LaptopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Tabs, Tooltip, type TabsProps } from 'antd';
import { lazy, useCallback, useMemo } from 'react';
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
  dark: boolean;
}

const VocaTrainLst: React.FC<IVocaTrainLst> = (props) => {
  const { mb, tl, dark } = props;

  const [trainSearchPrs, setTrainSearchPrs] = useSearchParams();

  const trainActKey = trainSearchPrs.get('tab') || AdmissionVocaTab.AllCour;

  const hdlChangeTab = useCallback(
    (key: string) => {
      setTrainSearchPrs({ tab: key }, { replace: true });
    },
    [setTrainSearchPrs],
  );

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: AdmissionVocaTab.AllCour,
        label:
          mb || tl ? (
            <Tooltip title='All Programs'>
              <AppstoreOutlined
                className={`${trainActKey === AdmissionVocaTab.AllCour ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.AllCour ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              All Programs
            </Title>
          ),
        children: <ProgLstCard slugName={ProgramSlugEnum.All} dark={dark} />,
      },
      {
        key: AdmissionVocaTab.Design,
        label:
          mb || tl ? (
            <Tooltip title='Design & Creativity'>
              <HighlightOutlined
                className={`${trainActKey === AdmissionVocaTab.Design ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.Design ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              Design & Creativity
            </Title>
          ),
        children: <ProgLstCard slugName={ProgramSlugEnum.Design} dark={dark} />,
      },
      {
        key: AdmissionVocaTab.Business,
        label:
          mb || tl ? (
            <Tooltip title='Business & Management'>
              <PieChartOutlined
                className={`${trainActKey === AdmissionVocaTab.Business ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.Business ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              Business & Management
            </Title>
          ),
        children: (
          <ProgLstCard slugName={ProgramSlugEnum.Business} dark={dark} />
        ),
      },
      {
        key: AdmissionVocaTab.Hospitality,
        label:
          mb || tl ? (
            <Tooltip title='Hospitality & Services'>
              <HomeOutlined
                className={`${trainActKey === AdmissionVocaTab.Hospitality ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.Hospitality ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              Hospitality & Services
            </Title>
          ),
        children: (
          <ProgLstCard slugName={ProgramSlugEnum.Hospitality} dark={dark} />
        ),
      },
      {
        key: AdmissionVocaTab.ItOffice,
        label:
          mb || tl ? (
            <Tooltip title='IT & Office'>
              <LaptopOutlined
                className={`${trainActKey === AdmissionVocaTab.ItOffice ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.ItOffice ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              IT & Office
            </Title>
          ),
        children: <ProgLstCard slugName={ProgramSlugEnum.IT} dark={dark} />,
      },
    ],
    [trainActKey, mb, tl, dark],
  );

  return (
    <section className='!mt-20'>
      <div className={`${dark ? '!bg-gray-800' : '!bg-[#FFFCF2]'} pt-10`}>
        <div className='text-center mb-6'>
          <Title
            level={mb || tl ? 3 : 1}
            className={`${dark ? '!text-blue-100' : '!text-[#2974D7]'}`}
          >
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
