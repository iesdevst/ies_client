import { ArrowUpOutlined, LinkOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Image, Row } from 'antd';
import OUP from '@/assets/imgs/open_uni_partnership.png';
import { IesClSection, Text, Title } from '@/components';

const PartnershipIntro: React.FC = () => {
  return (
    <IesClSection
      id='partnership-intro'
      layout='simple'
      divider={false}
      children={
        <section>
          <div className='grid grid-cols-2 !py-15 !px-20'>
            <Flex vertical justify='flex-start' align='flex-start' gap={20}>
              <Row justify={'center'} align={'middle'} className='gap-x-2'>
                <LinkOutlined className='!text-[#1667d9]' />
                <Title className='!m-0 !text-[#1667d9]' level={5}>
                  Admissions Partnership
                </Title>
              </Row>
              <div>
                <Title className='!m-0 !text-5xl'>HANOI OPEN UNIVERSITY</Title>
                <Title className='!m-0 !text-5xl'>
                  E-LEARNING TRAINING CENTER
                </Title>
              </div>
              <Col>
                <Text className='!text-lg'>
                  No need to go to campus — still get a university degree
                </Text>
                <br />
                <Text className='!text-lg'>
                  Is a university degree holding back your dreams?
                </Text>
              </Col>
              <Row justify={'center'} align={'bottom'} className='gap-x-10'>
                <Image src={OUP} preview={false} className='!w-20 !h-20' />
                <Button
                  type='default'
                  className='!bg-[#1667d9] !rounded-full !py-6 !px-20'
                  size='large'
                >
                  {' '}
                  Register Now
                </Button>
              </Row>
            </Flex>
            <div className='grid grid-cols-3 gap-y-5'>
              <Flex
                justify='end'
                align='flex-start'
                className='!w-full !h-full'
              >
                <Button
                  style={{
                    backgroundImage:
                      "url('https://cdn.prod.website-files.com/67b8026c11273fde3dfd5561/67f37ec587ea195e1359f4b7_Category%20Img04.avif')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  type='text'
                  className='!w-2/3 !h-full !flex !items-center !justify-center'
                >
                  <Text
                    className='!inline-block hover:!underline'
                    color='white'
                  >
                    Link <ArrowUpOutlined className='!rotate-45' />
                  </Text>
                </Button>
              </Flex>
            </div>
          </div>
        </section>
      }
      className='bg-white'
    />
  );
};

export default PartnershipIntro;
