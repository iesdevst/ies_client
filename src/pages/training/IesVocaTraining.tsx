import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import ContactKey from '../home/components/ContactKey';
import VocaTrainIntro from './components/VocaTrainIntro';
import VocaTrainLst from './components/VocaTrainLst';
import styles from './iesTraining.module.scss';
import { Text } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const IesVocaTraining = () => {
  return (
    <section className='bg-white pt-6'>
      <Breadcrumb
        className={`!bg-[#eaeaea] !w-1/4 !ml-20 !py-3 !rounded-full ${styles.breadCrumbCus}`}
        separator={<RightOutlined className='!text-black' />}
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

      <VocaTrainIntro />
      <VocaTrainLst />
      <ContactKey />
    </section>
  );
};

export default IesVocaTraining;
