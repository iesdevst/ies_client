import RightOutlined from '@ant-design/icons/es/icons/RightOutlined';
import Breadcrumb from 'antd/es/breadcrumb';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import styles from './iesTraining.module.scss';
import { Text } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const ContactKey = lazy(() => import('@/pages/home/components/ContactKey'));
const VocaTrainIntro = lazy(
  () => import('@/pages/training/components/VocaTrainIntro'),
);
const VocaTrainLst = lazy(
  () => import('@/pages/training/components/VocaTrainLst'),
);

const IesVocaTraining = () => {
  const mb = useMediaQuery({ maxWidth: 767 });
  const { t } = useTranslation('iesVocaTraining');
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const { isDark } = useUserStore();
  return (
    <section className='pt-6'>
      <Breadcrumb
        className={`!bg-[#eaeaea] !rounded-full ${mb ? '!w-5/6 !py-1.5 !ml-2' : tablet ? 'w-2/5 !py-1.5 !ml-6' : '!w-1/4 !ml-15 !py-3'} ${styles.breadCrumbCus}`}
        separator={
          <RightOutlined
            className={`!text-black ${mb ? '' : tablet ? 'px-2' : 'px-6'}`}
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

      <VocaTrainIntro mb={mb} tl={tablet} dark={isDark} />
      <VocaTrainLst mb={mb} tl={tablet} dark={isDark} />
      <ContactKey />
    </section>
  );
};

export default IesVocaTraining;
