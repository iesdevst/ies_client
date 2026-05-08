import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import BookFilled from '@ant-design/icons/BookFilled';
import ClockCircleFilled from '@ant-design/icons/ClockCircleFilled';
import FileTextFilled from '@ant-design/icons/FileTextFilled';
import QuestionCircleFilled from '@ant-design/icons/QuestionCircleFilled';

import Button from 'antd/es/button';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import List from 'antd/es/list';
import Row from 'antd/es/row';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import PI from '@/assets/imgs/partnership_info_sec.webp';
import { IesClSection, Text, Title } from '@/components';

interface IPartnershipInfo {
  openRegisInSec: () => void;
  dark: boolean;
}

const PartnershipInfo: React.FC<IPartnershipInfo> = ({
  openRegisInSec,
  dark,
}) => {
  const mb = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const { t } = useTranslation('partnershipInfo');

  const containerPx = mb || isTablet ? 'px-5' : 'px-20';

  const questIf = useMemo(
    () => [
      { key: 1, label: t('q1') },
      { key: 2, label: t('q2') },
      { key: 3, label: t('q3') },
    ],
    [t],
  );

  const titpoint = useMemo(
    () => [
      {
        key: 1,
        icon: <FileTextFilled />,
        tit: t('p1t'),
        desc: t('p1d'),
      },
      {
        key: 2,
        icon: <ClockCircleFilled />,
        tit: t('p2t'),
        desc: t('p2d'),
      },
      {
        key: 3,
        icon: <BookFilled />,
        tit: t('p3t'),
        desc: t('p3d'),
      },
    ],
    [t],
  );

  return (
    <IesClSection
      id='partnership-info'
      layout='simple'
      divider={false}
      height={mb || isTablet ? '25vh' : ''}
      children={
        <section className={dark ? '!bg-[#212223]' : 'bg-white'}>
          <div className={`grid grid-cols-1 lg:grid-cols-3 ${containerPx}`}>
            {/* LEFT */}
            <Flex vertical gap={mb ? 20 : 50} className='pt-10'>
              <Title level={mb || isTablet ? 2 : 3} className='!m-0'>
                {t('tit1')} <br />
                {t('tit2')} <br />
                {t('tit3')}
              </Title>

              <Button
                onClick={openRegisInSec}
                className='!w-4/5 !rounded-lg !py-4 !text-lg !bg-[#1667d9]'
              >
                {t('enroll')} <ArrowRightOutlined />
              </Button>

              <List
                dataSource={questIf}
                renderItem={(item) => (
                  <List.Item key={item.key} className='!border-none'>
                    <Row align='middle' className='gap-x-3'>
                      <QuestionCircleFilled className='!text-[#1667d9]' />
                      <Text
                        className='font-bold !text-lg'
                        color={dark ? 'white' : ''}
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {item.label}
                      </Text>
                    </Row>
                  </List.Item>
                )}
              />
            </Flex>

            {/* CENTER IMAGE */}
            <img
              src={PI}
              loading='lazy'
              className={`!rounded-2xl ${!mb ? '!w-5/6' : ''}`}
              alt='psif'
            />

            {/* RIGHT */}
            <Flex vertical gap={30} className={mb ? 'mt-10' : 'pt-3'}>
              {titpoint.map((point) => (
                <Col key={point.key}>
                  <div className='text-[#1667d9] text-3xl'>{point.icon}</div>

                  <Title level={3} className='!m-0 !text-[#1667d9] my-1'>
                    {point.tit}
                  </Title>

                  <Text
                    className='!block !text-lg'
                    color={dark ? 'white' : '#6d6969'}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {point.desc}
                  </Text>
                </Col>
              ))}
            </Flex>
          </div>
        </section>
      }
    />
  );
};

export default PartnershipInfo;
