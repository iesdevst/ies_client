import {
  MailFilled,
  PhoneFilled,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Collapse, Row } from 'antd';
import { IesClSection, Text, Title } from '@/components';

const { Panel } = Collapse;

const contacts = [
  {
    key: '1',
    title: 'ACADEMIC AFFAIRS',
    content: (
      <>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <Title level={5} className='!m-0'>
            Office:
          </Title>
          <Text className='mt-0.5'>
            98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
            Vietnam
          </Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <PhoneFilled className='!text-black' />{' '}
          <Text>0901.309.866 - EXT: 6969</Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <MailFilled />
          <Text>tuyensinh@cnktdn.edu.vn</Text>
        </Row>
      </>
    ),
  },
  {
    key: '2',
    title: 'DEPARTMENT OF STUDENT AFFAIRS',
    content: (
      <>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <Title level={5} className='!m-0'>
            Office:
          </Title>
          <Text className='mt-0.5'>
            98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
            Vietnam
          </Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <PhoneFilled className='!text-black' />{' '}
          <Text>0901.309.866 - EXT: 6969</Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <MailFilled />
          <Text>tuyensinh@cnktdn.edu.vn</Text>
        </Row>
      </>
    ),
  },
  {
    key: '3',
    title: 'INDUSTRY RELATIONS ACADEMIC, CAREER DEVELOPMENT CENTER',
    content: (
      <>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <Title level={5} className='!m-0'>
            Office:
          </Title>
          <Text className='mt-0.5'>
            98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
            Vietnam
          </Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <PhoneFilled className='!text-black' />{' '}
          <Text>0901.309.866 - EXT: 6969</Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <MailFilled />
          <Text>tuyensinh@cnktdn.edu.vn</Text>
        </Row>
      </>
    ),
  },
  {
    key: '4',
    title: 'DEPARTMENT OF ADMISSION & COMMUNICATION',
    content: (
      <>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <Title level={5} className='!m-0'>
            Office:
          </Title>
          <Text className='mt-0.5'>
            98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
            Vietnam
          </Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <PhoneFilled className='!text-black' />{' '}
          <Text>0901.309.866 - EXT: 6969</Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <MailFilled />
          <Text>tuyensinh@cnktdn.edu.vn</Text>
        </Row>
      </>
    ),
  },
  {
    key: '5',
    title: 'CENTER FOR INFORMATION TECHNOLOGY',
    content: (
      <>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <Title level={5} className='!m-0'>
            Office:
          </Title>
          <Text className='mt-0.5'>
            98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
            Vietnam
          </Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <PhoneFilled className='!text-black' />{' '}
          <Text>0901.309.866 - EXT: 6969</Text>
        </Row>
        <Row justify={'start'} align={'middle'} className='gap-x-1'>
          <MailFilled />
          <Text>tuyensinh@cnktdn.edu.vn</Text>
        </Row>
      </>
    ),
  },
];

const ContactKey: React.FC = () => {
  return (
    <IesClSection
      id='keyContact'
      layout='simple'
      divider={false}
      children={
        <div className='mt-20 pt-20 pl-20 h-full flex flex-col'>
          <Title>Key Contact</Title>

          <div className='w-1/2 border-b border-[#cfd2d8]'>
            <Collapse
              accordion
              expandIconPosition='end'
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  className={`!text-blue-600 !font-bold transition-transform ${
                    isActive ? 'rotate-45 !text-red-500' : ''
                  }`}
                />
              )}
              className='!border-none contact-collapse'
            >
              {contacts.map((item) => (
                <Panel
                  header={item.title}
                  key={item.key}
                  className='!border-[#cfd2d8]'
                >
                  {item.content}
                </Panel>
              ))}
            </Collapse>
          </div>

          <div className='mt-7 '>
            <Button type='text'>
              <Title className='!m-0 !text-black' level={4}>
                View More
              </Title>
              <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                <RightOutlined className='!text-red-500 !font-semibold' />
              </div>
            </Button>
          </div>
        </div>
      }
      className='bg-[#f2f5ff] mt-20'
      height='74vh'
    />
  );
};

export default ContactKey;
