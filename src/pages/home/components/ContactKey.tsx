import MailFilled from '@ant-design/icons/es/icons/MailFilled';
import PhoneFilled from '@ant-design/icons/es/icons/PhoneFilled';
import PlusOutlined from '@ant-design/icons/es/icons/PlusOutlined';
import RightOutlined from '@ant-design/icons/es/icons/RightOutlined';
import Button from 'antd/es/button';
import Row from 'antd/es/row';
import { motion } from 'framer-motion';
import { lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FT_BG from '@/assets/imgs/intro_bg.webp';
import { Text, Title } from '@/components';
import { useDevice } from '@/hooks';

const IesCtModal = lazy(() => import('@/pages/home/components/IesCtModal'));
const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const ContactKey: React.FC = () => {
  const { device } = useDevice();
  const [ctOpen, setCtOpen] = useState(false);
  const { t } = useTranslation('contactKey');

  const mb = device === 'mobile';
  const tl = device === 'tablet';

  const contacts = useMemo(
    () => [
      {
        key: '1',
        title: t('phc'),
        phone: '0901.309.866',
        mail: 'info@iescollege.edu.vn',
      },
      {
        key: '2',
        title: t('ctsv'),
        phone: '0912.584.800',
        mail: 'info@iescollege.edu.vn',
      },
      {
        key: '3',
        title: t('ts'),
        phone: '0901.309.866',
        mail: 'info@iescollege.edu.vn',
      },
    ],
    [t],
  );

  const [active, setActive] = useState<string | null>(null);

  const classsMap = {
    mobile: 'py-10 px-5',
    tablet: 'pl-8 py-10',
    tabletPro: 'pl-8 py-10',
    desktop: 'pl-20 pt-20',
  };

  return (
    <>
      <IesClSection
        id='keyContact'
        layout='simple'
        divider={false}
        children={
          <motion.section
            className='relative w-full overflow-hidden rounded-2xl'
            style={{
              backgroundImage: `url(${FT_BG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{
              scaleX: 0,
              scaleY: 0.95,
              opacity: 0.6,
              transformOrigin: 'center center',
            }}
            whileInView={{
              scaleX: 1,
              scaleY: 1,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: [0.83, 0, 0.17, 1],
            }}
          >
            {/* blur overlay */}
            <div className='absolute inset-0 z-10 backdrop-blur-[30px] bg-white/25' />

            {/* CONTENT */}
            <motion.div
              className={`relative z-20 pb-10`}
              style={{
                flexDirection: mb || tl ? 'column' : 'row',
                gap: mb ? 24 : tl ? 32 : 80,
                alignItems: mb || tl ? 'flex-start' : 'flex-end',
              }}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <div className={`flex flex-col ${classsMap[device]}`}>
                {/* TITLE */}
                <Title className={`!text-black ${mb ? '!text-center' : ''}`}>
                  {t('ctKey')}
                </Title>

                {/* ACCORDION (custom instead of antd Collapse) */}
                <div className=' w-full md:w-1/2'>
                  {contacts.map((item) => {
                    const isOpen = active === item.key;

                    return (
                      <div
                        key={item.key}
                        className='border-b border-gray-400 !pt-1.5 !pb-3'
                      >
                        {/* HEADER */}
                        <div
                          onClick={() => setActive(isOpen ? null : item.key)}
                          className='w-full flex items-center! justify-between! cursor-pointer'
                        >
                          <Title
                            level={4}
                            className='font-semibold !m-0 !text-black'
                          >
                            {item.title}
                          </Title>

                          <PlusOutlined
                            className={`transition-transform !text-lg ${
                              isOpen
                                ? 'rotate-45 !text-red-500'
                                : '!text-blue-600'
                            }`}
                          />
                        </div>

                        {/* BODY */}
                        {isOpen && (
                          <>
                            <Row
                              justify={'start'}
                              align={'middle'}
                              className='gap-x-2 my-1'
                            >
                              <PhoneFilled className='!text-black !text-lg' />
                              <Text color='black' className='!text-lg'>
                                {item.phone}
                              </Text>
                            </Row>

                            <Row
                              justify={'start'}
                              align={'middle'}
                              className='gap-x-2'
                            >
                              <MailFilled className='!text-black !text-lg' />
                              <Text color='black' className='!text-lg'>
                                {item.mail}
                              </Text>
                            </Row>
                            <Row
                              justify={'start'}
                              align={'middle'}
                              className='gap-x-1'
                            >
                              <Title level={4} className='!m-0 !text-black'>
                                {t('office')}
                              </Title>
                              <Text className='mt-0.5 !text-lg' color='black'>
                                {t('location')}
                              </Text>
                            </Row>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* BUTTON */}
                <div className={`mt-7 ${mb ? 'text-end' : ''}`}>
                  <Button type='text' onClick={() => setCtOpen(true)}>
                    <Title className='!m-0 !text-black' level={4}>
                      {t('getAdviceBtn')}
                    </Title>
                    <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-3'>
                      <RightOutlined className='!text-white !font-semibold' />
                    </div>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.section>
        }
      />

      {ctOpen && (
        <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
      )}
    </>
  );
};

export default ContactKey;
