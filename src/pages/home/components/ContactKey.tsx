import {
  MailFilled,
  PhoneFilled,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Collapse, Row } from 'antd';
import { lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { IesClSection, Text, Title } from '@/components';
import { useUserStore } from '@/store';

const IesCtModal = lazy(() => import('@/pages/home/components/IesCtModal'));

const ContactKey: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const mnSc = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const { isDark } = useUserStore();
  const [ctOpen, setCtOpen] = useState(false);
  const { t } = useTranslation('contactKey');

  const textColor = useMemo(
    () => (isDark ? '!text-white' : '!text-black'),
    [isDark],
  );

  const contacts = useMemo(
    () => [
      {
        key: '1',
        label: (
          <Title className={`!m-0 ${textColor}`} level={5}>
            {t('phc')}
          </Title>
        ),
        children: (
          <>
            <Row justify={'start'} align={'middle'} className='gap-x-1'>
              <Title level={5} className={`!m-0 ${textColor}`}>
                {t('office')}
              </Title>
              <Text className='mt-0.5' color={isDark ? 'white' : ''}>
                {t('location')}
              </Text>
            </Row>

            <Row justify={'start'} align={'middle'} className='gap-x-2 my-1'>
              <PhoneFilled className={`${textColor}`} />
              <Text color={isDark ? 'white' : ''}>0901.309.866</Text>
            </Row>

            <Row justify={'start'} align={'middle'} className='gap-x-2'>
              <MailFilled className={`${textColor}`} />
              <Text color={isDark ? 'white' : ''}>info@iescollege.edu.vn</Text>
            </Row>
          </>
        ),
      },
      {
        key: '2',
        label: (
          <Title className={`!m-0 ${textColor}`} level={5}>
            {t('ctsv')}
          </Title>
        ),
        children: (
          <>
            <Row justify={'start'} align={'middle'} className='gap-x-1'>
              <Title level={5} className={`!m-0 ${textColor}`}>
                {t('office')}
              </Title>
              <Text className='mt-0.5' color={isDark ? 'white' : ''}>
                {t('location')}
              </Text>
            </Row>

            <Row justify={'start'} align={'middle'} className='gap-x-2 my-1'>
              <PhoneFilled className={`${textColor}`} />
              <Text color={isDark ? 'white' : ''}>0912.584.800</Text>
            </Row>

            <Row justify={'start'} align={'middle'} className='gap-x-2'>
              <MailFilled className={`${textColor}`} />
              <Text color={isDark ? 'white' : ''}>info@iescollege.edu.vn</Text>
            </Row>
          </>
        ),
      },

      {
        key: '3',
        label: (
          <Title className={`!m-0 ${textColor}`} level={5}>
            {t('ts')}
          </Title>
        ),
        children: (
          <>
            <Row justify={'start'} align={'middle'} className='gap-x-1'>
              <Title level={5} className={`!m-0 ${textColor}`}>
                {t('office')}
              </Title>
              <Text className='mt-0.5' color={isDark ? 'white' : ''}>
                {t('location')}
              </Text>
            </Row>

            <Row justify={'start'} align={'middle'} className='gap-x-2 my-1'>
              <PhoneFilled className={`${textColor}`} />
              <Text color={isDark ? 'white' : ''}>0901.309.866</Text>
            </Row>

            <Row justify={'start'} align={'middle'} className='gap-x-2'>
              <MailFilled className={`${textColor}`} />
              <Text color={isDark ? 'white' : ''}>info@iescollege.edu.vn</Text>
            </Row>
          </>
        ),
      },
    ],
    [t, textColor, isDark],
  );

  return (
    <>
      <IesClSection
        id='keyContact'
        layout='simple'
        divider={false}
        children={
          <div
            className={`mt-20 h-full flex flex-col ${!mb ? 'pl-20 pt-20' : ' pt-10 pb-20'}`}
          >
            <Title className={`${textColor} ${!mb ? '' : '!text-center'}`}>
              {t('ctKey')}
            </Title>

            <div
              className={`border-b border-[#cfd2d8] ${!mb ? 'w-1/2' : '!mx-5'}`}
            >
              <Collapse
                accordion
                items={contacts}
                expandIconPosition='end'
                expandIcon={({ isActive }) => (
                  <PlusOutlined
                    className={`${isDark ? '!text-[#00cf91]' : '!text-blue-600'} !font-bold transition-transform !text-lg ${
                      isActive ? 'rotate-45 !text-red-500' : ''
                    }`}
                  />
                )}
                className='!border-none contact-collapse'
              />
            </div>

            <div className={`mt-7 ${!mb ? '' : ' text-end'}`}>
              <Button type='text' onClick={() => setCtOpen(true)}>
                <Title className={`!m-0 ${textColor}`} level={4}>
                  {t('getAdviceBtn')}
                </Title>
                <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-3'>
                  <RightOutlined className='!text-white !font-semibold' />
                </div>
              </Button>
            </div>
          </div>
        }
        className={`${isDark ? 'bg-gray-700' : 'bg-[#f2f5ff] mt-20'}`}
        height={mb ? '40vh' : mnSc ? '95vh' : ''}
      />
      <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
    </>
  );
};

export default ContactKey;
