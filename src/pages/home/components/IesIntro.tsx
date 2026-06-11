import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import IT_BG from '@/assets/imgs/intro_bg.webp';
import IT_CT from '@/assets/imgs/intro_img_cont.webp';

import { IesClSection, Text, Title } from '@/components';
import { useDevice } from '@/hooks';

const IesIntro = () => {
  const { device } = useDevice();
  const { t } = useTranslation('iesIntro');

  const mb = device === 'mobile';
  const tl = device === 'tablet';
  const tlpr = device === 'tabletPro';
  const dk = device === 'desktop';

  return (
    <IesClSection
      id='intro'
      layout='simple'
      divider={false}
      className={`${dk ? 'px-5 mb-20' : tl ? 'px-3 mb-15' : tlpr ? 'px-3 mb-10' : 'px-1.5 mb-15'}`}
      children={
        <motion.section
          className='relative w-full overflow-hidden rounded-2xl'
          style={{
            backgroundImage: `url(${IT_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transformOrigin: 'center',
          }}
          initial={{
            scaleX: 0,
            opacity: 0.7,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.83, 0, 0.17, 1],
          }}
        >
          {/* blur overlay */}
          <div className='absolute inset-0 z-10 backdrop-blur-[30px] bg-white/25' />

          {/* CONTENT */}
          <motion.div
            className={`relative z-20 flex justify-between items-end pb-10 ${
              mb
                ? 'mt-25 px-3'
                : tl
                  ? 'mt-35 px-7'
                  : tlpr
                    ? 'mt-50 px-10'
                    : 'mt-80 px-13'
            }`}
            style={{
              flexDirection: mb || tl ? 'column' : 'row',
              gap: mb ? 24 : tl ? 32 : 80,
              alignItems: mb || tl ? 'flex-start' : 'flex-end',
            }}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            {/* LEFT */}
            <div style={{ maxWidth: dk ? 700 : '100%' }}>
              <Title
                style={{
                  margin: 0,
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 500,
                  lineHeight: 1.05,
                  color: '#000',
                  fontSize: mb ? 40 : tl ? 48 : tlpr ? 60 : 80,
                }}
              >
                {t('shaping')}
              </Title>

              <Text
                className='block mt-4'
                style={{
                  color: '#1f2937',
                  fontSize: mb ? 14 : tl ? 16 : 18,
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
                width: mb ? '100%' : tl ? '100%' : tlpr ? 430 : 480,
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
          </motion.div>
        </motion.section>
      }
      height='auto'
    />
  );
};

export default IesIntro;
