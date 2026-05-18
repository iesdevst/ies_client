import BankOutlined from '@ant-design/icons/es/icons/BankOutlined';
import DesktopOutlined from '@ant-design/icons/es/icons/DesktopOutlined';
import ShopOutlined from '@ant-design/icons/es/icons/ShopOutlined';
import SketchOutlined from '@ant-design/icons/es/icons/SketchOutlined';
import Button from 'antd/es/button';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Row from 'antd/es/row';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { ProgTypeEnum } from '@/utils';

interface IAboutVoca {
  tl: boolean;
  mb: boolean;
  dark: boolean;
}

const AboutVoca: React.FC<IAboutVoca> = (props) => {
  const { mb, tl, dark } = props;
  const { t } = useTranslation('aboutVoca');
  const navigate = useNavigate();

  const data = [
    {
      title: t('titIt'),
      items: [
        {
          name: t('appInf'),
          path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.AppInfo}`,
          icon: <DesktopOutlined />,
        },
        {
          name: t('it'),
          path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.IT}`,
          icon: <DesktopOutlined />,
        },
        {
          name: t('indus'),
          path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Indus}`,
          icon: <DesktopOutlined />,
        },
      ],
    },
    {
      title: t('titHos'),
      items: [
        {
          name: t('hosMn'),
          path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Hospi}`,
          icon: <ShopOutlined />,
        },
        {
          name: t('offAd'),
          path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Office}`,
          icon: <ShopOutlined />,
        },
      ],
    },
    {
      title: t('titBusi'),
      items: [
        {
          name: t('busiAd'),
          path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Business}`,
          icon: <BankOutlined />,
        },
        {
          name: t('mkt'),
          path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Mkt}`,
          icon: <BankOutlined />,
        },
        {
          name: t('accounting'),
          path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.Accounting}`,
          icon: <BankOutlined />,
        },
      ],
    },
    {
      title: t('titDesi'),
      items: [
        {
          name: t('compuAi'),
          path: `${ROUTES.DEMICS_DETAIL}/${ProgTypeEnum.CompuDs}`,
          icon: <SketchOutlined />,
        },
      ],
    },
  ];

  return (
    <div className='py-15 px-5 md:!px-10 lg:!px-30'>
      <Title
        level={mb || tl ? 3 : 1}
        className={`${dark ? '!text-[#9393f1]' : ' !text-gray-500'} !text-center !mb-8`}
      >
        {t('ivProg')}
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
                      {t('viewMore')}
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
