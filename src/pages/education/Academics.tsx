import { HomeFilled, RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Flex, Image } from 'antd';
import AboutPartnership from './components/AboutPartnership';
import AboutShortTerm from './components/AboutShortTerm';
import AboutVoca from './components/AboutVoca';
import styles from './education.module.scss';
import ACDA from '@/assets/imgs/academic_about.png';
import ACDB from '@/assets/imgs/academics_banner.png';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const Academics: React.FC = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${ACDB})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        // className='py-30'
      >
        <div
          className='w-full h-full py-50 pl-25'
          style={{
            maxWidth: '50%',
            backdropFilter: 'blur(3px)',
            background: `
      linear-gradient(
        to right,
        rgba(255,255,255,0.9) 10%,
        rgba(255,255,255,0.7) 50%,
        rgba(255,255,255,0.4) 70%,
        rgba(255,255,255,0.15) 90%,
        rgba(255,255,255,0) 100%
      )
    `,
          }}
        >
          <Title className='!m-0 !text-gray-500 italic'>
            Holistic Development
          </Title>

          <Title className='!m-0 !mb-4 !text-gray-500 italic'>
            Through Programs
          </Title>
          <div className='ml-5'>
            <Title className='!m-0 !text-5xl !mb-3 !font-bold'>
              DISTINCTIVE
            </Title>
            <Title className='!m-0 !text-5xl !font-bold'>EDUCATION</Title>
          </div>
        </div>
      </div>
      <Breadcrumb
        className={` !ml-25 !py-15  ${styles.breadCrumbEduca}`}
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
                <HomeFilled className='!mb-3 !text-xl' />
              </PrefetchLink>
            ),
          },
          {
            title: (
              <Text color='#545969' className='!text-[16px] !font-bold'>
                Academics Page
              </Text>
            ),
          },
        ]}
      />
      <div className='px-60 py-15'>
        <Flex align='center' gap='md'>
          <div className='flex-1 border-b border-gray-500 border-2'></div>

          <Title className='!text-center !text-gray-500 mx-5'>
            Our Programs
          </Title>

          <div className='flex-1 border-b border-gray-500 border-2'></div>
        </Flex>
        <Text className='!text-lg !block'>
          Saigon College of Information Technology and Economics (IES College)
          offers a flexible and diverse curriculum designed to develop practical
          skills and adaptability to market demands. With three main training
          pathways – advanced intermediate programs, short-term courses, and
          joint enrollment with Hanoi Open University – IES College provides
          students with multiple learning options tailored to their career
          goals. The modern e-learning format allows learners to manage their
          time effectively, combining online study with practical experience,
          while enhancing technological and economic management skills in the
          digital environment. IES College’s programs not only equip students
          with specialized knowledge but also foster creative thinking,
          adaptability, and entrepreneurial spirit, opening up broad career
          opportunities in a globally connected world.
        </Text>
        <Flex justify='center' align='center' className='!mt-6'>
          <Image src={ACDA} preview={false} className='rounded-3xl' />
        </Flex>
      </div>

      <AboutVoca />
      <AboutShortTerm />
      <AboutPartnership />
    </section>
  );
};

export default Academics;
