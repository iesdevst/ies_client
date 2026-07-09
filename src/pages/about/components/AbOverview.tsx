import RightOutlined from '@ant-design/icons/RightOutlined';
import Button from 'antd/es/button';
import { lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import OVW_LIB from '@/assets/imgs/ovw_lib.webp';
import OVW_STU from '@/assets/imgs/ovw_stu.webp';
import { Text, Title } from '@/components';
import {
  IES_BLUE,
  IES_NAVY,
  IES_ORANGE,
  IES_SHADOW_DARK,
  IES_SHADOW_LIGHT,
} from '@/constants';

const IesCtModal = lazy(() => import('@/pages/home/components/IesCtModal'));

export interface AbOverviewProps {
  dark: boolean;
}

const AbOverview: React.FC<AbOverviewProps> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('abOverview');
  const mb = useMediaQuery({ maxWidth: 767 });
  const [ctOpen, setCtOpen] = useState(false);

  const featureCards = useMemo(
    () => [
      { img: OVW_STU, kicker: t('libKicker1'), desc: t('libDesc1') },
      { img: OVW_LIB, kicker: t('libKicker2'), desc: t('libDesc2') },
    ],
    [t],
  );

  return (
    <>
      <div
        id='ab-overview'
        className={`max-w-280! mx-auto! py-16! ${mb ? 'px-4!' : 'px-6!'}`}
      >
        <div
          className={`flex! ${mb ? 'flex-col!' : 'flex-row!'} items-end! justify-between! gap-6! mb-9!`}
        >
          <div>
            <Title style={{ color: dark ? '#fff' : IES_NAVY }} className='m-0!'>
              {t('title1')}{' '}
              <span style={{ color: IES_BLUE }}>{t('title2')}</span>
            </Title>
            <Text
              color={dark ? '#a9a6c2' : '#5b5876'}
              className='block! text-[15.5px]! leading-relaxed! max-w-[62ch]! mt-3.5!'
            >
              {t('mainDesc')}
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
          {featureCards.map((card) => (
            <div
              key={card.img}
              className={`rounded-[14px]! overflow-hidden! border! ${dark ? 'bg-[#201d2c]! border-[#332f45]!' : 'bg-white! border-[#e5e2ed]!'}`}
              style={{ boxShadow: dark ? IES_SHADOW_DARK : IES_SHADOW_LIGHT }}
            >
              <img
                src={card.img}
                alt={card.desc}
                loading='lazy'
                className='aspect-4/3! w-full! object-cover!'
              />
              <div className='px-5! py-4.5!'>
                <Text
                  color={IES_BLUE}
                  className='block! text-lg! font-bold! uppercase! mb-2!'
                >
                  {card.kicker}
                </Text>
                <Text
                  color={dark ? '#a9a6c2' : '#5b5876'}
                  className='block! text-sm! leading-relaxed!'
                >
                  {card.desc}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
    </>
  );
};

export default AbOverview;
