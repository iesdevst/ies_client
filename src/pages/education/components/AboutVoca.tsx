import {
  BankOutlined,
  DesktopOutlined,
  ShopOutlined,
  SketchOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { ProgTypeEnum } from '@/utils';

const data = [
  {
    title: 'IT & Office',
    items: [
      {
        name: 'Applied Informatics',
        path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.AppInfo}`,
        icon: <DesktopOutlined />,
      },
      {
        name: 'Information Technology',
        path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.IT}`,
        icon: <DesktopOutlined />,
      },
      {
        name: 'Industrial & Residential Electrical',
        path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Indus}`,
        icon: <DesktopOutlined />,
      },
    ],
  },
  {
    title: 'Hospitality & Services',
    items: [
      {
        name: 'Hospitality Management',
        path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Hospi}`,
        icon: <ShopOutlined />,
      },
      {
        name: 'Office Administration',
        path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Office}`,
        icon: <ShopOutlined />,
      },
    ],
  },
  {
    title: 'Business & Management',
    items: [
      {
        name: 'Business Administration',
        path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Business}`,
        icon: <BankOutlined />,
      },
      {
        name: 'Marketing',
        path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Mkt}`,
        icon: <BankOutlined />,
      },
      {
        name: 'Accounting',
        path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Accounting}`,
        icon: <BankOutlined />,
      },
    ],
  },
  {
    title: 'Design & Creativity',
    items: [
      {
        name: 'Computer-Aided Design',
        path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.CompuDs}`,
        icon: <SketchOutlined />,
      },
    ],
  },
];

interface IAboutVoca {
  tl: boolean;
  mb: boolean;
  dark: boolean;
}

const AboutVoca: React.FC<IAboutVoca> = (props) => {
  const { mb, tl, dark } = props;
  const navigate = useNavigate();

  return (
    <div className='py-15 px-5 md:!px-10 lg:!px-30'>
      <Title
        level={mb || tl ? 3 : 1}
        className={`${dark ? '!text-[#9393f1]' : ' !text-gray-500'} !text-center !mb-8`}
      >
        Intermediate Vocational Programs
      </Title>

      <Row gutter={[0, 10]}>
        {data.map((group, index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={24}>
            <Card
              title={
                <Title className='!m-0 !font-bold' level={4}>
                  {group.title}
                </Title>
              }
              variant='borderless'
              hoverable
              className='!bg-gray-500 hover:!shadow-4xl'
            >
              <div className='pt-5 pb-2 px-3 md:!px-8 lg:!px-10'>
                {group.items.map((item, i) => (
                  <Row
                    key={i}
                    justify={'space-between'}
                    align={'middle'}
                    className='mb-3'
                  >
                    <Row
                      justify={'center'}
                      align={'middle'}
                      className='gap-x-2'
                    >
                      <Text className='!block' color='white'>
                        {item.icon}
                      </Text>
                      <Text
                        className='!block !text-sm !font-bold'
                        color='white'
                      >
                        {item.name}
                      </Text>
                    </Row>
                    <Button
                      type='default'
                      className='!block !text-black !font-bold hover:!text-white'
                      onClick={() => navigate(item.path)}
                    >
                      View More
                    </Button>
                  </Row>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutVoca;
