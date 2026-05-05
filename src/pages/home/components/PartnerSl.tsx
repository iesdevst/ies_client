import Carousel from 'antd/es/carousel';
import Col from 'antd/es/col';
import Image from 'antd/es/image';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import CNPH from '@/assets/imgs/cnph_tt.svg';
import DO from '@/assets/imgs/div_oost_tt.webp';
import FS from '@/assets/imgs/form_square_tt.webp';
import GTTT from '@/assets/imgs/gt_tt.webp';
import HS from '@/assets/imgs/hansa_tt.webp';
import LH from '@/assets/imgs/luxel_home.webp';
import RA from '@/assets/imgs/radian_tt.webp';
import WW from '@/assets/imgs/work_wise_tt.webp';

import { IesClSection, Text, Title } from '@/components';
import styles from '@/components/SPS/iesCl.module.scss';
import { useUserStore } from '@/store';

const PartnerSl: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const { isDark } = useUserStore();
  const { t } = useTranslation('partnerSl');

  const images = useMemo(() => [GTTT, CNPH, LH, HS, RA, WW, FS, DO], []);

  return (
    <IesClSection
      id='partnerSl'
      layout='simple'
      divider={false}
      height={!mb ? '' : '45vh'}
      children={
        <div className='mt-15'>
          {/* HEADER */}
          <div
            className={`w-full ${!mb ? 'px-45' : ''} flex flex-col ${
              !mb ? 'flex-row justify-between' : 'items-center'
            }`}
          >
            <Col className='flex-1'>
              <Title
                className={`!m-0 !font-bold ${isDark ? '!text-white' : ''}`}
              >
                {t('intershipP')}
              </Title>

              <Title
                className={`!m-0 !font-bold ${
                  isDark ? '!text-white' : ''
                } ${mb ? 'text-center' : ''}`}
              >
                {t('ins')}
              </Title>
            </Col>

            <Text
              className={`flex-1 mt-2 px-5 ${
                isTablet ? 'px-15 mt-5 !text-2xl' : ''
              }`}
              color={isDark ? 'white' : ''}
            >
              {t('descAn')}
            </Text>
          </div>

          {/* CAROUSEL */}
          <div className='w-full'>
            <Carousel
              autoplay
              pauseOnHover={false}
              dots={!mb}
              arrows={false}
              effect={!mb ? 'fade' : 'scrollx'}
              slidesPerRow={mb ? 2 : 4}
              className={`${styles.dotTrainCustom} dot-train my-15 ${
                isTablet ? 'pr-20' : ''
              }`}
            >
              {images.map((item) => (
                <div key={item} className='flex justify-center'>
                  <Image
                    src={item}
                    preview={false}
                    loading='lazy'
                    className={`object-cover ${mb ? 'w-[90%]' : 'w-full'} h-[15vh]`}
                    alt='ptsl'
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      }
    />
  );
};

export default PartnerSl;
