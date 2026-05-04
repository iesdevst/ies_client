import { Col, Flex, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import AVI from '@/assets/imgs/avt_icon_voca_train.png';
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
  const { t } = useTranslation('vocaTrainIntro');
  return (
    <section className={`pt-8 ${mb ? 'px-5' : tl ? 'px-17' : 'px-20'}`}>
      <Flex justify='center' align='center'>
        <Title
          style={{
            fontFamily: 'Boldonse, sans-serif',
          }}
          className={`italic ${mb ? '!text-2xl !mb-8' : tl ? '!text-4xl !mb-8' : '!text-6xl '}`}
        >
          {t('iv')}
        </Title>
      </Flex>
      <Flex
        vertical={mb || tl}
        justify='center'
        align={mb || tl ? 'center' : 'end'}
      >
        <Image
          src={TLCR}
          preview={false}
          className='!rounded-2xl'
          loading='lazy'
        />

        <Col
          className={`${mb || tl ? 'mt-7 space-y-10' : 'pl-10 space-y-25 mt-10'}`}
        >
          <div>
            <Text className='!font-bold !text-xl' color={dark ? 'white' : ''}>
              {t('textIv')}
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
              <Image
                preview={false}
                src={CPI}
                className='!w-15 !h-15'
                loading='lazy'
              />
              <Title className='!m-0 !text-white' level={5}>
                {t('titIcon1')}
              </Title>
              <Text color='white'>{t('descIcon1')}</Text>
            </Col>
            <Col>
              <Image
                preview={false}
                src={AVI}
                className='!w-15 !h-15'
                loading='lazy'
              />
              <Title className='!m-0 !text-white' level={5}>
                {t('titIcon2')}
              </Title>
              <Text color='white'>{t('descIcon2')}</Text>
            </Col>
            <Col>
              <Image
                preview={false}
                src={LI}
                className='!w-15 !h-15'
                loading='lazy'
              />
              <Title className='!m-0 !text-white' level={5}>
                {t('titIcon3')}
              </Title>
              <Text color='white'>{t('descIcon3')}</Text>
            </Col>
          </Flex>
        </Col>
      </Flex>
    </section>
  );
};

export default VocaTrainIntro;
