import HomeFilled from '@ant-design/icons/HomeFilled';
import RightOutlined from '@ant-design/icons/RightOutlined';
import Breadcrumb from 'antd/es/breadcrumb';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import ContactKey from '../home/components/ContactKey';
import AboutPartnership from './components/AboutPartnership';
import AboutShortTerm from './components/AboutShortTerm';
import AboutVoca from './components/AboutVoca';
import styles from './education.module.scss';
import ACDA from '@/assets/imgs/academic_about.webp';
import ACDB from '@/assets/imgs/academics_banner.webp';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const Academics: React.FC = () => {
  const { t } = useTranslation('academics');
  const mb = useMediaQuery({ maxWidth: 767 });
  const tl = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const { isDark } = useUserStore();
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
          className={`w-full h-full ${mb || tl ? 'pl-8 pt-20 pb-2' : 'py-50 pl-25'}`}
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
          <Title
            level={mb || tl ? 5 : 1}
            className='!m-0 !text-gray-500 italic'
          >
            {t('heroTitle1')}
          </Title>

          <Title
            level={mb || tl ? 5 : 1}
            className={`${mb || tl ? '!m-0 !mb-1' : '!m-0 !mb-4 '} !text-gray-500 italic`}
          >
            {t('heroTitle2')}
          </Title>
          <div className='ml-5'>
            <Title
              className={`${mb || tl ? '!text-xl' : '!text-5xl !mb-3'} !m-0 !font-bold !text-blue-500`}
            >
              {t('heroHeading1')}
            </Title>
            <Title
              className={`!m-0 ${mb || tl ? '!text-xl' : '!text-5xl'} !font-bold !text-blue-500`}
            >
              {t('heroHeading2')}
            </Title>
          </div>
        </div>
      </div>

      <Breadcrumb
        className={`${mb || tl ? '!ml-10 !py-5' : '!ml-25 !py-15'} ${styles.breadCrumbEduca}`}
        separator={
          <RightOutlined
            className={`${isDark ? '!text-white' : '!text-black'}`}
          />
        }
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.DASHBOARD}
                style={{
                  color: isDark ? 'white' : 'black',
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
              <Text
                color={isDark ? '#9393f1' : '#545969'}
                className='!text-[16px] !font-bold'
              >
                {t('pageTitle')}
              </Text>
            ),
          },
        ]}
      />
      <div className={`${mb ? 'px-5' : tl ? 'px-10' : 'px-60 py-15'}`}>
        <Flex align='center' gap='md'>
          <div
            className={`${isDark ? 'border-[#9393f1]' : 'border-gray-500'} flex-1 border-b border-2`}
          ></div>

          <Title
            className={`${isDark ? '!text-[#9393f1]' : '!text-gray-500'} !text-center mx-5`}
          >
            {t('sectionTitle')}
          </Title>

          <div
            className={`${isDark ? 'border-[#9393f1]' : 'border-gray-500'} flex-1 border-b border-2`}
          ></div>
        </Flex>
        <Text
          color={isDark ? 'white' : ''}
          className={`!block ${!mb ? '!text-lg' : '!leading-6'}`}
        >
          {t('sectionDesc')}
        </Text>
        <Flex justify='center' align='center' className='!mt-6'>
          <Image
            src={ACDA}
            preview={false}
            className='rounded-3xl'
            loading='lazy'
            alt='academic'
          />
        </Flex>
      </div>

      <AboutVoca tl={tl} mb={mb} dark={isDark} />
      <AboutShortTerm tl={tl} mb={mb} dark={isDark} />
      <AboutPartnership tl={tl} mb={mb} dark={isDark} />
      <ContactKey />
    </section>
  );
};

export default Academics;
