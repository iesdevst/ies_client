import CheckOutlined from '@ant-design/icons/CheckOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import FileTextOutlined from '@ant-design/icons/FileTextOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import Button from 'antd/es/button';
import { lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import AB_VS_CR from '@/assets/imgs/about_vision_crs.webp';
import AB_VS_MB_CR from '@/assets/imgs/about_vision_mb_crs.webp';
import { Text, Title } from '@/components';
import {
  accentForSurface,
  IES_NAVY,
  IES_ORANGE,
  IES_SHADOW_DARK,
  IES_SHADOW_LIGHT,
  IES_SKY,
} from '@/constants';

const IesCtModal = lazy(() => import('@/pages/home/components/IesCtModal'));

export interface AbVisionProps {
  dark: boolean;
}

const AbVision: React.FC<AbVisionProps> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('abVision');
  const mb = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const [ctOpen, setCtOpen] = useState(false);

  const missionItems = useMemo(
    () => [t('miss1'), t('miss2'), t('miss3'), t('miss4'), t('miss5')],
    [t],
  );

  const cardCls = `rounded-[14px]! border! p-7! ${dark ? 'bg-[#201d2c]! border-[#332f45]!' : 'bg-white! border-[#e5e2ed]!'}`;
  const cardShadow = { boxShadow: dark ? IES_SHADOW_DARK : IES_SHADOW_LIGHT };

  return (
    <>
      <div
        id='ab-vision'
        className={`max-w-280! mx-auto! py-16! ${mb ? 'px-4!' : 'px-6!'}`}
      >
        <img
          src={mb || tablet ? AB_VS_MB_CR : AB_VS_CR}
          alt={`${t('heading1')} ${t('heading2')}`}
          loading='lazy'
          className='rounded-2xl! w-full! h-auto! mb-8!'
          style={{ boxShadow: dark ? IES_SHADOW_DARK : IES_SHADOW_LIGHT }}
        />

        <div
          className={`flex! ${mb ? 'flex-col!' : 'flex-row!'} items-end! justify-between! gap-6! mb-9!`}
        >
          <div>
            <Title className='m-0!' style={{ color: dark ? '#fff' : IES_NAVY }}>
              {t('heading1')}{' '}
              <span style={{ color: IES_SKY }}>{t('heading2')}</span>
            </Title>
            <Text
              color={dark ? '#a9a6c2' : '#5b5876'}
              className='block! text-lg! leading-relaxed! max-w-[62ch]! mt-4!'
            >
              {t('subDesc')} {t('subDesc2')}
            </Text>
          </div>

          <Button
            type='text'
            className={`shrink-0! inline-flex! items-center! gap-2.5! rounded-full! pl-5! pr-1.5! py-1.5! h-auto! border! ${dark ? 'bg-white/6! border-white/15! hover:bg-white/10!' : 'bg-[#125484]/6! border-[#125484]/20! hover:bg-[#125484]/10!'}`}
            onClick={() => setCtOpen(true)}
          >
            <Title
              className='m-0!'
              level={4}
              style={{ color: dark ? '#fff' : IES_NAVY }}
            >
              {t('contactBtn')}
            </Title>
            <div
              className='w-7.5! h-7.5! rounded-full! flex! items-center! justify-center! shrink-0!'
              style={{ backgroundColor: IES_ORANGE }}
            >
              <RightOutlined className='text-white! text-xs!' />
            </div>
          </Button>
        </div>

        <div className='grid! grid-cols-1! md:grid-cols-2! gap-7!'>
          <div className={cardCls} style={cardShadow}>
            <div
              className='w-11! h-11! rounded-xl! flex! items-center! justify-center! mb-4!'
              style={{
                backgroundColor: `${IES_NAVY}1f`,
                color: accentForSurface(IES_NAVY, dark),
              }}
            >
              <EyeOutlined className='text-xl!' />
            </div>
            <Title
              level={3}
              className='m-0! mb-2.5!'
              style={{ color: dark ? '#fff' : IES_NAVY }}
            >
              {t('visionTitle')}
            </Title>
            <Text
              color={dark ? '#a9a6c2' : '#5b5876'}
              className='block! text-lg! leading-relaxed!'
            >
              {t('visionDesc')}
            </Text>
          </div>

          <div className={cardCls} style={cardShadow}>
            <div
              className='w-11! h-11! rounded-xl! flex! items-center! justify-center! mb-4!'
              style={{ backgroundColor: `${IES_ORANGE}1f`, color: IES_ORANGE }}
            >
              <FileTextOutlined className='text-xl!' />
            </div>
            <Title
              level={3}
              className='m-0! mb-3.5!'
              style={{ color: dark ? '#fff' : IES_NAVY }}
            >
              {t('missionTitle')}
            </Title>
            <div className='flex! flex-col! gap-3!'>
              {missionItems.map((item) => (
                <div key={item} className='flex! gap-2.5!'>
                  <CheckOutlined
                    className='mt-1! shrink-0! text-xs!'
                    style={{ color: IES_SKY }}
                  />
                  <Text
                    color={dark ? '#a9a6c2' : '#5b5876'}
                    className='block! text-lg! leading-relaxed!'
                  >
                    {item}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
    </>
  );
};

export default AbVision;
