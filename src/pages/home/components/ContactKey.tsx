import {
  MailFilled,
  PhoneFilled,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Row } from 'antd';
import { lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IesClSection, Text, Title } from '@/components';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const IesCtModal = lazy(() => import('@/pages/home/components/IesCtModal'));

const ContactKey: React.FC = () => {
  const { isDark } = useUserStore();
  const { device } = useDevice();
  const [ctOpen, setCtOpen] = useState(false);
  const { t } = useTranslation('contactKey');

  const textColor = useMemo(
    () => (isDark ? 'text-white' : 'text-black'),
    [isDark],
  );

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

  const hMap = {
    mobile: '45vh',
    tablet: '30vh',
    tabletPro: '30vh',
    desktop: '',
  };

  const classsMap = {
    mobile: 'pt-10 pb-20 px-5',
    tablet: 'pl-8',
    tabletPro: 'pl-8',
    desktop: 'pl-20 pt-20',
  };

  return (
    <>
      <IesClSection
        id='keyContact'
        layout='simple'
        divider={false}
        children={
          <div className={`mt-10 flex flex-col ${classsMap[device]}`}>
            {/* TITLE */}
            <Title
              className={`${isDark ? '!text-white' : ''} ${device === 'mobile' ? '!text-center' : ''}`}
            >
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
                    <button
                      onClick={() => setActive(isOpen ? null : item.key)}
                      className='w-full flex items-center justify-between'
                    >
                      <Title
                        level={5}
                        className={`${textColor} font-semibold !m-0`}
                      >
                        {item.title}
                      </Title>

                      <PlusOutlined
                        className={`transition-transform ${
                          isOpen ? 'rotate-45 !text-red-500' : ''
                        } ${isDark ? '!text-green-400' : '!text-blue-600'}`}
                      />
                    </button>

                    {/* BODY */}
                    {isOpen && (
                      <>
                        <Row
                          justify={'start'}
                          align={'middle'}
                          className='gap-x-2 my-1'
                        >
                          <PhoneFilled
                            className={`${isDark ? '!text-white' : '!text-black'}`}
                          />
                          <Text color={isDark ? 'white' : ''}>
                            {item.phone}
                          </Text>
                        </Row>

                        <Row
                          justify={'start'}
                          align={'middle'}
                          className='gap-x-2'
                        >
                          <MailFilled
                            className={`${isDark ? '!text-white' : '!text-black'}`}
                          />
                          <Text color={isDark ? 'white' : ''}>{item.mail}</Text>
                        </Row>
                        <Row
                          justify={'start'}
                          align={'middle'}
                          className='gap-x-1'
                        >
                          <Title
                            level={5}
                            className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
                          >
                            {t('office')}
                          </Title>
                          <Text
                            className='mt-0.5'
                            color={isDark ? 'white' : ''}
                          >
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
            <div className={`mt-7 ${device === 'mobile' ? 'text-end' : ''}`}>
              <Button type='text' onClick={() => setCtOpen(true)}>
                <Title
                  className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
                  level={4}
                >
                  {t('getAdviceBtn')}
                </Title>
                <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-3'>
                  <RightOutlined className='!text-white !font-semibold' />
                </div>
              </Button>
            </div>
          </div>
        }
        height={hMap[device]}
      />

      {ctOpen && (
        <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
      )}
    </>
  );
};

export default ContactKey;
