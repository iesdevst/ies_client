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
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { IesClSection, Text, Title } from '@/components';

interface IPartnershipProg {
  dark: boolean;
}

const PartnershipProg: React.FC<IPartnershipProg> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('partnershipProg');
  const mb = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const miniScreen = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });

  const houStat = [
    { num: '20.000+', decs: t('s1d') },
    { num: '169+', decs: t('s2d') },
    { num: '98%', decs: t('s3d') },
    { num: '96%', decs: t('s4d') },
  ];

  const majors = [
    {
      group: t('g1'),
      items: [
        { label: t('g1i1'), icon: <ShopOutlined /> },
        { label: t('g1i2'), icon: <TeamOutlined /> },
        { label: t('g1i3'), icon: <CalculatorOutlined /> },
        { label: t('g1i4'), icon: <DollarOutlined /> },
      ],
    },
    {
      group: t('g2'),
      items: [{ label: t('g2i1'), icon: <LaptopOutlined /> }],
    },
    {
      group: t('g3'),
      items: [
        { label: t('g3i1'), icon: <BankOutlined /> },
        { label: t('g3i2'), icon: <BookOutlined /> },
      ],
    },
    {
      group: t('g4'),
      items: [
        { label: t('g4i1'), icon: <GlobalOutlined /> },
        { label: t('g4i2'), icon: <GlobalOutlined /> },
      ],
    },
    {
      group: t('g5'),
      items: [
        { label: t('g5i1'), icon: <GlobalOutlined /> },
        { label: t('g5i2'), icon: <ShopOutlined /> },
      ],
    },
  ];

  return (
    <IesClSection
      id='partnership-prog'
      layout='simple'
      divider={false}
      children={
        <section>
          <Flex
            vertical={mb || isTablet}
            align='flex-start'
            className={` ${mb || isTablet ? '!pt-15 !pb-30' : '!py-30'}`}
          >
            <Col className={`${mb || isTablet ? '!w-full' : 'flex-1'}`}>
              <Title level={mb ? 4 : 3} className='!mb-10 !text-center'>
                {t('st')}
              </Title>
              <Row
                gutter={!isTablet ? [0, 20] : [0, 20]}
                justify='center'
                className={`${mb || isTablet ? '' : miniScreen ? 'px-5' : 'px-20'}`}
              >
                {houStat.map((stat, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={12}
                    md={6}
                    lg={12}
                    className='!flex !justify-center'
                  >
                    <div className='w-40 h-40 bg-[#5990cb] rounded-full flex flex-col items-center justify-center text-center text-white'>
                      <Title level={2} className='!m-0 !text-white !font-black'>
                        {stat.num}
                      </Title>
                      <Text color='white'>{stat.decs}</Text>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <div className={` ${mb || isTablet ? '!w-full' : 'flex-2'}`}>
              <Title
                level={3}
                className={`!text-center ${mb || isTablet ? '!mt-10' : '!mb-10'}`}
              >
                {t('pt')}
              </Title>
              <Row
                gutter={isTablet || mb ? [0, 20] : [120, 50]}
                className={`${mb ? 'pl-3' : isTablet ? 'pl-25 mt-10' : ''}`}
              >
                {majors.map((group) => (
                  <Col key={group.group} xs={24} sm={24} md={12}>
                    <Col>
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
                              <Text
                                color={dark ? 'white' : ''}
                                className='!block !text-lg'
                              >
                                {item.label}
                              </Text>
                            </Flex>
                          </List.Item>
                        )}
                      />
                    </Col>
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
