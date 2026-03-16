import { Button, Col, Flex, Image, Row } from 'antd';
import OVW_LIB from '@/assets/imgs/ovw_lib.png';
import OVW_STU from '@/assets/imgs/ovw_stu.png';
import { Title } from '@/components';

const AbOverview: React.FC = () => {
  return (
    <div className='!bg-white pt-18 pb-36 !space-y-20'>
      <Flex justify='center' align='flex-start' className='!pl-10'>
        <Row justify={'center'} align={'middle'} className='flex-1'>
          <div className='space-y-6'>
            <Col>
              <Title className='!m-0'>Principles</Title>
              <Title className='!m-0'> of Our Work</Title>
            </Col>
            <Button
              size='large'
              type='default'
              className='!border-none !bg-black ml-5'
            >
              Contact Now
            </Button>
          </div>
        </Row>
        <div className='flex-2 '>
          <p className='w-5/6 !text-xl font-bold leading-9'>
            Our school provides world-class education that inspires students to
            learn, innovate, and grow. With modern facilities, dedicated
            teachers, and a supportive community, we help students develop
            knowledge, skills, and confidence to become future leaders and make
            a positive impact on the world and contribute to a better future for
            all.
          </p>
        </div>
      </Flex>
      <Flex justify='center' align='center' className='!pl-10'>
        <Col className='space-y-6'>
          <Row justify={'end'} align={'middle'}>
            <Image src={OVW_STU} preview={false} className='mr-3' />
          </Row>
          <Row justify={'end'} align={'middle'}>
            <p className=' !text-lg !font-semibold ml-35'>
              Our libraries offer thousands of books, digital resources, and
              journals. Modern study spaces and advanced technology support
              students and researchers in learning and discovery.
            </p>
          </Row>
        </Col>
        <Col className='space-y-6'>
          <Row justify={'center'}>
            <Image src={OVW_LIB} preview={false} className='mr-2' />
          </Row>
          <Row justify={'center'}>
            <p className='!w-4/5 !text-lg font-semibold ml-1'>
              Our central library is the hub of academic life, offering vast
              collections of books, e-journals, and digital resources. It
              provides students with a modern space to learn, collaborate, and
              conduct research.
            </p>
          </Row>
        </Col>
      </Flex>
    </div>
  );
};

export default AbOverview;
