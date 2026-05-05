import { Carousel, Flex } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import { useCgCardData, useCgSlideData } from './hooks';
import { IesClSection, Text, Title } from '@/components';
import { useUserStore } from '@/store';

const CareerGuid: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('careerGuid');

  const { data: cgSlide } = useCgSlideData();
  const { data: cgCard } = useCgCardData();

  return (
    <IesClSection
      id='carerrGuid'
      layout='newsFeature'
      feature={true}
      dark={isDark}
      mb={mb}
      children={
        <div className='mt-15 !space-y-10 mb-15'>
          <Flex
            vertical={mb}
            justify='space-between'
            align='center'
            className={`!w-full ${!mb ? '!px-20' : '!px-6'}`}
            gap={!mb ? 0 : 20}
          >
            <Title
              className={`flex-1 !font-bold !m-0 ${isDark ? '!text-white' : '!text-black'}`}
            >
              {t('sectionTitle')}
            </Title>
            <div className='flex-1'>
              <Text
                className='!text-lg font-semibold'
                color={isDark ? 'white' : ''}
              >
                {t('sectionDesc')}
              </Text>
            </div>
          </Flex>

          <div className={`w-full ${!mb ? 'pr-12 pl-22' : ''}`}>
            <Carousel
              autoplay
              pauseOnHover={false}
              dots={false}
              arrows={!mb ? true : false}
              slidesPerRow={!mb ? 4 : 1}
            >
              {cgSlide.map((item, index) => (
                <div key={index} className={`${!mb ? '!pr-10' : '!px-8'}`}>
                  <div className='relative rounded-xl overflow-hidden'>
                    <img
                      src={item.cImg}
                      style={{
                        width: '100%',
                        height: '20vh',
                        objectFit: 'cover',
                      }}
                      className='!rounded-xl'
                      loading='lazy'
                      alt='partner_sl'
                    />
                    <div className='absolute bottom-0 left-0 pl-2 pb-1'>
                      <Text
                        className='!m-0 !text-white bg-blue-500 rounded-lg px-1.5 !py-0 opacity-[0.9]'
                        key={index}
                      >
                        {item.cTit}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      }
      bonusTit={t('bonusTitle')}
      moreBut={t('moreBtn')}
      featCard={cgCard}
      moreClass={!mb ? 'px-20' : 'px-5'}
    />
  );
};

export default CareerGuid;
