import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Col, Flex, Image, List } from 'antd';
import PC from '@/assets/imgs/partnership_contact.jpeg';
import { IesClSection, Text, Title } from '@/components';

const steps = [
  'Register for a consultation',
  'Complete the registration form',
  'Discuss your program with a counselor',
  'Choose the appropriate major',
  'Participate in distance learning and earn your degree',
];

const PartnershipRegis: React.FC = () => {
  return (
    <IesClSection
      id='partnership-regis'
      layout='simple'
      divider={false}
      children={
        <section className='pb-30'>
          <Flex align='flex-start' className='!px-40' gap={15}>
            <Col className='flex-2 bg-gradient-to-br from-[#1f1b2e] to-[#4f46e5] rounded-2xl pt-6.5 pl-10 !space-y-6'>
              <div>
                <Title level={2} className='!m-0 !text-white'>
                  Simple Admission in 5 Steps
                </Title>
                <Title level={2} className='!m-0 !text-white'>
                  Get Your Degree Easily
                </Title>
              </div>
              <List
                bordered={false}
                dataSource={steps}
                renderItem={(item) => (
                  <List.Item style={{ border: 'none', padding: '4px 0' }}>
                    <Flex align='center' gap={8} className='!mb-2'>
                      <CheckCircleFilled className='!text-white' />
                      <Text color='white' className='!text-lg !block'>
                        {item}
                      </Text>
                    </Flex>
                  </List.Item>
                )}
              />
              <Title className='!text-white'>
                Over 30,000 students have earned their bachelor’s degrees
                through Hanoi Open University’s E-Learning program.
              </Title>
            </Col>
            <Col className='flex-1 bg-gradient-to-br from-[#1f1b2e] to-[#4f46e5] rounded-2xl py-5 px-3'>
              <Title level={2} className='!text-white !m-0'>
                Get Advice
              </Title>

              <Image
                src={PC}
                preview={false}
                className='!mt-2 !mb-1 !rounded-lg'
              />
              <Button
                type='default'
                className='!w-full !bg-gray-500 !border-none !rounded-2xl !font-bold !text-lg hover:!text-[#16265a]'
              >
                Consult with Us
              </Button>
            </Col>
          </Flex>
        </section>
      }
    />
  );
};

export default PartnershipRegis;
