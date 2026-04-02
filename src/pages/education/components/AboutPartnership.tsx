import { Button, Col, Flex, Image, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import IES from '@/assets/imgs/ies_logo_notext.png';
import HOU from '@/assets/imgs/open_uni_partnership.png';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';

const abPartnershipDt = [
  {
    tit: 'E-Learning Program',
    decs: 'Learn anytime, anywhere with our interactive online courses. Gain new skills, practical knowledge, and real results at your own pace. IES College proudly introduces and develops this modern learning approach.',
    img: IES,
  },
  {
    tit: 'Partnership for Innovation',
    decs: 'In collaboration with Hanoi Open University, IES College is developing e-learning programs that combine academic excellence with practical training, offering flexible and high-quality learning opportunities.',
    img: HOU,
  },
];

interface IAboutPartnership {
  mb: boolean;
  tl: boolean;
}

const AboutPartnership: React.FC<IAboutPartnership> = (props) => {
  const { mb, tl } = props;
  const navigate = useNavigate();
  return (
    <div>
      <Row
        gutter={mb || tl ? [0, 50] : [50, 50]}
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
                className='!text-gray-500 !font-bold !m-0'
                level={mb || tl ? 3 : 1}
              >
                {pt.tit}
              </Title>
              <Text
                className={`${mb ? '!text-sm' : tl ? '!text-lg px-5' : '!text-lg py-15'} !block`}
              >
                {pt.decs}
              </Text>
              <Image src={pt.img} preview={false} className='!w-full !h-40' />
              <Button
                className='!block w-5/6 !rounded-xl !text-black !font-bold hover:!text-white'
                onClick={() => {
                  navigate(ROUTES.PARTNERSHIP);
                }}
              >
                Learn More
              </Button>
            </Flex>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutPartnership;
