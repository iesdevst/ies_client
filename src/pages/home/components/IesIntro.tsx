import { useTranslation } from 'react-i18next';
import IT_BG from '@/assets/imgs/intro_bg.webp';
import IT_CT from '@/assets/imgs/intro_img_cont.webp';
import { IesClSection, Text } from '@/components';
import { useDevice } from '@/hooks';

const IesIntro = () => {
  const { device } = useDevice();
  const { t } = useTranslation('iesIntro');

  const isMobile = device === 'mobile';
  const isTablet = device === 'tablet';
  const isTabletPro = device === 'tabletPro';
  const isDesktop = device === 'desktop';

  return (
    <IesClSection
      id='intro'
      layout='simple'
      divider={false}
      className={`${isDesktop ? 'px-5' : isTablet ? 'px-3' : isTabletPro ? 'px-3' : 'px-1.5'} mb-20`}
      children={
        <section
          className='relative w-full overflow-hidden rounded-2xl'
          style={{
            backgroundImage: `url(${IT_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* blur overlay */}
          <div className='absolute inset-0 z-10 backdrop-blur-[30px] bg-white/25' />

          {/* CONTENT */}
          <div
            className={`relative z-20 flex justify-between items-end pb-10 ${isMobile ? 'mt-25 px-3' : isTablet ? 'mt-35 px-7' : isTabletPro ? 'mt-50 px-10' : 'mt-80 px-13'}`}
            style={{
              flexDirection: isMobile || isTablet ? 'column' : 'row',
              gap: isMobile ? 24 : isTablet ? 32 : 80,
              alignItems: isMobile || isTablet ? 'flex-start' : 'flex-end',
            }}
          >
            {/* LEFT */}
            <div style={{ maxWidth: isDesktop ? 700 : '100%' }}>
              <h1
                style={{
                  margin: 0,
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 500,
                  lineHeight: 1.05,
                  color: '#000',
                  fontSize: isMobile
                    ? 40
                    : isTablet
                      ? 48
                      : isTabletPro
                        ? 60
                        : 80,
                }}
              >
                {t('shaping')}
              </h1>

              <Text
                className='block mt-4'
                style={{
                  color: '#1f2937',
                  fontSize: isMobile ? 14 : isTablet ? 16 : 18,
                  lineHeight: 1.6,
                  maxWidth: 700,
                }}
              >
                {t('we')}
              </Text>
            </div>

            {/* RIGHT IMAGE */}
            <div
              style={{
                width: isMobile
                  ? '100%'
                  : isTablet
                    ? '100%'
                    : isTabletPro
                      ? 430
                      : 480,
              }}
            >
              <div className='rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src={IT_CT}
                  alt='intro'
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      }
    />
  );
};

export default IesIntro;
