import { Col, Flex, Image } from 'antd';
import AVI from '@/assets/imgs/avt_icon_voca_train.png';
import CR1 from '@/assets/imgs/carou1_voca_train.png';
import CR2 from '@/assets/imgs/carou2_voca_train.png';
import CR3 from '@/assets/imgs/carou3_voca_train.png';
import CR4 from '@/assets/imgs/carou4_voca_train.png';
import CPI from '@/assets/imgs/computer_icon_voca_train.png';
import LI from '@/assets/imgs/light_icon_voca_train.png';
import TLCR from '@/assets/imgs/train_lst_bg_carou.avif';
import { Text, Title } from '@/components';

interface IVocaTrainIntro {
  mb: boolean;
  tl: boolean;
  dark: boolean;
}

const VocaTrainIntro: React.FC<IVocaTrainIntro> = (props) => {
  const { mb, tl, dark } = props;
  return (
    <section className={`pt-8 ${mb ? 'px-5' : tl ? 'px-17' : 'px-20'}`}>
      <Flex justify='center' align='center'>
        <Title
          style={{
            fontFamily: 'Boldonse, sans-serif',
          }}
          className={`italic ${mb || tl ? '!text-2xl !mb-8' : '!text-8xl '}`}
        >
          Intermediate Vocational
        </Title>
      </Flex>
      <Flex
        vertical={mb || tl}
        justify='center'
        align={mb || tl ? 'center' : 'flex-start'}
      >
        <div
          className='grid grid-cols-2 gap-10 py-7 px-10 rounded-2xl'
          style={{
            backgroundImage: `url(${TLCR})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Image
            preview={false}
            src={CR3}
            className='!w-100 !h-50 rounded-full'
          />
          <Image
            preview={false}
            src={CR2}
            className='!w-100 !h-50 rounded-t-full'
          />
          <Image
            preview={false}
            src={CR1}
            className='!w-100 !h-50 rounded-md'
          />
          <Image
            preview={false}
            src={CR4}
            className='!w-100 !h-50 !rounded-r-full'
          />
        </div>

        <Col
          className={`${mb || tl ? 'mt-7 space-y-10' : 'pl-10 space-y-25 mt-10'}`}
        >
          <div>
            <Text className='!font-bold !text-xl' color={dark ? 'white' : ''}>
              We provide a wide range of intermediate-level training programs,
              helping learners build practical skills and confidently enter the
              workforce.
            </Text>
          </div>

          <Flex
            vertical={mb || tl}
            className='!p-7 !rounded-2xl'
            justify={'space-evenly'}
            gap={mb || tl ? 25 : 60}
            style={{
              background: 'linear-gradient(135deg, #2F6FA3, #4A90C2)',
              boxShadow: '0 25px 12px rgba(0,0,0,0.1)',
            }}
          >
            <Col>
              <Image preview={false} src={CPI} className='!w-15 !h-15' />
              <Title className='!m-0 !text-white' level={5}>
                Learn from anywhere
              </Title>
              <Text color='white'>
                Ecolabs’s online learning platform empowers you to learn new
                skills and accomplish real growth.
              </Text>
            </Col>
            <Col>
              <Image preview={false} src={AVI} className='!w-15 !h-15' />
              <Title className='!m-0 !text-white' level={5}>
                Expert-led courses
              </Title>
              <Text color='white'>
                Our teachers are experts excited to share their wisdom,
                experience, & trusted tools with you.
              </Text>
            </Col>
            <Col>
              <Image preview={false} src={LI} className='!w-15 !h-15' />
              <Title className='!m-0 !text-white' level={5}>
                Learn in-demand skills
              </Title>
              <Text color='white'>
                Explore demanded skills, deepen existing passions, and get lost
                in creativity.
              </Text>
            </Col>
          </Flex>
        </Col>
      </Flex>
    </section>
  );
};

export default VocaTrainIntro;
