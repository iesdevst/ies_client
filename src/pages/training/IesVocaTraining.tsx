import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useMediaQuery } from 'react-responsive';
import ContactKey from '../home/components/ContactKey';
import VocaTrainIntro from './components/VocaTrainIntro';
import VocaTrainLst from './components/VocaTrainLst';
import styles from './iesTraining.module.scss';
import { Text } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const IesVocaTraining = () => {
  const mb = useMediaQuery({ maxWidth: 767 });
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
                Dasboard
              </PrefetchLink>
            ),
          },
          {
            title: (
              <Text color='#3984ed' className='!text-[16px] !font-semibold'>
                Intermediate Vocational
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
