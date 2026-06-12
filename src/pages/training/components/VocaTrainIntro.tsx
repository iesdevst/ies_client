import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
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
      {/* TITLE */}
      <Flex justify='center' align='center'>
        <Title
          style={{
            fontFamily: 'Boldonse, sans-serif',
          }}
          className={`italic ${
            mb ? '!text-2xl !mb-8' : tl ? '!text-4xl !mb-8' : '!text-6xl'
          }`}
        >
          {t('iv')}
        </Title>
      </Flex>

      {/* MAIN CONTENT */}
      <Flex vertical={mb || tl} gap={30} align='stretch' className='w-full'>
        {/* LEFT IMAGE */}
        <div className='flex-1'>
          <img
            src={TLCR}
            loading='lazy'
            alt='vocatraini'
            className='!rounded-2xl !w-full !h-full'
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className='flex-2 flex flex-col gap-y-6'>
          {/* TOP TEXT */}
          <div>
            <Text className='!font-bold !text-xl' color={dark ? 'white' : ''}>
              {t('textIv')}
            </Text>
          </div>

          {/* BOTTOM CARD */}
          <Flex
            vertical={mb || tl}
            justify='space-evenly'
            gap={mb || tl ? 25 : 60}
            className='!p-7 !rounded-2xl'
            style={{
              background: 'linear-gradient(135deg, #1B3A6B, #2B6CB0)',
              boxShadow: '0 25px 12px rgba(0,0,0,0.1)',
            }}
          >
            {/* ITEM 1 */}
            <Col>
              <img
                src={CPI}
                className='!w-15 !h-15'
                loading='lazy'
                alt='voca1'
              />

              <Title className='!m-0 !text-white' level={5}>
                {t('titIcon1')}
              </Title>

              <Text color='white'>{t('descIcon1')}</Text>
            </Col>

            {/* ITEM 2 */}
            <Col>
              <img
                src={AVI}
                className='!w-15 !h-15'
                loading='lazy'
                alt='vocaTrain3'
              />

              <Title className='!m-0 !text-white' level={5}>
                {t('titIcon2')}
              </Title>

              <Text color='white'>{t('descIcon2')}</Text>
            </Col>

            {/* ITEM 3 */}
            <Col>
              <img
                src={LI}
                className='!w-15 !h-15'
                loading='lazy'
                alt='vocaTrain'
              />

              <Title className='!m-0 !text-white' level={5}>
                {t('titIcon3')}
              </Title>

              <Text color='white'>{t('descIcon3')}</Text>
            </Col>
          </Flex>
        </div>
      </Flex>
    </section>
  );
};

export default VocaTrainIntro;
