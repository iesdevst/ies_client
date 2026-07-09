import BulbOutlined from '@ant-design/icons/BulbOutlined';
import HeartOutlined from '@ant-design/icons/HeartOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import SafetyCertificateOutlined from '@ant-design/icons/SafetyCertificateOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';
import TrophyOutlined from '@ant-design/icons/TrophyOutlined';
import Button from 'antd/es/button';
import { lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Text, Title } from '@/components';
import {
  accentForSurface,
  IES_BLUE,
  IES_NAVY,
  IES_ORANGE,
  IES_SKY,
} from '@/constants';

const IesCtModal = lazy(() => import('@/pages/home/components/IesCtModal'));

export interface AbCoreValueProps {
  dark: boolean;
}

const VALUE_ICONS = [
  HeartOutlined,
  SafetyCertificateOutlined,
  BulbOutlined,
  RocketOutlined,
  TeamOutlined,
  TrophyOutlined,
];

const VALUE_ACCENTS = [
  IES_ORANGE,
  IES_NAVY,
  IES_BLUE,
  IES_SKY,
  IES_ORANGE,
  IES_NAVY,
];

const AbCoreValue: React.FC<AbCoreValueProps> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('abCoreValue');
  const mb = useMediaQuery({ maxWidth: 767 });
  const [ctOpen, setCtOpen] = useState(false);

  const coreVals = useMemo(
    () => [
      { title: t('val1'), desc: t('desc1') },
      { title: t('val2'), desc: t('desc2') },
      { title: t('val3'), desc: t('desc3') },
      { title: t('val5'), desc: t('desc5') },
      { title: t('val6'), desc: t('desc6') },
      { title: t('val4'), desc: t('desc4') },
    ],
    [t],
  );

  return (
    <>
      <div
        id='ab-core-value'
        className={`max-w-280! mx-auto! py-16! ${mb ? 'px-4!' : 'px-6!'}`}
      >
        <div
          className={`flex! ${mb ? 'flex-col!' : 'flex-row!'} items-end! justify-between! gap-6! mb-8!`}
        >
          <Title style={{ color: dark ? '#fff' : IES_NAVY }} className='m-0!'>
            {t('title')}
          </Title>

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

        <div className='grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-5.5!'>
          {coreVals.map((val, index) => {
            const Icon = VALUE_ICONS[index % VALUE_ICONS.length];
            const rawAccent = VALUE_ACCENTS[index % VALUE_ACCENTS.length];
            const textAccent = accentForSurface(rawAccent, dark);

            return (
              <div
                key={val.title}
                className={`rounded-xl! border! p-6! transition-all! duration-300! hover:-translate-y-1! hover:shadow-xl! ${dark ? 'bg-[#201d2c]! border-[#332f45]!' : 'bg-white! border-[#e5e2ed]!'}`}
              >
                <div
                  className='w-11! h-11! rounded-xl! flex! items-center! justify-center! mb-4!'
                  style={{ backgroundColor: rawAccent }}
                >
                  <Icon className='text-lg!' style={{ color: '#fff' }} />
                </div>
                <Title
                  level={4}
                  className='m-0! mb-2! uppercase! tracking-wide!'
                  style={{ color: textAccent }}
                >
                  {val.title}
                </Title>
                <Text
                  color={dark ? '#a9a6c2' : '#5b5876'}
                  className='block! text-lg! leading-relaxed!'
                >
                  {val.desc}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
      <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
    </>
  );
};

export default AbCoreValue;
