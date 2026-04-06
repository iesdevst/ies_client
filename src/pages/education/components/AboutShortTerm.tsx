import { Col, Image, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import AISAB from '@/assets/imgs/ai_short_ab.jpg';
import BSAB from '@/assets/imgs/baking_short_ab.jpeg';
import CSAB from '@/assets/imgs/cook_short_ab.jpeg';
import MSAB from '@/assets/imgs/mix_short_ab.jpeg';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';

const abShortDt = [
  { tit: 'Beverage Preparation', img: MSAB, path: ROUTES.ADMISSIONS_SC_MIX },
  { tit: 'Professional Cooking', img: CSAB, path: ROUTES.ADMISSIONS_SC_COOK },
  { tit: 'Baking', img: BSAB, path: ROUTES.ADMISSIONS_SC_BAKING },
  { tit: 'AI Applications', img: AISAB, path: ROUTES.ADMISSIONS_SC_UAI },
];

interface IAboutShortTerm {
  mb: boolean;
  tl: boolean;
  dark: boolean;
}

const AboutShortTerm: React.FC<IAboutShortTerm> = (props) => {
  const { mb, tl, dark } = props;
  const navigate = useNavigate();

  return (
    <div className={`${dark ? '!bg-gray-800' : 'bg-[#E3E5E7]'} py-20`}>
      <div className='text-center'>
        <Title className='!m-0 !text-6xl'>Our</Title>
        <Title
          className={`${!mb ? '!text-6xl' : '!text-5xl'} !text-[#C2C8D0] !m-0`}
          style={{
            WebkitTextStroke: dark ? '1px purple' : '1px black',
            WebkitTextFillColor: '#C2C8D0',
          }}
        >
          Training Journey
        </Title>

        <div className={`${!mb ? '!mt-4' : '!mt-8'}`}>
          <Text
            color={dark ? 'white' : ''}
            className={`!block !font-bold ${!mb ? '!text-lg' : '!text-sm'}`}
          >
            Embark on a learning journey with us – grow your skills,
          </Text>
          <Text
            color={dark ? 'white' : ''}
            className={`!block !font-bold ${!mb ? '!text-lg' : '!text-sm'}`}
          >
            achieve success, and see results quickly
          </Text>
        </div>
      </div>

      <Row
        gutter={mb || tl ? [0, 50] : [0, 50]}
        justify='center'
        className='pt-15 px-5 md:!px-10 lg:!px-30'
      >
        {abShortDt.map((abs) => (
          <Col key={abs.tit} xs={24} sm={24} md={12} lg={12}>
            <div
              className={`${mb ? '' : tl ? 'ml-5' : 'ml-15'} flex flex-col items-center ${dark ? '!bg-gray-700 !border-gray-500' : 'bg-[#D5D6D7]'} py-8 px-3 !rounded-2xl cursor-pointer !border`}
              onClick={() => navigate(abs.path)}
            >
              <div className='flex flex-col items-center py-8 px-3 !rounded-2xl'>
                <Image
                  src={abs.img}
                  preview={false}
                  style={{
                    width: 300,
                    height: 300,
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
                <Title className='!text-center !m-0 !mt-5'>{abs.tit}</Title>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutShortTerm;
