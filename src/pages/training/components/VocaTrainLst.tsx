import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import HighlightOutlined from '@ant-design/icons/HighlightOutlined';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import LaptopOutlined from '@ant-design/icons/LaptopOutlined';
import PieChartOutlined from '@ant-design/icons/PieChartOutlined';

import Tabs from 'antd/es/tabs';
import type { TabsProps } from 'antd/es/tabs';
import Tooltip from 'antd/es/tooltip';
import { lazy, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('vocaTrainLst');
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
            <Tooltip title={t('allProg')}>
              <AppstoreOutlined
                className={`${trainActKey === AdmissionVocaTab.AllCour ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.AllCour ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              {t('allProg')}
            </Title>
          ),
        children: <ProgLstCard slugName={ProgramSlugEnum.All} dark={dark} />,
      },
      {
        key: AdmissionVocaTab.Design,
        label:
          mb || tl ? (
            <Tooltip title={t('desi')}>
              <HighlightOutlined
                className={`${trainActKey === AdmissionVocaTab.Design ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.Design ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              {t('desi')}
            </Title>
          ),
        children: <ProgLstCard slugName={ProgramSlugEnum.Design} dark={dark} />,
      },
      {
        key: AdmissionVocaTab.Business,
        label:
          mb || tl ? (
            <Tooltip title={t('busi')}>
              <PieChartOutlined
                className={`${trainActKey === AdmissionVocaTab.Business ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.Business ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              {t('busi')}
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
            <Tooltip title={t('hos')}>
              <HomeOutlined
                className={`${trainActKey === AdmissionVocaTab.Hospitality ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.Hospitality ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              {t('hos')}
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
            <Tooltip title={t('it')}>
              <LaptopOutlined
                className={`${trainActKey === AdmissionVocaTab.ItOffice ? '!text-[#2f6fd6]' : '!text-white'} !text-2xl`}
              />
            </Tooltip>
          ) : (
            <Title
              level={4}
              className={`${trainActKey === AdmissionVocaTab.ItOffice ? '!text-[#2f6fd6]' : '!text-white'} !m-0`}
            >
              {t('it')}
            </Title>
          ),
        children: <ProgLstCard slugName={ProgramSlugEnum.IT} dark={dark} />,
      },
    ],
    [trainActKey, mb, tl, dark, t],
  );

  return (
    <section className='!mt-20'>
      <div className={`${dark ? '!bg-gray-800' : '!bg-[#FFFCF2]'} pt-10`}>
        <div className='text-center mb-6'>
          <Title
            level={mb || tl ? 3 : 1}
            className={`${dark ? '!text-blue-100' : '!text-[#2974D7]'}`}
          >
            {t('discover')}
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
