import {
  ArrowRightOutlined,
  BookFilled,
  ClockCircleFilled,
  FileTextFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import { Button, Col, Flex, Image, List, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import PI from '@/assets/imgs/partnership_info_sec.jpeg';
import { IesClSection, Text, Title } from '@/components';

const questIf = [
  {
    key: 1,
    label:
      'Struggling to find good jobs, low pay,\n limited growth opportunities?',
  },
  {
    key: 2,
    label: 'Low confidence, avoiding study, too old?',
  },
  {
    key: 3,
    label: 'Too busy for school, facing high tuition\n and living costs?',
  },
];

const titpoint = [
  {
    key: 1,
    icon: <FileTextFilled />,
    tit: 'Learn Online Anywhere',
    desc: 'Study anytime, anywhere with multimedia lessons including slides, videos, and audio. Participate in interactive online classes without the need to commute, making learning flexible and convenient for your schedule.',
  },
  {
    key: 2,
    icon: <ClockCircleFilled />,
    tit: 'Save Time & Money',
    desc: 'Cut down on travel and living expenses while still completing your courses. Take online tests and assignments from home, and only visit campus when absolutely necessary, saving both time and costs.',
  },
  {
    key: 3,
    icon: <BookFilled />,
    tit: 'Get a Valuable Degree',
    desc: 'Earn an accredited degree equivalent to traditional programs, giving you the same recognition and career opportunities. No entrance exams are required, allowing you to advance your education and career with ease.',
  },
];

interface IPartnershipInfo {
  openRegisInSec: () => void;
}

const PartnershipInfo: React.FC<IPartnershipInfo> = (props) => {
  const { openRegisInSec } = props;
  const mb = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <IesClSection
      id='partnership-info'
      layout='simple'
      divider={false}
      children={
        <section className='bg-white'>
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
              <Title level={mb || isTablet ? 2 : 1} className='!m-0'>
                Does not having a <br />
                degree hold you back <br />
                or push you forward?
              </Title>
              <Button
                type='default'
                className='!w-4/5 !rounded-lg !py-4.5 !text-lg !bg-[#1667d9]'
                onClick={openRegisInSec}
              >
                Enroll now <ArrowRightOutlined />
              </Button>

              <List
                dataSource={questIf}
                renderItem={(item) => (
                  <List.Item key={item.key} style={{ borderBottom: 'none' }}>
                    <Row className='gap-x-3' align={'middle'}>
                      <QuestionCircleFilled className='!text-[#1667d9] !text-lg' />
                      <Text
                        style={{
                          whiteSpace: 'pre-line',
                        }}
                        className='font-bold'
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
                    color='#6d6969'
                    className='!block !text-[14.5px]'
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
