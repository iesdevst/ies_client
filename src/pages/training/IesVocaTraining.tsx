import RightOutlined from '@ant-design/icons/es/icons/RightOutlined';
import Breadcrumb from 'antd/es/breadcrumb';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './iesTraining.module.scss';
import { Text } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const ContactKey = lazy(() => import('@/pages/home/components/ContactKey'));
const VocaTrainIntro = lazy(
  () => import('@/pages/training/components/VocaTrainIntro'),
);
const VocaTrainLst = lazy(
  () => import('@/pages/training/components/VocaTrainLst'),
);

const IesVocaTraining = () => {
  const { t } = useTranslation('iesVocaTraining');
  const { isMobile: mb, isTablet: tl, isTabletPro: tlpr } = useDevice();
  const { isDark } = useUserStore();
  const allTl = tl || tlpr;
  return (
    <section className='pt-6'>
      <Breadcrumb
        className={`!bg-[#eaeaea] !rounded-full ${mb ? '!w-5/6 !py-1.5 !ml-2' : tl ? 'w-2/5 !py-1.5 !ml-6' : '!w-1/4 !ml-15 !py-3'} ${styles.breadCrumbCus}`}
        separator={
          <RightOutlined
            className={`!text-black ${mb ? '' : tl ? 'px-2' : 'px-6'}`}
          />
        }
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.DASHBOARD}
                style={{
                  color: 'black',

                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                {t('dashB')}
              </PrefetchLink>
            ),
          },
          {
            title: (
              <Text color='#2B6CB0' className='!text-[16px] !font-semibold'>
                {t('iv')}
              </Text>
            ),
          },
        ]}
      />

      <VocaTrainIntro mb={mb} tl={tl} dark={isDark} />
      <VocaTrainLst mb={mb} tl={allTl} dark={isDark} />
      <ContactKey />
    </section>
  );
};

export default IesVocaTraining;
