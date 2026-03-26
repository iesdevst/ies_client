import { Col, Flex, Image, Row } from 'antd';
import HTDSV from '@/assets/imgs/htd_stu_void.jpg';
import LDVSV from '@/assets/imgs/ldv_stu_void.jpg';
import NMHSV from '@/assets/imgs/nmh_stu_void.jpg';
import HOUAVT from '@/assets/imgs/open_uni_partnership.png';
import { IesClSection, Text, Title } from '@/components';

const stuVoidDt = [
  {
    img: HTDSV,
    decs: 'The distance learning program at the university has saved me time and money because I don’t need to go to campus. I can watch lecture videos and learn on my own, anytime and anywhere I want.',
    author: 'Hoang Trung Dung',
    role: 'Bachelor of Information Technology',
  },
  {
    img: LDVSV,
    decs: 'The training program has given me a wealth of useful knowledge. I can review the material whenever I need, thanks to the rich textbooks and resources, as well as the flexible learning schedule.',
    author: 'Le Diep Vy',
    role: 'Bachelor of Accounting',
  },
  {
    img: NMHSV,
    decs: 'Thanks to online learning, I’ve had the chance to earn two bachelor’s degrees. Holding a degree from Hanoi Open University has made finding a job much easier and more straightforward.',
    author: 'Nguyen Minh Huyen',
    role: 'Bachelor of Business Administration',
  },
];

const StuVoidHou: React.FC = () => {
  return (
    <IesClSection
      id='stu-void'
      layout='simple'
      divider={false}
      children={
        <section className='p-30 bg-gray-700'>
          <Flex justify='space-between' align='center' className='!w-full'>
            <Image
              src={HOUAVT}
              preview={false}
              className='!w-45 !h-45 !bg-white !rounded-2xl !py-0.5'
            />
            <div className='text-center'>
              <Title className='!m-0 !text-white'>
                Student Voices on E-Learning
              </Title>
              <Title className='!m-0 italic !text-white' level={3}>
                Hanoi Open University
              </Title>
            </div>
          </Flex>
          <div className='text-center my-15 '>
            <Title
              level={4}
              className='!font-black !text-white rounded-4xl bg-gray-500 p-2'
            >
              Listen to Their Voices
            </Title>
          </div>

          <Row justify='center' gutter={[24, 24]} className='!gap-x-15'>
            {stuVoidDt.map((stuV, index) => (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={6}
                className='bg-gradient-to-br from-blue-400 to-gray-600 rounded-4xl py-5 text-white'
              >
                <Flex vertical justify='center' align='center' gap={25}>
                  <Image
                    src={stuV.img}
                    preview={false}
                    className='!rounded-sm !h-20 !w-20'
                  />
                  <Text color='white' className='!block !font-bold px-1.5 '>
                    {stuV.decs}
                  </Text>
                  <div className='!text-center'>
                    <Title level={4} className='!text-white !m-0'>
                      {stuV.author}
                    </Title>
                    <Text color='white'>{stuV.role}</Text>
                  </div>
                </Flex>
              </Col>
            ))}
          </Row>
        </section>
      }
    />
  );
};

export default StuVoidHou;
