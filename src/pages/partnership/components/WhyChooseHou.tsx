import {
  ClockCircleOutlined,
  KeyOutlined,
  MessageOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import { Col, Flex, Row } from 'antd';
import WCHB from '@/assets/imgs/why_choose_hou_bg.jpeg';
import { IesClSection, Text, Title } from '@/components';

const whyChooseDt = [
  {
    title: 'Valuable Degree',
    description:
      "Students will receive a Bachelor's degree from Hanoi Open University, recognized nationwide by the Ministry of Education and Training. This degree opens opportunities for further studies, civil service exams, and career advancement.",
    icon: <SafetyCertificateOutlined />,
  },
  {
    title: 'No Distinction of Training Form',
    description:
      'According to Circular 27/2019/TT-BGDĐT, the diploma no longer specifies the training form. It ensures fair recognition for all students while keeping the same educational content and validity across the nation.',
    icon: <TagsOutlined />,
  },
  {
    title: 'What They Say',
    description:
      'From March 1st, 2020, university diplomas no longer distinguish the training type. This reform guarantees transparent and equal recognition of academic achievements for all graduates.',
    icon: <MessageOutlined />,
  },
  {
    title: 'Flexible Learning',
    description:
      'The program offers flexible learning options, allowing students to balance work and study efficiently while completing their degree at their own pace and schedule.',
    icon: <ClockCircleOutlined />,
  },
  {
    title: 'Career Opportunities',
    description:
      'A recognized degree provides access to diverse career opportunities, helping graduates secure competitive positions and advance professionally in a variety of industries.',
    icon: <RocketOutlined />,
  },
  {
    title: 'Lifelong Skills',
    description:
      'Studying at Hanoi Open University develops essential skills such as critical thinking, problem-solving, and communication, which can be applied throughout life and any professional context.',
    icon: <KeyOutlined />,
  },
];

const WhyChooseHou: React.FC = () => {
  return (
    <IesClSection
      id='why-choose-hou'
      layout='simple'
      divider={false}
      children={
        <section className='relative w-full h-full py-20'>
          <div className='absolute inset-0 bg-[#3e3e49]/90 z-0'></div>
          <Flex
            justify='center'
            align='center'
            className='!w-full relative z-20'
          >
            <div className='!w-5/6 aspect-video'>
              <iframe
                className='w-full !h-4/5 rounded-xl shadow-lg'
                src='https://www.youtube.com/embed/Knf4xQJVl0Q?si=EnYd3WsqIPDxYftz'
                title='YouTube video'
                allowFullScreen
              />
            </div>
          </Flex>
          <div className='relative'>
            <div className='text-center space-y-8 mb-10'>
              <Text
                className='!inline-block !bg-[#5e41e4] !pt-3 !pb-2 !px-5 rounded-2xl !text-lg !font-bold'
                color='white'
              >
                Why Educore?
              </Text>
              <Title className='!m-0 !text-white !uppercase'>
                Equivalent to a formal
              </Title>
              <Title className='!m-0 !text-white !uppercase'>
                full-time degree
              </Title>
            </div>
            <Row gutter={[24, 24]} className='!gap-y-10'>
              {whyChooseDt.map((item, index) => (
                <Col xs={24} sm={12} md={8} key={index} className='!px-22'>
                  <Text color='white' className='!text-4xl'>
                    {item.icon}
                  </Text>
                  <Title level={3} className='!text-white !m-0 !my-2.5'>
                    {item.title}
                  </Title>
                  <Text color='white' className='!text-sm'>
                    {item.description}
                  </Text>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      }
      style={{
        backgroundImage: `url(${WCHB})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
      className='mt-20'
    />
  );
};

export default WhyChooseHou;
