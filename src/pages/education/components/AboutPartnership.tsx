import Button from 'antd/es/button';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import Row from 'antd/es/row';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import IES from '@/assets/imgs/ies_logo_notext.webp';
import HOU from '@/assets/imgs/open_uni_partnership.webp';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';

interface IAboutPartnership {
  mb: boolean;
  tl: boolean;
  dark: boolean;
}

const AboutPartnership: React.FC<IAboutPartnership> = (props) => {
  const { mb, tl, dark } = props;
  const { t } = useTranslation('aboutPartnership');
  const navigate = useNavigate();

  const abPartnershipDt = [
    {
      tit: t('eLearn'),
      decs: t('eLdesc'),
      img: IES,
    },
    {
      tit: t('ps'),
      decs: t('psDesc'),
      img: HOU,
    },
  ];
  return (
    <div>
      <Row
        gutter={mb || tl ? [0, 50] : [0, 50]}
        justify='center'
        className={`${mb ? 'px-5' : tl ? 'px-10' : 'px-30'} py-15`}
      >
        {abPartnershipDt.map((pt) => (
          <Col key={pt.tit} xs={24} sm={24} md={12} lg={12}>
            <Flex
              vertical
              justify='center'
              align='center'
              className='text-center'
              gap={20}
            >
              <Title
                className={`${dark ? '!text-[#9393f1]' : '!text-gray-500'} !m-0 !font-bold`}
                level={mb || tl ? 3 : 1}
              >
                {pt.tit}
              </Title>
              <Text
                color={dark ? 'white' : 'black'}
                className={`${mb ? '!text-sm' : tl ? '!text-lg px-5' : '!text-lg py-15 px-20'} !block`}
              >
                {pt.decs}
              </Text>
              <Image
                src={pt.img}
                preview={false}
                className={`${dark ? '!bg-gray-400 p-3 !rounded-xl' : ''} !w-full !h-40`}
                loading='lazy'
                alt='abps'
              />
              <Button
                className='!block w-5/6 !rounded-xl !text-black !font-bold hover:!text-white'
                onClick={() => {
                  navigate(ROUTES.PARTNERSHIP);
                }}
              >
                {t('more')}
              </Button>
            </Flex>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutPartnership;
