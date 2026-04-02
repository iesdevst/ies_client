import { Button, Col, Flex, Image, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import OVW_LIB from '@/assets/imgs/ovw_lib.png';
import OVW_STU from '@/assets/imgs/ovw_stu.png';
import { Title } from '@/components';

const AbOverview: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className='!bg-white pt-18 !space-y-20'>
      <Flex
        vertical={mb}
        justify='space-between'
        align='flex-start'
        className={`${!mb ? '!pl-10' : ''}`}
      >
        <div className={`${!mb ? 'flex-1 !flex justify-center' : '!w-full'}`}>
          <Flex
            vertical={!mb}
            gap={6}
            justify='space-evenly'
            align={!mb ? 'center' : 'end'}
          >
            <Col>
              <Title className='!m-0'>Principles</Title>
              <Title className='!m-0'> of Our Work</Title>
            </Col>
            <Button
              size='large'
              type='default'
              className={`!border-none !bg-black hover:!bg-gray-400 hover:!text-black ${!mb ? 'w-full' : ''}`}
            >
              Contact Now
            </Button>
          </Flex>
        </div>
        <div className={`${!mb ? 'flex-2' : ''}`}>
          <p
            className={`font-bold ${!mb ? 'w-5/6 !text-xl leading-9' : 'leading-5 px-3 mt-5'}`}
          >
            Our school provides world-class education that inspires students to
            learn, innovate, and grow. With modern facilities, dedicated
            teachers, and a supportive community, we help students develop
            knowledge, skills, and confidence to become future leaders and make
            a positive impact on the world and contribute to a better future for
            all.
          </p>
        </div>
      </Flex>
      <Row gutter={!mb ? [0, 0] : [0, 50]} align='middle' justify='center'>
        <Col xs={24} md={12} className={`${!mb ? '' : 'px-3'}`}>
          <Row justify='center' className='gap-y-3'>
            <Image
              src={OVW_STU}
              preview={false}
              className='!w-full !rounded-lg'
            />
            <p className={`text-lg font-semibold ${!mb ? 'px-21' : ''}`}>
              Our libraries offer thousands of books, digital resources, and
              journals. Modern study spaces and advanced technology support
              students and researchers in learning and discovery.
            </p>
          </Row>
        </Col>
        <Col xs={24} md={12} className={`${!mb ? '' : 'px-3'}`}>
          <Row justify='center' className='gap-y-3'>
            <Image
              src={OVW_LIB}
              preview={false}
              className='!w-full !rounded-lg'
            />
            <p className={`text-lg font-semibold ${!mb ? 'px-21' : ''}`}>
              Our central library is the hub of academic life, offering
              collections of books, e-journals, and digital resources. It
              provides a modern space to learn, collaborate, and conduct
              research.
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AbOverview;
