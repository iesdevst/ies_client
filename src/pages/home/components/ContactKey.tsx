import {
  MailFilled,
  PhoneFilled,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Collapse, Row } from 'antd';
import { IesClSection, Text, Title } from '@/components';

const contacts = [
  {
    key: '1',
    label: 'ACADEMIC AFFAIRS',
    children: (
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
          <PhoneFilled className='!text-black' />
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
    label: 'DEPARTMENT OF STUDENT AFFAIRS',
    children: (
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
    label: 'INDUSTRY RELATIONS ACADEMIC, CAREER DEVELOPMENT CENTER',
    children: (
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
    label: 'DEPARTMENT OF ADMISSION & COMMUNICATION',
    children: (
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
    label: 'CENTER FOR INFORMATION TECHNOLOGY',
    children: (
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
              items={contacts}
              expandIconPosition='end'
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  className={`!text-blue-600 !font-bold transition-transform ${
                    isActive ? 'rotate-45 !text-red-500' : ''
                  }`}
                />
              )}
              className='!border-none contact-collapse'
            />
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
