import {
  MailFilled,
  PhoneFilled,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Collapse, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { IesClSection, Text, Title } from '@/components';
import { useUserStore } from '@/store';

const ContactKey: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const mnSc = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const { isDark } = useUserStore();

  const contacts = [
    {
      key: '1',
      label: (
        <Title
          className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
          level={5}
        >
          ACADEMIC AFFAIRS
        </Title>
      ),
      children: (
        <>
          <Row justify={'start'} align={'middle'} className='gap-x-1'>
            <Title
              level={5}
              className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
            >
              Office:
            </Title>
            <Text className='mt-0.5' color={isDark ? 'white' : ''}>
              98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
              Vietnam
            </Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2 my-1'>
            <PhoneFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>0901.309.866 - EXT: 6969</Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2'>
            <MailFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>tuyensinh@cnktdn.edu.vn</Text>
          </Row>
        </>
      ),
    },
    {
      key: '2',
      label: (
        <Title
          className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
          level={5}
        >
          DEPARTMENT OF STUDENT AFFAIRS
        </Title>
      ),
      children: (
        <>
          <Row justify={'start'} align={'middle'} className='gap-x-1'>
            <Title
              level={5}
              className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
            >
              Office:
            </Title>
            <Text className='mt-0.5' color={isDark ? 'white' : ''}>
              98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
              Vietnam
            </Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2 my-1'>
            <PhoneFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>0901.309.866 - EXT: 6969</Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2'>
            <MailFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>tuyensinh@cnktdn.edu.vn</Text>
          </Row>
        </>
      ),
    },
    {
      key: '3',
      label: (
        <Title
          className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
          level={5}
        >
          INDUSTRY RELATIONS ACADEMIC, CAREER DEVELOPMENT CENTER
        </Title>
      ),
      children: (
        <>
          <Row justify={'start'} align={'middle'} className='gap-x-1'>
            <Title
              level={5}
              className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
            >
              Office:
            </Title>
            <Text className='mt-0.5' color={isDark ? 'white' : ''}>
              98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
              Vietnam
            </Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2 my-1'>
            <PhoneFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>0901.309.866 - EXT: 6969</Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2'>
            <MailFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>tuyensinh@cnktdn.edu.vn</Text>
          </Row>
        </>
      ),
    },
    {
      key: '4',
      label: (
        <Title
          className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
          level={5}
        >
          DEPARTMENT OF ADMISSION & COMMUNICATION
        </Title>
      ),
      children: (
        <>
          <Row justify={'start'} align={'middle'} className='gap-x-1'>
            <Title
              level={5}
              className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
            >
              Office:
            </Title>
            <Text className='mt-0.5' color={isDark ? 'white' : ''}>
              98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
              Vietnam
            </Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2 my-1'>
            <PhoneFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>0901.309.866 - EXT: 6969</Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2'>
            <MailFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>tuyensinh@cnktdn.edu.vn</Text>
          </Row>
        </>
      ),
    },
    {
      key: '5',
      label: (
        <Title
          className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
          level={5}
        >
          CENTER FOR INFORMATION TECHNOLOGY
        </Title>
      ),
      children: (
        <>
          <Row justify={'start'} align={'middle'} className='gap-x-1'>
            <Title
              level={5}
              className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
            >
              Office:
            </Title>
            <Text className='mt-0.5' color={isDark ? 'white' : ''}>
              98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City,
              Vietnam
            </Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2 my-1'>
            <PhoneFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>0901.309.866 - EXT: 6969</Text>
          </Row>

          <Row justify={'start'} align={'middle'} className='gap-x-2'>
            <MailFilled
              className={`${isDark ? '!text-white' : '!text-black'}`}
            />
            <Text color={isDark ? 'white' : ''}>tuyensinh@cnktdn.edu.vn</Text>
          </Row>
        </>
      ),
    },
  ];

  return (
    <IesClSection
      id='keyContact'
      layout='simple'
      divider={false}
      children={
        <div
          className={`mt-20 h-full flex flex-col ${!mb ? 'pl-20 pt-20' : ' pt-10 pb-20'}`}
        >
          <Title
            className={`${isDark ? '!text-white' : ''} ${!mb ? '' : '!text-center'}`}
          >
            Key Contact
          </Title>

          <div
            className={`border-b border-[#cfd2d8] ${!mb ? 'w-1/2' : '!mx-5'}`}
          >
            <Collapse
              accordion
              items={contacts}
              expandIconPosition='end'
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  className={`${isDark ? '!text-[#00cf91]' : '!text-blue-600'} !font-bold transition-transform !text-lg ${
                    isActive ? 'rotate-45 !text-red-500' : ''
                  }`}
                />
              )}
              className='!border-none contact-collapse'
            />
          </div>

          <div className={`mt-7 ${!mb ? '' : ' text-end'}`}>
            <Button type='text'>
              <Title
                className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
                level={4}
              >
                View More
              </Title>
              <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                <RightOutlined className='!text-red-500 !font-semibold' />
              </div>
            </Button>
          </div>
        </div>
      }
      className={`${isDark ? 'bg-gray-700' : 'bg-[#f2f5ff] mt-20'}`}
      height={mb ? '40vh' : mnSc ? '95vh' : '74vh'}
    />
  );
};

export default ContactKey;
