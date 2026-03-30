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

const AboutPartnership = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Row gutter={[50, 50]} justify='center' className='py-15 px-30 '>
        {abPartnershipDt.map((pt) => (
          <Col xs={24} sm={24} md={12} lg={12}>
            <Flex
              vertical
              justify='center'
              align='center'
              className='text-center'
              gap={20}
            >
              <Title className='!text-gray-500 !font-bold !m-0'>{pt.tit}</Title>
              <Text className='!block !text-lg'>{pt.decs}</Text>
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
