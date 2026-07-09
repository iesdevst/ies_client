import ArrowUpOutlined from '@ant-design/icons/es/icons/ArrowUpOutlined';
import { lazy, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useTrainProData } from '../hooks';
import { Text, Title } from '@/components/AntTypography';
import { accentForSurface, IES_BLUE, IES_NAVY, IES_ORANGE } from '@/constants';
import { useUserStore } from '@/store';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const ACCENTS = [IES_BLUE, IES_ORANGE, IES_NAVY];

const TrainPro: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('trainPro');
  const navigate = useNavigate();
  const { data: programs } = useTrainProData();

  const handleNavigate = useCallback(
    (url: string) => navigate(url),
    [navigate],
  );

  return (
    <IesClSection
      id='trainNoFeat'
      layout='simple'
      divider={false}
      dark={isDark}
      className={`mt-20! ${mb ? 'px-3!' : 'px-10!'}`}
    >
      <Title
        style={{
          color: isDark ? '#fff' : IES_NAVY,
        }}
      >
        {t('sectionTitle')}
      </Title>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8! mt-8!'>
        {programs.map((item, index) => {
          const accent = ACCENTS[index % ACCENTS.length];

          return (
            <div
              key={item.id}
              onClick={() => handleNavigate(item.navigo)}
              className={`group rounded-xl! overflow-hidden border! cursor-pointer! shadow-none! transition-all! duration-300! hover:-translate-y-1! hover:shadow-xl! ${isDark ? 'bg-[#201d2c]! border-[#332f45]!' : 'bg-white! border-[#e5e2ed]!'}`}
            >
              <div className='relative aspect-21/9 overflow-hidden'>
                <img
                  src={item.img}
                  alt={item.tit}
                  loading='lazy'
                  className='h-full! w-full! object-cover! transition-transform! duration-300! group-hover:scale-105!'
                />
                <div
                  className='absolute! top-0! left-0! h-1.5! w-full!'
                  style={{ backgroundColor: accent }}
                />
              </div>
              <div className='px-6! py-5!'>
                <Title
                  level={3}
                  className='m-0! mb-2! leading-snug!'
                  style={{
                    color: isDark ? '#fff' : IES_NAVY,
                  }}
                >
                  {item.tit}
                </Title>
                <Text
                  color={isDark ? '#a9a6c2' : '#5b5876'}
                  className='block! text-lg! mb-4!'
                >
                  {item.des}
                </Text>
                <Text
                  color={accentForSurface(accent, isDark)}
                  className='inline-flex! items-center! gap-1.5! font-bold! text-lg! uppercase!'
                >
                  {item.butCard}
                  <ArrowUpOutlined className='rotate-45! text-xs!' />
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </IesClSection>
  );
};

export default TrainPro;
