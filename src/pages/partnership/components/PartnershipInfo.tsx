import {
  ArrowRightOutlined,
  BookFilled,
  ClockCircleFilled,
  FileTextFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import { Button, Col, Flex, Image, List, Row } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import PI from '@/assets/imgs/partnership_info_sec.jpeg';
import { IesClSection, Text, Title } from '@/components';

interface IPartnershipInfo {
  openRegisInSec: () => void;
  dark: boolean;
}

const PartnershipInfo: React.FC<IPartnershipInfo> = (props) => {
  const { openRegisInSec, dark } = props;
  const mb = useMediaQuery({ maxWidth: 768 });
  const { t } = useTranslation('partnershipInfo');
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const questIf = useMemo(
    () => [
      {
        key: 1,
        label: t('q1'),
      },
      {
        key: 2,
        label: t('q2'),
      },
      {
        key: 3,
        label: t('q3'),
      },
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
      children={
        <section className={`${dark ? '!bg-[#212223]' : 'bg-white'}`}>
          <div
            className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ${mb || isTablet ? 'px-5' : 'px-20'}`}
          >
            <Flex
              vertical
              justify='flex-start'
              align='flex-start'
              className='!h-full !pt-10'
              gap={!mb ? 50 : 20}
            >
              <Title level={mb || isTablet ? 2 : 3} className='!m-0'>
                {t('tit1')} <br />
                {t('tit2')} <br />
                {t('tit3')}
              </Title>
              <Button
                type='default'
                className='!w-4/5 !rounded-lg !py-4.5 !text-lg !bg-[#1667d9]'
                onClick={openRegisInSec}
              >
                {t('enroll')} <ArrowRightOutlined />
              </Button>

              <List
                dataSource={questIf}
                renderItem={(item) => (
                  <List.Item key={item.key} style={{ borderBottom: 'none' }}>
                    <Row className='gap-x-3' align={'middle'}>
                      <QuestionCircleFilled className='!text-[#1667d9] !text-lg' />
                      <Text
                        color={dark ? 'white' : ''}
                        style={{
                          whiteSpace: 'pre-line',
                        }}
                        className='font-bold !text-lg'
                      >
                        {item.label}
                      </Text>
                    </Row>
                  </List.Item>
                )}
              />
            </Flex>
            <Image
              src={PI}
              preview={false}
              className={`!rounded-2xl ${!mb ? '!w-5/6' : ''}`}
              loading='lazy'
            />
            <Flex
              vertical
              justify='flex-start'
              align='flex-start'
              className={`!h-full ${!mb ? '!pt-3.5' : '!mt-10'}`}
              gap={30}
            >
              {titpoint.map((point) => (
                <Col key={point.key}>
                  <Text color='#1667d9' className='!block !text-4xl'>
                    {point.icon}
                  </Text>
                  <Title className='!m-0 !text-[#1667d9] !my-1' level={3}>
                    {point.tit}
                  </Title>
                  <Text
                    color={dark ? 'white' : '#6d6969'}
                    className='!block !text-lg'
                    style={{
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {point.desc}
                  </Text>
                </Col>
              ))}
            </Flex>
          </div>
        </section>
      }
      height={mb || isTablet ? '25vh' : ''}
    />
  );
};

export default PartnershipInfo;
