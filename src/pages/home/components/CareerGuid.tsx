import { Carousel, Flex } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import CNTT from '@/assets/imgs/cntt_hn.png';
import CC from '@/assets/imgs/ctm_hn_card.jpg';
import KTDN from '@/assets/imgs/ktdn_hn.png';
import MKT from '@/assets/imgs/mkt_hn.png';
import MC from '@/assets/imgs/mtk_hn_card.webp';
import QLDN from '@/assets/imgs/qldn_hn.png';
import QLKS from '@/assets/imgs/qlks_hn.jpg';
import { default as TC, default as THDU } from '@/assets/imgs/thud_hn.png';
import TKVP from '@/assets/imgs/tkvp_hn.png';
import VTK from '@/assets/imgs/vtk_hn.png';
import { IesClSection, Text, Title } from '@/components';
import { useUserStore } from '@/store';

const CareerGuid: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('careerGuid');
  const cgSlide = [
    { cTit: t('slide1'), cImg: THDU },
    { cTit: t('slide2'), cImg: CNTT },
    { cTit: t('slide3'), cImg: TKVP },
    { cTit: t('slide4'), cImg: QLKS },
    { cTit: t('slide5'), cImg: MKT },
    { cTit: t('slide6'), cImg: QLDN },
    { cTit: t('slide7'), cImg: VTK },
    { cTit: t('slide8'), cImg: KTDN },
  ];

  const cgCard = [
    {
      imgC: MC,
      des: t('card1'),
    },
    { imgC: CC, des: t('card2') },
    {
      imgC: TC,
      des: t('card3'),
    },
  ];

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
                        height: '10vh',
                        objectFit: 'cover',
                      }}
                      className='!rounded-xl '
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
