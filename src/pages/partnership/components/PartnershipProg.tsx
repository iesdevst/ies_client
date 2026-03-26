import {
  ShopOutlined,
  TeamOutlined,
  CalculatorOutlined,
  DollarOutlined,
  LaptopOutlined,
  BankOutlined,
  GlobalOutlined,
  BookOutlined,
} from '@ant-design/icons';
import { Col, Flex, List, Row } from 'antd';
import { IesClSection, Text, Title } from '@/components';

const houStat = [
  { num: '20.000+', decs: 'Students Enrolled' },
  { num: '169+', decs: 'Courses Launched' },
  { num: '98%', decs: 'Student Satisfaction' },
  { num: '96%', decs: 'Employment Rate' },
];

const majors = [
  {
    group: 'Business & Economics',
    items: [
      { label: 'E-commerce', icon: <ShopOutlined /> },
      { label: 'Business Administration', icon: <TeamOutlined /> },
      { label: 'Accounting', icon: <CalculatorOutlined /> },
      { label: 'Finance & Banking', icon: <DollarOutlined /> },
    ],
  },
  {
    group: 'Technology & Engineering',
    items: [{ label: 'Information Technology', icon: <LaptopOutlined /> }],
  },
  {
    group: 'Law & Legal',
    items: [
      { label: 'Law', icon: <BankOutlined /> },
      { label: 'Economic Law', icon: <BookOutlined /> },
    ],
  },
  {
    group: 'Languages',
    items: [
      { label: 'English Language', icon: <GlobalOutlined /> },
      { label: 'Chinese Language', icon: <GlobalOutlined /> },
    ],
  },
  {
    group: 'Tourism & Hospitality',
    items: [
      { label: 'Tourism & Travel Management', icon: <GlobalOutlined /> },
      { label: 'Hotel Management', icon: <ShopOutlined /> },
    ],
  },
];

const PartnershipProg: React.FC = () => {
  return (
    <IesClSection
      id='partnership-prog'
      layout='simple'
      divider={false}
      children={
        <section>
          <Flex align='flex-start' className='!py-30'>
            <Col className='flex-1'>
              <Title level={3} className='!mb-10 !text-center'>
                HOU-Always Striving for Excellence
              </Title>
              <Row gutter={[0, 20]} justify='center' className='!px-20'>
                {houStat.map((stat, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={12}
                    md={12}
                    className='flex justify-center'
                  >
                    <div className='w-40 h-40 bg-[#5990cb] rounded-full flex flex-col items-center justify-center text-center text-white'>
                      <Title level={2} className='!m-0 !text-white !font-black'>
                        {stat.num}
                      </Title>
                      <Text className='!text-white'>{stat.decs}</Text>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <div className='flex-2'>
              <Title level={3} className='!mb-10 !text-center'>
                Programs Open for Enrollment
              </Title>
              <Row gutter={[10, 50]} className='px-25'>
                {majors.map((group) => (
                  <Col span={8} key={group.group}>
                    <Title level={4} className='!font-bold !text-[#5990cb]'>
                      {group.group}
                    </Title>

                    <List
                      dataSource={group.items}
                      renderItem={(item) => (
                        <List.Item
                          style={{ border: 'none', padding: '4px 0' }}
                          className='!text-lg'
                        >
                          <Flex align='center' gap={8}>
                            <Text color='#5990cb' className='!block !text-lg'>
                              {item.icon}
                            </Text>
                            <Text className='!block !text-lg'>
                              {item.label}
                            </Text>
                          </Flex>
                        </List.Item>
                      )}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Flex>
        </section>
      }
    />
  );
};

export default PartnershipProg;
