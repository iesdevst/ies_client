'use client';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStatsData } from '../hooks';
import { IesClSection, Text, Title } from '@/components';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const StatIes = () => {
  const { data: stats } = useStatsData();
  const { t } = useTranslation('statIes');
  const { isDark } = useUserStore();
  const { device } = useDevice();

  const isMobile = device === 'mobile';
  const isTablet = device === 'tablet';

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 120,
      scale: 0.92,
      filter: 'blur(12px)',
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: [0.215, 0.61, 0.355, 1],
        delay: custom * 0.12,
      },
    }),
  };

  return (
    <IesClSection
      id='staties'
      layout='simple'
      divider={false}
      className='relative pt-20 pb-6 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-2 text-sm tracking-widest text-gray-400 mb-4 uppercase'>
            <span className='text-amber-400'>✦</span>
            {t('key')}
          </div>
          <Title className='text-5xl md:text-6xl font-bold'>
            {t('pracrs')}
          </Title>
        </div>

        {/* Cards */}
        <div
          className={`grid gap-6 md:gap-8 cursor-grab ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-1' : 'grid-cols-3'}`}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-80px' }}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              className={`h-full flex flex-col ${isDark ? 'bg-[#161616] border border-gray-800 hover:border-gray-600' : 'bg-[#1e6bb0]'} group relative rounded-3xl p-8 md:p-10 transition-colors duration-500 overflow-hidden`}
            >
              {/* Glow effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

              {/* Description */}
              <Text
                color={isDark ? '#99a1af' : 'white'}
                className={`${isTablet ? '' : 'mb-10'} !text-lg leading-relaxed relative z-10 block`}
              >
                {stat.des}
              </Text>

              {/* Number + Label */}
              <div className='mt-auto relative z-10'>
                <Title
                  className={`${isMobile ? '!text-6xl' : '!text-7xl'} leading-none !font-bold tracking-tighter mb-2 !text-white`}
                >
                  {stat.num}
                </Title>
                <Title level={4} className='!text-gray-300 font-medium'>
                  {stat.label}
                </Title>
              </div>

              {/* Bottom accent line */}
              <div className='absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700' />
            </motion.div>
          ))}
        </div>
      </div>
    </IesClSection>
  );
};

export default StatIes;
