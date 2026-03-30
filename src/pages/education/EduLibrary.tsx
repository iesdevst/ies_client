import { ArrowUpOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Image, Modal, Row } from 'antd';
import { useState } from 'react';
import DLIB from '@/assets/imgs/dgt_lib.jpeg';
import DGTR from '@/assets/imgs/dgt_lib_right.jpg';
import { Text, Title } from '@/components';

const EduLibrary = () => {
  const [openCsModal, setOpenCsModal] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${DLIB})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className='pt-80 mx-5 mb-2 rounded-3xl'
    >
      <Row gutter={[50, 50]} justify='center' className='px-30 !pb-7'>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Flex vertical justify='flex-start' align='flex-start' gap={20}>
            <Title className='!text-white !font-bold !m-0'>
              Discover Knowledge at Your Fingertips
            </Title>
            <Text className='!block !font-bold !text-lg' color='white'>
              Access our digital library anytime, anywhere. Explore books,
              articles, and learning resources to support your studies and
              curiosity.
            </Text>
            <Button
              className='!bg-white !text-black !rounded-2xl !font-bold !w-2/3 !block'
              onClick={() => setOpenCsModal(true)}
            >
              Start Exploring
            </Button>
          </Flex>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className='!flex !justify-center !align-bottom !bg-white !rounded-2xl'
        >
          <Flex justify='space-between' align='center' className=' !bg-white'>
            <Image src={DGTR} preview={false} className='!rounded-2xl' />
            <Col>
              <Text className='!block !text-lg' color='#464646'>
                Find trusted resources and materials to support your learning
                anytime, anywhere. Our digital library makes studying easier and
                faster.
              </Text>
              <Button
                type='text'
                className='hover:!underline !font-bold !text-black !text-lg'
                onClick={() => setOpenCsModal(true)}
              >
                Start Exploring <ArrowUpOutlined className='!rotate-45' />
              </Button>
            </Col>
          </Flex>
        </Col>
      </Row>

      <Modal
        title='Coming Soon'
        visible={openCsModal}
        onOk={() => setOpenCsModal(false)}
        onCancel={() => setOpenCsModal(false)}
        okText='OK'
        cancelText='Cancel'
      >
        <p>Digital library features are on the way. Stay tuned!</p>
      </Modal>
    </div>
  );
};

export default EduLibrary;
